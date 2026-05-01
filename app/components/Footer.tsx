import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white">
                BROTOX<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Men&apos;s aesthetic education and local provider matching.
              Education first. Trusted recommendations.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Learn More</h4>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Cost Guide", href: "/botox-for-men/cost-guide" },
                { label: "First Appointment", href: "/botox-for-men/first-appointment-guide" },
                { label: "Botox vs Fillers", href: "/botox-for-men/vs-fillers" },
                { label: "Side Effects", href: "/botox-for-men/side-effects" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Started</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get matched with a vetted provider near you — free.
            </p>
            <Link href="/find-botox-near-me" className="btn-primary py-3 px-6 text-sm inline-block">
              Get Matched Free
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer - Prominent */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Disclosure
          </h5>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong>Brotox Official provides educational information only.</strong> We do not perform medical procedures.
            We may receive compensation from providers we recommend. All medical treatments should only be performed
            by licensed, board-certified medical professionals. Individual results may vary. Always consult a qualified
            healthcare provider before undergoing any aesthetic treatment.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Brotox Official. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="mailto:contact@brotoxofficial.com" className="text-gray-500 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
