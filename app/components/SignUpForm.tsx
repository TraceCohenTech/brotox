"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatment: "",
    zip: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          provider: "Homepage",
          city: "",
          region: "",
          sourceType: "homepage_form",
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const shareUrl = formData.zip
    ? `https://brotoxofficial.com/find/${formData.zip}?ref=friend`
    : "https://brotoxofficial.com/find?ref=friend";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (status === "success") {
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
        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
        <p className="text-green-300 mb-6">
          We&apos;ll match you with a vetted provider shortly. Check your email for next steps.
        </p>
        <div className="border-t border-white/10 pt-5">
          <p className="text-white font-semibold text-sm mb-3">Know someone who&apos;d be interested?</p>
          <div className="flex gap-2">
            <button
              onClick={handleCopyLink}
              className="flex-1 py-2.5 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/15 transition-all"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <a
              href={`sms:?body=${encodeURIComponent("Check out Brotox — free matching with vetted Botox providers for men. " + shareUrl)}`}
              className="flex-1 py-2.5 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium hover:bg-green-500/30 transition-all text-center"
            >
              Text a Friend
            </a>
          </div>
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
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-3">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-xs font-medium">NOW LIVE</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">
          Get Matched Free
        </h3>
        <p className="text-gray-300 text-sm">
          Connect with a vetted Botox provider for men near you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">First Name *</label>
            <input
              type="text"
              required
              placeholder="John"
              className="w-full text-sm"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Last Name *</label>
            <input
              type="text"
              required
              placeholder="Smith"
              className="w-full text-sm"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1.5">Email *</label>
          <input
            type="email"
            required
            placeholder="john@email.com"
            className="w-full text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Phone *</label>
            <input
              type="tel"
              required
              placeholder="(555) 123-4567"
              className="w-full text-sm"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5">Zip Code *</label>
            <input
              type="text"
              required
              placeholder="10001"
              maxLength={5}
              className="w-full text-sm"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, "") })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1.5">What are you interested in? *</label>
          <select
            required
            className="w-full text-sm"
            value={formData.treatment}
            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
          >
            <option value="">Select...</option>
            <option value="Forehead Lines">Forehead Lines</option>
            <option value="Frown Lines">Frown Lines</option>
            <option value="Crow's Feet">Crow&apos;s Feet</option>
            <option value="Jawline & Chin">Jawline &amp; Chin</option>
            <option value="Full Face Refresh">Full Face Refresh</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        {status === "error" && (
          <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
            Something went wrong. Please try again.
          </div>
        )}

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-accent text-lg disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Get Matched Now"}
        </motion.button>

        <p className="text-center text-[10px] text-gray-500">
          Free, no obligation. We&apos;ll connect you with a vetted provider.
        </p>
      </form>
    </motion.div>
  );
}
