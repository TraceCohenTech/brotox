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
  "botox-men-houston-guide": "botox-men-houston",
  "botox-men-dallas-guide": "botox-men-dallas",
  "botox-men-portland-guide": "botox-men-portland",
  "botox-men-philadelphia-guide": "botox-men-philadelphia",
  "full-face-rejuvenation-guide": "full-face-rejuvenation-men",
  "mens-aesthetics-trends-2026": "mens-aesthetics-trends-2026",
  "botox-face-shape-guide": "botox-face-shape-men",
  "botox-smokers-men-guide": "botox-smokers-men",
  "botox-gym-fitness-men-guide": "botox-gym-fitness-men",
  "botox-personal-brand-men-guide": "botox-personal-brand-men",
  "botox-hooded-eyes-guide": "botox-hooded-eyes-men",
  "botox-hsa-fsa-guide": "botox-hsa-fsa-men",
  "botox-one-time-guide": "botox-one-time-men",
  "botox-sweaty-palms-guide": "botox-sweaty-palms-men",
  "botox-trap-shoulder-guide": "botox-trap-shoulder-pain-men",
  "botox-summer-guide": "botox-summer-guide-men",
  "botox-antidepressants-guide": "botox-antidepressants-men",
  "botox-groupon-deals-guide": "botox-groupon-deals-men",
  "botox-younger-smoother-guide": "botox-younger-smoother-men",
  "botox-calf-slimming-guide": "botox-calf-slimming-men",
  "ozempic-face-fillers-guide": "ozempic-face-fillers-men",
  "nefertiti-lift-men-guide": "nefertiti-lift-men-guide",
  "botox-partner-perspective-guide": "botox-men-partner-perspective",
  "botox-zoom-calls-guide": "botox-men-zoom-calls",
  "collagen-banking-men-guide": "collagen-banking-men-guide",
  "botox-resting-angry-face-guide": "botox-resting-angry-face-men",
  "prp-hair-restoration-guide": "prp-hair-restoration-men",
  "botox-first-year-guide": "botox-men-first-year",
  "injectable-menu-men-guide": "injectable-menu-men",
  "skinbooster-injections-guide": "skinbooster-injections-men",
  "botox-coffee-before-guide": "botox-coffee-before-men",
  "botox-blood-pressure-meds-guide": "botox-blood-pressure-meds-men",
  "botox-pore-size-guide": "botox-pore-size-men",
  "botox-sunscreen-skin-defense-guide": "botox-sunscreen-skin-defense-men",
  "botox-winter-guide": "botox-winter-guide-men",
  "botox-jowls-guide": "botox-jowls-men",
  "botox-financing-guide": "botox-financing-men",
  "botox-morning-evening-guide": "botox-morning-evening-men",
  "botox-science-explained-guide": "botox-science-explained-men",
  "botox-negotiate-pricing-guide": "botox-negotiate-pricing-men",
  "botox-vs-chemical-peels-guide": "botox-vs-chemical-peels-men",
  "lip-filler-guide": "lip-filler-men-guide",
  "marionette-lines-filler-guide": "marionette-lines-filler-men",
  "botox-sensitive-skin-guide": "botox-sensitive-skin-eczema-men",
  "botox-expressive-face-guide": "botox-expressive-face-men",
  "botox-event-timing-guide": "botox-event-timing-guide-men",
  "botox-scalp-sweating-guide": "botox-scalp-sweating-men",
  "mens-skin-aging-science-guide": "mens-skin-aging-science",
  "botox-supplements-avoid-guide": "botox-supplements-avoid-men",
  "botox-men-minneapolis-guide": "botox-men-minneapolis-guide",
  "botox-men-austin-guide": "botox-men-austin-guide",
  "tech-neck-botox-guide": "botox-tech-neck-men",
  "going-gray-botox-guide": "botox-men-going-gray",
  "between-botox-sessions-guide": "botox-between-sessions-men",
  "strong-muscles-botox-guide": "botox-men-strong-muscles",
  "healthcare-workers-botox-guide": "botox-men-nurses-healthcare",
  "botox-vs-filters-guide": "botox-vs-filters-men",
  "filler-combo-men-guide": "filler-combination-men-guide",
  "weight-loss-botox-fillers-guide": "botox-men-after-weight-loss",
  "job-interview-botox-guide": "botox-men-job-interview",
  "filler-vs-fat-grafting-guide": "filler-vs-fat-grafting-men",
  "botox-vs-face-cream-guide": "botox-vs-face-cream-men",
  "botox-pricing-per-unit-vs-area": "botox-per-unit-vs-area-pricing-men",
  "botox-cost-by-city-guide": "botox-cost-by-city-men",
  "expensive-vs-cheap-botox-guide": "botox-expensive-vs-cheap-men",
  "fathers-day-botox-guide": "botox-fathers-day-men",
  "new-year-botox-men-guide": "botox-new-year-men",
  "botox-history-science-guide": "botox-history-men",
  "botox-headaches-side-effects-guide": "botox-headaches-men",
  "wedding-guest-botox-guide": "botox-wedding-guest-men",
  "botox-vs-facial-men-guide": "botox-vs-facial-men",
  "entrepreneurs-botox-guide": "botox-men-entrepreneurs",
  "professional-headshots-botox-guide": "botox-men-professional-headshots",
  "golfers-botox-guide": "botox-men-golfers",
  "botox-men-tampa-guide": "botox-men-tampa",
  "botox-men-charlotte-guide": "botox-men-charlotte",
  "botox-men-salt-lake-city-guide": "botox-men-salt-lake-city",
  "botox-men-new-orleans-guide": "botox-men-new-orleans",
  "filler-migration-men-guide": "filler-migration-men",
  "botox-men-turning-50-guide": "botox-men-turning-50",
  "intermittent-fasting-botox-guide": "botox-men-intermittent-fasting",
  "botox-wearing-off-guide": "botox-wearing-off-signs-men",
  "botox-men-need-more-units-guide": "botox-men-need-more-units",
  "botox-migration-safety-guide": "botox-migration-spread-men",
  "botox-bunny-lines-guide": "botox-bunny-lines-men",
  "botox-chin-dimpling-guide": "botox-chin-dimpling-men",
  "botox-necklace-lines-guide": "botox-necklace-lines-men",
  "botox-perioral-lines-guide": "botox-perioral-lines-men",
  "botox-holiday-party-guide": "botox-holiday-party-men",
  "botox-thick-skin-men-guide": "botox-thick-skin-men",
  "botox-facial-asymmetry-guide": "botox-facial-asymmetry-men",
  "botox-asian-men-guide": "botox-asian-men-guide",
  "botox-outdoor-workers-guide": "botox-outdoor-workers-men",
  "botox-career-promotion-guide": "botox-men-career-promotion",
  "botox-wish-i-knew-guide": "botox-men-wish-i-knew",
  "botox-retired-men-guide": "botox-retired-men-guide",
  "botox-round-face-men-guide": "botox-men-round-face",
  "botox-men-glasses-guide": "botox-men-glasses",
  "botox-andropause-guide": "botox-men-andropause",
  "botox-blue-collar-men-guide": "botox-men-blue-collar",
  "botox-post-covid-men-guide": "botox-men-post-covid",
  "botox-hairline-men-guide": "botox-hairline-men",
  "preventive-vs-corrective-botox-men": "botox-preventive-vs-corrective-men",
  "botox-when-sick-men-guide": "botox-when-sick-men",
  "botox-sleep-position-men-guide": "botox-sleep-position-men",
  "botox-flying-travel-men-guide": "botox-flying-men",
  "botox-dry-skin-men-guide": "botox-dry-skin-men",
  "botox-what-not-to-do-men-guide": "botox-what-not-to-do-men",
  "botox-mental-health-confidence-men": "botox-mental-health-men",
  "botox-who-administers-men-guide": "botox-who-administers-men",
  "botox-skin-types-men-guide": "botox-men-skin-types",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  // Pre-render first 20 SEO slugs; rest generated on-demand
  return Object.keys(seoSlugs).slice(0, 20).map((slug) => ({ slug }));
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
