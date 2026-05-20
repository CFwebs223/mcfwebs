"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import FlowerScrollSection from "@/components/FlowerScrollSection";
import GradientTransition from "@/components/GradientTransition";
import StatsStrip from "@/components/StatsStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default function Home() {
  return (
    <LenisWrapper>
      <Nav />
      <main>
        <HeroSection />
        <FlowerScrollSection />
        <GradientTransition className="-mt-16" />
        <StatsStrip />
        <CapabilitiesSection />
        <ProcessSection />
        <ProjectShowcase />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </LenisWrapper>
  );
}
