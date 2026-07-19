import PageHero from "@/components/PageHero";
import GoogleSearchLink from "@/components/GoogleSearchLink";

export default function DoctorsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Doctor Contact" description="Reach Dr Aron directly for clinical guidance and appointment coordination." />
      <section className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Dr Aron</h2>
        <p className="mt-3 text-slate-600">Direct contact numbers for patient support and appointment follow-up.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <a href="tel:0738600074" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-lg font-semibold text-[#0077B6] hover:bg-sky-50">
            0738600074
          </a>
          <a href="tel:0725435100" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-lg font-semibold text-[#0077B6] hover:bg-sky-50">
            0725435100
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <GoogleSearchLink />
        </div>
      </section>
    </main>
  );
}
