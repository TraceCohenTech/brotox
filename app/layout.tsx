import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import StickyBookButton from "./components/StickyBookButton";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Brotox Official | Men's Botox Education & Provider Matching",
  description: "Education first. Trusted local recommendations. Learn about Botox for men and get matched with vetted providers in your area.",
  keywords: ["men's botox", "male aesthetics", "anti-aging for men", "botox treatments", "brotox", "botox for men"],
  metadataBase: new URL("https://brotoxofficial.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Brotox Official | Botox for Men. Done Right.",
    description: "Education first. Trusted local recommendations. Join the waitlist and get matched with vetted providers in your area.",
    url: "https://brotoxofficial.com",
    siteName: "Brotox Official",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brotox Official - Botox for Men. Done Right.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brotox Official | Botox for Men. Done Right.",
    description: "Education first. Trusted local recommendations. Join the waitlist and get matched with vetted providers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <PageLoader />
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
