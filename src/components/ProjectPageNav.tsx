"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ProjectPageNavProps {
  projectName: string;
  bgColor?: string;
  scrolledBg?: string;
}

export default function ProjectPageNav({
  projectName,
  bgColor = "bg-transparent",
  scrolledBg = "bg-[#0F0F0D]/90",
}: ProjectPageNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? `${scrolledBg} backdrop-blur-md border-b border-white/5` : bgColor
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 1L4 7L10 13" />
          </svg>
          Back to mcf.webs
        </Link>
        <span className="text-xs font-medium text-white/40 font-serif italic">
          {projectName}
        </span>
      </div>
    </header>
  );
}
