"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import AnimatedHeadline from "@/components/AnimatedHeadline";

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
      {/* Spline 3D background — iframe embed */}
      <iframe
        src="https://my.spline.design/distortingtypography-uxFNYzMMLPZAKHaeN2BQY6hm/"
        className="absolute inset-0 w-full h-full border-0"
        title="3D typography background"
        aria-hidden="true"
      />

      {/* Content — pointer-events:none so mouse passes through to Spline; buttons override with auto */}
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

        {/* Headline with mouse tilt */}
        <div
          className="relative"
          style={{
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 6}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <AnimatedHeadline
            text="Websites with presence."
            as="h1"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight text-ivory max-w-4xl text-balance text-shadow-heavy"
            wordDelay={0.06}
          />
        </div>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ivory font-sans text-shadow-heavy"
        >
          Premium websites, menus, booking systems and digital products for
          businesses ready to look sharper online.
        </motion.p>

        {/* Buttons — pointer-events:auto so they stay clickable */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-wrap gap-5"
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
        transition={{ delay: 1.8, duration: 1 }}
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
