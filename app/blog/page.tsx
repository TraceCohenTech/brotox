import { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data/articles";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Brotox Blog — Botox for Men Education & Guides",
  description: "Everything men need to know about Botox. Costs, what to expect, Botox vs fillers, and how to find the right provider. Education first, no pressure.",
  alternates: { canonical: "https://brotoxofficial.com/blog" },
};

const categoryColors: Record<string, string> = {
  Education: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Guide: "bg-amber-500/15 text-amber-300 border-amber-500/20",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
        <div className="container-main">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
            Education First
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            The Brotox <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Everything men need to know about Botox — costs, what to expect,
            how to find the right provider. No hype, just facts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card p-6 md:p-8 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[article.category] || categoryColors.Education}`}>
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
  );
}
