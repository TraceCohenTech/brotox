"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const treatmentAreas = [
  {
    id: "forehead",
    name: "Forehead Lines",
    description: "Horizontal lines that form across your forehead when you raise your eyebrows. Often called 'worry lines' or 'surprise lines.'",
    whatToExpect: "Smooths horizontal creases for a more relaxed, youthful forehead appearance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=top",
    treatedMuscle: "Frontalis muscle",
    duration: "3-4 months",
  },
  {
    id: "frown",
    name: "Frown Lines (11s)",
    description: "The vertical lines between your eyebrows that make you look angry, stressed, or tired—even when you're not.",
    whatToExpect: "Softens the 'angry look' for a more approachable, relaxed appearance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    treatedMuscle: "Glabellar complex",
    duration: "3-4 months",
  },
  {
    id: "crows",
    name: "Crow's Feet",
    description: "Fine lines that fan out from the corners of your eyes. They appear when you smile or squint and can make you look older than you feel.",
    whatToExpect: "Reduces eye wrinkles while maintaining natural expression when you smile.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    treatedMuscle: "Orbicularis oculi",
    duration: "3-4 months",
  },
  {
    id: "jaw",
    name: "Jawline Slimming",
    description: "Creates a more defined, angular jawline by relaxing the masseter muscles. Also helps with teeth grinding (bruxism).",
    whatToExpect: "Slims a square jaw for a more sculpted, V-shaped facial profile.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    treatedMuscle: "Masseter muscle",
    duration: "4-6 months",
  },
  {
    id: "neck",
    name: "Neck Bands",
    description: "Vertical bands that appear on the neck as we age, creating a 'turkey neck' appearance that can add years to your look.",
    whatToExpect: "Smooths vertical neck bands for a cleaner, more youthful neck profile.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    treatedMuscle: "Platysma muscle",
    duration: "3-4 months",
  },
  {
    id: "brow",
    name: "Brow Lift",
    description: "Subtly lifts drooping eyebrows that can make you look tired or angry. Creates a more alert, refreshed appearance.",
    whatToExpect: "Opens up the eye area for a more awake, energetic look.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    treatedMuscle: "Brow depressors",
    duration: "3-4 months",
  },
];

export default function InteractiveFaceMap() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#1a1525] via-[#1a1a2e] to-[#0f1015]">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Treatment Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            EXPLORE <span className="text-gradient">TREATMENT AREAS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Understanding your options is the first step. Here&apos;s a detailed look at each treatment area.
          </p>
        </AnimatedSection>

        {/* Treatment Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentAreas.map((area, index) => (
            <AnimatedSection key={area.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Treatment name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                    <p className="text-purple-400 text-sm font-medium">{area.treatedMuscle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  {/* What to expect */}
                  <div className="bg-green-500/10 rounded-xl p-4 mb-4">
                    <p className="text-green-400 text-sm font-medium mb-1">What to Expect</p>
                    <p className="text-gray-300 text-sm">{area.whatToExpect}</p>
                  </div>

                  {/* Duration badge */}
                  <div className="mt-auto flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-400 text-sm">Results last {area.duration}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure where to start?
            </h3>
            <p className="text-gray-400 mb-6">
              Most providers offer free consultations to assess your specific needs
              and recommend the best treatment plan for your goals.
            </p>
            <Link href="#top" className="btn-primary inline-flex items-center gap-2">
              Find Providers Near You
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
