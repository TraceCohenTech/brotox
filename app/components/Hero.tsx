"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SignUpForm from "./SignUpForm";

// High-quality men's faces for the scrolling marquee - all male faces
const topRowFaces = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face&q=95",
];

const middleRowFaces = [
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300&h=300&fit=crop&crop=face&q=95",
];

const bottomRowFaces = [
  "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1480429370612-2b90d08a0433?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=face&q=95",
  "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=300&fit=crop&crop=face&q=95",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]">
      {/* Scrolling face marquees - brighter */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {/* Top row - scrolls left */}
        <div className="absolute top-[10%] left-0 right-0">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...topRowFaces, ...topRowFaces, ...topRowFaces].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt="Happy client"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Middle row - scrolls right */}
        <div className="absolute top-[35%] left-0 right-0">
          <motion.div
            className="flex gap-4"
            animate={{ x: [-1920, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...middleRowFaces, ...middleRowFaces, ...middleRowFaces].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt="Happy client"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - scrolls left slower */}
        <div className="absolute top-[60%] left-0 right-0">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...bottomRowFaces, ...bottomRowFaces, ...bottomRowFaces].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt="Happy client"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for readability - lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 container-main min-h-screen flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <span className="text-lg">🛡️</span>
                <span className="text-sm text-gray-200">Licensed Providers</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <span className="text-lg">✅</span>
                <span className="text-sm text-gray-200">20+ Years FDA Approved</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <span className="text-lg">🧠</span>
                <span className="text-sm text-gray-200">Expert-Verified</span>
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6">
              <span className="block text-white">BOTOX FOR MEN.</span>
              <span className="block text-gradient text-6xl md:text-7xl lg:text-8xl">DONE RIGHT.</span>
              <span className="block text-white">FEEL UNSTOPPABLE.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Education first. Discreet guidance.
              <span className="text-white font-semibold"> Trusted local recommendations</span> coming soon.
              Join the early access list.
            </p>

            {/* Industry Stats row */}
            <div className="flex gap-8 mb-8">
              {[
                { value: "7M", unit: "+", label: "Procedures/Year" },
                { value: "10", unit: "%+", label: "Male Growth YoY" },
                { value: "20", unit: "+", label: "Years FDA Approved" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold">
                    <span className="text-gradient">{stat.value}</span>
                    <span className="text-blue-400 text-xl">{stat.unit}</span>
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Provider network status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 text-sm"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400">Provider Network Coming Soon</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Sign Up Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SignUpForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs mb-2 tracking-wider">SCROLL</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
