"use client";

import { useRef, type ButtonHTMLAttributes } from "react";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  href: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const base =
    "inline-block text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-500 cursor-pointer";

  const variants = {
    primary:
      "bg-charcoal text-ivory px-10 py-4 hover:bg-charcoal/90",
    secondary:
      "border border-stone/60 text-charcoal px-10 py-4 hover:bg-charcoal hover:text-ivory",
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
