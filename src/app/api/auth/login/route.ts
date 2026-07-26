import { enforceApiSecurity } from "@/lib/api-security";
import { comparePassword, signToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "auth-login",
    maxRequests: 5,
    windowMs: 60_000,
  });

  if (securityResponse) return securityResponse;

  try {
    const body = await request.json();
    const data = loginSchema.parse(body);

    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      return NextResponse.json({ ok: false, message: "Invalid email or password." }, { status: 401 });
    }

    const valid = await comparePassword(data.password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ ok: false, message: "Invalid email or password." }, { status: 401 });
    }

    const token = signToken({ id: user.id, email: user.email, role: user.role, name: user.fullName });

    const response = NextResponse.json({ ok: true, role: user.role, name: user.fullName });
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid login request" }, { status: 400 });
  }
}
