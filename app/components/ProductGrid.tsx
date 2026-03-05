"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Treatment {
  id: string;
  name: string;
  problem: string;
  solution: string;
  image: string;
  popular?: boolean;
  referralLink: string;
  duration: string;
  treatedArea: string;
}

// All men's images for treatment areas
const treatments: Treatment[] = [
  {
    id: "1",
    name: "Forehead Lines",
    problem: "Horizontal lines across your forehead making you look older or worried",
    solution: "Smooth, refreshed forehead that looks natural and relaxed",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=400&fit=crop&crop=top",
    popular: true,
    referralLink: "#top",
    duration: "3-4 months",
    treatedArea: "Frontalis muscle",
  },
  {
    id: "2",
    name: "Frown Lines (11s)",
    problem: "Deep vertical lines between your brows that make you look angry or stressed",
    solution: "Eliminate the 'angry look' for a more approachable appearance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop&crop=face",
    referralLink: "#top",
    duration: "3-4 months",
    treatedArea: "Glabellar complex",
  },
  {
    id: "3",
    name: "Crow's Feet",
    problem: "Fine lines around your eyes showing fatigue and age",
    solution: "Look alert and energetic with a smoother eye area",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop&crop=face",
    referralLink: "#top",
    duration: "3-4 months",
    treatedArea: "Orbicularis oculi",
  },
  {
    id: "4",
    name: "Full Face Package",
    problem: "Multiple areas need attention for a complete refresh",
    solution: "Comprehensive treatment for maximum transformation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    popular: true,
    referralLink: "#top",
    duration: "3-4 months",
    treatedArea: "Multiple areas",
  },
  {
    id: "5",
    name: "Jawline Definition",
    problem: "Weak or undefined jawline affecting your profile",
    solution: "Sharper, more masculine jaw contour",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",
    referralLink: "#top",
    duration: "4-6 months",
    treatedArea: "Masseter muscle",
  },
  {
    id: "6",
    name: "Neck Bands",
    problem: "Visible neck bands and lines aging your appearance",
    solution: "Smoother neck for a younger overall look",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop",
    referralLink: "#top",
    duration: "3-4 months",
    treatedArea: "Platysma muscle",
  },
];

export default function ProductGrid() {
  return (
    <section id="treatments" className="section-padding bg-gradient-to-b from-[#12100f] via-[#1a1512] to-[#0f0f0f]">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Treatment Options
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            TARGET YOUR
            <span className="block text-gradient">PROBLEM AREAS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every treatment is customized for the male face. Explore your options
            and find a provider who specializes in men&apos;s aesthetics.
          </p>
        </AnimatedSection>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <AnimatedSection key={treatment.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="card overflow-hidden group h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Popular badge */}
                  {treatment.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{treatment.name}</h3>

                  {/* Problem */}
                  <div className="mb-3">
                    <span className="text-red-400 text-sm font-medium flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      The Problem
                    </span>
                    <p className="text-gray-400 text-sm">{treatment.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <span className="text-green-400 text-sm font-medium flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      The Solution
                    </span>
                    <p className="text-gray-300 text-sm">{treatment.solution}</p>
                  </div>

                  {/* Duration & Area Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {treatment.duration}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{treatment.treatedArea}</span>
                  </div>

                  {/* CTA */}
                  <Link
                    href={treatment.referralLink}
                    className="mt-auto w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-center hover:bg-blue-600 hover:border-blue-500 transition-all group-hover:bg-blue-600 group-hover:border-blue-500"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure which treatment is right for you?
            </h3>
            <p className="text-gray-400 mb-6">
              Join our waitlist and get matched with vetted providers in your area
              who can help you find the perfect treatment plan.
            </p>
            <Link href="#top" className="btn-accent inline-flex items-center gap-2">
              Get Matched
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
