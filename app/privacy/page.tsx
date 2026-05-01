import { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Brotox Official privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://brotoxofficial.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
        <div className="container-main max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-main max-w-3xl prose-invert space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">When you submit a consultation request, we collect your first name, last name, email address, phone number, zip code, and treatment interest. We also collect usage data through Vercel Analytics (page views, device type, referral source) which does not personally identify you.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">We use the information you provide to match you with vetted aesthetic providers in your area. We may share your contact information with providers you are matched with. We use analytics data to improve our website and understand user behavior. We will never sell your personal information to third parties for marketing purposes unrelated to our service.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Data Storage</h2>
            <p className="text-gray-300 leading-relaxed">Your consultation data is stored securely via Google Sheets and Vercel infrastructure. We implement reasonable security measures to protect your information, but no method of transmission over the internet is 100% secure.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">We use Vercel Analytics and Speed Insights which collect anonymized usage data. We use session storage to manage site features like exit-intent popups. We do not use advertising cookies or retargeting pixels.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">You may request deletion of your personal data at any time by emailing contact@brotoxofficial.com. We will comply with your request within 30 days.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p className="text-gray-300 leading-relaxed">For privacy questions, contact us at <a href="mailto:contact@brotoxofficial.com" className="text-blue-400">contact@brotoxofficial.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
