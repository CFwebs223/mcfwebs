"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/data";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-32 md:py-40 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sage mb-5">
            DIGITAL CAPABILITIES
          </p>
          <AnimatedHeadline
            text="Built with restraint. Designed to convert."
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-charcoal"
            wordDelay={0.04}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-sage max-w-2xl"
          >
            From simple digital menus to scroll-led websites, mcf.webs creates
            sharp digital products for businesses that need to look credible,
            move faster and turn attention into action.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/30">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-ivory p-8 md:p-10 border border-stone/20 hover:border-champagne/40 transition-colors duration-500"
            >
              <AnimatedCounter
                end={parseInt(cap.number)}
                suffix="."
                className="font-serif text-4xl text-stone/40 group-hover:text-champagne/60 transition-colors duration-500 block mb-6 tabular-nums"
                duration={1.5}
              />
              <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal mb-3 group-hover:text-champagne transition-colors duration-500">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-sage">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
