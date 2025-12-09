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
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent" />
      </div>
      
      <div className="w-full relative z-20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
                About <span className="text-red-600">Me</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "The Beginning",
                    text: "My career started with a frustrating question: \"How does a website work?\" That obsessive curiosity became my foundation. I learned that programming is about problem resolution using logic to solve human problems and create tangible value."
                  },
                  {
                    title: "The Evolution",
                    text: "Self-taught and relentless, I dove into web development. The question evolved to \"What it takes to make this work?\" I focus on engineering principles: rigorous error handling, scalable architecture, efficient caching, and robust security."
                  },
                  {
                    title: "The Purpose",
                    text: "All the complexity of stability engineering exists for one reason: to reliably deliver problem resolution for users. That's where my passion lies."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block lg:relative">
              {/* Decorative element or additional content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
