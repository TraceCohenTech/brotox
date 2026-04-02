import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug } from "@/app/blog/data/articles";
import Breadcrumbs from "@/app/components/Breadcrumbs";

// SEO-friendly slug mapping: /botox-for-men/cost-guide → articles data
const seoSlugs: Record<string, string> = {
  "is-it-worth-it": "is-botox-for-men-worth-it",
  "first-appointment-guide": "what-to-expect-first-botox-appointment",
  "vs-fillers": "botox-vs-fillers-for-men",
  "cost-guide": "how-much-does-botox-cost-for-men",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(seoSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) return {};
  const article = getArticleBySlug(articleSlug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `https://brotoxofficial.com/botox-for-men/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      type: "article",
      publishedTime: article.publishedDate,
      url: `https://brotoxofficial.com/botox-for-men/${slug}`,
    },
  };
}

export default async function SeoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) notFound();
  const article = getArticleBySlug(articleSlug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    author: { "@type": "Organization", name: "Brotox Official" },
    publisher: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com" },
    mainEntityOfPage: `https://brotoxofficial.com/botox-for-men/${slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  let sectionCount = 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
          <div className="container-main max-w-3xl">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Botox for Men", href: "/blog" },
              { label: article.title },
            ]} />
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20 text-xs font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm">{article.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container-main max-w-3xl">
            <article className="space-y-6">
              {article.sections.map((section, i) => {
                sectionCount++;
                const showCta = sectionCount > 0 && sectionCount % 4 === 0;
                return (
                  <div key={i}>
                    {section.type === "heading" && (
                      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{section.content}</h2>
                    )}
                    {section.type === "paragraph" && (
                      <p className="text-gray-300 text-lg leading-relaxed">{section.content}</p>
                    )}
                    {section.type === "list" && (
                      <div>
                        <p className="text-gray-300 text-lg mb-3">{section.content}</p>
                        <ul className="space-y-2 ml-1">
                          {section.items?.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-300">
                              <span className="text-blue-400 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.type === "callout" && (
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-6">
                        <p className="text-amber-200 font-medium">{section.content}</p>
                      </div>
                    )}
                    {showCta && (
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8 text-center">
                        <p className="text-white font-bold mb-2">Ready to find a provider near you?</p>
                        <Link href="/find" className="btn-primary inline-block py-3 px-6 text-sm">Search by Zip Code →</Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </article>

            {article.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <details key={i} className="group card p-6 cursor-pointer">
                      <summary className="flex items-center justify-between text-white font-semibold list-none">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Find a Provider Near You</h2>
              <p className="text-lg text-blue-200 mb-6">Enter your zip code and get matched with a vetted Botox provider for men.</p>
              <Link href="/find" className="btn-primary inline-block text-lg">Get Matched Free</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
