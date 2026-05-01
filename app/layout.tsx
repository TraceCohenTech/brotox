import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyBookButton from "./components/StickyBookButton";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Brotox Official | Botox for Men — Education & Provider Matching",
    template: "%s | Brotox Official",
  },
  description:
    "The #1 resource for men's Botox. Learn what to expect, compare costs, and get matched with vetted providers near you. Education-first approach to male aesthetics — no pressure, just results.",
  keywords: [
    "botox for men",
    "brotox",
    "men's botox",
    "male botox",
    "male aesthetics",
    "anti-aging for men",
    "botox treatments for men",
    "men's cosmetic treatments",
    "botox cost for men",
    "botox near me men",
    "men's wrinkle treatment",
    "preventative botox men",
    "forehead botox men",
    "crow's feet treatment men",
    "frown lines men",
    "botox provider",
    "botox education",
    "men's grooming",
    "men's self care",
  ],
  metadataBase: new URL("https://brotoxofficial.com"),
  alternates: {
    canonical: "https://brotoxofficial.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Brotox Official — Botox for Men. Done Right.",
    description:
      "The #1 resource for men's Botox. Education first, no pressure. Learn what to expect, compare costs, and get matched with vetted providers near you.",
    url: "https://brotoxofficial.com",
    siteName: "Brotox Official",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brotox Official — Botox for Men. Done Right.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brotox Official — Botox for Men. Done Right.",
    description:
      "The #1 resource for men's Botox. Education first, no pressure. Get matched with vetted providers near you.",
    site: "@brotoxofficial",
    images: ["/og-image.png"],
  },
  category: "Health & Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brotox Official",
              url: "https://brotoxofficial.com",
              logo: "https://brotoxofficial.com/og-image.png",
              description:
                "The #1 resource for men's Botox. Education-first approach to male aesthetics with vetted provider matching across 38 US metros.",
              foundingDate: "2026",
              sameAs: [
                "https://x.com/brotoxofficial",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@brotoxofficial.com",
                url: "https://brotoxofficial.com",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              knowsAbout: [
                "Botox for men",
                "Brotox",
                "Male aesthetics",
                "Men's Botox providers",
                "Dermal fillers for men",
                "Anti-aging for men",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Brotox Official",
              url: "https://brotoxofficial.com",
              description: "The #1 resource for men's Botox. Find vetted providers, read guides, and get matched for free.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://brotoxofficial.com/find-botox-near-me/{zip_code}",
                "query-input": "required name=zip_code",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <Footer />
        <StickyBookButton />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
