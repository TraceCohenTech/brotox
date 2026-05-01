import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Brotox Official — Men's Botox Education & Provider Matching",
  description: "Brotox Official is the #1 resource for men's Botox. We educate men about aesthetic treatments and match them with vetted, board-certified providers for free.",
  alternates: { canonical: "https://brotoxofficial.com/about" },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Brotox Official",
    description: "Brotox Official is the #1 resource for men's Botox education and provider matching.",
    url: "https://brotoxofficial.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Brotox Official",
      url: "https://brotoxofficial.com",
      foundingDate: "2026",
      description: "Education-first men's Botox resource and provider matching platform covering 38+ US metros.",
      sameAs: ["https://x.com/brotoxofficial"],
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: ["Botox for men", "Brotox", "Male aesthetics", "Dermal fillers for men"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
          <div className="container-main max-w-3xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              About <span className="text-gradient">Brotox Official</span>
            </h1>
            <p className="text-xl text-gray-200">
              The #1 resource for men&apos;s Botox. Education first, always.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-main max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What is Brotox Official?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Brotox Official is a men&apos;s aesthetics education and provider matching platform. We help men understand Botox and other aesthetic treatments through honest, no-hype educational content — then match them with vetted, board-certified providers near them. The service is completely free for consumers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why We Exist</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Men&apos;s Botox has grown over 400% in the last decade, but most aesthetic resources are designed for women. Men have different facial anatomy, different aesthetic goals, and different concerns. Brotox Official fills that gap with content and provider matching built specifically for men — from the language we use to the providers we recommend.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How Provider Matching Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-black text-blue-400 mb-2">1</p>
                  <h3 className="text-white font-bold mb-2">Enter Your Location</h3>
                  <p className="text-gray-300 text-sm">Search by zip code or city. We cover 38+ major US metros.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-black text-amber-400 mb-2">2</p>
                  <h3 className="text-white font-bold mb-2">Tell Us Your Goals</h3>
                  <p className="text-gray-300 text-sm">Forehead lines, jawline, full refresh — we tailor the match.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-black text-green-400 mb-2">3</p>
                  <h3 className="text-white font-bold mb-2">Get Matched Free</h3>
                  <p className="text-gray-300 text-sm">We connect you with a vetted, board-certified provider. No cost, no obligation.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Coverage</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Brotox Official covers 38+ major US metros with 600+ zip codes and 65+ vetted providers. Our network includes board-certified dermatologists, plastic surgeons, and facial plastic surgeons who specialize in male patients.
              </p>
              <div className="flex flex-wrap gap-2">
                {["New York", "Miami", "Los Angeles", "Chicago", "San Francisco", "Boston", "Washington DC", "Dallas", "Houston", "Austin", "Atlanta", "Seattle", "Denver", "Scottsdale", "San Diego", "Nashville", "Philadelphia", "Tampa"].map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{city}</span>
                ))}
                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">+ 20 more</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Important Disclosure</h2>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                <p className="text-amber-200 leading-relaxed">
                  Brotox Official provides educational information and provider matching only. We do not perform medical procedures. We may receive compensation from providers we recommend. All medical treatments should only be performed by licensed, board-certified medical professionals. Individual results may vary. Always consult a qualified healthcare provider before undergoing any aesthetic treatment.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 text-lg">
                Email: <a href="mailto:contact@brotoxofficial.com" className="text-blue-400 hover:text-blue-300">contact@brotoxofficial.com</a>
              </p>
              <p className="text-gray-300 text-lg">
                Twitter/X: <a href="https://x.com/brotoxofficial" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">@brotoxofficial</a>
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Ready to Find a Provider?</h2>
              <p className="text-lg text-blue-200 mb-6">Enter your zip code and get matched for free.</p>
              <Link href="/find-botox-near-me" className="btn-primary inline-block text-lg">Get Matched Free</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
