import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProvidersByCity } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import MatchForm from "@/app/components/MatchForm";

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
    robots: { index: false, follow: false },
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

const cardAccents = [
  { bg: "bg-blue-500/10", border: "border-blue-500/25", accent: "text-blue-400", tag: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  { bg: "bg-amber-500/10", border: "border-amber-500/25", accent: "text-amber-400", tag: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/25", accent: "text-emerald-400", tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/25", accent: "text-cyan-400", tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20" },
  { bg: "bg-pink-500/10", border: "border-pink-500/25", accent: "text-pink-400", tag: "bg-pink-500/15 text-pink-300 border-pink-500/20" },
  { bg: "bg-orange-500/10", border: "border-orange-500/25", accent: "text-orange-400", tag: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
];

export default async function CityPage({ params }: PageProps) {
  const { region, city } = await params;
  const cityProviders = getProvidersByCity(region, city);
  if (cityProviders.length === 0) notFound();

  const cityName = cityProviders[0].city;
  const regionName = cityProviders[0].region;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-10">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers", href: "/providers" },
              { label: regionName, href: `/providers/${region}` },
              { label: cityName },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
                Best Botox for Men in{" "}
                <span className="text-gradient-gold">{cityName}</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl">
                {cityProviders.length} vetted provider{cityProviders.length !== 1 ? "s" : ""} who specialize in
                natural-looking results for men.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-green-400">{cityProviders.length}</p>
                <p className="text-xs text-green-300 font-semibold">Providers</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-blue-400">100%</p>
                <p className="text-xs text-blue-300 font-semibold">Vetted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Cards — Square grid */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityProviders.map((provider, i) => {
              const color = cardAccents[i % cardAccents.length];
              // Grab the first notable item as a highlight
              const topCredential = provider.notable[0] || "";
              // Price range from first treatment
              const startingPrice = provider.treatments[0]?.priceRange?.split("-")[0] || "";
              return (
                <Link
                  key={provider.slug}
                  href={`/providers/${region}/${city}/${provider.slug}`}
                  className={`${color.bg} border ${color.border} rounded-2xl p-5 md:p-6 group hover:scale-[1.03] transition-all duration-200 flex flex-col justify-between`}
                >
                  {/* Top section */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${color.tag}`}>
                        Vetted Provider
                      </span>
                      {startingPrice && (
                        <span className="text-white text-xs font-bold">
                          From {startingPrice}
                        </span>
                      )}
                    </div>
                    <h2 className={`text-lg md:text-xl font-black ${color.accent} group-hover:brightness-125 transition-all mb-0.5`}>
                      {provider.name}
                    </h2>
                    <p className="text-white text-xs md:text-sm font-semibold">
                      {provider.credentials}
                    </p>
                    <p className="text-white/80 text-xs md:text-sm mb-3">
                      {provider.practiceName}
                    </p>

                    {/* Key credential callout */}
                    <div className={`flex items-start gap-2 mb-3 px-3 py-2 rounded-lg bg-black/20`}>
                      <svg className={`w-4 h-4 ${color.accent} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-white/90 text-xs leading-relaxed">{topCredential}</p>
                    </div>

                    {/* Why men choose — one-liner teaser */}
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4">
                      {provider.whyMenChoose.split(".").slice(0, 2).join(".")}.
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div>
                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {provider.specialties.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className={`text-[10px] md:text-xs px-2 py-1 rounded-full border ${color.tag} font-medium`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Treatments count + CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">
                        {provider.treatments.length} treatments available
                      </span>
                      <div className={`flex items-center gap-1.5 ${color.accent} text-xs font-bold`}>
                        View Profile
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Match Form */}
      <section className="pb-6">
        <div className="container-main">
          <MatchForm city={cityName} region={regionName} />
        </div>
      </section>

      {/* City SEO content */}
      <section className="py-12">
        <div className="container-main max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            About Botox for Men in {cityName}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {cityName} is home to some of the most sought-after aesthetic
            providers in {regionName}. Whether you&apos;re looking to smooth
            forehead lines, reduce crow&apos;s feet, or refresh your overall
            appearance, these board-certified professionals understand the
            unique needs of male patients. Men&apos;s facial anatomy — thicker
            skin, stronger muscles, and different aesthetic goals — requires
            specialized expertise that these vetted providers deliver.
          </p>
        </div>
      </section>
    </main>
  );
}
