'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap,ScrollTrigger } from '@/lib/gsap' 
const features = [
  {
    title: 'Instant Proposals',
    description: 'Generate beautiful, client-ready proposals with one click using AI.',
  },
  {
    title: 'Custom Branding',
    description: 'Easily customize fonts, colors, and layout to reflect your brand identity.',
  },
  {
    title: 'Real-time Collaboration',
    description: 'Share and collaborate with your team live on proposals and edits.',
  },
  {
    title: 'Analytics & Insights',
    description: 'Track proposal opens, engagement, and conversions in real-time.',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#1a1a1a] text-[#e5e5e5]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Powerful Features</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
          Nexora empowers your business with tools that are fast, beautiful, and built for results.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card relative rounded-2xl p-6 backdrop-blur-md border border-[#2a2a2a] bg-[#1f1f1f]/70 text-left shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 bg-gradient-to-br from-[#8e8dfa] to-[#a5a4fc] opacity-20 blur-2xl rounded-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-muted text-base relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
