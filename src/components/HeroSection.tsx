"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import ErrorBoundary from "@/components/ErrorBoundary";

const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-start justify-center overflow-hidden bg-charcoal"
    >
      {/* Spline 3D canvas — inline canvas, no iframe overhead */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary fallback={<div className="absolute inset-0 bg-charcoal" />}>
          <SplineScene
            scene="https://my.spline.design/distortingtypography-uxFNYzMMLPZAKHaeN2BQY6hm/"
            className="w-full h-full"
          />
        </ErrorBoundary>
      </div>

      {/* Content — pointer-events:none so mouse reaches Spline canvas */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 pt-32 lg:pt-48"
        style={{ pointerEvents: "none" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-ivory mb-6 text-shadow-heavy"
        >
          MCF.WEBS / DIGITAL PRESENCE
        </motion.p>

        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px w-16 bg-champagne/50 origin-left mb-8"
        />

        {/* Supporting line — pure white for readability on dark bg */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl text-base md:text-lg leading-relaxed text-white font-sans text-shadow-heavy"
        >
          Premium websites, menus, booking systems and digital products for
          businesses ready to look sharper online.
        </motion.p>

        {/* Decorative dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-2 mt-6"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-champagne/30"
            />
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex flex-wrap gap-5"
          style={{ pointerEvents: "auto" }}
        >
          <MagneticButton href="#contact" variant="primary">
            Start a project
          </MagneticButton>
          <MagneticButton href="#capabilities" variant="secondary">
            View capabilities
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-ivory/40"
        />
      </motion.div>
    </section>
  );
}
