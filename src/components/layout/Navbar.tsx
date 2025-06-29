"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    // Start invisible; fade in after 1.1s
    gsap.to(navbarRef.current, {
      opacity: 1,
      duration: 0.8,
      delay: 1.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 z-50 w-full py-4 bg-transparent opacity-0
      transition-opacity duration-500 ease-out backdrop-blur-lg  shadow-lg px-4 sm:px-8 md:px-8 lg:px-26 xl:px-28 2xl:px-32"
    >
      <div className="flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-5 h-5" />
          <span className="text-lg font-bold text-dull-white">Nexora</span>
        </Link>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-muted px-4 py-2 text-sm rounded-md hover:bg-surface hover:text-text transition cursor-pointer">
            Log In
          </button>
          <button className="bg-white text-black px-4 py-2 text-sm rounded-md font-medium hover:bg-muted transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
