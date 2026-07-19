type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00B4D8]">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
