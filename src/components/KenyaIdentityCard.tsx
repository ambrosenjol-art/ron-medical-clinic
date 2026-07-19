type Props = {
  title?: string;
};

export default function KenyaIdentityCard({ title = "Medical Dashboard Identity" }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0077B6]">Clinical Focus</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">Designed for healthcare visibility with a clean stethoscope-based hospital identity.</p>

      <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-5 ring-1 ring-slate-200" aria-label="Stethoscope hospital symbol">
        <svg viewBox="0 0 160 120" className="h-28 w-full" aria-hidden="true" fill="none">
          <path d="M46 18v28c0 12 9 21 21 21s21-9 21-21V18" stroke="#0077B6" strokeWidth="8" strokeLinecap="round" />
          <path d="M57 18v22" stroke="#00B4D8" strokeWidth="8" strokeLinecap="round" />
          <path d="M78 18v22" stroke="#00B4D8" strokeWidth="8" strokeLinecap="round" />
          <path d="M99 18v22" stroke="#00B4D8" strokeWidth="8" strokeLinecap="round" />
          <path d="M67 68v10c0 14 11 25 25 25h8" stroke="#0077B6" strokeWidth="8" strokeLinecap="round" />
          <circle cx="117" cy="103" r="11" stroke="#2ECC71" strokeWidth="8" />
          <circle cx="45" cy="14" r="7" fill="#0077B6" />
          <circle cx="99" cy="14" r="7" fill="#0077B6" />
        </svg>
      </div>

      <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-slate-50 px-3 py-2 ring-1 ring-slate-200" aria-label="Hospital identity badge">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0077B6] text-sm font-bold text-white">RM</span>
        <span className="text-sm font-semibold text-slate-700">RON Medical Symbol</span>
      </div>
    </article>
  );
}
