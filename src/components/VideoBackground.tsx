"use client";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: React.ReactNode;
  className?: string;
  coverWatermark?: boolean;
}

export default function VideoBackground({
  src,
  poster,
  overlay,
  className = "",
  coverWatermark = false,
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Background color immediately so it's never white */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Video — no opacity transition, shows instantly */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 30%" }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Veo 3 watermark cover — bottom right */}
      {coverWatermark && (
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-gradient-to-tl from-charcoal/60 via-charcoal/30 to-transparent" />
      )}

      {overlay}
    </div>
  );
}
