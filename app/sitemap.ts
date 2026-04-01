import { MetadataRoute } from "next";
import { zipCodes } from "@/app/data/zipcodes";

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
      url: `${baseUrl}/find`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Zip code landing pages
  const zipPages: MetadataRoute.Sitemap = zipCodes.map((z) => ({
    url: `${baseUrl}/find/${z.zip}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...zipPages];
}
