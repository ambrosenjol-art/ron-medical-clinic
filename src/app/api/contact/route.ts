import { enforceApiSecurity } from "@/lib/api-security";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(5),
});

export async function POST(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "contact",
    maxRequests: 8,
    windowMs: 60_000,
  });

  if (securityResponse) {
    return securityResponse;
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        fallbackMode: true,
        message: "Message received. The clinic will respond directly.",
      });
    }

    await prisma.contactMessage.create({ data });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
