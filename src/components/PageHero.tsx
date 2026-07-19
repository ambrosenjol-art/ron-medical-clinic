type Props = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: Props) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#2ECC71] p-8 text-white shadow-xl lg:p-12">
      <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base/7 text-white/90 md:text-lg">{description}</p>
    </section>
  );
}
