"use client";

import { motion } from "framer-motion";

const badges = [
  { icon: "🛡️", label: "Licensed Providers", sublabel: "Vetted Network" },
  { icon: "🧠", label: "Expert-Verified", sublabel: "Educational Content" },
  { icon: "📈", label: "10%+ Growth", sublabel: "Male Patients Yearly" },
  { icon: "✅", label: "20+ Years", sublabel: "FDA Approved" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-amber-900/20 border-y border-white/10">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 justify-center py-3"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{badge.label}</p>
                <p className="text-gray-500 text-xs">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
