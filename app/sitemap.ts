import { MetadataRoute } from "next";
import { zipCodes } from "@/app/data/zipcodes";
import { articles } from "@/app/blog/data/articles";
import { guides } from "@/app/guide/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brotoxofficial.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/find`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const zipPages: MetadataRoute.Sitemap = zipCodes.map((z) => ({
    url: `${baseUrl}/find/${z.zip}`,
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

  return [...staticPages, ...zipPages, ...blogPages, ...guidePages];
}
