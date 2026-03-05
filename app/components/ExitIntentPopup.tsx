"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem("exitPopupShown")) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd send to your email service
    setIsSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                {/* Offer badge */}
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                    EARLY ACCESS
                  </span>
                  <h3 className="text-3xl font-black text-white mb-2">
                    DON&apos;T MISS OUT
                  </h3>
                  <p className="text-gray-400">
                    Be first to know when vetted providers launch in your area
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your zip code"
                    required
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                    className="w-full text-lg"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-lg"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-accent text-lg"
                  >
                    Join the Waitlist
                  </motion.button>
                </form>

                <p className="text-center text-gray-500 text-xs mt-4">
                  No spam. We&apos;ll only email you about providers in your area.
                </p>

                {/* Value prop */}
                <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-green-400 text-sm">
                      We only recommend licensed, vetted providers
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You&apos;re On The List!</h3>
                <p className="text-gray-400">We&apos;ll notify you when providers are available near {zip}.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
