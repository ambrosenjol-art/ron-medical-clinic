import KenyaIdentityCard from "@/components/KenyaIdentityCard";

const metrics = [
  ["Today's Patients", "142"],
  ["Appointments", "67"],
  ["Revenue", "$12,400"],
  ["Laboratory Requests", "39"],
  ["Pharmacy Sales", "$3,650"],
  ["Inventory Alerts", "4"],
  ["Patient Statistics", "98% satisfaction"],
];

export default function AdminPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-4 py-10 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard (UI)</h1>
      <section className="grid gap-4 lg:grid-cols-2">
        <KenyaIdentityCard title="Kenyan Flag Dashboard" />
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0077B6]">Google Visibility</p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">Search Links Ready</h2>
          <p className="mt-2 text-sm text-slate-600">Use the quick links on the Contact page to search this clinic location on Google and Google Maps.</p>
        </article>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, value]) => (
          <article key={label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-bold text-[#0077B6]">{value}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="font-semibold text-slate-900">Charts</h2>
          <div className="mt-4 h-56 rounded-xl bg-slate-100" />
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="font-semibold text-slate-900">Notifications & Recent Activity</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>New lab request submitted for patient #1022</li>
            <li>Low stock alert: Amoxicillin 500mg</li>
            <li>Doctor schedule updated for Monday clinics</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
