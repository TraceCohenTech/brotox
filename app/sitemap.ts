import { MetadataRoute } from "next";
import { zipCodes, getAllLocationSlugs } from "@/app/data/zipcodes";
import { articles } from "@/app/blog/data/articles";
import { guides } from "@/app/guide/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brotoxofficial.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/find-botox-near-me`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
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
  const seoBlogSlugs = ["is-it-worth-it", "first-appointment-guide", "vs-fillers", "cost-guide", "best-age-to-start", "forehead-lines-guide", "side-effects", "jawline-sculpting", "before-and-after", "crows-feet-treatment", "hyperhidrosis-sweating-treatment", "aftercare-guide", "myths-debunked", "athletes-workout-guide", "how-to-find-a-provider", "executives-professionals-guide", "beards-guide", "men-vs-women-differences", "skincare-routine-guide"];
  const seoBlogPages: MetadataRoute.Sitemap = seoBlogSlugs.map((s) => ({
    url: `${baseUrl}/botox-for-men/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...zipPages, ...locationPages, ...blogPages, ...seoBlogPages, ...guidePages];
}
