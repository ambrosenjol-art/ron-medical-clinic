import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import GoogleSearchLink from "@/components/GoogleSearchLink";
import { verifiedFacility } from "@/data/verified";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="About RON Medical Center" description="Compassionate and modern healthcare built on safety, dignity, and clinical excellence." />
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <SectionTitle title="Our Story" subtitle="Since inception, RON Medical Center has delivered trusted outpatient and emergency care across all age groups." />
          <p className="text-slate-600">Our growth has been anchored in patient safety, continuous learning, and high-quality clinical standards.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Vision & Mission</h2>
          <p className="mt-3 text-slate-600"><strong>Vision:</strong> To be the most trusted community healthcare partner.</p>
          <p className="mt-3 text-slate-600"><strong>Mission:</strong> Deliver patient-centered, affordable, evidence-based care.</p>
        </article>
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        {[
          "Integrity in every patient interaction",
          "Clinical excellence through quality improvement",
          "Respect, confidentiality, and accountability",
        ].map((value) => (
          <article key={value} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <h3 className="font-semibold text-slate-900">Core Value</h3>
            <p className="mt-2 text-sm text-slate-600">{value}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Management & Quality Commitment</h2>
        <p className="mt-3 text-slate-600">Our management team includes clinical and operations leaders dedicated to safe protocols, audit readiness, and measurable patient outcomes.</p>
        <p className="mt-3 text-sm text-slate-600">
          Verified public listing: <a href={verifiedFacility.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0077B6] underline">{verifiedFacility.sourceLabel}</a>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <GoogleSearchLink />
        </div>
      </section>
    </main>
  );
}
