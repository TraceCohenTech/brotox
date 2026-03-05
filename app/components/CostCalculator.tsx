"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface TreatmentOption {
  id: string;
  name: string;
  lowPrice: number;
  highPrice: number;
  selected: boolean;
}

export default function CostCalculator() {
  const [treatments, setTreatments] = useState<TreatmentOption[]>([
    { id: "forehead", name: "Forehead Lines", lowPrice: 250, highPrice: 400, selected: false },
    { id: "frown", name: "Frown Lines (11s)", lowPrice: 200, highPrice: 350, selected: false },
    { id: "crows", name: "Crow's Feet", lowPrice: 200, highPrice: 300, selected: false },
    { id: "jaw", name: "Jawline Definition", lowPrice: 350, highPrice: 500, selected: false },
    { id: "neck", name: "Neck Bands", lowPrice: 300, highPrice: 450, selected: false },
  ]);

  const toggleTreatment = (id: string) => {
    setTreatments(treatments.map(t =>
      t.id === id ? { ...t, selected: !t.selected } : t
    ));
  };

  const { lowTotal, highTotal } = useMemo(() => {
    const selectedTreatments = treatments.filter(t => t.selected);
    const lowTotal = selectedTreatments.reduce((sum, t) => sum + t.lowPrice, 0);
    const highTotal = selectedTreatments.reduce((sum, t) => sum + t.highPrice, 0);
    return { lowTotal, highTotal };
  }, [treatments]);

  const selectedCount = treatments.filter(t => t.selected).length;

  return (
    <section className="section-padding bg-gradient-to-b from-[#0f1012] via-[#101520] to-[#0f0f12]">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Know Before You Go
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            TYPICAL <span className="text-gradient">PRICE RANGES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What you might expect to pay locally. Prices vary by provider and location.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Treatment Selection */}
            <AnimatedSection direction="left">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Select Treatment Areas</h3>

                <div className="space-y-3">
                  {treatments.map((treatment) => (
                    <motion.button
                      key={treatment.id}
                      onClick={() => toggleTreatment(treatment.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between ${
                        treatment.selected
                          ? "bg-blue-500/20 border-blue-500"
                          : "bg-white/5 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          treatment.selected
                            ? "bg-blue-500 border-blue-500"
                            : "border-white/30"
                        }`}>
                          {treatment.selected && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-white font-medium">{treatment.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">${treatment.lowPrice}-${treatment.highPrice}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-amber-400/80 text-xs">
                    <strong>Note:</strong> These are typical market ranges for informational purposes only.
                    Actual pricing depends on your provider, location, and treatment plan.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Price Summary */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Estimated Range</h3>

                {selectedCount === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Select treatments to see typical price ranges</p>
                  </div>
                ) : (
                  <>
                    {/* Selected treatments */}
                    <div className="space-y-2 mb-6">
                      {treatments.filter(t => t.selected).map((treatment) => (
                        <div key={treatment.id} className="flex justify-between text-gray-300">
                          <span>{treatment.name}</span>
                          <span className="text-gray-500">${treatment.lowPrice}-${treatment.highPrice}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-2xl font-bold text-white">
                        <span>Typical Total</span>
                        <span className="text-gradient">${lowTotal} - ${highTotal}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">
                        Based on national averages
                      </p>
                    </div>

                    {selectedCount >= 2 && (
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center"
                      >
                        <span className="text-blue-400 font-medium text-sm">
                          💡 Many providers offer bundle discounts for multiple areas
                        </span>
                      </motion.div>
                    )}

                    <Link href="#top" className="btn-primary w-full mt-6 text-center block">
                      Get Matched With Local Providers
                    </Link>

                    <p className="text-center text-gray-500 text-xs mt-4">
                      Join the waitlist for personalized recommendations
                    </p>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
