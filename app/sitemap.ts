import { MetadataRoute } from "next";
import { providers, getAllRegions } from "@/app/data/providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brotoxofficial.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/providers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Region pages
  const regions = getAllRegions();
  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${baseUrl}/providers/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // City pages
  const citySet = new Set<string>();
  const cityPages: MetadataRoute.Sitemap = [];
  for (const p of providers) {
    const key = `${p.regionSlug}/${p.citySlug}`;
    if (!citySet.has(key)) {
      citySet.add(key);
      cityPages.push({
        url: `${baseUrl}/providers/${key}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }
  }

  // Individual provider pages
  const providerPages: MetadataRoute.Sitemap = providers.map((p) => ({
    url: `${baseUrl}/providers/${p.regionSlug}/${p.citySlug}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...regionPages, ...cityPages, ...providerPages];
}
