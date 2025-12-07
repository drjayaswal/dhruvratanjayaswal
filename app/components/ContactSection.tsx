"use client";

import { useState } from "react";

export default function ContactSection() {
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
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #001f3f 0px, #001f3f 2px, transparent 2px, transparent 10px)`,
      }} />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none transition-all text-gray-900"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none transition-all text-gray-900"
            />
          </div>
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:border-transparent outline-none transition-all resize-none text-gray-900"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-cyan-700 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <p className="text-green-600 font-medium">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
