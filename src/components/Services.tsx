"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Paintbrush2, Shield, TreePine, Droplets, Wrench, Sun } from "lucide-react";

const services = [
  {
    icon: Paintbrush2,
    title: "Fence Staining",
    tagline: "Privacy & Picket",
    description:
      "Full fence staining and sealing that protects against weathering, UV damage, and moisture. We prep, stain, and seal for a flawless, lasting result.",
    features: ["Pressure washing prep", "UV-resistant stains", "All fence types"],
  },
  {
    icon: TreePine,
    title: "Deck Staining",
    tagline: "Restore & Protect",
    description:
      "Transform your tired deck into a showpiece. From surface prep to final coat, we use premium stains designed for Texas heat and humidity.",
    features: ["Surface sanding", "Premium sealants", "Color matching"],
  },
  {
    icon: Shield,
    title: "Wood Sealing",
    tagline: "Long-Term Defense",
    description:
      "Industrial-grade sealants that form a protective barrier against water intrusion, mold, mildew, and sun damage — keeping your wood beautiful for years.",
    features: ["Waterproofing", "Mold prevention", "5-year protection"],
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    tagline: "Deep Clean First",
    description:
      "Professional pressure washing to strip away old stain, grime, and weathering before we apply fresh stain — ensuring the best possible adhesion.",
    features: ["Hot & cold wash", "Eco-friendly agents", "Safe for all wood"],
  },
  {
    icon: Wrench,
    title: "Wood Restoration",
    tagline: "Revive Old Wood",
    description:
      "Cracked, gray, or weathered? We can restore aging wood to near-original condition using specialty brighteners and prep treatments.",
    features: ["Gray wood revival", "Crack treatment", "Brightening agents"],
  },
  {
    icon: Sun,
    title: "UV Protection",
    tagline: "Texas Sun Proof",
    description:
      "Specially formulated for Central Texas sun exposure. Our UV-blocking sealants prevent fading and cracking even in extreme heat.",
    features: ["SPF-grade coatings", "Heat resistant", "Color locking"],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hex-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-gold-600/40" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold-500/70 mb-4"
            style={{ fontFamily: "var(--font-cinzel), serif" }}>
            What We Do
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="gold-text">Our Services</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-gold-100/50 font-sans font-light leading-relaxed text-base sm:text-lg">
            Complete wood care from first wash to final seal. Every project
            treated with the same precision craftsmanship.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative border border-gold-800/20 bg-obsidian-900/40 p-7 hover:border-gold-600/40 transition-all duration-500 overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-600/50 group-hover:border-gold-400/70 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-600/50 group-hover:border-gold-400/70 transition-colors duration-300" />

                {/* Gold hover glow */}
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-5 flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-gold-600/30 group-hover:border-gold-400/60 bg-gold-950/40 transition-all duration-300">
                    <Icon size={20} className="text-gold-500 group-hover:text-gold-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold text-gold-200 group-hover:gold-text transition-all duration-300"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600/60 font-sans mt-0.5">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-gold-100/45 leading-relaxed mb-5 font-light">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs font-sans text-gold-400/60">
                      <span className="w-1 h-1 bg-gold-500/60 rounded-full shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold-600/50 text-sm font-sans tracking-[0.15em] uppercase text-gold-400 hover:text-obsidian-950 hover:bg-gold-gradient hover:border-transparent transition-all duration-300 group"
          >
            Request a Service
            <span className="text-gold-600 group-hover:text-obsidian-950 transition-colors">→</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-t from-transparent to-gold-600/40" />
    </section>
  );
}
