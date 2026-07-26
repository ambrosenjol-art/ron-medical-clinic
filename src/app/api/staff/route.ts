import { enforceApiSecurity } from "@/lib/api-security";
import { hashPassword, verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const ROLES = ["ADMIN", "DOCTOR", "NURSE", "RECEPTIONIST", "LAB_TECH", "PHARMACIST", "ACCOUNTANT"] as const;

const createStaffSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(ROLES),
});

function getSessionTokenFromRequest(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const encodedToken = cookieHeader
    .split(";")
    .map(part => part.trim())
    .find(part => part.startsWith("session="))
    ?.slice("session=".length);

  return encodedToken ? decodeURIComponent(encodedToken) : null;
}

function requirePresident(request: Request) {
  const presidentEmail = (process.env.PRESIDENT_EMAIL ?? "").trim().toLowerCase();

  const sessionToken = getSessionTokenFromRequest(request);
  const session = sessionToken ? verifyToken(sessionToken) : null;

  if (!session) {
    return NextResponse.json({ ok: false, message: "Authentication required." }, { status: 401 });
  }

  if (session.role !== "ADMIN") {
    return NextResponse.json({ ok: false, message: "Only admin accounts can access staff management." }, { status: 403 });
  }

  if (presidentEmail && session.email.toLowerCase() !== presidentEmail) {
    return NextResponse.json({ ok: false, message: "Only the president can access admin staff management." }, { status: 403 });
  }

  return null;
}

// POST /api/staff — create a new staff member
export async function POST(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "staff-create",
    maxRequests: 20,
    windowMs: 60_000,
  });
  if (securityResponse) return securityResponse;

  const authResponse = requirePresident(request);
  if (authResponse) return authResponse;

  try {
    const body = await request.json();
    const data = createStaffSchema.parse(body);

    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      return NextResponse.json({ ok: false, message: "A user with that email already exists." }, { status: 409 });
    }

    const passwordHash = await hashPassword(data.password);
    const user = await prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        passwordHash,
        role: data.role,
      },
      select: { id: true, fullName: true, email: true, role: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof z.ZodError
      ? err.issues[0]?.message
      : err instanceof Error && err.message
        ? err.message
        : "Failed to create staff member.";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}

// GET /api/staff — list all staff members
export async function GET(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "staff-list",
    maxRequests: 30,
    windowMs: 60_000,
  });
  if (securityResponse) return securityResponse;

  const authResponse = requirePresident(request);
  if (authResponse) return authResponse;

  const staff = await prisma.user.findMany({
    where: { role: { not: "PATIENT" } },
    select: { id: true, fullName: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ ok: true, staff });
}

// DELETE /api/staff?id=xxx — remove a staff member
export async function DELETE(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "staff-delete",
    maxRequests: 10,
    windowMs: 60_000,
  });
  if (securityResponse) return securityResponse;

  const authResponse = requirePresident(request);
  if (authResponse) return authResponse;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ ok: false, message: "Missing staff id." }, { status: 400 });
  }

  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
