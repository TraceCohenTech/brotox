"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              See The Process
            </span>
            <h2 className="section-title">
              QUICK. SIMPLE.{" "}
              <span className="text-gradient">TRANSFORMATIVE.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Watch how our trusted partners deliver natural-looking results in just
              15 minutes. No surgery. No downtime. Just confidence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { step: "01", text: "Quick consultation with certified expert" },
                { step: "02", text: "Precision treatment in 15-20 minutes" },
                { step: "03", text: "Walk out looking refreshed, not different" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-muted text-sm">
                <span className="text-white font-semibold">500+</span> treatments
                this month
              </p>
            </div>
          </AnimatedSection>

          {/* Video */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden aspect-video group">
              {/* Thumbnail */}
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=450&fit=crop"
                alt="Botox procedure"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Play button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center glow-primary"
                >
                  <svg
                    className="w-8 h-8 text-primary ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </button>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-sm">
                2:34
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for actual video */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl">Video would play here</p>
                  <p className="text-muted mt-2">Replace with your YouTube/Vimeo embed</p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
