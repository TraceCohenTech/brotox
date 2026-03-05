"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {!isSubmitted ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-2xl">📬</span>
                  <span className="text-white font-medium">Weekly Insights</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  GET THE MEN&apos;S AESTHETICS BRIEF
                </h3>
                <p className="text-gray-400 text-lg mb-8">
                  Real stats, trends, and provider tips. Straight talk, no fluff.
                  Join 2,000+ men staying informed.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-center sm:text-left"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary whitespace-nowrap"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Free"}
                  </motion.button>
                </form>

                <p className="text-gray-500 text-sm mt-4">
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You&apos;re Subscribed!</h3>
                <p className="text-gray-400">Check your inbox for a welcome email.</p>
              </motion.div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
