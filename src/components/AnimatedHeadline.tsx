"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  wordDelay?: number;
}

export default function AnimatedHeadline({
  text,
  as: Tag = "h1",
  className = "",
  wordDelay = 0.04,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: i * wordDelay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
