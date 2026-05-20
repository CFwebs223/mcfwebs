"use client";

import { motion } from "framer-motion";
import AnimatedHeadline from "@/components/AnimatedHeadline";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your audience, and what success looks like. No templates — just questions that lead to clarity.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Layout, copy, and visual direction crafted together. You see the full picture before a single line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Developed with precision using modern tools. Fast, clean, and built to work on every screen from day one.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "A polished, live digital presence handed over to you — with everything you need to own it going forward.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 md:py-40 bg-charcoal overflow-hidden">
      {/* Subtle texture line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-champagne/60 mb-5">
            HOW IT WORKS
          </p>
          <AnimatedHeadline
            text="From brief to live in four steps."
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-ivory"
            wordDelay={0.04}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-ivory/50 max-w-2xl"
          >
            A clear, collaborative process that keeps you informed at every
            stage and delivers a result you can be proud of.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-charcoal p-8 md:p-10 hover:bg-[#1e1e1a] transition-colors duration-500"
            >
              <span className="font-serif text-5xl text-champagne/20 group-hover:text-champagne/40 transition-colors duration-500 block mb-8 tabular-nums">
                {step.number}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-ivory mb-4">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ivory/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connector line — desktop only */}
        <div className="hidden lg:flex items-center mt-12 px-10 gap-0">
          {STEPS.map((_, i) => (
            <div key={i} className="flex items-center flex-1">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px bg-champagne/20 flex-1"
              />
              {i < STEPS.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-champagne/30 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
