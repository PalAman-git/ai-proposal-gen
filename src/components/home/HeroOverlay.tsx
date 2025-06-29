"use client";

import Button from "@/components/ui/Button"; // assuming you've created a shared button component
import { useRef, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";
import SplitType from "split-type";

export default function HeroOverlay() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      new SplitType(".hero-heading", {
        types: "words,chars",
      });
      new SplitType(".hero-subheading", {
        types: "words,chars",
      });

      // Remove invisibility after splitting
      document.querySelector(".hero-heading")?.classList.remove("invisible");
      document.querySelector(".hero-subheading")?.classList.remove("invisible");
      document.querySelector(".hero-cta")?.classList.remove("invisible");

      // Set initial styles on each word
      gsap.set([".hero-heading .word", ".hero-subheading .word"], {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
      });

      // Animate heading
      gsap.to(".hero-heading .word", {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.2,
      });

      // Animate subheading
      gsap.to(".hero-subheading .word", {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.05,
        delay: 0.4,
      });

      // Animate button
      gsap.fromTo(
        ".hero-cta",
        {
          opacity: 0,
          y: 20,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
          delay: 0.75,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-start justify-center gap-y-6 pt-20 px-4 sm:px-8 md:px-8 lg:px-26 xl:px-80 2xl:px-32 "
    >
      <h1 className="hero-heading invisible text-4xl text-text sm:text-6xl font-bold leading-tight mb-4">
        Nexora is your AI-powered partner for winning proposals
      </h1>
      <p className="hero-subheading invisible text-muted font-medium text-lg sm:text-xl max-w-xl mb-6">
        Nexora lets you craft stunning, AI-powered proposals — fast, consistent,
        and beautifully branded.
      </p>
      <Button className="hero-cta invisible" variant="default" size="lg">
        Get Started
      </Button>
    </div>
  );
}
