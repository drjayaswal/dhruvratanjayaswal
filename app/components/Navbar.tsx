"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 py-1 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/15 backdrop-blur-lg shadow-lg"
          : "bg-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
            <Image
              src="/new-logo.png"
              alt="Portfolio Logo"
              width={520}
              height={100}
              className="h-40 sm:h-50 w-auto -ml-15"
            />
          <div className="flex items-center">
            <a
              href="/DhruvRatanJayaswal_CV.png"
              download
                className={`px-6 py-3 text-2xl text-black transition-all duration-300 relative group font-bold ${
                  mounted ? "animate-fade-in-down" : "opacity-0"
                }`}
            >
              <span className="hidden sm:inline">Curriculum Vitae</span>
              <span className="sm:hidden">CV</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-3/4 transition-all duration-300 ease-out"></span>
              </a>
          </div>
        </div>
        </div>
    </nav>
  );
}