import { MetadataRoute } from "next";
import { articles } from "@/app/blog/data/articles-extra3";
import { guides } from "@/app/guide/data/guides";

// IMPORTANT: This sitemap is intentionally focused on high-value pages only.
// DO NOT add all zip codes, location slugs, or /botox-for-men/ URLs back.
//
// /botox-for-men/ pages are noindex with canonical → /blog/ to fix
// "Duplicate without user-selected canonical" errors in GSC.
//
// See GSC "Why pages aren't indexed" report for context.

// Top zip codes — major city centers + GSC demand areas
const topZips = [
  // NYC
  "10001", "10003", "10011", "10012", "10014", "10016", "10019", "10021", "10022", "10028", "10036", "10065",
  // Brooklyn
  "11201", "11211", "11215",
  // Beverly Hills / LA
  "90210", "90211", "90212", "90069", "90067", "90049", "90291", "90292", "90401",
  // Miami / South Florida
  "33129", "33131", "33133", "33134", "33139", "33140", "33160", "33180",
  // Boca / WPB / Fort Lauderdale
  "33431", "33432", "33486", "33401", "33480", "33301",
  // Darien / CT
  "06820", "06830", "06902", "06880", "06840",
  // McLean / DC
  "22101", "22102", "20007", "20036", "20814", "22201", "22301",
  // Chicago
  "60610", "60611", "60614", "60622", "60654", "60657",
  // Royal Oak / Detroit
  "48067", "48009", "48301",
  // Denver
  "80202", "80206", "80209", "80211",
  // SF Bay Area
  "94102", "94105", "94109", "94115", "94123", "94301",
  // Boston
  "02108", "02116", "02138", "02446", "02458",
  // Dallas
  "75201", "75205", "75219", "75225",
  // Houston
  "77006", "77007", "77019", "77027",
  // Austin
  "78701", "78703", "78704", "78746",
  // Atlanta
  "30305", "30309", "30326",
  // Seattle / Bellevue (GSC demand)
  "98101", "98109", "98121", "98004", "98005",
  // Nashville
  "37201", "37203", "37205", "37215",
  // Scottsdale / Phoenix
  "85251", "85253", "85255",
  // San Diego
  "92101", "92037", "92130",
  // Las Vegas
  "89135", "89052",
  // Florham Park NJ (GSC demand)
  "07932",
  // Havertown PA (GSC demand)
  "19083",
  // Grapevine TX (GSC demand)
  "76051",
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

  // Top zip codes only
  const zipPages: MetadataRoute.Sitemap = topZips.map((z) => ({
    url: `${baseUrl}/find-botox-near-me/${z}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // All blog articles — unique content (THE canonical URL for all articles)
  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // All city guides — unique content
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${baseUrl}/guide/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // NOTE: /botox-for-men/* URLs are NOT included.
  // They are noindex with canonical pointing to /blog/* to prevent duplicate content.

  return [...staticPages, ...zipPages, ...blogPages, ...guidePages];
}
