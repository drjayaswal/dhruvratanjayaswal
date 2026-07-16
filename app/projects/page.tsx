"use client";

import { motion } from "framer-motion";

interface BrowserChromeProps {
  url: string;
}

function BrowserChrome({ url }: BrowserChromeProps) {
  return (
    <div 
      onClick={() => window.open(url, "_blank")}
      className="cursor-pointer w-full h-[440px] lg:w-[380px] lg:h-[560px] lg:mx-auto rounded-2xl border border-white/10 bg-[#0d1527] shadow-2xl shadow-black/50 overflow-hidden flex flex-col transition-all duration-300"
    >
      <div className="flex lg:hidden items-center justify-between bg-[#152035] px-4 py-2 border-b border-white/5 select-none shrink-0">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 bg-[#090d16] border border-white/5 rounded-md px-2.5 py-0.5 text-[9px] text-white/50 w-full max-w-[200px] justify-between">
          <div className="flex items-center gap-1 truncate">
            <svg className="w-2.5 h-2.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        </div>
        <div className="w-10" />
      </div>

      <div className="hidden lg:flex flex-col bg-[#152035] px-3.5 py-2 border-b border-white/5 select-none shrink-0 gap-1.5">
        <div className="flex justify-between items-center text-[9px] text-white/80 font-semibold px-0.5">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3c-1.2 0-2.4.2-3.6.7L18.1 14c.4-1.2.7-2.4.7-3.6 0-4.1-3-7.4-6.8-7.4z" opacity="0.3" />
              <path d="M2 22h20V2L2 22z" />
            </svg>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17 5H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm9 9h2v-4h-2v4z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 bg-[#090d16] border border-white/5 rounded-md px-2 py-1 text-[9px] text-white/50 w-full text-center">
          <svg className="w-2 h-2 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="truncate max-w-[160px]">{url}</span>
        </div>
      </div>

      <div className="flex-1 bg-[#090d16] text-white overflow-hidden text-xs relative flex flex-col font-sans">
        <iframe
          src={url}
          className="w-full h-full border-0 bg-[#090d16]"
          title={url}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "HaveXpert",
      tagline: "Expert Directory & Marketplace Platform",
      desc: "A high-performance marketplace matching verified professionals with clients seeking niche consulting services. Engineered with flexible scheduling pipelines, secure booking confirmations, and multi-variable profile indexing.",
      tag: "Cloud, Backend, Frontend, AWS, APIs, DBs",
      features: [
        "Interactive categorization & quick expert availability search.",
        "Real-time scheduling booking engine with immediate feedback.",
        "Secure verification flow for certified professionals."
      ],
      url: "https://havexpert.vercel.app",
      github: "https://github.com/drjayaswal/havexpert",
      date: "Mar - Jul 2026"
    },
    {
      title: "Mainline",
      tagline: "AI-Powered Inbox & Email Assistant",
      desc: "An intelligent email co-pilot that synthesizes raw email threads, flags high-urgency operational requests, and drafts contextual, structured auto-replies using LLM completions and local knowledge files.",
      tag: "AI, RAG, Frontend, Backend, LLM, APIs",
      features: [
        "Automated semantic analysis of incoming messages with key takeaways.",
        "One-click response generation incorporating client history contexts.",
        "Fully responsive 3-pane client mock demonstrating real-time drafts."
      ],
      url: "https://mainline-opensource.vercel.app",
      github: "https://github.com/drjayaswal/mainline",
      date: "May - Jul 2026"
    },
    {
      title: "Xegality",
      tagline: "Attorney & Client Management Portal",
      desc: "A secure dashboard built for boutique legal firms to structure lawsuit lifecycles, monitor client trust billing percentages, deliver case update timelines, and handle recurring client accounting transactions.",
      tag: "Architecture, Frontend & UI, Payment gateways",
      features: [
        "Fidelity milestone tracker tracing litigant dispute stages.",
        "Integrated client trust retainer visual progress ring.",
        "Automated billing generator linking to Stripe payment endpoints."
      ],
      url: "https://xegality.com",
      github: "https://github.com/coadaltech/xegality-backend",
      date: "Apr - Jul 2025"
    }
  ];

  return (
    <div className="relative select-none flex-1 flex flex-col bg-[#0B2D72] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-[#0B2D72] to-[#041944] w-full">
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      <main className="flex-1 flex flex-col items-start px-6 sm:px-8 lg:px-16 py-12 w-full max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mb-16 md:mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            A chronological timeline of production systems, engineering architecture, and interactive web products built for scale.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-24 md:gap-36 w-full pb-20">
          <div className="absolute top-8 bottom-8 left-4 lg:left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-white/15 pointer-events-none z-0" />

          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 w-full pl-8 lg:pl-0 z-10"
              >
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-4 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#0B2D72] border-2 border-blue-400/50 flex items-center justify-center z-20 shadow-lg">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-blue-400 animate-pulse" />
                </div>

                <div className={`flex flex-col text-left order-1 ${
                  isEven ? "lg:order-first lg:pr-12" : "lg:order-last lg:pl-12"
                }`}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex mb-2 items-center gap-3">
                    {project.title}
                  </h2>
                    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase mb-3 tracking-widest">
                      {project.tagline}
                    </span>
                  
                  <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium mb-6">
                    {project.desc}
                  </p>

                  <div className="mb-8">
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Key Implementations</div>
                    <ul className="space-y-2.5">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/70 font-semibold leading-relaxed">
                          <span className="text-emerald-400 shrink-0 select-none mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Github
                    </a>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-sm select-none">
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.date}
                    </div>
                  </div>
                </div>

                <div className={`relative w-full flex-1 max-w-lg lg:max-w-none order-2 ${
                  isEven ? "lg:order-last lg:pl-12" : "lg:order-first lg:pr-12"
                }`}>
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-indigo-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <BrowserChrome url={project.url} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
