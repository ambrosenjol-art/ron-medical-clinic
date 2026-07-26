"use client";

import GoogleSearchLink from "@/components/GoogleSearchLink";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

export default function HomeHeroActions() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <Link
        href="/appointments"
        onClick={() => trackEvent("cta_click", { cta: "book_appointment", location: "home_hero" })}
        className="rounded-full bg-[#0077B6] px-6 py-3 font-semibold text-white hover:bg-[#005f90]"
      >
        Book Appointment
      </Link>
      <Link
        href="/services"
        onClick={() => trackEvent("cta_click", { cta: "explore_services", location: "home_hero" })}
        className="rounded-full border border-[#0077B6] px-6 py-3 font-semibold text-[#0077B6] hover:bg-sky-50"
      >
        Explore Services
      </Link>
      <GoogleSearchLink location="home_hero" />
    </div>
  );
}
