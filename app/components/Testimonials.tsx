"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Michael R.",
    role: "CEO, Tech Startup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The results were subtle but impactful. I look refreshed in meetings without anyone knowing why. Best investment I've made in myself.",
    rating: 5,
    result: "Looks 10 years younger",
  },
  {
    name: "James K.",
    role: "Investment Banker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "I was skeptical at first, but the natural results speak for themselves. My wife noticed immediately—said I looked less stressed.",
    rating: 5,
    result: "Natural, refreshed look",
  },
  {
    name: "David L.",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Quick, painless, and the confidence boost is real. I close more deals now because I feel like the best version of myself.",
    rating: 5,
    result: "Boosted confidence",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Real Experiences
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            WHAT MEN SAY
            <span className="block text-gradient-gold">ABOUT BOTOX</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real stories from men who&apos;ve tried Botox treatments
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="card p-6 h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Result badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                  ✓ {testimonial.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
