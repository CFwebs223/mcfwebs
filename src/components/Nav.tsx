"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-stone/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 lg:px-20 py-5 max-w-[1440px]">
        {/* Logo */}
        <a href="#" className="font-serif text-xl lg:text-2xl tracking-tight text-charcoal">
          mcf.webs
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-semibold tracking-[0.15em] uppercase px-7 py-3 border border-stone/60 text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            Start a project
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory border-b border-stone/30 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-8 pt-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-semibold tracking-[0.15em] uppercase px-7 py-3 border border-stone/60 text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 inline-block self-start"
              >
                Start a project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
