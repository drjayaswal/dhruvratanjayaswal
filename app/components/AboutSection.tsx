"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/dp2.jpg"
          alt="Background"
          fill
          className="object-cover object-center lg:object-right"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent lg:from-black/95 lg:via-black/60 lg:to-transparent" />
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none z-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 10px)`,
      }} />
      <div className="w-full relative z-20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2 lg:pr-8">
              <div className="mb-8 sm:mb-10">
              </div>
              <div className="bg-linear-to-r from-transparent to-white/10 backdrop-blur-lg rounded-4xl p-8 sm:p-10 shadow-2xl border-0 transition-all duration-500">
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-red-600/40">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full ring-4 ring-red-600/20"></div>
                    <p className="text-base sm:text-lg text-gray-400 font-thin leading-relaxed">
                      My career didn't start in a classroom, it began with a simple, frustrating question: 
                      <span className="font-bold text-white italic"> "How does website work?"</span> 
                      <br /><br />
                      That obsessive curiosity to deconstruct, understand, and rebuild became my foundation. I quickly learned that programming isn't just about syntax; it's about 
                      <span className="font-bold text-white"> problem resolution</span> using logic to solve human problems and create tangible value.
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-red-600/40">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full ring-4 ring-red-600/20"></div>
                    <p className="text-base sm:text-lg text-gray-400 font-thin leading-relaxed">
                      Self-taught and relentless, I dove deep into web development. The challenge evolved from "Can I make this work?" to 
                      <span className="font-bold text-white italic"> "What it takes to make this work?"</span>
                      <br /><br />
                      I focus on the engineering principles that guarantee reliability: 
                      <span className="font-bold text-white"> rigorous error handling, scalable architecture, efficient caching, and robust security.</span> 
                      I view systems holistically, building foundations that prevent problems before they arise.
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-red-600/40">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full ring-4 ring-red-600/20"></div>
                    <p className="text-base sm:text-lg text-gray-400 font-thin leading-relaxed">
                      All the complexity of stability engineering exists for one purpose: to reliably deliver 
                      <span className="font-bold text-white"> problem resolution</span> for the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
