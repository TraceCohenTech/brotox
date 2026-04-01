import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProvidersByRegion, getAllRegions } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ region: string }>;
}

export async function generateStaticParams() {
  const regions = new Set(providers.map((p) => p.regionSlug));
  return Array.from(regions).map((region) => ({ region }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params;
  const regionData = getAllRegions().find((r) => r.slug === region);
  if (!regionData) return {};

  return {
    title: `Best Botox Providers for Men in ${regionData.name}`,
    description: `Find top-rated Botox providers for men in ${regionData.name}. Board-certified doctors and medspas vetted for male patients. Browse by city.`,
    alternates: {
      canonical: `https://brotoxofficial.com/providers/${region}`,
    },
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { region } = await params;
  const regionProviders = getProvidersByRegion(region);
  if (regionProviders.length === 0) notFound();

  const regionName = regionProviders[0].region;

  // Group by city
  const cities = new Map<string, typeof regionProviders>();
  for (const p of regionProviders) {
    if (!cities.has(p.citySlug)) cities.set(p.citySlug, []);
    cities.get(p.citySlug)!.push(p);
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers", href: "/providers" },
              { label: regionName },
            ]}
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Botox for Men in{" "}
            <span className="text-gradient">{regionName}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {regionProviders.length} vetted provider{regionProviders.length !== 1 ? "s" : ""} across{" "}
            {cities.size} {cities.size === 1 ? "city" : "cities"} in {regionName}.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          {Array.from(cities.entries()).map(([citySlug, cityProviders]) => (
            <div key={citySlug} className="mb-12 last:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <Link
                  href={`/providers/${region}/${citySlug}`}
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {cityProviders[0].city}
                </Link>
                <span className="text-sm text-gray-500">
                  {cityProviders.length} provider{cityProviders.length !== 1 ? "s" : ""}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityProviders.map((provider) => (
                  <Link
                    key={provider.slug}
                    href={`/providers/${region}/${citySlug}/${provider.slug}`}
                    className="card p-6 group"
                  >
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {provider.name}
                    </h3>
                    <p className="text-amber-400 text-sm font-medium mb-2">
                      {provider.practiceName}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {provider.specialties.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
