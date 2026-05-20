"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import ProjectPageNav from "@/components/ProjectPageNav";
import ProjectPageHero from "@/components/ProjectPageHero";
import ProjectFeatures from "@/components/ProjectFeatures";
import ProjectTestimonials from "@/components/ProjectTestimonials";
import ProjectContact from "@/components/ProjectContact";
import { PROJECTS } from "@/lib/projects-data";

function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}

export default function VelaLawPage() {
  const p = PROJECTS.find((proj) => proj.slug === "vela-law")!;
  const c = p.colors;

  return (
    <LenisWrapper>
      <div className={`${c.bg} min-h-screen`}>
        <ProjectPageNav projectName={p.title} scrolledBg="bg-[#12141A]/90 backdrop-blur-md" />
        <ProjectPageHero
          videoSrc={p.heroVideo}
          title={p.title}
          tagline={p.tagline}
          subtitle={p.subtitle}
          ctaText={p.ctaText}
          ctaHref="#contact"
        />

        {/* Story section */}
        <section className="relative py-28 md:py-36">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="max-w-3xl">
              <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${c.accent} mb-5`}>
                THE STORY
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
                {p.storyTitle}
              </h2>
              <div className="mt-8 space-y-5">
                {p.storyParagraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className={`text-base md:text-lg leading-relaxed ${c.accentLight} font-sans max-w-2xl`}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectFeatures title={p.featuresTitle} subtitle={p.featuresSubtitle} features={p.features} colors={c} />
        <ProjectTestimonials testimonials={p.testimonials} colors={c} />
        <ProjectContact colors={c} ctaText={p.ctaText} />

        {/* Footer */}
        <footer className={`border-t ${c.border} py-10`}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">mcf.webs / {p.title}</p>
            <a href="/" className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-300">
              &larr; Back to mcf.webs
            </a>
          </div>
        </footer>
      </div>
    </LenisWrapper>
  );
}
