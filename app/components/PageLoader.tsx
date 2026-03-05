"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate load time or wait for actual content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-black text-white mb-4"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                BROTOX<span className="text-blue-500">.</span>
              </motion.h1>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-sm mt-4"
            >
              Loading your confidence boost...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
