'use client';
import HeroOverlay from './HeroOverlay';
import HeroCanvas from './HeroCanvas';
export default function Hero() {
  return (
    <section id="hero" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* <HeroFogBackground /> */}
      <HeroCanvas />
      <HeroOverlay />
    </section>
  );
}
