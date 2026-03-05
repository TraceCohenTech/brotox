"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Get Matched",
    description: "Tell us your location and goals. We'll connect you with vetted local providers.",
  },
  {
    number: "02",
    title: "Free Consultation",
    description: "Meet with a licensed professional who'll create a personalized treatment plan.",
  },
  {
    number: "03",
    title: "Quick Treatment",
    description: "Most treatments take just 15-20 minutes. Performed by board-certified experts.",
  },
  {
    number: "04",
    title: "Walk Out Confident",
    description: "No downtime required. Return to your day looking naturally refreshed.",
  },
];

export default function DoctorSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#1a1520] via-[#1a1a2e] to-[#0f0f0f]">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Doctor Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5]"
              >
                <Image
                  src="https://faceliftart.com/wp-content/uploads/2020/12/dr-anna-yatskar.jpg"
                  alt="Licensed aesthetic professional"
                  fill
                  className="object-cover object-top"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">We Only Recommend Licensed Pros</p>
                        <p className="text-gray-300 text-sm">Board-certified &amp; vetted providers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - Provider network */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hidden lg:block"
              >
                <p className="text-2xl font-bold text-gradient">Nationwide</p>
                <p className="text-gray-300 text-sm">Provider Network</p>
              </motion.div>

              {/* Floating badge - Coming soon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -left-4 bottom-1/4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hidden lg:block"
              >
                <p className="text-2xl font-bold text-gradient-gold">100%</p>
                <p className="text-gray-300 text-sm">Free to Use</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              QUICK. SIMPLE.
              <span className="block text-gradient-gold">TRANSFORMATIVE.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We connect you with licensed aesthetic professionals in your area.
              Here&apos;s what to expect when you find a provider.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Link href="#top" className="btn-primary inline-flex items-center gap-2">
                Get Matched
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
