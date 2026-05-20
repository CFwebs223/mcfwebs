"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  end: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { end: 20, suffix: "+", label: "projects launched" },
  { end: 4, suffix: "", label: "industries served" },
  { end: 100, suffix: "%", label: "on-time delivery" },
  { end: 14, suffix: "d", label: "avg turnaround" },
];

function Counter({ end, suffix, duration = 1.4 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          function animate(now: number) {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative bg-champagne/10 border-y border-champagne/20 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-champagne/20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:px-10"
            >
              <div className="font-serif text-4xl md:text-5xl font-semibold text-charcoal tabular-nums">
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-semibold tracking-[0.15em] uppercase text-sage">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
