import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/data/content";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title={service.name} description={service.description} />
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50">
            <Image
              src={service.image}
              alt={`${service.name} illustration`}
              width={800}
              height={520}
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="mt-6 inline-flex rounded-full bg-sky-50 p-3 text-[#0077B6]">
            <Icon aria-hidden />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Why people should visit</h2>
          <p className="mt-3 text-slate-600">{service.whyVisit}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {service.visitReasons.map((reason) => (
              <div key={reason} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600 ring-1 ring-slate-200">
                {reason}
              </div>
            ))}
          </div>
        </article>
        <aside className="space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Visit this service for</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {service.visitReasons.map((reason) => (
              <li key={`bullet-${reason}`} className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                {reason}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-[#0B2239] p-5 text-white">
            <h3 className="text-lg font-semibold">Need help now?</h3>
            <p className="mt-2 text-sm text-slate-200">Book an appointment or call Dr Aron on 0738600074 or 0725435100.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/appointments" className="rounded-full bg-[#2ECC71] px-4 py-2 text-sm font-semibold text-slate-900">
                Book Appointment
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white">
                Contact Clinic
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
