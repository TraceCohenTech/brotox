import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProvidersByCity } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ region: string; city: string }>;
}

export async function generateStaticParams() {
  const combos = new Set(providers.map((p) => `${p.regionSlug}|${p.citySlug}`));
  return Array.from(combos).map((c) => {
    const [region, city] = c.split("|");
    return { region, city };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, city } = await params;
  const cityProviders = getProvidersByCity(region, city);
  if (cityProviders.length === 0) return {};

  const cityName = cityProviders[0].city;
  const regionName = cityProviders[0].region;

  return {
    title: `Best Botox for Men in ${cityName} — Top Providers & MedSpas`,
    description: `Find the best Botox providers for men in ${cityName}, ${regionName}. ${cityProviders.length} board-certified doctors and medspas vetted for natural-looking male results.`,
    keywords: [
      `botox for men ${cityName.toLowerCase()}`,
      `best botox ${cityName.toLowerCase()}`,
      `brotox ${cityName.toLowerCase()}`,
      `men's botox ${cityName.toLowerCase()}`,
      `male aesthetics ${cityName.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://brotoxofficial.com/providers/${region}/${city}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { region, city } = await params;
  const cityProviders = getProvidersByCity(region, city);
  if (cityProviders.length === 0) notFound();

  const cityName = cityProviders[0].city;
  const regionName = cityProviders[0].region;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers", href: "/providers" },
              { label: regionName, href: `/providers/${region}` },
              { label: cityName },
            ]}
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Best Botox for Men in{" "}
            <span className="text-gradient-gold">{cityName}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {cityProviders.length} vetted provider{cityProviders.length !== 1 ? "s" : ""} in {cityName} who specialize in
            natural-looking Botox results for men.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-6">
            {cityProviders.map((provider) => (
              <Link
                key={provider.slug}
                href={`/providers/${region}/${city}/${provider.slug}`}
                className="card p-8 group grid md:grid-cols-3 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {provider.name}
                    </h2>
                    <span className="text-gray-500">{provider.credentials}</span>
                  </div>
                  <p className="text-amber-400 font-medium mb-3">
                    {provider.practiceName}
                  </p>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {provider.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  {provider.specialties.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* City SEO content */}
          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              About Botox for Men in {cityName}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {cityName} is home to some of the most sought-after aesthetic
              providers in {regionName}. Whether you&apos;re looking to smooth
              forehead lines, reduce crow&apos;s feet, or refresh your overall
              appearance, these board-certified professionals understand the
              unique needs of male patients. Men&apos;s facial anatomy — thicker
              skin, stronger muscles, and different aesthetic goals — requires
              specialized expertise that these vetted providers deliver.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
