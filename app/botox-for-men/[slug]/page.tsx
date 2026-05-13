import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug } from "@/app/blog/data/articles-extra3";
import Breadcrumbs from "@/app/components/Breadcrumbs";

// SEO-friendly slug mapping: /botox-for-men/cost-guide → articles data
const seoSlugs: Record<string, string> = {
  "is-it-worth-it": "is-botox-for-men-worth-it",
  "first-appointment-guide": "what-to-expect-first-botox-appointment",
  "vs-fillers": "botox-vs-fillers-for-men",
  "cost-guide": "how-much-does-botox-cost-for-men",
  "best-age-to-start": "best-age-to-start-botox-men",
  "forehead-lines-guide": "botox-forehead-lines-men",
  "side-effects": "botox-side-effects-men",
  "jawline-sculpting": "jawline-botox-filler-men",
  "before-and-after": "botox-before-after-men",
  "crows-feet-treatment": "crows-feet-botox-men",
  "hyperhidrosis-sweating-treatment": "botox-hyperhidrosis-men",
  "aftercare-guide": "botox-aftercare-guide-men",
  "myths-debunked": "botox-myths-men-believe",
  "athletes-workout-guide": "botox-athletes-workout-men",
  "how-to-find-a-provider": "find-botox-provider-men",
  "executives-professionals-guide": "botox-executives-professionals-men",
  "beards-guide": "botox-men-with-beards",
  "men-vs-women-differences": "botox-men-vs-women-differences",
  "skincare-routine-guide": "botox-skincare-routine-men",
  "frown-lines-guide": "botox-frown-lines-men",
  "neck-bands-guide": "botox-neck-bands-men",
  "tmj-jaw-pain-guide": "botox-tmj-jaw-pain-men",
  "men-in-their-30s": "botox-men-30s",
  "men-over-50-guide": "botox-men-over-50",
  "dysport-xeomin-comparison": "botox-vs-dysport-vs-xeomin-men",
  "baby-botox-guide": "baby-botox-men",
  "psychology-confidence-guide": "psychology-botox-men",
  "maintenance-schedule-guide": "botox-maintenance-schedule-men",
  "dating-apps-confidence-guide": "botox-men-dating-apps",
  "men-in-their-20s": "botox-men-20s",
  "men-in-their-40s": "botox-men-40s",
  "men-over-60-guide": "botox-men-over-60",
  "under-eye-wrinkles-guide": "botox-under-eye-men",
  "lip-flip-guide": "lip-flip-botox-men",
  "budget-botox-guide": "botox-men-budget",
  "botox-alcohol-guide": "botox-alcohol-men",
  "daxxify-guide": "daxxify-men-guide",
  "botox-vs-retinol-guide": "botox-vs-retinol-men",
  "botox-roi-guide": "botox-roi-men",
  "chin-filler-guide": "chin-filler-men",
  "kybella-double-chin-guide": "kybella-men-guide",
  "micro-botox-natural-look-guide": "micro-botox-men",
  "wedding-prep-botox-guide": "botox-men-wedding-prep",
  "testosterone-trt-botox-guide": "botox-testosterone-trt-men",
  "balding-forehead-botox-guide": "botox-men-balding-forehead",
  "botox-men-nyc": "botox-men-nyc-guide",
  "facelift-vs-botox-guide": "facelift-vs-botox-men",
  "stop-botox-guide": "stop-botox-men-guide",
  "botox-skeptics-guide": "botox-skeptics-guide-men",
  "under-eye-filler-guide": "under-eye-filler-men",
  "cheek-filler-guide": "cheek-filler-men",
  "sculptra-collagen-guide": "sculptra-men-guide",
  "divorce-confidence-botox-guide": "botox-men-divorce",
  "stress-aging-botox-guide": "stress-aging-botox-men",
  "celebrity-men-botox-guide": "celebrity-men-botox",
  "botox-finance-men-guide": "botox-men-finance",
  "thread-lift-vs-botox-guide": "thread-lift-vs-botox-men",
  "botox-loyalty-programs-guide": "botox-loyalty-programs-men",
  "bad-results-botox-guide": "botox-bad-results-men",
  "nose-filler-rhinoplasty-guide": "nose-filler-men-guide",
  "temple-filler-guide": "temple-filler-men-guide",
  "microneedling-skin-guide": "microneedling-men-guide",
  "chemical-peels-skin-guide": "chemical-peels-men-guide",
  "travel-botox-guide": "botox-men-frequent-travel",
  "botox-tech-men-guide": "botox-men-tech",
  "botox-law-men-guide": "botox-men-law",
  "prp-vampire-facial-guide": "prp-facial-men-guide",
  "botox-men-miami-guide": "botox-men-miami",
  "botox-men-la-guide": "botox-men-la",
  "laser-skin-resurfacing-guide": "laser-skin-resurfacing-men",
  "botox-sales-men-guide": "botox-men-sales",
  "botox-real-estate-men-guide": "botox-men-real-estate",
  "needle-anxiety-botox-guide": "botox-men-needle-anxiety",
  "acne-scars-botox-men-guide": "botox-men-acne-scars",
  "botox-military-men-guide": "botox-men-military",
  "public-speakers-botox-men-guide": "botox-men-public-speakers",
  "botox-men-texas-guide": "botox-men-texas",
  "botox-men-chicago-guide": "botox-men-chicago",
  "botox-men-dc-guide": "botox-men-dc",
  "partner-conversation-botox-guide": "botox-partner-conversation-men",
  "botox-men-atlanta-guide": "botox-men-atlanta",
  "botox-men-san-francisco-guide": "botox-men-san-francisco",
  "botox-vs-laser-guide": "botox-vs-laser-treatments-men",
  "mens-grooming-botox-guide": "mens-grooming-botox-routine",
  "botox-tax-deductible-guide": "botox-tax-deductible-men",
  "botox-provider-questions-guide": "botox-questions-provider-men",
  "botox-men-boston-guide": "botox-men-boston",
  "botox-men-seattle-guide": "botox-men-seattle",
  "botox-long-term-results-guide": "botox-long-term-results-men",
  "botox-men-media-guide": "botox-men-media-camera",
  "coolsculpting-vs-lipo-guide": "coolsculpting-vs-lipo-men",
  "brow-lift-botox-guide": "brow-lift-botox-men",
  "botox-men-denver-guide": "botox-men-denver",
  "botox-men-scottsdale-guide": "botox-men-scottsdale",
  "botox-touchups-guide": "botox-touchups-men",
  "botox-glossary-guide": "botox-glossary-men",
  "botox-men-dark-skin-guide": "botox-men-dark-skin",
  "botox-men-nashville-guide": "botox-men-nashville",
  "botox-men-san-diego-guide": "botox-men-san-diego",
  "botox-men-rosacea-guide": "botox-men-rosacea",
  "gummy-smile-botox-guide": "gummy-smile-botox-men",
  "rf-microneedling-morpheus8-guide": "rf-microneedling-men-guide",
  "botox-oily-skin-men-guide": "botox-oily-skin-men",
  "botox-men-las-vegas-guide": "botox-men-las-vegas",
  "botox-men-phoenix-guide": "botox-men-phoenix",
  "filler-reversal-hyaluronidase-guide": "filler-reversal-men-guide",
  "mens-aesthetics-decade-plan": "mens-aesthetics-by-decade",
  "botox-skincare-timing-guide": "botox-skincare-timing-men",
  "pdo-thread-lift-men-guide": "pdo-thread-lift-men",
  "botox-units-dosing-guide": "botox-units-men-guide",
  "is-botox-painful-for-men": "botox-painful-men",
  "botox-masculine-results-guide": "botox-looks-masculine-men",
  "how-long-botox-kicks-in": "botox-kick-in-timeline-men",
  "botox-vs-jeuveau-guide": "botox-vs-jeuveau-men",
  "med-spa-vs-dermatologist-guide": "med-spa-vs-dermatologist-men-botox",
  "botox-migraines-guide": "botox-migraines-men",
  "botox-lunch-break-guide": "botox-lunch-break-men",
  "botox-deep-wrinkles-guide": "botox-deep-wrinkles-men",
  "botox-resistance-immunity-guide": "botox-resistance-men",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(seoSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) return {};
  const article = getArticleBySlug(articleSlug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `https://brotoxofficial.com/botox-for-men/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      type: "article",
      publishedTime: article.publishedDate,
      url: `https://brotoxofficial.com/botox-for-men/${slug}`,
    },
  };
}

export default async function SeoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) notFound();
  const article = getArticleBySlug(articleSlug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    image: "https://brotoxofficial.com/og-image.png",
    author: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com" },
    publisher: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com", logo: { "@type": "ImageObject", url: "https://brotoxofficial.com/og-image.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://brotoxofficial.com/botox-for-men/${slug}` },
    articleSection: article.category,
    about: { "@type": "Thing", name: "Botox for Men", sameAs: "https://en.wikipedia.org/wiki/Botulinum_toxin" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  let sectionCount = 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
          <div className="container-main max-w-3xl">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Botox for Men", href: "/blog" },
              { label: article.title },
            ]} />
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20 text-xs font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm">{article.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Quick Answer Block */}
        <section className="pt-8 pb-4">
          <div className="container-main max-w-3xl">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-lg leading-relaxed">{article.description}</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container-main max-w-3xl">
            <article className="space-y-6">
              {article.sections.map((section, i) => {
                sectionCount++;
                const showCta = sectionCount > 0 && sectionCount % 4 === 0;
                return (
                  <div key={i}>
                    {section.type === "heading" && (
                      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{section.content}</h2>
                    )}
                    {section.type === "paragraph" && (
                      <p className="text-gray-300 text-lg leading-relaxed">{section.content}</p>
                    )}
                    {section.type === "list" && (
                      <div>
                        <p className="text-gray-300 text-lg mb-3">{section.content}</p>
                        <ul className="space-y-2 ml-1">
                          {section.items?.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-300">
                              <span className="text-blue-400 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.type === "callout" && (
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-6">
                        <p className="text-amber-200 font-medium">{section.content}</p>
                      </div>
                    )}
                    {showCta && (
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8 text-center">
                        <p className="text-white font-bold mb-2">Ready to find a provider near you?</p>
                        <Link href="/find-botox-near-me" className="btn-primary inline-block py-3 px-6 text-sm">Search by Zip Code →</Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </article>

            {article.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
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
            )}

            <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Find a Provider Near You</h2>
              <p className="text-lg text-blue-200 mb-6">Enter your zip code and get matched with a vetted Botox provider for men.</p>
              <Link href="/find-botox-near-me" className="btn-primary inline-block text-lg">Get Matched Free</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
