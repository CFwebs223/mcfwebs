"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

interface ProjectContactProps {
  colors: {
    accent: string;
    accentLight: string;
    border: string;
    cardBg: string;
  };
  ctaText: string;
}

export default function ProjectContact({ colors, ctaText }: ProjectContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) { setStatus("error"); return; }
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClasses = `w-full bg-white/5 ${colors.border} border px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-white/40`;

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${colors.accent} mb-5`}>
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
            {ctaText}
          </h2>
          <p className={`mt-5 text-base leading-relaxed ${colors.accentLight} max-w-lg mx-auto font-sans`}>
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {status === "success" && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className={`max-w-lg mx-auto mb-8 p-5 ${colors.cardBg} ${colors.border} border text-white text-sm text-center`}>
            Message sent. We&apos;ll be in touch soon.
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto space-y-5"
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
          <input type="email" placeholder="Email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
          <input type="tel" placeholder="Phone (optional)" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} />
          <textarea rows={4} placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} required />
          <button type="submit" disabled={status === "loading"} className="w-full text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-[#0F0F0D] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
