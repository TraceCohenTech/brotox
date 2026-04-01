import { Metadata } from "next";
import Link from "next/link";
import { getAllRegions, providers } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
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

export default function ProvidersDirectory() {
  const regions = getAllRegions();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Providers" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Provider Directory
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Find a Botox Provider{" "}
              <span className="text-gradient">for Men</span>
            </h1>
            <p className="text-xl text-gray-300">
              Every provider in our directory is vetted for experience with male
              patients. Board-certified professionals who understand masculine
              facial anatomy and deliver natural results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12">
            {regions.map((region) => (
              <div key={region.slug}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-black text-white">
                    {region.name}
                  </h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {region.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/providers/${region.slug}/${city.slug}`}
                      className="card p-6 group"
                    >
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {city.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {city.count} vetted provider{city.count !== 1 ? "s" : ""}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Total count */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              <span className="text-white font-bold">{providers.length}</span>{" "}
              vetted providers across{" "}
              <span className="text-white font-bold">{regions.length}</span>{" "}
              regions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
