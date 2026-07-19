import Image from "next/image";
import { Service } from "@/data/content";
import Link from "next/link";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50">
        <Image
          src={service.image}
          alt={`${service.name} illustration`}
          width={800}
          height={520}
          className="h-36 w-full object-cover"
        />
      </div>
      <div className="mb-3 inline-flex rounded-full bg-sky-50 p-3 text-[#0077B6]">
        <Icon aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <p className="mt-3 text-sm font-medium text-slate-800">Why visit: <span className="font-normal text-slate-600">{service.whyVisit}</span></p>
      <Link href={`/services/${service.slug}`} className="mt-4 inline-block rounded-full bg-[#0077B6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f90]">
        Learn More
      </Link>
    </article>
  );
}
