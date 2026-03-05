"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const blogPosts = [
  {
    id: "1",
    title: "The Executive's Guide to Looking Refreshed Without Anyone Knowing",
    excerpt: "How top CEOs and leaders are staying competitive by investing in subtle aesthetic treatments.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    category: "Career",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Botox Myths Debunked: What Every Man Should Know",
    excerpt: "Separating fact from fiction about the world's most popular cosmetic treatment for men.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    category: "Education",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Pre-Wedding Prep: Why Grooms Are Getting Botox",
    excerpt: "Looking your best on the big day. The growing trend of groom grooming before walking down the aisle.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    category: "Lifestyle",
    readTime: "3 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            The Brotox Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            INSIGHTS & <span className="text-gradient">ADVICE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert tips, real stories, and everything you need to know about men&apos;s aesthetics
          </p>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                className="card overflow-hidden group h-full flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <span className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
