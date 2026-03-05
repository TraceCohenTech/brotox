"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const primaryConcerns = [
  "Forehead Lines",
  "Frown Lines (11s)",
  "Crow's Feet",
  "Jawline Definition",
  "Full Face Refresh",
  "Not Sure Yet - Just Exploring",
];

const ageRanges = ["25-34", "35-44", "45-54", "55+"];

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zip: "",
    ageRange: "",
    primaryConcern: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzb6bydsWsiF49amvYPJ0FC2_TuL3AbwaoLeIscNHNALisfGkZzDbqbAVZXGwmJKy22tA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Still show success since no-cors mode won't return response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const canProceed = () => {
    if (step === 1) return formData.zip.length >= 5;
    if (step === 2) return formData.ageRange !== "";
    if (step === 3) return formData.primaryConcern !== "";
    return true;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You&apos;re On The List!</h3>
        <p className="text-gray-300 mb-4">
          We&apos;ll notify you when vetted providers are available in your area.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="text-blue-400 text-sm">Zip: {formData.zip}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
          <span className="text-amber-400 text-xs font-medium">EARLY ACCESS</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Join The Waitlist
        </h3>
        <p className="text-gray-400 text-sm">
          Get notified when vetted providers launch in your area.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full transition-all ${
              s <= step ? "bg-blue-500" : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter" && step < 4) {
            e.preventDefault();
            if (canProceed()) nextStep();
          }
        }}
        className="space-y-4"
      >
        {/* Step 1: Zip Code */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="block text-sm text-gray-400 mb-2">
              What&apos;s your zip code?
            </label>
            <input
              type="text"
              placeholder="Enter zip code"
              required
              maxLength={5}
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, "") })}
              className="w-full text-lg"
            />
            <p className="text-xs text-gray-500 mt-2">
              We&apos;ll match you with providers in your area
            </p>
          </motion.div>
        )}

        {/* Step 2: Age Range */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="block text-sm text-gray-400 mb-3">
              What&apos;s your age range?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {ageRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setFormData({ ...formData, ageRange: range })}
                  className={`py-3 rounded-xl border transition-all text-sm font-medium ${
                    formData.ageRange === range
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "border-white/20 text-gray-300 hover:border-white/40"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Primary Concern */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="block text-sm text-gray-400 mb-3">
              What&apos;s your primary concern?
            </label>
            <div className="space-y-2">
              {primaryConcerns.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryConcern: concern })}
                  className={`w-full py-3 px-4 rounded-xl border transition-all text-sm font-medium text-left ${
                    formData.primaryConcern === concern
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "border-white/20 text-gray-300 hover:border-white/40"
                  }`}
                >
                  {concern}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Phone <span className="text-gray-600">(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
              />
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        {step < 4 ? (
          <motion.button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            whileHover={{ scale: canProceed() ? 1.02 : 1 }}
            whileTap={{ scale: canProceed() ? 0.98 : 1 }}
            className={`w-full py-4 rounded-full font-semibold transition-all ${
              canProceed()
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400"
                : "bg-white/10 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={isSubmitting || !formData.email}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-accent text-lg relative overflow-hidden"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              "Get Updates & Local Recommendations"
            )}
          </motion.button>
        )}

        <p className="text-center text-xs text-gray-500">
          {step < 4
            ? `Step ${step} of 4`
            : "We respect your privacy. Unsubscribe anytime."
          }
        </p>
      </form>
    </motion.div>
  );
}
