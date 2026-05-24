"use client";

import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function FlowerScrollSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const app = new Application(canvas);
    app
      .load(
        "https://app.spline.design/api/scenes/966e404c-85ee-4343-bc01-28cc94364539/scene.splinecode"
      )
      .catch(() => {
        // scene failed to load — canvas stays transparent on charcoal bg
      });

    return () => {
      app.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </section>
  );
}
