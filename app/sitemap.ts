import { MetadataRoute } from "next";
import { articles } from "@/app/blog/data/articles-extra3";
import { guides } from "@/app/guide/data/guides";

// IMPORTANT: This sitemap is intentionally focused on high-value pages only.
// DO NOT add all zip codes or location slugs back — Google flags templated
// pages as soft 404s. We're focusing crawl budget on unique content.
// See: https://brotoxofficial.com GSC "crawled but not indexed" issue.

// Top zip codes only — major city centers + GSC demand areas
const topZips = [
  // NYC
  "10001", "10003", "10011", "10012", "10014", "10016", "10019", "10021", "10022", "10028", "10036", "10065",
  // Brooklyn
  "11201", "11211", "11215",
  // Beverly Hills / LA — top GSC query cluster
  "90210", "90211", "90212", "90069", "90067", "90049", "90291", "90292", "90401",
  // Miami / South Florida
  "33129", "33131", "33133", "33134", "33139", "33140", "33160", "33180",
  // Boca / WPB / Fort Lauderdale
  "33431", "33432", "33486", "33401", "33480", "33301",
  // Darien / CT — top GSC query cluster
  "06820", "06830", "06902", "06880", "06840",
  // McLean / DC — top GSC demand
  "22101", "22102", "20007", "20036", "20814", "22201", "22301",
  // Chicago
  "60610", "60611", "60614", "60622", "60654", "60657",
  // Royal Oak / Detroit — GSC queries
  "48067", "48009", "48301",
  // Denver
  "80202", "80206", "80209", "80211",
  // SF Bay Area
  "94102", "94105", "94109", "94115", "94123", "94301",
  // Boston — Newton MA showing at position 5.5!
  "02108", "02116", "02138", "02446", "02458",
  // Dallas
  "75201", "75205", "75219", "75225",
  // Houston
  "77006", "77007", "77019", "77027",
  // Austin
  "78701", "78703", "78704", "78746",
  // Atlanta
  "30305", "30309", "30326",
  // Seattle
  "98101", "98109", "98121", "98004",
  // Nashville
  "37201", "37203", "37205", "37215",
  // Scottsdale / Phoenix
  "85251", "85253", "85255",
  // San Diego
  "92101", "92037", "92130",
  // Las Vegas
  "89135", "89052",
  // Florham Park NJ — showing in GSC
  "07932",
  // New Orleans
  "70115", "70116",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brotoxofficial.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/find-botox-near-me`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/botox-forehead-men`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/botox-crows-feet-men`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/botox-frown-lines-men`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/jawline-filler-men`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/masseter-botox-men`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Only top zip codes
  const zipPages: MetadataRoute.Sitemap = topZips.map((z) => ({
    url: `${baseUrl}/find-botox-near-me/${z}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // All blog articles — unique content, high value
  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // All city guides
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${baseUrl}/guide/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Top SEO blog routes — highest commercial intent only
  const topSeoSlugs = [
    "is-it-worth-it", "first-appointment-guide", "vs-fillers", "cost-guide",
    "best-age-to-start", "forehead-lines-guide", "side-effects", "jawline-sculpting",
    "before-and-after", "crows-feet-treatment", "dysport-xeomin-comparison",
    "men-in-their-30s", "men-in-their-40s", "men-over-50-guide",
    "budget-botox-guide", "how-to-find-a-provider", "maintenance-schedule-guide",
    "botox-men-nyc", "botox-men-miami-guide", "botox-men-la-guide",
    "botox-men-chicago-guide", "botox-men-denver-guide", "botox-men-dallas-guide",
    "med-spa-vs-dermatologist-guide", "botox-lunch-break-guide",
    "botox-deep-wrinkles-guide", "botox-hsa-fsa-guide", "botox-cost-by-city-guide",
    "botox-men-new-jersey-guide", "botox-men-baltimore-guide", "botox-men-san-antonio-guide",
    "profhilo-men-guide", "radiesse-men-filler-guide", "juvederm-vs-restylane-men-guide",
    "botox-men-kansas-city-guide", "exosome-facial-men-guide",
    "botox-men-columbus-ohio-guide", "polynucleotides-pdrn-men-guide",
    "zinc-botox-results-men-guide", "miradry-vs-botox-sweating-men-guide",
    "what-botox-cant-fix-men-guide", "botox-sleep-apnea-cpap-men-guide",
    "botox-groin-sweating-men-guide", "botox-ed-viagra-cialis-men-guide",
    "botox-aftercare-nutrition-diet-men", "chain-vs-independent-medspa-men-guide",
    "botox-bodybuilders-physique-men-guide", "botox-parkinsons-disease-men-guide",
    "botox-men-southern-us-guide", "botox-introverts-guide", "what-women-notice-botox-men",
    "mens-facial-aging-guide", "extreme-sports-botox-men", "botox-10-year-cost-guide",
    "facial-volume-loss-men-guide", "botox-no-downtime-guide", "fatherhood-botox-guide",
    "botox-psychological-effects-men",
    "does-botox-age-faster-wear-off",
    "botox-men-regret-satisfaction-guide",
    "botox-acne-breakouts-men-guide",
    "botox-antibiotics-interaction-men-guide",
    "botox-essential-tremor-men-guide",
    "botox-packages-bundle-deals-men",
    "botox-heavy-forehead-feeling-men",
    "botox-skip-session-gap-men",
    "botox-dry-eyes-men-guide",
    "botox-before-after-photos-guide-men",
    "botox-chronic-pain-men-guide",
    "botox-men-blushing-guide",
    "botox-tell-if-someone-had-it-men",
    "botox-men-annual-calendar",
    "botox-men-switching-providers",
    "botox-hyaluronic-acid-men",
    "botox-post-surgery-safety-men",
    "botox-men-brow-communication",
    "botox-dental-work-timing-men",
    "botox-jaw-tension-vs-slimming-men",
    "botox-men-facial-expressions-social",
    "botox-vegan-men-guide",
    "botox-natural-looking-fear-guide",
    "silver-fox-botox-guide",
    "first-impressions-career-botox-men",
    "botox-men-networking-guide",
    "botox-total-grooming-budget-men",
    "botox-provider-relationship-guide",
    "botox-integrative-wellness-men",
    "botox-men-stigma-emotional-guide",
    "botox-virtual-consult-men-guide",
    "gym-face-botox-men-guide",
    "botox-allergy-guide-men",
    "botox-skin-effects-men-guide",
    "botox-muscle-atrophy-guide-men",
    "botox-steroids-interaction-men",
    "botox-consent-form-guide-men",
    "botox-hemifacial-spasm-guide-men",
    "botox-pacemaker-men-guide",
    "botox-hidden-fees-pricing-men",
    "botox-voice-disorder-men-guide",
    "botox-post-stroke-men-guide",
    "botox-men-under-35-guide",
    "botox-men-55-65-guide",
    "botox-weekend-warrior-guide",
    "botox-men-how-young-look-guide",
    "botox-men-nutrition-protein-guide",
    "botox-spf-anti-aging-stack-guide",
    "botox-men-outdoor-sports-guide",
    "botox-urban-professional-guide",
    "botox-men-age-gracefully-guide",
    "botox-men-grooming-system-guide",
  ];
  const seoBlogPages: MetadataRoute.Sitemap = topSeoSlugs.map((s) => ({
    url: `${baseUrl}/botox-for-men/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...zipPages, ...blogPages, ...guidePages, ...seoBlogPages];
}
