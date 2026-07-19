const cards = ["Appointments", "Medical History", "Laboratory Results", "Prescriptions", "Billing", "Profile", "Notifications"];

export default function PatientPortalDashboardPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-4 py-10 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Patient Portal Dashboard (EMR Ready UI)</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold text-slate-900">{card}</h2>
            <p className="mt-2 text-sm text-slate-600">This module is prepared for secure EMR integration.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
