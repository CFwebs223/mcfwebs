"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedHeadline from "@/components/AnimatedHeadline";

const PROJECTS = [
  {
    slug: "press-club",
    title: "The Press Club",
    tag: "Scroll Experience",
    description:
      "A cinematic brand site for an upscale private membership club, featuring full-screen video, scroll-driven narrative and a refined booking flow.",
    image: "/images/projects/press-club-preview.jpg",
    label: "Luxury Hospitality",
  },
  {
    slug: "bottega-table",
    title: "Bottega Table",
    tag: "Digital Menu",
    description:
      "An elegant touchless menu experience for a fine-dining Italian restaurant. Clean typography, dish photography and instant table-side access.",
    image: "/images/projects/bottega-table-preview.jpg",
    label: "Restaurant",
  },
  {
    slug: "solis-advisory",
    title: "Solis Advisory",
    tag: "Business Website",
    description:
      "A credible, conversion-focused site for a financial advisory firm. Clear service tiers, trust signals and a streamlined enquiry flow.",
    image: "/images/projects/solis-advisory-preview.jpg",
    label: "Professional Services",
  },
  {
    slug: "atelier-east",
    title: "Atelier East",
    tag: "Landing Page",
    description:
      "A focused launch page for a luxury interior design studio. One offer, one audience, one clear path to consultation.",
    image: "/images/projects/atelier-east-preview.jpg",
    label: "Design Studio",
  },
  {
    slug: "vela-law",
    title: "Vela Chambers",
    tag: "Business Website",
    description:
      "A credible, authoritative digital presence for a boutique litigation firm. Dark, deliberate, and built to attract serious clients.",
    image: "/images/projects/vela-law-preview.jpg",
    label: "Legal Practice",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="relative py-32 md:py-40 bg-warm-white border-t border-stone/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sage mb-5">
            RECENT WORK
          </p>
          <AnimatedHeadline
            text="Projects we've shaped."
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
            Each project starts with understanding what makes a business
            distinct. The result is a digital presence that feels like it
            belongs to them.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Project preview image */}
                <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay that lifts on hover */}
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-all duration-500" />
                  {/* View project pill — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-ivory bg-charcoal/80 backdrop-blur-sm px-3 py-1.5">
                      View project &rarr;
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-sage mt-2 max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold tracking-[0.15em] uppercase text-champagne">
                    {project.tag}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
