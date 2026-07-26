"use client";

import { trackEvent } from "@/lib/analytics";
import { verifiedFacility } from "@/data/verified";

type GoogleSearchLinkProps = {
  location?: string;
};

export default function GoogleSearchLink({ location = "unknown" }: GoogleSearchLinkProps) {
  const locationQuery = encodeURIComponent(
    `${verifiedFacility.facilityName} ${verifiedFacility.town} ${verifiedFacility.county}`,
  );
  const googleSearchUrl = `https://www.google.com/search?q=${locationQuery}`;

  return (
    <a
      href={googleSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("cta_click", { cta: "search_on_google", location })}
      className="rounded-full bg-[#0077B6] px-6 py-3 text-sm font-semibold text-white hover:bg-[#005f90] transition-colors"
    >
      Search on Google
    </a>
  );
}
