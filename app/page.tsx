import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FormatShowcase from "@/components/FormatShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollAnimationInit />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FormatShowcase />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
