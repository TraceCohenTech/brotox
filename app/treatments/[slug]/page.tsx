import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ConsultationForm from "@/app/components/ConsultationForm";

interface Treatment {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  quickAnswer: string;
  duration: string;
  priceRange: string;
  unitsRange: string;
  resultsTimeline: string;
  lastsDuration: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
}

const treatments: Treatment[] = [
  {
    slug: "botox-forehead-men",
    name: "Botox for Forehead Lines",
    metaTitle: "Botox for Forehead Lines in Men — Cost, Units, Results & Recovery",
    description: "Forehead lines are the #1 reason men get Botox. Here's everything: cost ($250-$800), units needed (20-40), timeline, and what results look like.",
    quickAnswer: "Men typically need 20-40 units of Botox for forehead lines, costing $250-$800 per session. Results appear in 3-5 days, peak at 2 weeks, and last 3-4 months. Men need 30-50% more units than women due to stronger frontalis muscles.",
    duration: "15-20 minutes", priceRange: "$250-$800", unitsRange: "20-40 units", resultsTimeline: "3-5 days to start, 10-14 days full effect", lastsDuration: "3-4 months",
    sections: [
      { heading: "Why Do Men Get Deeper Forehead Lines?", content: "The frontalis muscle — the large muscle that raises your eyebrows and wrinkles your forehead — is significantly larger and stronger in men. Years of raising your eyebrows during conversation, squinting at screens, and general facial expression create deep horizontal grooves that become etched into the skin over time." },
      { heading: "How Does Forehead Botox Work?", content: "Botox temporarily relaxes the frontalis muscle so it can't contract as strongly. Existing lines soften because the skin is no longer being pulled into folds. With regular treatments every 3-4 months, even deep lines can significantly improve as the skin recovers without constant creasing." },
      { heading: "How Many Units Do Men Need?", content: "Men typically need 20-40 units for the forehead, compared to 10-20 for women. This isn't about being overcharged — the stronger male frontalis muscle simply requires more product for effective results. A provider who uses female dosing on a male forehead will get poor results." },
      { heading: "What Does It Cost?", content: "Forehead Botox for men costs $250-$800 per session depending on your city and provider. Per-unit pricing runs $10-$25. Major cities (NYC, LA, Miami) trend higher. Most men treat forehead lines alongside frown lines and/or crow's feet for a complete upper-face refresh." },
      { heading: "What Results Look Like on Men", content: "Good forehead Botox on a man looks like nothing happened — except the lines are gone. You can still raise your eyebrows and show expression, just without the deep creasing. The key is 'softening' not 'freezing.' If your forehead looks completely smooth and shiny, that's too much product." },
      { heading: "Recovery and Aftercare", content: "There is essentially no recovery. Most men return to work immediately. Tiny red dots at injection sites fade in 30-60 minutes. Avoid rubbing your forehead, lying flat, or intense exercise for 4-6 hours. Results start appearing at day 3-5, with full effect at 2 weeks." },
    ],
    faqs: [
      { question: "How many units of Botox do men need for the forehead?", answer: "Typically 20-40 units. Men's frontalis muscles are larger and stronger, requiring 30-50% more product than women for equivalent results." },
      { question: "How much does forehead Botox cost for men?", answer: "$250-$800 per session depending on city and provider. Per-unit pricing is $10-$25, and men need more units than women." },
      { question: "Will my forehead look frozen?", answer: "Not with a skilled provider. The goal is to soften lines while preserving natural movement. A frozen, shiny forehead means too much product was used." },
      { question: "How long does forehead Botox last for men?", answer: "3-4 months on average. Most men get 3-4 treatments per year to maintain results." },
    ],
  },
  {
    slug: "botox-crows-feet-men",
    name: "Botox for Crow's Feet",
    metaTitle: "Botox for Crow's Feet in Men — Cost, Results & What to Expect",
    description: "Crow's feet are one of the most responsive areas to Botox in men. Cost: $200-$500 per side. 12-20 units per side. Results in 3-5 days.",
    quickAnswer: "Crow's feet Botox for men uses 12-20 units per side (24-40 total), costs $200-$500 per side, and is one of the most responsive treatment areas. Results start in 3-5 days and last 3-4 months. Many men say treating crow's feet makes the biggest visual difference.",
    duration: "10-15 minutes", priceRange: "$200-$500 per side", unitsRange: "12-20 units per side", resultsTimeline: "3-5 days to start, 10-14 days full effect", lastsDuration: "3-4 months",
    sections: [
      { heading: "Why Do Men Get Crow's Feet?", content: "Every time you smile, squint, or laugh, the orbicularis oculi muscle around your eyes contracts and creates fan-shaped lines. Years of sun exposure, screen squinting, and outdoor activities accelerate the process. Men who are active outdoors tend to develop crow's feet earlier." },
      { heading: "How Crow's Feet Botox Works", content: "Botox is injected into 2-3 points on each side of the eyes. The muscle relaxes enough to prevent deep creasing while still allowing a natural smile. The skin smooths out as it's no longer being constantly folded." },
      { heading: "Units and Pricing for Men", content: "Men typically need 12-20 units per side (24-40 total) at $10-$25 per unit. Most men combine crow's feet with forehead and frown lines for a complete upper-face treatment costing $500-$1,200 total." },
      { heading: "What Results Look Like", content: "Before: Deep lines radiating from eye corners, especially visible when smiling. After: Smooth eye area with a natural smile. The eyes appear more open and youthful. The 'tired' look disappears. Many men say this area gives the biggest visual payoff." },
      { heading: "Combining with Other Areas", content: "Most men treat crow's feet alongside forehead and frown lines. Treating all three areas together is the most popular 'starter package' for men new to Botox, taking just 15-20 minutes total." },
    ],
    faqs: [
      { question: "How many units for crow's feet in men?", answer: "12-20 units per side (24-40 total). Men often need the higher end due to stronger eye muscles." },
      { question: "How much does crow's feet Botox cost?", answer: "$200-$500 per side, or typically included in a full upper-face treatment ($500-$1,200)." },
      { question: "Will I still look natural when I smile?", answer: "Yes. A skilled provider preserves natural smile movement while eliminating the deep line creasing." },
      { question: "Are crow's feet a good area to start with?", answer: "Excellent. Crow's feet are highly responsive to Botox and produce dramatic visual improvement with minimal treatment." },
    ],
  },
  {
    slug: "botox-frown-lines-men",
    name: "Botox for Frown Lines (11s)",
    metaTitle: "Botox for Frown Lines in Men — The 11s Between Your Eyebrows",
    description: "The vertical '11' lines between your eyebrows make you look angry even when you're not. Men need 15-25 units, costing $200-$500 per session.",
    quickAnswer: "Frown line Botox for men uses 15-25 units targeting the corrugator and procerus muscles between the eyebrows. Cost is $200-$500 per session. This is often the area that gives men the biggest 'wow' moment — the angry, stressed look disappears completely.",
    duration: "10-15 minutes", priceRange: "$200-$500", unitsRange: "15-25 units", resultsTimeline: "3-5 days to start, 10-14 days full effect", lastsDuration: "3-4 months",
    sections: [
      { heading: "What Are the 11s?", content: "The 'glabellar lines' or '11s' are the vertical lines that form between your eyebrows when you frown, concentrate, or squint. They're caused by the corrugator and procerus muscles. In men, these muscles are particularly strong, creating deep, prominent lines that can make you look angry or stressed even when your face is at rest." },
      { heading: "Why Frown Lines Matter for Men", content: "Frown lines are perception killers. Studies show that people with visible frown lines are perceived as less approachable, more stressed, and less trustworthy — even when they're perfectly relaxed. For men in client-facing roles, management, or any social profession, this unconscious perception matters." },
      { heading: "How the Treatment Works", content: "Botox is injected into 5-7 points in the glabellar complex — the small area between and just above the eyebrows. The muscles relax within 3-5 days, and the deep vertical lines soften dramatically. You can still frown, but the deep etching disappears." },
      { heading: "Units and Cost for Men", content: "Men need 15-25 units for frown lines, compared to 10-20 for women. At $10-$25 per unit, that's $200-$500 per treatment. Most men combine this with forehead lines and/or crow's feet." },
      { heading: "The 'Wow' Moment", content: "Frown lines are often the area that gives men the biggest surprise. Because these lines create such a negative resting expression, eliminating them produces a dramatic shift in how you look — and how people respond to you. Many men report that colleagues and friends comment that they seem 'more relaxed' or 'happier.'" },
    ],
    faqs: [
      { question: "What are the 11 lines on my forehead?", answer: "The '11s' are vertical lines between your eyebrows caused by frowning. They make you look angry or stressed even when relaxed. Botox relaxes the muscles that cause them." },
      { question: "How many units for frown lines in men?", answer: "15-25 units targeting the corrugator and procerus muscles. Men typically need more than women due to stronger muscle mass." },
      { question: "Will I still be able to frown?", answer: "You'll have reduced frowning ability, but you won't look 'frozen.' The deep etching disappears while natural expression is preserved." },
      { question: "How much do frown lines cost to treat?", answer: "$200-$500 per session for men, depending on units needed and provider pricing." },
    ],
  },
  {
    slug: "jawline-filler-men",
    name: "Jawline Filler for Men",
    metaTitle: "Jawline Filler for Men — Cost, Results & Complete Guide",
    description: "Jawline filler is the fastest-growing aesthetic treatment for men. 2-4 syringes, $1,500-$4,000, immediate results lasting 12-18 months.",
    quickAnswer: "Jawline filler for men uses 2-4 syringes of hyaluronic acid filler (Juvederm Volux, Restylane Defyne) to create a more defined, angular jawline. Cost is $1,500-$4,000. Results are immediate and last 12-18 months. It's the fastest-growing non-surgical treatment for men.",
    duration: "30-45 minutes", priceRange: "$1,500-$4,000", unitsRange: "2-4 syringes", resultsTimeline: "Immediate", lastsDuration: "12-18 months",
    sections: [
      { heading: "Why Jawline Definition Matters for Men", content: "A strong, defined jawline is consistently rated as one of the most attractive male facial features across cultures and studies. It signals health, youth, and masculinity. As men age, the jawline softens due to bone resorption, fat redistribution, and skin laxity — filler can restore and enhance what time takes away." },
      { heading: "How Jawline Filler Works", content: "Hyaluronic acid gel (Juvederm Volux or Restylane Defyne are the most common for jawlines) is injected along the jaw angle and body to add definition, straighten the jawline, and create a stronger profile. The filler provides structural support that mimics natural bone and tissue." },
      { heading: "The Procedure", content: "Treatment takes 30-45 minutes. Most providers use a combination of needles and cannulas for precision and safety. Numbing cream or local anesthesia is typically used. You'll see results immediately, though there may be minor swelling for 1-3 days. Most men return to normal activities the same day." },
      { heading: "Cost and How Many Syringes", content: "Men typically need 2-4 syringes at $600-$1,000 per syringe, totaling $1,500-$4,000. The number depends on your starting jawline, desired result, and facial structure. Some men start with 2 syringes and add more at a follow-up." },
      { heading: "Combining with Masseter Botox", content: "Many providers recommend combining jawline filler with masseter Botox for the most dramatic results. Botox slims the wide part of the jaw while filler defines the angle — creating a more V-shaped, chiseled look. The combination typically costs $2,000-$5,000 total." },
    ],
    faqs: [
      { question: "How much does jawline filler cost for men?", answer: "$1,500-$4,000 depending on the number of syringes (typically 2-4) and your provider. Results last 12-18 months." },
      { question: "Does jawline filler look natural on men?", answer: "Yes, when done by a provider experienced with male faces. The goal is to enhance your natural bone structure, not create an artificial look." },
      { question: "How long does jawline filler last?", answer: "12-18 months depending on the product used, your metabolism, and the amount injected." },
      { question: "Can jawline filler fix a weak chin?", answer: "Chin filler is often done alongside jawline filler to project the chin forward. Together they create a dramatically stronger profile." },
    ],
  },
  {
    slug: "masseter-botox-men",
    name: "Masseter Botox (Jaw Slimming)",
    metaTitle: "Masseter Botox for Men — Jaw Slimming, TMJ Relief & Cost Guide",
    description: "Masseter Botox slims the jawline and treats teeth grinding. 25-50 units per side, $400-$1,200, with results developing over 4-6 weeks.",
    quickAnswer: "Masseter Botox uses 25-50 units per side (50-100 total) to slim a wide jaw, relieve teeth grinding (bruxism), and reduce TMJ pain. Cost is $400-$1,200. Results develop gradually over 4-6 weeks as the muscle shrinks. Duration is 4-6 months.",
    duration: "10-15 minutes", priceRange: "$400-$1,200", unitsRange: "25-50 units per side", resultsTimeline: "4-6 weeks for slimming", lastsDuration: "4-6 months",
    sections: [
      { heading: "What Is Masseter Botox?", content: "The masseter is the large muscle you feel when you clench your jaw. In men who grind their teeth, clench under stress, or have naturally large masseters, this muscle can make the lower face look wide, square, and heavy. Botox relaxes and gradually shrinks the muscle, creating a slimmer jawline." },
      { heading: "Dual Benefits: Aesthetics + Medical", content: "Masseter Botox is one of the few treatments that's both cosmetic and medical. It slims a wide jaw for aesthetics while simultaneously treating bruxism (teeth grinding), TMJ pain, and jaw tension. Many men come for one benefit and discover the other." },
      { heading: "Units and Pricing", content: "Men typically need 25-50 units per side (50-100 total) — significantly more than the upper face. At $10-$25 per unit, the cost is $400-$1,200 per treatment. Insurance may cover a portion if you have a documented TMJ or bruxism diagnosis." },
      { heading: "Results Timeline", content: "Unlike forehead Botox (which works in days), masseter Botox takes 4-6 weeks for the slimming effect because the muscle needs time to atrophy. The jaw tension relief starts within 1-2 weeks. Full slimming results peak at 6-8 weeks." },
      { heading: "Combining with Jawline Filler", content: "The power combo: masseter Botox slims the wide part of the jaw while filler defines the angle. Together they transform the lower face from round and heavy to angular and defined. This combination is the fastest-growing male aesthetic treatment." },
    ],
    faqs: [
      { question: "Does masseter Botox change how I chew?", answer: "No. The masseter is much larger than needed for normal chewing. Botox reduces its bulk but doesn't impair function." },
      { question: "How long until I see jaw slimming results?", answer: "4-6 weeks. The muscle needs time to gradually shrink. Jaw tension relief starts within 1-2 weeks." },
      { question: "How much does masseter Botox cost?", answer: "$400-$1,200 using 25-50 units per side. May be partially covered by insurance if treating bruxism or TMJ." },
      { question: "How often do I need masseter Botox?", answer: "Every 4-6 months initially. Over time, many men extend to every 6-9 months as the muscle weakens with repeated treatment." },
    ],
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};

  return {
    title: treatment.metaTitle,
    description: treatment.description,
    alternates: { canonical: `https://brotoxofficial.com/treatments/${slug}` },
    openGraph: { title: treatment.metaTitle, description: treatment.description, type: "article", url: `https://brotoxofficial.com/treatments/${slug}` },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: treatment.name,
    description: treatment.quickAnswer,
    url: `https://brotoxofficial.com/treatments/${slug}`,
    mainEntity: {
      "@type": "MedicalProcedure",
      name: `${treatment.name} for Men`,
      procedureType: "https://schema.org/NoninvasiveProcedure",
      howPerformed: treatment.sections[1]?.content || "",
      preparation: "Avoid blood thinners and alcohol 24-48 hours before treatment.",
      followup: treatment.lastsDuration,
    },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".quick-answer"] },
    about: { "@type": "Thing", name: "Botox for Men" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((f) => ({
      "@type": "Question", name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
          <div className="container-main max-w-4xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: treatment.name }]} />
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20 text-xs font-semibold mb-4">Treatment Guide</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">{treatment.name} <span className="text-gradient">for Men</span></h1>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="pt-8 pb-4">
          <div className="container-main max-w-4xl">
            <div className="quick-answer bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 mb-6">
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-lg leading-relaxed">{treatment.quickAnswer}</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-amber-400 font-bold text-lg">{treatment.priceRange}</p>
                <p className="text-xs text-gray-300">Cost</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-blue-400 font-bold text-lg">{treatment.unitsRange}</p>
                <p className="text-xs text-gray-300">Units</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-green-400 font-bold text-lg">{treatment.duration}</p>
                <p className="text-xs text-gray-300">Duration</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-cyan-400 font-bold text-lg">{treatment.lastsDuration}</p>
                <p className="text-xs text-gray-300">Lasts</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-lg">$0</p>
                <p className="text-xs text-gray-300">Downtime</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container-main">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {treatment.sections.map((s, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-white mb-3">{s.heading}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{s.content}</p>
                  </div>
                ))}

                {/* FAQ */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {treatment.faqs.map((faq, i) => (
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
              </div>

              {/* Sidebar form */}
              <div>
                <div className="sticky top-28">
                  <div className="bg-gradient-to-b from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Get Matched — Free</h3>
                    <p className="text-blue-300 text-sm mb-4">Find a provider for {treatment.name.toLowerCase()} near you.</p>
                    <ConsultationForm
                      providerName={`${treatment.name} provider`}
                      practiceName="a vetted local practice"
                      city="" region="" zip=""
                      treatments={[{ name: treatment.name }]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
