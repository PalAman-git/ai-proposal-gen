"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import GlassCard from "./Cards/GlassCard";
import "./Cards/GlassCard.css"; // Ensure this path is correct

const features = [
  {
    title: "Instant Proposals",
    description:
      "Generate beautiful, client-ready proposals with one click using AI.",
  },
  {
    title: "Custom Branding",
    description:
      "Easily customize fonts, colors, and layout to reflect your brand identity.",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Share and collaborate with your team live on proposals and edits.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Track proposal opens, engagement, and conversions in real-time.",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-24 text-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Powerful Features
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
          Nexora empowers your business with tools that are fast, beautiful, and
          built for results.
        </p>

        <div className="features min-h-screen">
          <div className="glass-card-wrapper">
            <GlassCard z={0} />
            <GlassCard z={120} />
            <GlassCard z={240} />
          </div>
        </div>
      </div>
    </section>
  );
}
