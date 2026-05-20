"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ProjectPageHeroProps {
  videoSrc: string;
  title: string;
  tagline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export default function ProjectPageHero({
  videoSrc,
  title,
  tagline,
  subtitle,
  ctaText,
  ctaHref,
}: ProjectPageHeroProps) {
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
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-6"
        >
          {subtitle}
        </motion.p>

        <div
          style={{
            transform: `translate(${mouse.x * 6}px, ${mouse.y * 4}px)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-white text-shadow-heavy">
            {title}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-base md:text-lg leading-relaxed text-white/80 font-sans max-w-xl mx-auto text-shadow-heavy"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <a
            href={ctaHref}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-[#0F0F0D] transition-all duration-500"
          >
            {ctaText}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/30"
        />
      </motion.div>
    </section>
  );
}
