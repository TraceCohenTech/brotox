"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: "⚡",
    title: "15-Minute Treatment",
    description: "Quick lunch-break procedure. Walk in, walk out looking refreshed. No surgery, no downtime.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: "🎯",
    title: "Natural Results",
    description: "Look like yourself, just more rested. Modern techniques ensure you never look 'frozen' or overdone.",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: "📈",
    title: "Career Advantage",
    description: "Studies show confident-looking men earn more and advance faster. Your appearance is an investment.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: "🔒",
    title: "FDA Approved & Safe",
    description: "Over 20 years of proven safety. 7 million procedures performed annually worldwide.",
    color: "from-purple-500 to-pink-400",
  },
];

const stats = [
  { value: "1 in 10", label: "Botox patients are men", sublabel: "and growing 10% yearly" },
  { value: "7M+", label: "Procedures annually", sublabel: "worldwide" },
  { value: "20+", label: "Years FDA approved", sublabel: "proven track record" },
];

export default function WhyBotox() {
  return (
    <section id="why" className="section-padding relative overflow-hidden">
      {/* Background gradient - warmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12101a] via-[#1a1528] to-[#0f0f12]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
          >
            Why Men Choose Botox
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            THE MODERN MAN&apos;S
            <span className="block text-gradient">SECRET WEAPON</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            It&apos;s not about vanity—it&apos;s about presenting the best version of yourself
            in every meeting, every pitch, every moment that matters.
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 h-full relative overflow-hidden group rounded-2xl border-2 transition-all duration-300`}
                style={{
                  background: `linear-gradient(135deg, rgba(${index === 0 ? '59, 130, 246' : index === 1 ? '245, 158, 11' : index === 2 ? '16, 185, 129' : '168, 85, 247'}, 0.1) 0%, rgba(0,0,0,0.4) 100%)`,
                  borderColor: `rgba(${index === 0 ? '59, 130, 246' : index === 1 ? '245, 158, 11' : index === 2 ? '16, 185, 129' : '168, 85, 247'}, 0.3)`,
                }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${benefit.color}`}>
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.4}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20" />
            <div className="absolute inset-0 backdrop-blur-sm" />

            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    {index > 0 && (
                      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
                    )}
                    <p className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</p>
                    <p className="text-white font-medium text-lg">{stat.label}</p>
                    <p className="text-gray-500 text-sm">{stat.sublabel}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
