import { enforceApiSecurity } from "@/lib/api-security";
import { signToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string().optional(),
});

export async function POST(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "auth-login",
    maxRequests: 5,
    windowMs: 60_000,
  });

  if (securityResponse) {
    return securityResponse;
  }

  try {
    const body = await request.json();
    const data = loginSchema.parse(body);

    const token = signToken({ email: data.email, role: data.role || "PATIENT" });

    const response = NextResponse.json({ ok: true, token });
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid login request" }, { status: 400 });
  }
}
