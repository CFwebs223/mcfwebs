"use client";

import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";

const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function FlowerScrollSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal">
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-charcoal" />}>
        <SplineScene
          scene="https://app.spline.design/community/file/966e404c-85ee-4343-bc01-28cc94364539"
          className="w-full h-full"
        />
      </ErrorBoundary>
    </section>
  );
}
