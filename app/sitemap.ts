import { MetadataRoute } from "next";
import { zipCodes, getAllLocationSlugs } from "@/app/data/zipcodes";
import { articles } from "@/app/blog/data/articles-extra3";
import { guides } from "@/app/guide/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brotoxofficial.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/find-botox-near-me`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Zip code pages
  const zipPages: MetadataRoute.Sitemap = zipCodes.map((z) => ({
    url: `${baseUrl}/find-botox-near-me/${z.zip}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // City/neighborhood slug pages (e.g., /find-botox-near-me/chelsea-new-york-ny)
  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((l) => ({
    url: `${baseUrl}/find-botox-near-me/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${baseUrl}/guide/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // SEO blog routes (/botox-for-men/*)
  const seoBlogSlugs = ["is-it-worth-it", "first-appointment-guide", "vs-fillers", "cost-guide", "best-age-to-start", "forehead-lines-guide", "side-effects", "jawline-sculpting", "before-and-after", "crows-feet-treatment", "hyperhidrosis-sweating-treatment", "aftercare-guide", "myths-debunked", "athletes-workout-guide", "how-to-find-a-provider", "executives-professionals-guide", "beards-guide", "men-vs-women-differences", "skincare-routine-guide", "frown-lines-guide", "neck-bands-guide", "tmj-jaw-pain-guide", "men-in-their-30s", "men-over-50-guide", "dysport-xeomin-comparison", "baby-botox-guide", "psychology-confidence-guide", "maintenance-schedule-guide", "dating-apps-confidence-guide", "men-in-their-20s", "men-in-their-40s", "men-over-60-guide", "under-eye-wrinkles-guide", "lip-flip-guide", "budget-botox-guide", "botox-alcohol-guide", "daxxify-guide", "botox-vs-retinol-guide", "botox-roi-guide", "chin-filler-guide", "kybella-double-chin-guide", "micro-botox-natural-look-guide", "wedding-prep-botox-guide", "testosterone-trt-botox-guide", "balding-forehead-botox-guide", "botox-men-nyc", "facelift-vs-botox-guide", "stop-botox-guide", "botox-skeptics-guide", "under-eye-filler-guide", "cheek-filler-guide", "sculptra-collagen-guide", "divorce-confidence-botox-guide", "stress-aging-botox-guide", "celebrity-men-botox-guide", "botox-finance-men-guide", "thread-lift-vs-botox-guide", "botox-loyalty-programs-guide", "bad-results-botox-guide", "nose-filler-rhinoplasty-guide", "temple-filler-guide", "microneedling-skin-guide", "chemical-peels-skin-guide", "travel-botox-guide", "botox-tech-men-guide", "botox-law-men-guide", "prp-vampire-facial-guide", "botox-men-miami-guide", "botox-men-la-guide", "laser-skin-resurfacing-guide", "botox-sales-men-guide", "botox-real-estate-men-guide", "needle-anxiety-botox-guide", "acne-scars-botox-men-guide", "botox-military-men-guide", "public-speakers-botox-men-guide", "botox-men-texas-guide", "botox-men-chicago-guide", "botox-men-dc-guide", "partner-conversation-botox-guide", "botox-men-atlanta-guide", "botox-men-san-francisco-guide", "botox-vs-laser-guide", "mens-grooming-botox-guide", "botox-tax-deductible-guide", "botox-provider-questions-guide", "botox-men-boston-guide", "botox-men-seattle-guide", "botox-long-term-results-guide", "botox-men-media-guide", "coolsculpting-vs-lipo-guide", "brow-lift-botox-guide", "botox-men-denver-guide", "botox-men-scottsdale-guide", "botox-touchups-guide", "botox-glossary-guide", "botox-men-dark-skin-guide", "botox-men-nashville-guide", "botox-men-san-diego-guide", "botox-men-rosacea-guide", "gummy-smile-botox-guide", "rf-microneedling-morpheus8-guide", "botox-oily-skin-men-guide", "botox-men-las-vegas-guide", "botox-men-phoenix-guide", "filler-reversal-hyaluronidase-guide", "mens-aesthetics-decade-plan", "botox-skincare-timing-guide", "pdo-thread-lift-men-guide", "botox-units-dosing-guide", "is-botox-painful-for-men", "botox-masculine-results-guide", "how-long-botox-kicks-in", "botox-vs-jeuveau-guide", "med-spa-vs-dermatologist-guide", "botox-migraines-guide", "botox-lunch-break-guide", "botox-deep-wrinkles-guide", "botox-resistance-immunity-guide", "botox-men-houston-guide", "botox-men-dallas-guide", "botox-men-portland-guide", "botox-men-philadelphia-guide", "full-face-rejuvenation-guide", "mens-aesthetics-trends-2026", "botox-face-shape-guide", "botox-smokers-men-guide", "botox-gym-fitness-men-guide", "botox-personal-brand-men-guide", "botox-hooded-eyes-guide", "botox-hsa-fsa-guide", "botox-one-time-guide", "botox-sweaty-palms-guide", "botox-trap-shoulder-guide", "botox-summer-guide", "botox-antidepressants-guide", "botox-groupon-deals-guide", "botox-younger-smoother-guide", "botox-calf-slimming-guide", "ozempic-face-fillers-guide", "nefertiti-lift-men-guide", "botox-partner-perspective-guide", "botox-zoom-calls-guide", "collagen-banking-men-guide", "botox-resting-angry-face-guide", "prp-hair-restoration-guide", "botox-first-year-guide", "injectable-menu-men-guide", "skinbooster-injections-guide", "botox-coffee-before-guide", "botox-blood-pressure-meds-guide", "botox-pore-size-guide", "botox-sunscreen-skin-defense-guide", "botox-winter-guide", "botox-jowls-guide", "botox-financing-guide", "botox-morning-evening-guide", "botox-science-explained-guide", "botox-negotiate-pricing-guide", "botox-vs-chemical-peels-guide", "lip-filler-guide", "marionette-lines-filler-guide", "botox-sensitive-skin-guide", "botox-expressive-face-guide", "botox-event-timing-guide", "botox-scalp-sweating-guide", "mens-skin-aging-science-guide", "botox-supplements-avoid-guide", "botox-men-minneapolis-guide", "botox-men-austin-guide", "tech-neck-botox-guide", "going-gray-botox-guide", "between-botox-sessions-guide", "strong-muscles-botox-guide", "healthcare-workers-botox-guide", "botox-vs-filters-guide", "filler-combo-men-guide", "weight-loss-botox-fillers-guide", "job-interview-botox-guide", "filler-vs-fat-grafting-guide", "botox-vs-face-cream-guide", "botox-pricing-per-unit-vs-area", "botox-cost-by-city-guide", "expensive-vs-cheap-botox-guide", "fathers-day-botox-guide", "new-year-botox-men-guide", "botox-history-science-guide", "botox-headaches-side-effects-guide", "wedding-guest-botox-guide", "botox-vs-facial-men-guide", "masseter-jaw-slimming-botox-men", "perioral-lip-lines-botox-men", "frozen-face-prevention-botox-men", "dry-skin-botox-men", "botox-mood-facial-feedback-men", "botox-blue-collar-men", "botox-selfie-era-men", "botox-first-questions-men", "botox-wellness-men", "botox-dose-refinement-men"];
  const seoBlogPages: MetadataRoute.Sitemap = seoBlogSlugs.map((s) => ({
    url: `${baseUrl}/botox-for-men/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...zipPages, ...locationPages, ...blogPages, ...seoBlogPages, ...guidePages];
}
