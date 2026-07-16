"use client";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative select-none flex-1 flex flex-col justify-center bg-[#0B2D72] overflow-hidden">
      <section className="flex flex-col justify-center px-8 lg:px-16 w-full py-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6 sm:mb-12"
        >
          Dhruv Ratan Jayaswal
          <br />
          I am a Builder
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg space-y-4 text-white/70"
        >
          <p className="text-base leading-relaxed">
            I'm a full-stack engineer and systems architect building scalable digital ecosystems. From architecting robust cloud infrastructure to weaving Generative AI into high-growth applications, I solve complex problems from the ground up.
          </p>
          <p className="text-base leading-relaxed">
            I partner with early-stage startups to deliver high-impact digital products.
          </p>
          <p className="text-base leading-relaxed">
            I manage projects from initial concept, system architecture through to deployment and scale, ensuring every line of code serves the business goal.
          </p>
          <p className="text-base leading-relaxed">
            Got a project in mind?
            <br />
            <a href="mailto:mrdhruv.professional@gmail.com" className="text-white hover:underline transition-all">
              ping me at <span className="text-white font-semibold">mrdhruv.professional@gmail.com</span>
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
