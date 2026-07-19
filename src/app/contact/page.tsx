import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import GoogleSearchLink from "@/components/GoogleSearchLink";
import { verifiedFacility } from "@/data/verified";

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${verifiedFacility.latitude},${verifiedFacility.longitude}`;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Contact Us" description="Visit, call, WhatsApp, or send a message to the care team." />
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p><strong>Address:</strong> {verifiedFacility.description}, {verifiedFacility.town}, {verifiedFacility.subCounty}, {verifiedFacility.county}, Kenya</p>
          <p><strong>Phone:</strong> +254 700 123 456</p>
          <p><strong>Dr Aron:</strong> 0738600074</p>
          <p><strong>Dr Aron Alternative:</strong> 0725435100</p>
          <p><strong>WhatsApp:</strong> +254 700 987 654</p>
          <p><strong>Email:</strong> care@ronmedicalcenter.com</p>
          <p><strong>Working Hours:</strong> Open 24 hours, weekends and late night</p>
          <p><strong>Emergency Contact 1:</strong> 0738600074</p>
          <p><strong>Emergency Contact 2:</strong> 0725435100</p>
          <p><strong>MOH Registry:</strong> <a href={verifiedFacility.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#0077B6] underline">{verifiedFacility.sourceLabel}</a></p>
          <div className="flex flex-wrap gap-3">
            <GoogleSearchLink />
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#0077B6] px-4 py-2 text-sm font-semibold text-[#0077B6] hover:bg-sky-50">
              Open in Google Maps
            </a>
          </div>
          <div className="h-64 rounded-xl bg-slate-100 p-4 text-sm text-slate-600" role="img" aria-label="Google map placeholder">
            Coordinates: {verifiedFacility.latitude}, {verifiedFacility.longitude}
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
