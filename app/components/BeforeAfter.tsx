"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const transformations = [
  {
    area: "Forehead Lines",
    description: "Smooth out horizontal forehead wrinkles",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    area: "Frown Lines",
    description: "Eliminate the '11' lines between brows",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    area: "Crow's Feet",
    description: "Reduce fine lines around the eyes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Treatment Areas
          </span>
          <h2 className="section-title">
            TARGETED <span className="text-gradient">RESULTS</span>
          </h2>
          <p className="section-subtitle">
            Precision treatments for the areas that matter most
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div whileHover={{ y: -10 }} className="card overflow-hidden group">
                <div className="relative aspect-square">
                  <Image src={item.image} alt={item.area} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.area}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
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
