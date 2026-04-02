import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "@/app/guide/data/guides";
import { zipCodes } from "@/app/data/zipcodes";
import Breadcrumbs from "@/app/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `https://brotoxofficial.com/guide/${slug}` },
    openGraph: { title: guide.metaTitle, description: guide.description, type: "article", url: `https://brotoxofficial.com/guide/${slug}` },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  // Get related zip codes
  const relatedZips = zipCodes.filter(
    (z) => z.region === guide.region && (z.city === guide.city || z.state === guide.state)
  ).slice(0, 20);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.metaTitle,
    description: guide.description,
    author: { "@type": "Organization", name: "Brotox Official" },
    publisher: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com" },
    mainEntityOfPage: `https://brotoxofficial.com/guide/${slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
          <div className="container-main max-w-4xl">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/find-botox-near-me" },
              { label: `${guide.city}, ${guide.state}` },
            ]} />
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20 text-xs font-semibold">
                City Guide
              </span>
              <span className="text-gray-400 text-sm">{guide.city}, {guide.state}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Complete Guide to Botox for Men in{" "}
              <span className="text-gradient-gold">{guide.city}</span>
            </h1>
            <p className="text-lg text-gray-200 mb-6">{guide.description}</p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2">
                <span className="text-amber-400 font-bold">{guide.avgPriceRange}</span>
                <span className="text-amber-300 text-xs ml-2">avg. pricing</span>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-2">
                <span className="text-blue-400 font-bold">{guide.topNeighborhoods.length}</span>
                <span className="text-blue-300 text-xs ml-2">top neighborhoods</span>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-2">
                <span className="text-green-400 font-bold">{relatedZips.length}</span>
                <span className="text-green-300 text-xs ml-2">zip codes covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-main max-w-4xl space-y-12">
            {/* Intro */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">{guide.intro}</p>
            </div>

            {/* Top neighborhoods */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Top Neighborhoods for Men&apos;s Botox in {guide.city}</h2>
              <div className="flex flex-wrap gap-2">
                {guide.topNeighborhoods.map((n) => (
                  <span key={n} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What Men Pay for Botox in {guide.city}</h2>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-4">
                <p className="text-amber-200 font-medium text-lg">Average full-face pricing: {guide.avgPriceRange}</p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{guide.pricingContext}</p>
            </div>

            {/* Inline CTA */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
              <p className="text-white font-bold mb-2">Find a vetted provider in {guide.city}</p>
              <Link href="/find-botox-near-me" className="btn-primary inline-block py-3 px-6 text-sm">Search by Zip Code →</Link>
            </div>

            {/* What to look for */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What to Look for in a {guide.city} Provider</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{guide.whatToLookFor}</p>
            </div>

            {/* Popular treatments */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Popular Treatments for Men in {guide.city}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{guide.popularTreatments}</p>
            </div>

            {/* City-specific tips */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{guide.city} Insider Tips</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{guide.cityTips}</p>
            </div>

            {/* Related zip codes */}
            {relatedZips.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Find Providers Near You in {guide.city}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {relatedZips.map((z) => (
                    <Link
                      key={z.zip}
                      href={`/find-botox-near-me/${z.zip}`}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 group hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                    >
                      <span className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{z.zip}</span>
                      {z.neighborhood && (
                        <span className="text-gray-400 text-xs block">{z.neighborhood}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">FAQ — Botox for Men in {guide.city}</h2>
              <div className="space-y-4">
                {guide.faqs.map((faq, i) => (
                  <details key={i} className="group card p-6 cursor-pointer">
                    <summary className="flex items-center justify-between text-white font-semibold list-none">
                      <span className="pr-4">{faq.question}</span>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 border border-amber-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Ready to Get Matched in {guide.city}?</h2>
              <p className="text-lg text-amber-200 mb-6">Enter your zip code and we&apos;ll connect you with a vetted provider near you. Free, no obligation.</p>
              <Link href="/find-botox-near-me" className="btn-accent inline-block text-lg">Find Botox Near Me</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
