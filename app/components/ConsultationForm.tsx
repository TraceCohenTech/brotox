"use client";

import { useState } from "react";

interface ConsultationFormProps {
  providerName: string;
  practiceName: string;
  city: string;
  region: string;
  treatments: { name: string }[];
}

export default function ConsultationForm({
  providerName,
  practiceName,
  city,
  region,
  treatments,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatment: "",
  });
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
          provider: providerName,
          city,
          region,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", treatment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
        <p className="text-green-300">
          We&apos;ll connect you with {practiceName} shortly. Check your email for next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 text-left">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">First Name *</label>
          <input
            type="text"
            required
            placeholder="John"
            className="w-full"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Last Name *</label>
          <input
            type="text"
            required
            placeholder="Smith"
            className="w-full"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            placeholder="john@email.com"
            className="w-full"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 font-medium mb-2">Phone *</label>
          <input
            type="tel"
            required
            placeholder="(555) 123-4567"
            className="w-full"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm text-gray-300 font-medium mb-2">What are you interested in? *</label>
        <select
          className="w-full"
          required
          value={formData.treatment}
          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
        >
          <option value="">Select a treatment...</option>
          {treatments.map((t) => (
            <option key={t.name} value={t.name}>{t.name}</option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Request Consultation"}
      </button>
      <p className="text-xs text-gray-400 mt-4 text-center">
        By submitting, you agree to our privacy policy. We&apos;ll connect you with {practiceName} — no spam, ever.
      </p>
    </form>
  );
}
