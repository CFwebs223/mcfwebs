"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetail {
  title: string;
  tag: string;
  description: string;
  color: string;
  label: string;
  client: string;
  deliverables: string[];
  testimonial: string;
  testimonialAuthor: string;
}

interface ProjectDetailModalProps {
  project: { title: string } | null;
  onClose: () => void;
}

const PROJECT_DETAILS: ProjectDetail[] = [
  {
    title: "The Press Club",
    tag: "Scroll Experience",
    description:
      "A cinematic brand site for an upscale private membership club, featuring full-screen video, scroll-driven narrative and a refined booking flow.",
    color: "bg-charcoal",
    label: "Luxury Hospitality",
    client: "Private members club, Johannesburg",
    deliverables: [
      "Scroll-driven visual narrative",
      "Full-screen video integration",
      "Membership enquiry flow",
      "Event calendar module",
      "Private member portal",
    ],
    testimonial:
      "The site captures exactly what we stand for — understated luxury. Every scroll feels intentional.",
    testimonialAuthor: "Founder, The Press Club",
  },
  {
    title: "Bottega Table",
    tag: "Digital Menu",
    description:
      "An elegant touchless menu experience for a fine-dining Italian restaurant. Clean typography, dish photography and instant table-side access.",
    color: "bg-forest",
    label: "Restaurant",
    client: "Fine-dining restaurant, Cape Town",
    deliverables: [
      "Touchless digital menu",
      "Dish photography layout",
      "Wine pairing guide",
      "Reservation link integration",
      "Multi-language support",
    ],
    testimonial:
      "Guests love scanning straight to the menu. It looks beautiful and works instantly.",
    testimonialAuthor: "Head Chef, Bottega Table",
  },
  {
    title: "Solis Advisory",
    tag: "Business Website",
    description:
      "A credible, conversion-focused site for a financial advisory firm. Clear service tiers, trust signals and a streamlined enquiry flow.",
    color: "bg-charcoal",
    label: "Professional Services",
    client: "Financial advisory firm, Durban",
    deliverables: [
      "Multi-section business website",
      "Service tier showcase",
      "Trust signal integration",
      "Enquiry capture flow",
      "SEO-ready structure",
    ],
    testimonial:
      "Our conversion rate tripled. The site looks more premium than anything our competitors have.",
    testimonialAuthor: "Director, Solis Advisory",
  },
  {
    title: "Atelier East",
    tag: "Landing Page",
    description:
      "A focused launch page for a luxury interior design studio. One offer, one audience, one clear path to consultation.",
    color: "bg-forest",
    label: "Design Studio",
    client: "Interior design studio, Pretoria",
    deliverables: [
      "Single-offer landing page",
      "Portfolio gallery",
      "Consultation booking flow",
      "Brand positioning copy",
      "Social proof section",
    ],
    testimonial:
      "It feels exactly like walking into one of our spaces — refined, calm and intentional.",
    testimonialAuthor: "Creative Director, Atelier East",
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const detail = project
    ? PROJECT_DETAILS.find((p) => p.title === project.title) ?? null
    : null;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!detail) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [detail]);

  // Close on Escape
  useEffect(() => {
    if (!detail) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [detail, onClose]);

  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          key={detail.title}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-ivory"
          >
            {/* Hero area */}
            <div
              className={`relative ${detail.color} aspect-[3/1] md:aspect-[4/1] flex items-center justify-center`}
            >
              <span className="font-serif text-ivory/8 text-9xl tracking-tight select-none">
                {detail.title.charAt(0)}
              </span>
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-ivory/10 hover:bg-ivory/20 transition-colors duration-300 text-ivory"
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 3L15 15M15 3L3 15" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="flex items-start justify-between gap-6 mb-10">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-champagne mb-3">
                    {detail.tag}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal leading-[1.1]">
                    {detail.title}
                  </h2>
                  <p className="text-sm text-sage mt-2">{detail.client}</p>
                </div>
                <span className="shrink-0 text-[10px] font-semibold tracking-[0.15em] uppercase text-sage border border-stone/30 px-4 py-2">
                  {detail.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-charcoal/80 font-sans max-w-2xl mb-12">
                {detail.description}
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-champagne/50 mb-12" />

              {/* Two column: Deliverables + Testimonial */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {/* Deliverables */}
                <div>
                  <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage mb-6">
                    What was delivered
                  </h3>
                  <ul className="space-y-3">
                    {detail.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-charcoal/70"
                      >
                        <span className="text-champagne mt-0.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-warm-white p-8 md:p-10 self-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-champagne/40 mb-4"
                  >
                    <path
                      d="M10 11H6V7H10V11ZM18 11H14V7H18V11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 11H6V7H10V11ZM18 11H14V7H18V11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 7C10 4.79086 8.20914 3 6 3H4M18 7C18 4.79086 16.2091 3 14 3H12"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <path
                      d="M4 14V21H20V14"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                  <p className="font-serif text-lg md:text-xl leading-relaxed text-charcoal/80 italic">
                    &ldquo;{detail.testimonial}&rdquo;
                  </p>
                  <p className="text-xs text-sage mt-4">
                    {detail.testimonialAuthor}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 pt-8 border-t border-stone/20 text-center">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-champagne hover:text-charcoal transition-colors duration-300"
                >
                  Start a similar project &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
