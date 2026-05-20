"use client";

import { motion } from "framer-motion";
import type { ProjectFeature } from "@/lib/projects-data";

interface ProjectFeaturesProps {
  title: string;
  subtitle: string;
  features: ProjectFeature[];
  colors: {
    accent: string;
    accentLight: string;
    text: string;
    cardBg: string;
    border: string;
  };
}

export default function ProjectFeatures({
  title,
  subtitle,
  features,
  colors,
}: ProjectFeaturesProps) {
  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${colors.accent} mb-5`}>
            DELIVERABLES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
            {title}
          </h2>
          <p className={`mt-5 text-base md:text-lg leading-relaxed ${colors.accentLight} max-w-2xl font-sans`}>
            {subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-8 ${colors.cardBg} ${colors.border} border backdrop-blur-sm group`}
            >
              <span className="font-serif text-6xl text-white/[0.04] absolute top-3 right-5 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-white relative z-10 mb-3">
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${colors.accentLight} relative z-10`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
