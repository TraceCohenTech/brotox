"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function SMSSignup() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-amber-600/20 border-y border-white/10">
      <div className="container-main">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Content */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Get Instant Info via Text</h3>
                <p className="text-gray-400">Text <span className="text-green-400 font-mono font-bold">BROTOX</span> to <span className="text-white font-bold">55555</span> for treatment details</p>
              </div>
            </div>

            {/* Right: Visual phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl">📱</div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Text</span>
                <span className="text-xl font-bold text-gradient">BROTOX → 55555</span>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
