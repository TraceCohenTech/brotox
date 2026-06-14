import Hero from "./components/Hero";
import WhyBotox from "./components/WhyBotox";
import DoctorSection from "./components/DoctorSection";
import ProductGrid from "./components/ProductGrid";
import MenLikeYou from "./components/MenLikeYou";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import SMSSignup from "./components/SMSSignup";
import FAQ from "./components/FAQ";

const homepageFaqs = [
  { q: "Is Botox safe for men?", a: "Absolutely. Botox has been FDA-approved for over 20 years with an excellent safety record. Over 7 million procedures are performed annually worldwide. The treatment is identical for men and women, though men typically require slightly higher doses due to stronger facial muscles." },
  { q: "Will people know I had Botox?", a: "When done by a skilled practitioner, results look completely natural. You'll look refreshed, not 'frozen.' Most men report that people notice they look great but can't pinpoint exactly why." },
  { q: "How long do results last?", a: "Typical results last 3-4 months. With regular treatments, many men find their results last longer over time as the muscles become trained to relax." },
  { q: "How long until I see results?", a: "You'll start noticing results within 3-5 days, with full effects visible at 10-14 days. The gradual onset means changes look natural, not sudden." },
  { q: "Is there any downtime?", a: "Virtually no downtime. The procedure takes just 15-20 minutes and you can return to work or daily activities immediately." },
  { q: "Does it hurt?", a: "Most men describe the sensation as a small pinch—far less painful than expected. The needles used are extremely fine, and treatments are quick." },
  { q: "What are common side effects?", a: "The most common side effects are minor and temporary: slight redness, swelling, or bruising at injection sites, usually resolving within hours to days." },
  { q: "How much does Botox cost for men?", a: "Pricing typically ranges from $200-$500 per treatment area, depending on location and provider. Many clinics offer package discounts and accept HSA/FSA funds." },
  { q: "What should I ask a provider before treatment?", a: "Key questions: Are you board-certified? How many male patients do you treat? Can I see before/after photos of male patients? What brand of neurotoxin do you use?" },
  { q: "How do I know if a provider is qualified?", a: "Look for board certification in dermatology, plastic surgery, or facial aesthetics. Check reviews specifically from male patients and verify they have experience treating men." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <WhyBotox />
      <DoctorSection />
      <ProductGrid />
      <MenLikeYou />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <SMSSignup />
    </main>
  );
}
