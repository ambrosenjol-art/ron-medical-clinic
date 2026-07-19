import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import GoogleSearchLink from "@/components/GoogleSearchLink";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Medical Services" description="Comprehensive outpatient, maternal, chronic disease, laboratory, and emergency services under one roof." />
      <div className="flex flex-wrap gap-3">
        <GoogleSearchLink />
      </div>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </section>
      <section className="space-y-5">
        {services.map((service) => (
          <article key={`${service.name}-details`} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">{service.name}</h2>
            <p className="mt-3 text-slate-600">{service.description}</p>
            <p className="mt-3 text-slate-700"><span className="font-semibold text-slate-900">Why people should visit:</span> {service.whyVisit}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
              {service.visitReasons.map((reason) => (
                <li key={reason} className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">{reason}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
