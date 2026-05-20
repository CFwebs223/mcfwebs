"use client";

import { motion } from "framer-motion";
import type { ProjectTestimonial } from "@/lib/projects-data";

interface ProjectTestimonialsProps {
  testimonials: ProjectTestimonial[];
  colors: {
    accent: string;
    accentLight: string;
    text: string;
    cardBg: string;
    border: string;
  };
}

export default function ProjectTestimonials({
  testimonials,
  colors,
}: ProjectTestimonialsProps) {
  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${colors.accent} mb-5`}>
            CLIENT FEEDBACK
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
            What our clients say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`p-8 md:p-10 ${colors.cardBg} ${colors.border} border backdrop-blur-sm`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className={`text-sm ${colors.accent}`}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl leading-relaxed text-white/85 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className={`text-xs mt-0.5 ${colors.accentLight}`}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
