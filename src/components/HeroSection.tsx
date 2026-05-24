"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-end justify-center overflow-hidden bg-charcoal"
    >
      {/* Spline 3D background — iframe */}
      <iframe
        src="https://my.spline.design/distortingtypography-uxFNYzMMLPZAKHaeN2BQY6hm/"
        className="absolute inset-0 w-full h-full border-0"
        title="3D typography background"
        aria-hidden="true"
      />

      {/* Content — bottom-left */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl"
        >
          {/* Eyebrow — white */}
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white mb-5 text-shadow-heavy">
            MCF.WEBS / DIGITAL PRESENCE
          </p>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px w-16 bg-champagne/50 origin-left mb-6"
          />

          {/* Subheading — pure white */}
          <p className="text-base md:text-lg leading-relaxed text-white font-sans text-shadow-heavy">
            Premium websites, menus, booking systems and digital products for
            businesses ready to look sharper online.
          </p>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-2 mt-5"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-champagne/30" />
            ))}
          </motion.div>
        </motion.div>

        {/* Buttons — bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex flex-wrap gap-5"
        >
          <MagneticButton href="#contact" variant="primary">
            Start a project
          </MagneticButton>
          <MagneticButton href="#capabilities" variant="secondary">
            View capabilities
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
