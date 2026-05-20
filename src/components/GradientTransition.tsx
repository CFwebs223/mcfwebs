"use client";

interface GradientTransitionProps {
  className?: string;
}

export default function GradientTransition({
  className = "",
}: GradientTransitionProps) {
  return (
    <div
      className={`relative h-32 md:h-48 -mt-16 md:-mt-24 z-10 pointer-events-none ${className}`}
    >
      {/* White/ivory gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-warm-white/90 to-ivory" />
      {/* Soft blur ring for mist effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(248,244,236,0.8)_0%,_transparent_70%)]" />
      {/* Subtle grain overlay via CSS */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
