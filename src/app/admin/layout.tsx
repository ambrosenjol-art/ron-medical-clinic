import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function AdminLayout({ children }: Props) {
  const presidentEmail = (process.env.PRESIDENT_EMAIL ?? "").trim().toLowerCase();

  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = session ? verifyToken(session) : null;

  if (!payload) {
    redirect("/staff-login");
  }

  if (payload.role !== "ADMIN") {
    redirect("/staff-login");
  }

  if (presidentEmail && payload.email.toLowerCase() !== presidentEmail) {
    redirect("/staff-login");
  }

  return <>{children}</>;
}
