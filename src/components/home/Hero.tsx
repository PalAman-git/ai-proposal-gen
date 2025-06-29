"use client";
import HeroOverlay from "./HeroOverlay";
import HeroCanvas from "./HeroCanvas";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center -mx-4 sm:-mx-6 md:-mx-8"
    >
      <HeroCanvas />
      <div className="absolute inset-0 z-10 pointer-events-none bg-center-glow" />
      <HeroOverlay />

      {/* Top gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-34 bg-gradient-to-b from-[#08090b] to-transparent z-20" />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-34 bg-gradient-to-t from-[#08090b] to-transparent z-20" />

      {/* Left Edge Blur */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-[#08090b] to-transparent z-20" />

      {/* Right Edge Blur */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-[#08090b] to-transparent z-20" />
    </section>
  );
}
