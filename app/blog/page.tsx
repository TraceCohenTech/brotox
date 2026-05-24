import { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data/articles-extra3";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Brotox Blog — Botox for Men Education, Guides & Expert Advice",
  description: `${articles.length}+ articles on Botox for men. Real costs by city, what to expect, side effects, treatment guides, and how to find the right provider. Education first, no pressure.`,
  alternates: { canonical: "https://brotoxofficial.com/blog" },
  openGraph: {
    title: "Brotox Blog — Botox for Men Education & Guides",
    description: `${articles.length}+ expert articles on Botox for men. Costs, treatments, providers, and more.`,
    url: "https://brotoxofficial.com/blog",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  Education: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Guide: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  Lifestyle: "bg-green-500/15 text-green-300 border-green-500/20",
  Location: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  Comparison: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  Treatment: "bg-orange-500/15 text-orange-300 border-orange-500/20",
};

const defaultCategoryColor = "bg-blue-500/15 text-blue-300 border-blue-500/20";

// Get unique categories from articles
function getCategories() {
  const cats = new Map<string, number>();
  for (const a of articles) {
    cats.set(a.category, (cats.get(a.category) || 0) + 1);
  }
  return Array.from(cats.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

export default function BlogIndex() {
  const categories = getCategories();

  // Blog JSON-LD with BlogPosting entries for AI discovery
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Brotox Blog — Botox for Men",
    description: `${articles.length}+ expert articles on Botox for men. Education-first approach to male aesthetics.`,
    url: "https://brotoxofficial.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Brotox Official",
      url: "https://brotoxofficial.com",
      logo: { "@type": "ImageObject", url: "https://brotoxofficial.com/og-image.png" },
    },
    author: {
      "@type": "Person",
      name: "Trace Cohen",
      url: "https://x.com/Trace_Cohen",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Brotox Official" },
    },
    blogPost: articles.slice(0, 50).map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      url: `https://brotoxofficial.com/blog/${a.slug}`,
      datePublished: a.publishedDate,
      author: { "@type": "Person", name: "Trace Cohen" },
      publisher: { "@type": "Organization", name: "Brotox Official" },
      image: "https://brotoxofficial.com/og-image.png",
      articleSection: a.category,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
          <div className="container-main">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
                  Education First
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  The Brotox <span className="text-gradient">Blog</span>
                </h1>
                <p className="text-lg text-gray-200 max-w-2xl">
                  {articles.length}+ articles on Botox for men — costs, treatments, providers,
                  side effects, and everything in between. Written by men, for men.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-3 flex-shrink-0">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3 text-center">
                  <p className="text-2xl font-black text-blue-400">{articles.length}</p>
                  <p className="text-xs text-blue-300 font-medium">Articles</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3 text-center">
                  <p className="text-2xl font-black text-amber-400">{categories.length}</p>
                  <p className="text-xs text-amber-300 font-medium">Topics</p>
                </div>
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <span
                  key={cat.name}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${categoryColors[cat.name] || defaultCategoryColor}`}
                >
                  {cat.name} ({cat.count})
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured / latest articles */}
        <section className="py-8">
          <div className="container-main">
            <h2 className="text-xl font-bold text-white mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="card p-6 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${categoryColors[article.category] || defaultCategoryColor}`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                      <span className="text-gray-500 text-xs">· {article.publishedDate}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-blue-400 text-xs font-semibold">
                    Read Article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All articles */}
        <section className="pb-16">
          <div className="container-main">
            <h2 className="text-xl font-bold text-white mb-6">All Articles ({articles.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="card p-5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${categoryColors[article.category] || defaultCategoryColor}`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-3 text-blue-400 text-xs font-semibold">
                    Read →
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10">
                <h2 className="text-3xl font-black text-white mb-3">Ready to Find a Provider?</h2>
                <p className="text-lg text-blue-200 mb-6">Enter your zip code and get matched with a vetted provider near you.</p>
                <Link href="/find-botox-near-me" className="btn-primary inline-block">Find Botox Near Me</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
