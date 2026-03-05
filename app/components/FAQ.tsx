"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Is Botox safe for men?",
    answer: "Absolutely. Botox has been FDA-approved for over 20 years with an excellent safety record. Over 7 million procedures are performed annually worldwide. The treatment is identical for men and women, though men typically require slightly higher doses due to stronger facial muscles.",
  },
  {
    question: "Will people know I had Botox?",
    answer: "When done by a skilled practitioner, results look completely natural. You'll look refreshed, not 'frozen.' Most men report that people notice they look great but can't pinpoint exactly why. The goal is subtle enhancement, not dramatic change.",
  },
  {
    question: "How long do results last?",
    answer: "Typical results last 3-4 months. With regular treatments, many men find their results last longer over time as the muscles become trained to relax. Most clients come in 3-4 times per year to maintain their refreshed appearance.",
  },
  {
    question: "How long until I see results?",
    answer: "You'll start noticing results within 3-5 days, with full effects visible at 10-14 days. The gradual onset means changes look natural, not sudden. This is one of the reasons Botox is so popular with men who want discreet improvements.",
  },
  {
    question: "Is there any downtime?",
    answer: "Virtually no downtime. The procedure takes just 15-20 minutes and you can return to work or daily activities immediately. We recommend avoiding strenuous exercise for 24 hours and not lying flat for 4 hours post-treatment.",
  },
  {
    question: "Does it hurt?",
    answer: "Most men describe the sensation as a small pinch—far less painful than expected. The needles used are extremely fine (thinner than a hair), and treatments are quick. Many practitioners offer numbing cream for those who prefer it.",
  },
  {
    question: "What are common side effects?",
    answer: "The most common side effects are minor and temporary: slight redness, swelling, or bruising at injection sites (usually resolves within hours to days). Headaches can occasionally occur but are rare. Serious complications are extremely uncommon when performed by qualified practitioners.",
  },
  {
    question: "How do pricing and financing usually work?",
    answer: "Pricing typically ranges from $200-$500 per treatment area, depending on location and provider. Many clinics offer package discounts for multiple areas or maintenance plans. Some accept HSA/FSA funds, and financing options like CareCredit are widely available.",
  },
  {
    question: "What should I ask a provider before treatment?",
    answer: "Key questions include: Are you board-certified? How many male patients do you treat? Can I see before/after photos of male patients? What brand of neurotoxin do you use? What's included in the price? A good provider will welcome these questions.",
  },
  {
    question: "How do I know if a provider is qualified?",
    answer: "Look for board certification in dermatology, plastic surgery, or facial aesthetics. Check reviews specifically from male patients. Verify they have experience with men (our facial muscles are different). Avoid deals that seem too good to be true—quality matters with injectables.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gradient-to-b from-[#0f0f12] via-[#141520] to-[#0f0f10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            GOT <span className="text-gradient">QUESTIONS?</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know before your first treatment
          </p>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white/10 border border-blue-500/30"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white text-lg pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      openIndex === index ? "bg-blue-500" : "bg-white/10"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <Link
                          href="#top"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          Find vetted providers in your area →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ready to take the next step?</p>
          <Link href="#top" className="btn-primary inline-flex items-center gap-2">
            Get Matched
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
