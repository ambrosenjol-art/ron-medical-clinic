import Image from "next/image";
import PageHero from "@/components/PageHero";
import { pharmacyFeatures } from "@/data/content";

export default function PharmacyPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Pharmacy" description="Safe dispensing, medicine counselling, and refill support with insurance-friendly service." />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pharmacyFeatures.map((feature) => (
          <article key={feature} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50">
              <Image
                src="/images/services/pharmacy.svg"
                alt={`${feature} pharmacy illustration`}
                width={800}
                height={520}
                className="h-24 w-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-slate-900">{feature}</h3>
            <p className="mt-2 text-sm text-slate-600">Delivered by licensed professionals with clear patient instructions.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
