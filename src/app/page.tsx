import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import GoogleSearchLink from "@/components/GoogleSearchLink";
import { blogPosts, pharmacyFeatures, services } from "@/data/content";
import { verifiedFacility } from "@/data/verified";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+254700123456",
    openingHours: "Mo-Sa 07:00-20:00",
    areaServed: "Kenya",
    sameAs: [verifiedFacility.sourceUrl],
  };

  return (
    <main className="pattern-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">Trusted Family-Centered Healthcare</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">Premium Clinical Care for Every Stage of Life</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">RON Medical Center combines compassionate professionals, reliable diagnostics, and modern systems ready for EMR integration.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/appointments" className="rounded-full bg-[#0077B6] px-6 py-3 font-semibold text-white hover:bg-[#005f90]">Book Appointment</Link>
            <Link href="/services" className="rounded-full border border-[#0077B6] px-6 py-3 font-semibold text-[#0077B6] hover:bg-sky-50">Explore Services</Link>
            <GoogleSearchLink />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="glass rounded-3xl p-5 shadow-2xl">
          <div className="h-80 rounded-2xl bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#2ECC71]" aria-label="Clinic hero visual" />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <AnimatedCounter value={10000} label="Patients Served" />
          <AnimatedCounter value={20} label="Medical Professionals" />
          <AnimatedCounter value={15} label="Healthcare Services" />
          <AnimatedCounter value={98} label="Patient Satisfaction" suffix="%" />
          <AnimatedCounter value={24} label="Emergency Support" suffix="/7" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 lg:px-8">
        <SectionTitle eyebrow="Services" title="Comprehensive Care Under One Roof" subtitle="Consultation, diagnostics, pharmacy, maternal care, chronic disease clinics, and emergency support." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <Reveal key={service.name} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl rounded-3xl bg-white px-6 py-12 shadow-sm ring-1 ring-slate-200 lg:px-10">
        <SectionTitle eyebrow="Laboratory & Pharmacy" title="Fast Diagnostics and Safe Dispensing" subtitle="Laboratory accuracy plus medicine counselling and chronic refill support in one patient journey." />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-slate-50 p-5">
            <h3 className="text-xl font-semibold text-slate-900">Laboratory Preview</h3>
            <p className="mt-2 text-slate-600">Blood tests, urinalysis, rapid diagnostics, and culture sensitivity guided by quality control standards.</p>
            <Link href="/laboratory" className="mt-4 inline-block text-sm font-semibold text-[#0077B6]">View Laboratory</Link>
          </article>
          <article className="rounded-2xl bg-slate-50 p-5">
            <h3 className="text-xl font-semibold text-slate-900">Pharmacy Preview</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
              {pharmacyFeatures.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/pharmacy" className="mt-4 inline-block text-sm font-semibold text-[#0077B6]">View Pharmacy</Link>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <SectionTitle eyebrow="Verified Registry" title="Officially Listed by Kenya Ministry of Health" />
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm text-slate-600">
            Facility: <span className="font-semibold text-slate-900">{verifiedFacility.facilityName}</span> ({verifiedFacility.facilityCode})
          </p>
          <p className="mt-2 text-sm text-slate-600">
            KEPH {verifiedFacility.kephLevel} • {verifiedFacility.facilityType} • {verifiedFacility.regulationStatus}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Location: {verifiedFacility.town}, {verifiedFacility.ward}, {verifiedFacility.subCounty}, {verifiedFacility.county}
          </p>
          <a href={verifiedFacility.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-[#0077B6]">
            View official listing on {verifiedFacility.sourceLabel}
          </a>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="What Patients Say" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Outstanding maternity support and caring nurses.",
            "Fast lab turnaround and clear doctor explanations.",
            "Efficient emergency handling and professional follow-up.",
          ].map((quote) => (
            <article key={quote} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 h-12 w-12 rounded-full bg-slate-200" aria-hidden />
              <p className="text-sm text-slate-600">&quot;{quote}&quot;</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <SectionTitle eyebrow="Health News" title="Latest Health Articles" />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00B4D8]">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-16 w-full max-w-7xl rounded-3xl bg-[#0B2239] px-6 py-12 text-white lg:px-10">
        <h2 className="text-3xl font-bold">Need to Speak With Dr Aron?</h2>
        <p className="mt-3 max-w-2xl text-slate-200">Call Dr Aron directly on 0738600074 or 0725435100, or use the contact page for clinic support.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/appointments" className="rounded-full bg-[#2ECC71] px-6 py-3 font-semibold text-slate-900">Book Appointment</Link>
          <Link href="/contact" className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white">Contact Clinic</Link>
        </div>
      </section>
    </main>
  );
}
