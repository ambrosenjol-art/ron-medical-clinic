import { enforceApiSecurity } from "@/lib/api-security";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  patientName: z.string().min(2),
  phoneNumber: z.string().min(7),
  email: z.string().email(),
  date: z.string().min(1),
  time: z.string().min(1),
  department: z.string().min(2),
  doctor: z.string().min(2),
  reason: z.string().min(3),
});

export async function POST(request: Request) {
  const securityResponse = enforceApiSecurity(request, {
    scope: "appointments",
    maxRequests: 10,
    windowMs: 60_000,
  });

  if (securityResponse) {
    return securityResponse;
  }

  try {
    const body = await request.json();
    const data = appointmentSchema.parse(body);

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        fallbackMode: true,
        message: "Appointment request received. The clinic will confirm by phone.",
      });
    }

    await prisma.appointment.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
