"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const professionals = [
  {
    title: "CEOs & Executives",
    description: "Staying sharp and competitive in the boardroom",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    stat: "42%",
    statLabel: "of male executives invest in appearance",
  },
  {
    title: "Athletes & Fitness",
    description: "Looking as good as they feel after training",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&h=300&fit=crop&crop=face",
    stat: "3x",
    statLabel: "increase in male athletes seeking treatments",
  },
  {
    title: "Tech Founders",
    description: "Presenting their best selves to investors",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    stat: "67%",
    statLabel: "say appearance affects funding success",
  },
  {
    title: "Sales Professionals",
    description: "First impressions close deals",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    stat: "28%",
    statLabel: "report higher close rates post-treatment",
  },
  {
    title: "Lawyers & Finance",
    description: "Commanding respect in high-stakes environments",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    stat: "55%",
    statLabel: "cite confidence as primary motivation",
  },
  {
    title: "Grooms & Partners",
    description: "Looking their best for life's biggest moments",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    stat: "89%",
    statLabel: "of grooms want to look refreshed for photos",
  },
];

export default function MenLikeYou() {
  return (
    <section className="section-padding bg-[#0f0f0f] overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            The Growing Trend
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            MEN LIKE <span className="text-gradient-gold">YOU</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Successful men from every industry are investing in their appearance.
            Here&apos;s who&apos;s getting Botox.
          </p>
        </AnimatedSection>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((pro, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="card p-6 group"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src={pro.image}
                      alt={pro.title}
                      width={64}
                      height={64}
                      className="rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{pro.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{pro.description}</p>

                    {/* Stat */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-gradient">{pro.stat}</span>
                      <span className="text-gray-500 text-xs">{pro.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom quote */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <svg className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              &ldquo;It&apos;s not vanity—it&apos;s strategy. In a competitive world,
              looking your best is simply good business.&rdquo;
            </blockquote>
            <cite className="text-gray-400 not-italic">
              — Featured in <span className="text-white font-medium">Harvard Business Review</span>
            </cite>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
