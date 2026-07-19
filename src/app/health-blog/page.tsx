import BlogSearch from "@/components/BlogSearch";
import PageHero from "@/components/PageHero";

export default function HealthBlogPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-10 lg:px-8">
      <PageHero title="Health Blog" description="Evidence-based articles on prevention, nutrition, maternal health, vaccination, mental wellbeing, and healthy lifestyles." />
      <BlogSearch />
    </main>
  );
}
