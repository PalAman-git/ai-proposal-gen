'use client';

import Button from '@/components/ui/Button'; // assuming you've created a shared button component

export default function HeroOverlay() {
  return (
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#e5e5e5] leading-tight mb-4">
        Create Proposals in Seconds
      </h1>
      <p className="text-muted text-lg sm:text-xl max-w-xl mx-auto mb-6">
        Nexora lets you craft stunning, AI-powered proposals — fast, consistent, and beautifully branded.
      </p>
      <Button variant="accent" size="lg">
        Get Started
      </Button>
    </div>
  );
}
