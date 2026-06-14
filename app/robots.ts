import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/find-botox-near-me/", "/blog/", "/botox-for-men/", "/guide/", "/about"],
        disallow: ["/providers/", "/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "Anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: "https://brotoxofficial.com/sitemap.xml",
  };
}
