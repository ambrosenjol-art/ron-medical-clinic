"use client";

import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const PHONE_NUMBER = "0738600074";
const WHATSAPP_NUMBER = "254700987654";
const WHATSAPP_MESSAGE = "Hello RON Medical Center, I would like to inquire about your services.";

export default function MobileQuickActions() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/staff-login")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-7xl gap-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackEvent("contact_click", { channel: "phone", location: "mobile_sticky_bar" })}
          className="flex-1 rounded-full border border-[#0077B6] px-4 py-3 text-center text-sm font-semibold text-[#0077B6]"
        >
          Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("contact_click", { channel: "whatsapp", location: "mobile_sticky_bar" })}
          className="flex-1 rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
