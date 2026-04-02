import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { zipCodes, getZipByCode, getAllLocationSlugs, getLocationBySlug } from "@/app/data/zipcodes";
import { guides } from "@/app/guide/data/guides";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ConsultationForm from "@/app/components/ConsultationForm";

interface PageProps {
  params: Promise<{ location: string }>;
}

// Resolve the param into page data — works for both "10001" and "chelsea-new-york-ny"
function resolveLocation(param: string) {
  // Check if it's a zip code (5 digits)
  const zipData = getZipByCode(param);
  if (zipData) {
    return {
      type: "zip" as const,
      displayName: zipData.neighborhood ? `${zipData.neighborhood}, ${zipData.city}` : zipData.city,
      city: zipData.city,
      state: zipData.state,
      region: zipData.region,
      neighborhood: zipData.neighborhood,
      zip: param,
      slug: param,
      allZips: [param],
    };
  }

  // Check if it's a location slug
  const locData = getLocationBySlug(param);
  if (locData) {
    return {
      type: "location" as const,
      displayName: locData.neighborhood ? `${locData.neighborhood}, ${locData.city}` : locData.city,
      city: locData.city,
      state: locData.state,
      region: locData.region,
      neighborhood: locData.neighborhood,
      zip: locData.zips[0],
      slug: param,
      allZips: locData.zips,
    };
  }

  return null;
}

export async function generateStaticParams() {
  // Generate both zip and location slug params
  const zipParams = zipCodes.map((z) => ({ location: z.zip }));
  const locationParams = getAllLocationSlugs().map((l) => ({ location: l.slug }));
  return [...zipParams, ...locationParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: param } = await params;
  const loc = resolveLocation(param);
  if (!loc) return {};

  const isZip = loc.type === "zip";
  const title = isZip
    ? `Best Botox for Men Near ${loc.zip} — ${loc.displayName}, ${loc.state}`
    : `Best Botox for Men in ${loc.displayName}, ${loc.state} — Find Providers`;
  const description = isZip
    ? `Find vetted Botox providers for men near ${loc.zip} in ${loc.displayName}, ${loc.state}. Board-certified doctors who specialize in natural-looking results for men.`
    : `Best Botox providers for men in ${loc.displayName}, ${loc.state}. Board-certified doctors vetted for male patients. Free consultation matching.`;

  const keywords = [
    `botox for men ${loc.city.toLowerCase()}`,
    `best botox ${loc.city.toLowerCase()} men`,
    `brotox ${loc.city.toLowerCase()} ${loc.state.toLowerCase()}`,
    `men's botox ${loc.displayName.toLowerCase()}`,
    `male botox ${loc.city.toLowerCase()} ${loc.state.toLowerCase()}`,
    `botox near me ${loc.city.toLowerCase()}`,
    `botox providers ${loc.displayName.toLowerCase()}`,
  ];
  if (isZip) {
    keywords.push(`botox for men ${loc.zip}`, `botox near me ${loc.zip}`);
  }
  if (loc.neighborhood) {
    keywords.push(
      `botox ${loc.neighborhood.toLowerCase()} ${loc.city.toLowerCase()}`,
      `best botox ${loc.neighborhood.toLowerCase()}`,
    );
  }

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `https://brotoxofficial.com/find-botox-near-me/${param}` },
    openGraph: { title, description, url: `https://brotoxofficial.com/find-botox-near-me/${param}`, siteName: "Brotox Official", type: "article" },
  };
}

const treatmentInfo = [
  { name: "Forehead Lines", description: "Smooth horizontal forehead lines that make you look tired or stressed. The most popular treatment for men.", duration: "15 min", icon: "━━" },
  { name: "Frown Lines", description: "Those vertical lines between your eyebrows that make you look angry — even when you're not.", duration: "10 min", icon: "║" },
  { name: "Crow's Feet", description: "Lines around the eyes that deepen with age. Smooth them while keeping your natural smile.", duration: "10 min", icon: "⟩⟩" },
  { name: "Jawline & Chin", description: "Define and strengthen your jawline with dermal fillers. One of the fastest-growing treatments for men.", duration: "30 min", icon: "◇" },
];

export default async function LocationPage({ params }: PageProps) {
  const { location: param } = await params;
  const loc = resolveLocation(param);
  if (!loc) notFound();

  const isZip = loc.type === "zip";
  const breadcrumbLabel = isZip ? `${loc.zip} — ${loc.displayName}` : loc.displayName;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Botox for Men in ${loc.displayName}, ${loc.state}`,
    description: `Find vetted Botox providers for men in ${loc.displayName}, ${loc.state}.`,
    areaServed: {
      "@type": "PostalAddress",
      ...(isZip ? { postalCode: loc.zip } : {}),
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "US",
    },
    provider: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[var(--background)] pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
          <div className="container-main">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Find Botox Near Me", href: "/find-botox-near-me" },
              { label: breadcrumbLabel },
            ]} />

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider border border-green-500/20">
                    {loc.region}
                  </span>
                  {isZip && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                      {loc.zip}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Best Botox for Men {isZip ? "Near" : "in"}{" "}
                  <span className="text-gradient-gold">{isZip ? loc.zip : loc.displayName}</span>
                  {!isZip && <span className="text-gradient-gold">, {loc.state}</span>}
                </h1>
                {isZip && (
                  <p className="text-xl text-gray-200 mb-2">{loc.displayName}, {loc.state}</p>
                )}
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Get matched with a vetted, board-certified provider who specializes in natural-looking Botox for men in{" "}
                  {loc.neighborhood || loc.city}. Free to use — no obligation.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-green-400">✓</p>
                    <p className="text-xs text-gray-300 font-medium">Board Certified</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-blue-400">♂</p>
                    <p className="text-xs text-gray-300 font-medium">Male Specialists</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-amber-400">$0</p>
                    <p className="text-xs text-gray-300 font-medium">Free Matching</p>
                  </div>
                </div>

                {/* For location pages, show related zip codes */}
                {!isZip && loc.allZips.length > 1 && (
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 mb-2">Also serving zip codes:</p>
                    <div className="flex flex-wrap gap-2">
                      {loc.allZips.slice(0, 8).map((z) => (
                        <Link key={z} href={`/find-botox-near-me/${z}`} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-300 hover:border-blue-500/30 transition-all">
                          {z}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div id="consultation-form" className="lg:col-span-2">
                <div className="sticky top-28">
                  <div className="bg-gradient-to-b from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Get Matched — Free</h3>
                    <p className="text-blue-300 text-sm mb-4">
                      We&apos;ll connect you with a vetted provider in {loc.neighborhood || loc.city}.
                    </p>
                    <ConsultationForm
                      providerName={`Provider in ${loc.displayName}`}
                      practiceName="a vetted local practice"
                      city={loc.city}
                      region={loc.region}
                      zip={loc.zip}
                      treatments={treatmentInfo.map((t) => ({ name: t.name }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="section-padding">
          <div className="container-main">
            <h2 className="text-3xl font-black text-white mb-2">
              Popular Botox Treatments for Men in {loc.city}
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl">
              Botox for men (Brotox) is one of the fastest-growing aesthetic treatments in the country.
              Here&apos;s what providers in {loc.displayName} can help you with.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {treatmentInfo.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <span className="text-2xl mb-3 block">{t.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{t.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{t.description}</p>
                  <span className="text-xs text-amber-400 font-semibold">~{t.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why men get Botox */}
        <section className="py-16 bg-gradient-to-b from-[var(--background)] to-[#0f1219]">
          <div className="container-main max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-6">
              Why Men in {loc.city} Are Getting Botox
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Botox for men — sometimes called &quot;Brotox&quot; — has grown over 400% in
                the last decade. In {loc.city}, men across every profession are discovering
                that a 15-minute treatment can take years off their appearance without anyone
                knowing what changed.
              </p>
              <p>
                The key is finding a provider who understands male facial anatomy. Men have
                thicker skin, stronger muscles, and different aesthetic goals than women.
                The forehead alone typically requires 30-50% more product for men. A provider
                who specializes in male patients knows how to maintain your natural expressions
                while smoothing the lines that make you look tired, stressed, or older.
              </p>
              <p>
                The best Botox results are invisible — people notice you look refreshed, but
                they can&apos;t pinpoint why. That&apos;s what the providers in our {loc.city} network deliver.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-black text-blue-400">400%</p>
                <p className="text-sm text-blue-300">Growth in male Botox</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-black text-amber-400">15 min</p>
                <p className="text-sm text-amber-300">Average treatment time</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-black text-green-400">$0</p>
                <p className="text-sm text-green-300">Downtime required</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-main max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-2 text-center">
              Botox for Men FAQ — {loc.displayName}, {loc.state}
            </h2>
            <p className="text-gray-300 text-center mb-10">
              Common questions about Botox for men in {loc.neighborhood || loc.city}
            </p>
            <div className="space-y-4">
              {[
                { q: `How much does Botox for men cost in ${loc.city}?`, a: `Botox pricing in ${loc.city} typically ranges from $300-$1,200 depending on the provider, the number of areas treated, and the amount of product needed. Men often need more units than women due to stronger facial muscles. A consultation with a matched provider will give you an exact quote.` },
                { q: "Will people be able to tell I got Botox?", a: "Not with a skilled provider. The goal is for people to notice you look refreshed and well-rested, not 'done.' Providers who specialize in male patients understand how to maintain your natural expressions while reducing wrinkles." },
                { q: "How long does Botox last for men?", a: "Typically 3-4 months, though results can vary. Some men find they need treatments slightly more often initially, then less frequently over time as muscles gradually weaken. Most men settle into a schedule of 3-4 treatments per year." },
                { q: `What should I look for in a Botox provider in ${loc.displayName}?`, a: "Board certification is the minimum. Beyond that, look for providers who have specific experience with male patients, use proper dosing for male facial muscles, and have a track record of natural-looking results. Our matching service pre-screens for all of these factors." },
                { q: "Is there any downtime after Botox?", a: "Essentially none. Most men return to work and normal activities immediately. You may have minor redness at injection sites for an hour or two. Avoid intense exercise for 24 hours. That's it." },
                { q: `How does the free matching service work in ${loc.city}?`, a: `Fill out the form above with your name, email, and treatment interests. We'll review your information and connect you with a vetted, board-certified provider in ${loc.displayName} within 24-48 hours. The matching is completely free — no obligation whatsoever.` },
              ].map((faq, i) => (
                <details key={i} className="group card p-6 cursor-pointer">
                  <summary className="flex items-center justify-between text-white font-semibold list-none">
                    <span className="pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* City Guide Link */}
        {(() => {
          const cityGuide = guides.find((g) => g.region === loc.region);
          return cityGuide ? (
            <section className="py-8">
              <div className="container-main max-w-2xl">
                <Link href={`/guide/${cityGuide.slug}`} className="block bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 group hover:bg-amber-500/15 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">City Guide</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        Complete Guide to Botox for Men in {cityGuide.city}
                      </h3>
                      <p className="text-gray-300 text-sm">Pricing, neighborhoods, what to look for, and insider tips.</p>
                    </div>
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </section>
          ) : null;
        })()}

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-b from-[var(--background)] to-[#0f1219]">
          <div className="container-main max-w-2xl text-center">
            <h2 className="text-3xl font-black text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join the thousands of men in {loc.city} who&apos;ve upgraded their look with Botox. Free matching, no obligation.
            </p>
            <Link href="#top" className="btn-primary inline-block text-lg">
              Get Matched in {loc.neighborhood || loc.city} →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
