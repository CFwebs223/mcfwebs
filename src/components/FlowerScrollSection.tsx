"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import VideoBackground from "@/components/VideoBackground";
import MagneticButton from "@/components/MagneticButton";

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  left: parseFloat((10 + seededRandom(i * 3) * 80).toFixed(4)),
  top: parseFloat((10 + seededRandom(i * 3 + 1) * 80).toFixed(4)),
  yRange: -(30 + seededRandom(i * 3 + 2) * 40),
  duration: 4 + seededRandom(i * 3 + 3) * 4,
  delay: seededRandom(i * 3 + 4) * 4,
}));

export default function FlowerScrollSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const done = total - rect.bottom;
      const pct = Math.min(1, Math.max(0, done / total));
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Video background — serene ocean wave */}
      <VideoBackground
        src="/videos/second-page.mp4"
        videoClassName="[filter:brightness(1.15)_saturate(1.25)]"
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c170f]/85 via-[#16110d]/50 to-[#0d0b09]/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/25 via-transparent to-[#0d0b09]/65" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-charcoal to-transparent" />
            <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-[#0d0b09]/30" />
          </>
        }
      />

      {/* Floating particles overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-champagne/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, p.yRange, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            transform: `translateY(${(1 - progress) * 30}px)`,
          }}
          className="max-w-2xl lg:ml-12"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-champagne/80 mb-6 text-shadow-heavy"
          >
            MCF.WEBS / OUR PHILOSOPHY
          </motion.p>

          <AnimatedHeadline
            text="In a crowded market, presence is the difference."
            as="h2"
            className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight text-ivory text-balance text-shadow-heavy"
            wordDelay={0.05}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-ivory/80 font-sans max-w-lg text-shadow-heavy"
          >
            mcf.webs builds digital experiences that make your business feel
            sharper, clearer and harder to ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10"
          >
            <MagneticButton href="#capabilities" variant="secondary">
              See what we build
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-16 z-20 flex items-center gap-3"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ivory/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-ivory/30"
        />
      </motion.div>
    </section>
  );
}
