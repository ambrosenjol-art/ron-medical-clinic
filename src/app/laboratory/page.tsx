import Image from "next/image";
import PageHero from "@/components/PageHero";
import { labTests } from "@/data/content";

export default function LaboratoryPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Laboratory Services" description="Fast and accurate diagnostics using standard operating procedures and quality controls." />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {labTests.map((test) => (
          <article key={test} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-blue-50">
              <Image
                src="/images/services/laboratory.svg"
                alt={`${test} laboratory illustration`}
                width={800}
                height={520}
                className="h-24 w-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-slate-900">{test}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}
