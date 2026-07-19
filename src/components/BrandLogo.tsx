import Link from "next/link";

type Props = {
  href?: string;
  dark?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ href = "/", dark = false, compact = false }: Props) {
  const textPrimary = dark ? "text-white" : "text-slate-900";
  const textSecondary = dark ? "text-sky-100" : "text-slate-500";
  const ring = dark ? "ring-white/15" : "ring-sky-100";

  return (
    <Link href={href} className="inline-flex items-center gap-3" aria-label="RON Medical Center home">
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#2ECC71] shadow-lg ring-1 ${ring}`}>
        <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true" fill="none">
          <path
            d="M32 8c10.4 0 19.5 5.9 24 14.6C52.7 40 43.9 51.9 32 56 20.1 51.9 11.3 40 8 22.6 12.5 13.9 21.6 8 32 8Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M31.8 16.5c7.5 0 13.5 6 13.5 13.5 0 8.8-6.3 15.2-13.5 18.7-7.2-3.5-13.5-9.9-13.5-18.7 0-7.5 6-13.5 13.5-13.5Z"
            fill="white"
          />
          <path
            d="M28.6 22.5h6.4v4.9h4.9v6.4H35v4.9h-6.4v-4.9h-4.9v-6.4h4.9v-4.9Z"
            fill="#0077B6"
          />
          <path
            d="M14 45.5h11l3.3-5.4 4.4 7.4 4.5-10.1 3.1 8.1H50"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-[0.08em] uppercase ${textPrimary}`}>
          RON Medical
        </span>
        {!compact ? (
          <span className={`mt-1 text-xs font-semibold tracking-[0.28em] uppercase ${textSecondary}`}>
            Center
          </span>
        ) : null}
      </span>
    </Link>
  );
}
