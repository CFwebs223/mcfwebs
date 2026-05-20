"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import { CONTACT_INFO } from "@/lib/data";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

type FormStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
        return;
      }

      setStatus({ type: "success", message: data.message });
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Could not send. Try WhatsApp instead.",
      });
    }
  }

  const inputClasses =
    "w-full bg-warm-white border px-5 py-4 text-sm text-charcoal placeholder:text-sage/50 outline-none transition-colors duration-300 focus:border-champagne";
  const errorInputClasses =
    "w-full bg-warm-white border border-red/40 px-5 py-4 text-sm text-charcoal placeholder:text-sage/50 outline-none transition-colors duration-300 focus:border-red";

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 bg-gradient-to-b from-ivory to-ivory/80"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sage mb-5">
              START A PROJECT
            </p>
            <AnimatedHeadline
              text="Tell us what you need built."
              as="h2"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-charcoal"
              wordDelay={0.04}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-sage max-w-xl"
            >
              We&apos;ll help shape it into a digital presence that feels clear,
              credible and ready to launch.
            </motion.p>
          </div>

          {/* Status messages */}
          {status.type === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-5 bg-sage/10 border border-sage/30 text-sage text-sm"
            >
              {status.message}
            </motion.div>
          )}
          {status.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-5 bg-red/5 border border-red/20 text-red text-sm"
            >
              {status.message}
            </motion.div>
          )}

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                  Name <span className="text-sage/50">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? errorInputClasses : inputClasses}
                />
                {errors.name && (
                  <p className="text-[10px] text-red/70 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                  Business name
                </label>
                <input
                  type="text"
                  placeholder="Your business"
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  className="w-full bg-warm-white border border-stone/40 px-5 py-4 text-sm text-charcoal placeholder:text-sage/50 outline-none transition-colors duration-300 focus:border-champagne"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                  Email <span className="text-sage/50">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@business.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={errors.email ? errorInputClasses : inputClasses}
                />
                {errors.email && (
                  <p className="text-[10px] text-red/70 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+27 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-warm-white border border-stone/40 px-5 py-4 text-sm text-charcoal placeholder:text-sage/50 outline-none transition-colors duration-300 focus:border-champagne"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                What do you need built?
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full bg-warm-white border border-stone/40 px-5 py-4 text-sm text-charcoal/80 outline-none transition-colors duration-300 focus:border-champagne appearance-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237D8A72' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px center",
                }}
              >
                <option value="">Select a service</option>
                <option>Business Website</option>
                <option>Digital Menu</option>
                <option>Landing Page</option>
                <option>Booking System</option>
                <option>Website Redesign</option>
                <option>Scroll Experience</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                Budget range (optional)
              </label>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full bg-warm-white border border-stone/40 px-5 py-4 text-sm text-charcoal/80 outline-none transition-colors duration-300 focus:border-champagne appearance-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237D8A72' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px center",
                }}
              >
                <option value="">Select a range</option>
                <option>R2,000 — R5,000</option>
                <option>R5,000 — R8,000</option>
                <option>R8,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sage block mb-2">
                Message <span className="text-sage/50">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={
                  errors.message
                    ? `${errorInputClasses} resize-none`
                    : `${inputClasses} resize-none`
                }
              />
              {errors.message && (
                <p className="text-[10px] text-red/70 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full md:w-auto bg-charcoal text-ivory px-12 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status.type === "loading" ? (
                <>
                  <span className="inline-block w-3 h-3 border border-ivory/40 border-t-ivory rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send enquiry"
              )}
            </button>
          </motion.form>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-stone/20 text-center"
          >
            <p className="text-sm text-sage mb-3">
              Prefer WhatsApp? Send a quick message.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-champagne hover:text-charcoal transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send a WhatsApp message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
