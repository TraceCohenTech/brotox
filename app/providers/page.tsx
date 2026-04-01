import { Metadata } from "next";
import Link from "next/link";
import { getAllRegions, providers } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Find a Botox Provider for Men — Vetted Doctors & MedSpas",
  description:
    "Browse our directory of vetted Botox providers for men across New York, New Jersey, Connecticut, and South Florida. Board-certified doctors who specialize in natural-looking results for men.",
  keywords: [
    "botox for men near me",
    "best botox providers for men",
    "men's botox doctors",
    "brotox providers",
    "male botox NYC",
    "male botox South Florida",
    "botox directory",
  ],
  alternates: {
    canonical: "https://brotoxofficial.com/providers",
  },
};

const cityColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  "boca-raton": { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "🌴" },
  "west-palm-beach": { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", icon: "☀️" },
  "miami": { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", icon: "🌊" },
  "fort-lauderdale": { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", icon: "⛵" },
  "manhattan": { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "🏙️" },
  "brooklyn": { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", icon: "🌉" },
  "long-island": { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", icon: "🏖️" },
  "westchester": { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", icon: "🏡" },
  "new-jersey": { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", icon: "🗽" },
  "connecticut": { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", icon: "🍂" },
};

const defaultColor = { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "📍" };

export default function ProvidersDirectory() {
  const regions = getAllRegions();
  const totalCities = regions.reduce((acc, r) => acc + r.cities.length, 0);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero + Stats + Cities — all above the fold */}
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-20">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers" },
            ]}
          />

          {/* Hero + Stats row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
                Provider Directory
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Find a Botox Provider{" "}
                <span className="text-gradient">for Men</span>
              </h1>
              <p className="text-lg text-gray-200">
                Board-certified professionals vetted for male patients.
                Natural results, no guesswork.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-5 text-center min-w-[120px]">
                <p className="text-3xl font-black text-blue-400">{providers.length}</p>
                <p className="text-sm text-blue-300 font-medium">Providers</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl px-6 py-5 text-center min-w-[120px]">
                <p className="text-3xl font-black text-amber-400">{totalCities}</p>
                <p className="text-sm text-amber-300 font-medium">Cities</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-6 py-5 text-center min-w-[120px]">
                <p className="text-3xl font-black text-green-400">{regions.length}</p>
                <p className="text-sm text-green-300 font-medium">Regions</p>
              </div>
            </div>
          </div>

          {/* Regions + City Cards — right in the hero section */}
          <div className="grid gap-10">
            {regions.map((region) => (
              <div key={region.slug}>
                <div className="flex items-center gap-4 mb-5">
                  <h2 className="text-2xl font-black text-white">
                    {region.name}
                  </h2>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-sm font-semibold text-blue-400">
                    {region.cities.reduce((a, c) => a + c.count, 0)} providers
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {region.cities.map((city) => {
                    const color = cityColors[city.slug] || defaultColor;
                    return (
                      <Link
                        key={city.slug}
                        href={`/providers/${region.slug}/${city.slug}`}
                        className={`${color.bg} border ${color.border} rounded-2xl p-5 group hover:scale-[1.03] transition-all duration-200`}
                      >
                        <div className="text-2xl mb-2">{color.icon}</div>
                        <h3 className={`text-lg font-bold ${color.text} group-hover:brightness-125 transition-all mb-1`}>
                          {city.name}
                        </h3>
                        <p className="text-white text-sm font-semibold">
                          {city.count} provider{city.count !== 1 ? "s" : ""}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="container-main text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10">
            <h2 className="text-3xl font-black text-white mb-3">
              Don&apos;t see your city?
            </h2>
            <p className="text-lg text-blue-200 mb-6">
              We&apos;re expanding our provider network every week. Join the waitlist and we&apos;ll notify you when providers are added in your area.
            </p>
            <Link href="/#top" className="btn-primary inline-block">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
