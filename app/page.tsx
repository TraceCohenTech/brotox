import Hero from "./components/Hero";
import WhyBotox from "./components/WhyBotox";
import DoctorSection from "./components/DoctorSection";
import ProductGrid from "./components/ProductGrid";
import MenLikeYou from "./components/MenLikeYou";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import SMSSignup from "./components/SMSSignup";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <WhyBotox />
      <DoctorSection />
      <ProductGrid />
      <MenLikeYou />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <SMSSignup />
    </main>
  );
}
