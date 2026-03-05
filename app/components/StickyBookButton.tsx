"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pulse every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link href="#top">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 px-6 rounded-full shadow-2xl flex items-center gap-2 ${
                isPulsing ? "animate-pulse" : ""
              }`}
              style={{
                boxShadow: isPulsing
                  ? "0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3)"
                  : "0 10px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Ping animation */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>

              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Matched
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
