import React from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import PainSection from "./components/sections/PainSection";
import SolutionSection from "./components/sections/SolutionSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import CapabilitySection from "./components/sections/CapabilitySection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WhyNowSection from "./components/sections/WhyNowSection";
import PricingSection from "./components/sections/PricingSection";
import CTASection from "./components/sections/CTASection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-16">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <HowItWorksSection />
        <CapabilitySection />
        <TestimonialsSection />
        <WhyNowSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  );
}
