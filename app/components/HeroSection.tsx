"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/new-pic.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-l from-black/30 via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-down">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-100 mb-3 sm:mb-4 font-light">
                Full Stack Developer and DevOps Novice
              </p>
              <span className="block text-white drop-shadow-lg font-extrabold tracking-wide">
                Dhruv Ratan Jayaswal
              </span>
            </h1>

            <div className="max-w-3xl mb-6 sm:mb-8">
              <p className="text-sm xs:text-base sm:text-lg text-gray-100 font-medium leading-relaxed">
                I love building things that live on the web. Whether it's a sleek website, a complex web app,
                or something in between, I enjoy the process of turning ideas into reality through code.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white text-2xl sm:text-4xl">
          ↓
        </a>
      </div>
    </section>
  );
}
