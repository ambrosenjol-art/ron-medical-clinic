"use client";

import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "254700987654";
const WHATSAPP_MESSAGE =
  "Hello RON Medical Center, I would like to inquire about your services.";

export default function WhatsAppChatButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/staff-login")) {
    return null;
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("contact_click", { channel: "whatsapp", location: "floating_button" })}
      aria-label="Chat with RON Medical Center on WhatsApp"
      className="fixed bottom-20 right-5 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95 md:inline-flex"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12.03 0C5.42 0 .04 5.38.04 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.96 11.96 0 0 0 5.85 1.5h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.51-8.41Zm-8.49 18.39h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.91 9.91 0 0 1-1.52-5.3C2.18 6.53 6.56 2.15 12.03 2.15c2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.89 6.96c0 5.46-4.38 9.88-9.85 9.88Zm5.42-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      WhatsApp Chat
    </a>
  );
}