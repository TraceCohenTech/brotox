import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { providers, getProviderBySlug } from "@/app/data/providers";
import Breadcrumbs from "@/app/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ region: string; city: string; slug: string }>;
}

export async function generateStaticParams() {
  return providers.map((p) => ({
    region: p.regionSlug,
    city: p.citySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, city, slug } = await params;
  const provider = getProviderBySlug(region, city, slug);
  if (!provider) return {};

  const title = `${provider.name} — Best Botox for Men in ${provider.city}`;
  const description = `${provider.name} (${provider.credentials}) at ${provider.practiceName} in ${provider.city}. ${provider.specialties.slice(0, 3).join(", ")}. Book a consultation for men's Botox today.`;

  return {
    title,
    description,
    keywords: [
      `${provider.name} botox`,
      `botox for men ${provider.city.toLowerCase()}`,
      `best botox ${provider.city.toLowerCase()}`,
      `men's botox ${provider.city.toLowerCase()}`,
      `${provider.practiceName}`,
      `brotox ${provider.city.toLowerCase()}`,
      `male botox ${provider.region.toLowerCase()}`,
      `${provider.name} reviews`,
      `botox near me ${provider.city.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://brotoxofficial.com/providers/${provider.regionSlug}/${provider.citySlug}/${provider.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://brotoxofficial.com/providers/${provider.regionSlug}/${provider.citySlug}/${provider.slug}`,
      siteName: "Brotox Official",
      type: "article",
    },
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { region, city, slug } = await params;
  const provider = getProviderBySlug(region, city, slug);

  if (!provider) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: provider.practiceName,
    description: provider.bio,
    url: provider.website || `https://brotoxofficial.com/providers/${provider.regionSlug}/${provider.citySlug}/${provider.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: provider.city,
      addressRegion: provider.regionSlug === "south-florida" ? "FL" : "NY",
      addressCountry: "US",
    },
    medicalSpecialty: "Dermatology",
    employee: {
      "@type": "Physician",
      name: provider.name,
      medicalSpecialty: provider.specialties[0],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: provider.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
          <div className="container-main">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Providers", href: "/providers" },
                { label: provider.region, href: `/providers/${provider.regionSlug}` },
                { label: provider.city, href: `/providers/${provider.regionSlug}/${provider.citySlug}` },
                { label: provider.name },
              ]}
            />

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Main Content — 3 cols */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider border border-green-500/20">
                    Vetted Provider
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                    {provider.city}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
                  {provider.name}
                  <span className="text-blue-400">,</span>{" "}
                  <span className="text-gray-400 text-3xl md:text-4xl">{provider.credentials}</span>
                </h1>

                <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-2">
                  {provider.practiceName}
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  {provider.city}, {provider.region}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {provider.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA — 2 cols */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 sticky top-28">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Interested in {provider.name.split(" ").pop()}?
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Get connected with this provider through Brotox Official.
                  </p>

                  <Link
                    href="#consultation"
                    className="btn-primary w-full text-center block mb-4"
                  >
                    Request a Consultation
                  </Link>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-gradient">30+</p>
                        <p className="text-xs text-gray-400">Years Experience</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gradient-gold">Board</p>
                        <p className="text-xs text-gray-400">Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-main">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 space-y-12">
                {/* Bio */}
                <div>
                  <h2 className="text-3xl font-black text-white mb-6">
                    About {provider.name}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {provider.bio}
                  </p>
                </div>

                {/* Why Men Choose */}
                <div>
                  <h2 className="text-3xl font-black text-white mb-6">
                    Why Men Choose {provider.name.split(" ").pop()}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {provider.whyMenChoose}
                  </p>
                </div>

                {/* Notable / Credentials */}
                <div>
                  <h2 className="text-3xl font-black text-white mb-6">
                    Credentials & Recognition
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {provider.notable.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column — Treatments */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-white mb-6">
                  Treatments for Men
                </h2>
                <div className="space-y-4">
                  {provider.treatments.map((treatment, i) => (
                    <div
                      key={i}
                      className="card p-6"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {treatment.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        {treatment.duration && (
                          <span className="flex items-center gap-1.5 text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {treatment.duration}
                          </span>
                        )}
                        {treatment.priceRange && (
                          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                            {treatment.priceRange}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gradient-to-b from-[var(--background)] to-[#0f1219]">
          <div className="container-main max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-2 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Common questions about Botox for men with {provider.name}
            </p>
            <div className="space-y-4">
              {provider.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group card p-6 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-white font-semibold list-none">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section id="consultation" className="section-padding bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)]">
          <div className="container-main max-w-3xl text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
              Take the Next Step
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Look Your Best?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Get connected with {provider.name} at {provider.practiceName} in {provider.city}.
              Fill out the form and we&apos;ll help you schedule a consultation.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 text-left">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                  <input type="text" placeholder="Smith" className="w-full" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" placeholder="john@email.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input type="tel" placeholder="(555) 123-4567" className="w-full" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">What are you interested in?</label>
                <select className="w-full">
                  <option value="">Select a treatment...</option>
                  {provider.treatments.map((t) => (
                    <option key={t.name} value={t.name}>{t.name}</option>
                  ))}
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <button className="btn-primary w-full text-center">
                Request Consultation
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting, you agree to our privacy policy. We&apos;ll connect you with {provider.practiceName} — no spam, ever.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
