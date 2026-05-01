import { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Brotox Official terms of service. Terms and conditions for using our website and provider matching service.",
  alternates: { canonical: "https://brotoxofficial.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
        <div className="container-main max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
          <h1 className="text-4xl font-black text-white">Terms of Service</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-main max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Service Description</h2>
            <p className="text-gray-300 leading-relaxed">Brotox Official provides educational content about men&apos;s aesthetic treatments and a free provider matching service. We connect users with vetted, board-certified aesthetic providers. We do not perform medical procedures, provide medical advice, or guarantee treatment outcomes.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Educational Content Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">All content on this website is for educational and informational purposes only. It is not intended as medical advice and should not be used as a substitute for professional medical consultation. Always consult a qualified, licensed healthcare provider before undergoing any aesthetic treatment. Individual results vary.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Provider Matching</h2>
            <p className="text-gray-300 leading-relaxed">Our provider matching service connects users with aesthetic providers in their area. We vet providers for board certification and experience with male patients, but we do not employ, supervise, or control any provider. Brotox Official is not responsible for the quality, safety, or outcomes of any treatment performed by a matched provider. We may receive compensation from providers.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">User Obligations</h2>
            <p className="text-gray-300 leading-relaxed">By submitting a consultation request, you confirm that the information you provide is accurate and that you are at least 18 years old. You understand that provider matching is informational only and does not constitute a medical recommendation.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">Brotox Official is not liable for any damages arising from the use of our website, reliance on our content, or interactions with matched providers. Our service is provided &quot;as is&quot; without warranties of any kind.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p className="text-gray-300 leading-relaxed">Questions about these terms? Email <a href="mailto:contact@brotoxofficial.com" className="text-blue-400">contact@brotoxofficial.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
