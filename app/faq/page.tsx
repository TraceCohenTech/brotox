import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Botox for Men FAQ — 50+ Questions Answered by Experts",
  description: "Every question men have about Botox, answered. Cost, pain, results, side effects, how long it lasts, units needed, and more. The most comprehensive men's Botox FAQ.",
  alternates: { canonical: "https://brotoxofficial.com/faq" },
};

const faqCategories = [
  {
    name: "Cost & Pricing",
    color: "amber",
    faqs: [
      { q: "How much does Botox cost for men?", a: "Men typically pay $300-$1,500 per session depending on the city, provider, and number of areas treated. Men need 30-50% more units than women due to stronger facial muscles, so expect to be at the higher end of any price range." },
      { q: "Why do men pay more for Botox than women?", a: "Men's facial muscles are larger and stronger, requiring 30-50% more product per treatment area. A woman might need 20 units for her forehead; a man needs 30-40 units for the same area." },
      { q: "How much does Botox cost in NYC?", a: "Full-face Botox for men in NYC ranges from $600-$1,500. Upper East Side and Park Avenue practices are at the top, while Downtown and Brooklyn offer comparable quality for $500-$900." },
      { q: "Is Botox covered by insurance?", a: "Cosmetic Botox is not covered. However, Botox for medical conditions like chronic migraines, TMJ, or hyperhidrosis (excessive sweating) may be covered with a documented diagnosis." },
      { q: "Is Botox covered by HSA or FSA?", a: "Cosmetic Botox is generally not eligible. Medical Botox (migraines, TMJ, hyperhidrosis) may be eligible with a letter of medical necessity from your provider." },
      { q: "How can I save money on Botox?", a: "Join loyalty programs (Allergan Allē, Galderma Aspire), ask about new patient specials, book multiple areas together for package pricing, and consider Dysport as a 10-20% cheaper alternative." },
      { q: "What's the annual cost of Botox for men?", a: "Most men spend $1,200-$4,800 per year across 3-4 sessions treating 2-3 areas. Compare that to a gym membership ($600-$1,200/year) — it's a meaningful but consistently-valued investment." },
    ],
  },
  {
    name: "Results & Timeline",
    color: "blue",
    faqs: [
      { q: "How long does Botox take to work?", a: "Initial muscle relaxation starts at day 3-5. Full results are visible at day 10-14. Take a 'before' photo on treatment day and compare at 2 weeks for the most dramatic difference." },
      { q: "How long does Botox last for men?", a: "3-4 months on average. Most men settle into a schedule of 3-4 treatments per year. Some men find they can extend time between treatments after their first year." },
      { q: "Will people know I got Botox?", a: "Not with a skilled provider. Good Botox on a man is invisible — people will notice you look refreshed but won't be able to identify what changed. If they can tell, too much was used." },
      { q: "Does Botox make you look younger?", a: "It makes you look refreshed, rested, and less stressed — which reads as 'younger.' It doesn't change your age appearance dramatically; it removes the lines that make you look tired or angry." },
      { q: "What happens when Botox wears off?", a: "Your muscles gradually return to normal function and the lines reappear. There's no rebound effect — you won't look worse than before. You simply return to your pre-treatment state." },
      { q: "What happens if I stop getting Botox?", a: "Nothing bad. Your face gradually returns to its natural state over 3-4 months. Long-term Botox users may notice their wrinkles have actually improved because the muscles have weakened from repeated treatment." },
    ],
  },
  {
    name: "Safety & Side Effects",
    color: "green",
    faqs: [
      { q: "Is Botox safe for men?", a: "Yes. Botox has a 20+ year FDA-approved safety record with millions of treatments performed annually. The cosmetic dose is a tiny fraction of what would cause systemic effects." },
      { q: "What are the most common side effects?", a: "Minor redness at injection sites (fades in 30-60 minutes), occasional small bruise (10-20% of cases, fades in 3-7 days), mild headache (rare, resolves in 24 hours). Most men experience no side effects at all." },
      { q: "Can Botox cause eyelid drooping?", a: "Ptosis (eyelid drooping) occurs in 1-5% of cases with inexperienced injectors. It's temporary (resolves in 2-4 weeks) and almost entirely preventable by choosing a skilled, board-certified provider." },
      { q: "Can Botox cause headaches?", a: "Rarely. Some men experience a mild headache after their first treatment that resolves within 24 hours. Interestingly, Botox is also an FDA-approved treatment FOR chronic migraines." },
      { q: "Can you become immune to Botox?", a: "Very rarely, some patients develop antibodies that reduce Botox effectiveness. This affects less than 1% of patients and is more common with medical (high-dose) use than cosmetic use. Switching brands (to Dysport or Xeomin) often resolves it." },
      { q: "Is Botox toxic?", a: "At cosmetic doses, no. Botulinum toxin is indeed a powerful substance, but the cosmetic dose (20-60 units) is a tiny fraction — less than 1% — of the dose that would cause any systemic effect." },
    ],
  },
  {
    name: "Treatment Areas",
    color: "cyan",
    faqs: [
      { q: "What areas do men get Botox?", a: "The most common are forehead lines (horizontal), frown lines (the '11s' between eyebrows), and crow's feet (around eyes). Masseter Botox for jaw slimming and teeth grinding is the fastest-growing treatment." },
      { q: "How many units of Botox do men need?", a: "Depends on the area: forehead (20-40 units), frown lines (15-25 units), crow's feet (12-20 per side), masseter (25-50 per side). Total for a full face: 50-100+ units." },
      { q: "What is masseter Botox?", a: "Botox injected into the jaw muscle to slim a wide jawline and treat teeth grinding (bruxism). Uses 25-50 units per side. Results develop over 4-6 weeks as the muscle gradually slims." },
      { q: "Can Botox define my jawline?", a: "Botox can slim a wide jaw (masseter Botox). For adding definition and structure, you'd need jawline filler. Many men combine both for the most dramatic results." },
      { q: "Can Botox fix under-eye wrinkles?", a: "Botox can help with crow's feet around the eyes. For under-eye hollows and dark circles, filler is typically more effective. A good provider can recommend the right treatment." },
    ],
  },
  {
    name: "Before & After Treatment",
    color: "pink",
    faqs: [
      { q: "Does Botox hurt?", a: "Most men describe it as a minor pinch — less painful than a blood draw. The needles are extremely thin. The entire treatment takes 15-20 minutes. No anesthesia is needed." },
      { q: "Is there any downtime after Botox?", a: "Essentially none. Most men return to work immediately. Tiny red dots at injection sites fade within an hour. Avoid intense exercise for 4-6 hours." },
      { q: "Can I get Botox during my lunch break?", a: "Yes. The treatment takes 15-20 minutes with no visible downtime. Many urban practices specifically offer lunch-hour appointments for professionals." },
      { q: "What should I avoid before Botox?", a: "Avoid blood thinners (aspirin, ibuprofen) and alcohol for 24-48 hours before treatment. Come with a clean face. No other special preparation needed." },
      { q: "What should I avoid after Botox?", a: "Don't rub the treated area, lie flat, or do intense exercise for 4-6 hours. Avoid saunas and steam rooms for 24 hours. Otherwise, normal activity is fine." },
      { q: "Can I drink alcohol after Botox?", a: "Wait 24 hours. Alcohol increases blood flow and can increase bruising risk. After 24 hours, normal consumption is fine." },
      { q: "Can I work out after Botox?", a: "Wait 4-6 hours for light activity, 24 hours for intense exercise. Elevated blood pressure from heavy lifting can theoretically cause the product to migrate before it settles." },
    ],
  },
  {
    name: "Finding a Provider",
    color: "indigo",
    faqs: [
      { q: "How do I find a good Botox provider for men?", a: "Look for board-certified dermatologists or plastic surgeons with specific experience treating male patients. Ask what percentage of their practice is male. Check RealSelf reviews. Verify board certification at ABMS.org." },
      { q: "Should I go to a dermatologist or medspa?", a: "Board-certified dermatologists and plastic surgeons have the strongest training. Medspas can be excellent if they have physician oversight and experienced injectors. Always verify who is actually performing the injections." },
      { q: "What questions should I ask my Botox provider?", a: "How many male patients do you treat? Are you board-certified? How many units do you typically use for men? Can I see before/after photos of male patients? What's your approach to natural-looking results?" },
      { q: "What's the best age to start Botox for men?", a: "When you first notice lines lingering after you stop making expressions — typically 27-35 for most men. Starting preventatively with lower doses is more effective and cost-efficient than waiting for deep wrinkles." },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
    green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
    cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
    pink: { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-16">
          <div className="container-main max-w-4xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Botox for Men <span className="text-gradient">FAQ</span>
            </h1>
            <p className="text-lg text-gray-200">
              {allFaqs.length} questions answered. Everything men need to know about Botox — cost, results, safety, providers, and more.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-main max-w-4xl space-y-12">
            {faqCategories.map((category) => {
              const color = colorMap[category.color] || colorMap.blue;
              return (
                <div key={category.name}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className={`text-2xl font-bold ${color.text}`}>{category.name}</h2>
                    <span className="text-sm text-gray-500">{category.faqs.length} questions</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="space-y-3">
                    {category.faqs.map((faq, i) => (
                      <details key={i} className={`group ${color.bg} border ${color.border} rounded-xl p-5 cursor-pointer`}>
                        <summary className="flex items-center justify-between text-white font-semibold list-none">
                          <span className="pr-4">{faq.q}</span>
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Still Have Questions?</h2>
              <p className="text-lg text-blue-200 mb-6">Get matched with a vetted provider who can answer everything in person — free.</p>
              <Link href="/find-botox-near-me" className="btn-primary inline-block text-lg">Find a Provider Near Me</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
