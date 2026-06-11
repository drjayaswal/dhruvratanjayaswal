"use client";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative select-none">
      <div className="absolute top-0 right-0 sm:w-32 sm:h-32 w-14 h-14 overflow-hidden bg-black sm:rounded-bl-3xl rounded-bl-xl shadow-xl shadow-black/30">
        <div className="absolute top-0 right-0 w-full h-full sm:rounded-tr-3xl rounded-tr-xl bg-white rotate-180 [clip-path:polygon(100%_0,0_0,100%_100%)]">
        </div>
      </div>
      <section className="flex bg-[#0B2D72] flex-col justify-center px-8 lg:px-16 sm:py-20 py-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] tracking-tight mb-8 sm:mb-20"
        >
          Dhruv Ratan Jayaswal
          <br />
          I am a Builder
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg space-y-6.5 text-white/60"
        >
          <p className="text-base leading-relaxed">
            I'm a full-stack engineer and systems architect building scalable digital ecosystems. From architecting robust cloud infrastructure to weaving Generative AI into high-growth applications, I solve complex problems from the ground up.
          </p>
          <p className="text-base leading-relaxed">
            I partner with early-stage startups to deliver high-impact digital products.
          </p>
          <p className="text-base leading-relaxed">
            I manage projects from initial concept ,system architecture through to deployment and scale, ensuring every line of code serves the business goal.
          </p>
          <p className="text-base leading-relaxed">
            Got a project in mind?
            <br />
            <a href="mailto:mrdhruv.professional@gmail.com" className="external-link">
              ping me at <span className="text-white">mrdhruv.professional@gmail.com</span>
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
