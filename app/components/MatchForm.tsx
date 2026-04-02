"use client";

import { useState } from "react";

interface MatchFormProps {
  city: string;
  region: string;
}

export default function MatchForm({ city, region }: MatchFormProps) {
  const [formData, setFormData] = useState({ firstName: "", email: "", goals: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          provider: "Match Request",
          treatment: formData.goals,
          city,
          region,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", email: "", goals: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">We&apos;ll be in touch!</h3>
        <p className="text-green-300 text-sm">Check your email for personalized provider recommendations.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 border border-amber-500/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Not sure which provider?</h3>
          <p className="text-amber-300 text-sm">Tell us your goals and we&apos;ll match you with the right one.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-3">
        <input
          type="text"
          required
          placeholder="First name"
          className="w-full"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <select
          className="w-full"
          value={formData.goals}
          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
        >
          <option value="">Your goal...</option>
          <option value="forehead-lines">Forehead Lines</option>
          <option value="crows-feet">Crow&apos;s Feet</option>
          <option value="frown-lines">Frown Lines</option>
          <option value="jawline">Jawline Definition</option>
          <option value="under-eyes">Under-Eye Rejuvenation</option>
          <option value="full-face">Full Face Refresh</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-300 text-xs mb-2">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent w-full text-center disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Match Me with a Provider"}
      </button>
    </form>
  );
}
