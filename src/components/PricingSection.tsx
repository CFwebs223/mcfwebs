"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/data";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-32 md:py-40 bg-gradient-to-b from-warm-white to-ivory"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <AnimatedHeadline
            text="Simple pricing. Serious presence."
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-charcoal"
            wordDelay={0.04}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-sage"
          >
            Choose the level of digital presence your business needs now. Each
            package is built to look polished, load cleanly and help customers
            take action.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 md:p-10 border transition-all duration-500 ${
                plan.badge === "Most practical"
                  ? "bg-ivory border-champagne/40 scale-[1.02] md:scale-105"
                  : "bg-warm-white border-stone/20 hover:border-stone/40"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase ${
                    plan.badge === "Most practical"
                      ? "bg-champagne text-charcoal"
                      : "bg-charcoal text-ivory"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3 className="font-serif text-2xl font-medium text-charcoal mb-1">
                {plan.title}
              </h3>
              <div className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mt-4 mb-2">
                {plan.price}
              </div>
              <p className="text-xs leading-relaxed text-sage mt-2 mb-8">
                {plan.bestFor}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="text-champagne mt-px">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center text-xs font-semibold tracking-[0.15em] uppercase px-6 py-4 transition-all duration-300 ${
                  plan.badge === "Premium"
                    ? "bg-champagne text-charcoal hover:bg-champagne/90"
                    : "border border-stone/60 text-charcoal hover:bg-charcoal hover:text-ivory"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
