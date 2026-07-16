"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };
  return (
    <div className="relative select-none flex-1 flex flex-col justify-center bg-[#0B2D72]">
      <main className="flex flex-1 flex-col lg:flex-row items-center justify-center w-full px-8 lg:px-16 py-6 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center lg:w-1/2 w-full"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-6">
            Let's build<br />something<br />together.
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-sm">
            I'm open to job, freelancing, consulting, and long-term partnerships. <br /> Tell me what you're working on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center lg:w-1/2 w-full"
        >
          <div className="w-full max-w-md mx-auto lg:mx-0 space-y-4">
            <div className="relative group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full border border-white/10 text-white placeholder:text-white/25 px-5 py-2.5 sm:py-3.5 rounded-xl outline-none focus:border-white/30 focus:bg-white/8 transition-all text-base"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full border border-white/10 text-white placeholder:text-white/25 px-5 py-2.5 sm:py-3.5 rounded-xl outline-none focus:border-white/30 focus:bg-white/8 transition-all text-base"
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="w-full border border-white/10 text-white placeholder:text-white/25 px-5 py-2.5 sm:py-3.5 rounded-xl outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none text-base"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-white text-[#0B2D72] font-semibold py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white/70 text-base pt-1"
              >
                Message sent — I'll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400/80 text-base pt-1"
              >
                Something went wrong. Try emailing me directly.
              </motion.p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}