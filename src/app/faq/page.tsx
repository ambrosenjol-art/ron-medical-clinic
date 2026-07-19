import FaqSearch from "@/components/FaqSearch";
import PageHero from "@/components/PageHero";

export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Frequently Asked Questions" description="Search common patient questions about appointments, insurance, emergency care, and laboratory services." />
      <FaqSearch />
    </main>
  );
}
