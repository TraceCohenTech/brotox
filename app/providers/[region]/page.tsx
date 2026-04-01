import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProvidersByRegion, getAllRegions } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import MatchForm from "@/app/components/MatchForm";

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

const cardAccents = [
  { bg: "bg-blue-500/10", border: "border-blue-500/25", accent: "text-blue-400", tag: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  { bg: "bg-amber-500/10", border: "border-amber-500/25", accent: "text-amber-400", tag: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/25", accent: "text-emerald-400", tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/25", accent: "text-cyan-400", tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20" },
  { bg: "bg-pink-500/10", border: "border-pink-500/25", accent: "text-pink-400", tag: "bg-pink-500/15 text-pink-300 border-pink-500/20" },
  { bg: "bg-orange-500/10", border: "border-orange-500/25", accent: "text-orange-400", tag: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
];

let colorIndex = 0;
function nextColor() {
  const color = cardAccents[colorIndex % cardAccents.length];
  colorIndex++;
  return color;
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

  // Reset color index for each render
  colorIndex = 0;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-10">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers", href: "/providers" },
              { label: regionName },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
                Botox for Men in{" "}
                <span className="text-gradient">{regionName}</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl">
                {regionProviders.length} vetted provider{regionProviders.length !== 1 ? "s" : ""} across{" "}
                {cities.size} {cities.size === 1 ? "city" : "cities"}.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-blue-400">{regionProviders.length}</p>
                <p className="text-xs text-blue-300 font-semibold">Providers</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-amber-400">{cities.size}</p>
                <p className="text-xs text-amber-300 font-semibold">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-main">
          {Array.from(cities.entries()).map(([citySlug, cityProviders]) => (
            <div key={citySlug} className="mb-10 last:mb-0">
              <div className="flex items-center gap-4 mb-5">
                <Link
                  href={`/providers/${region}/${citySlug}`}
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {cityProviders[0].city}
                </Link>
                <span className="text-sm font-semibold text-blue-400">
                  {cityProviders.length} provider{cityProviders.length !== 1 ? "s" : ""}
                </span>
                <div className="h-px flex-1 bg-white/10" />
                <Link
                  href={`/providers/${region}/${citySlug}`}
                  className="text-sm text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {cityProviders.map((provider) => {
                  const color = nextColor();
                  const startingPrice = provider.treatments[0]?.priceRange?.split("-")[0] || "";
                  return (
                    <Link
                      key={provider.slug}
                      href={`/providers/${region}/${citySlug}/${provider.slug}`}
                      className={`${color.bg} border ${color.border} rounded-2xl p-5 md:p-6 group hover:scale-[1.03] transition-all duration-200 flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${color.tag}`}>
                            Vetted
                          </span>
                          {startingPrice && (
                            <span className="text-white text-xs font-bold">From {startingPrice}</span>
                          )}
                        </div>
                        <h3 className={`text-lg md:text-xl font-black ${color.accent} group-hover:brightness-125 transition-all mb-0.5`}>
                          {provider.name}
                        </h3>
                        <p className="text-white text-xs md:text-sm font-semibold">
                          {provider.credentials}
                        </p>
                        <p className="text-white/80 text-xs md:text-sm mb-3">
                          {provider.practiceName}
                        </p>
                        <div className={`flex items-start gap-2 mb-3 px-3 py-2 rounded-lg bg-black/20`}>
                          <svg className={`w-4 h-4 ${color.accent} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <p className="text-white/90 text-xs leading-relaxed">{provider.notable[0]}</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {provider.specialties.slice(0, 2).map((s) => (
                            <span key={s} className={`text-[10px] md:text-xs px-2 py-1 rounded-full border ${color.tag} font-medium`}>
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className={`flex items-center gap-1.5 ${color.accent} text-xs font-bold`}>
                          View Profile
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Match Form */}
      <section className="pb-16">
        <div className="container-main">
          <MatchForm city={`any city in ${regionName}`} region={regionName} />
        </div>
      </section>
    </main>
  );
}
