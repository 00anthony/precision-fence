"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, MapPin, Clock, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: CheckCircle2,
    title: "Premium Materials Only",
    desc: "We use top-tier stains and sealants from brands like Armstrong Clark and Defy — never cheap alternatives.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    desc: "Born and raised in Austin. We know Texas weather, wood, and what it takes to protect your investment in this climate.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "We show up when we say we will and complete projects on schedule — respecting your time is part of the job.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Promise",
    desc: "Not happy with the result? We come back and make it right. Your complete satisfaction is non-negotiable.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hex-pattern opacity-40" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-gold-900/10 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative border border-gold-700/25 bg-obsidian-900/60 p-1">
              {/* Interior simulation of a stained deck */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Deck plank simulation */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6B3D1E] via-[#4A2810] to-[#2A1608]" />
                {/* Plank lines */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full"
                    style={{
                      top: `${i * 10}%`,
                      height: "9.5%",
                      background: i % 2 === 0
                        ? "linear-gradient(90deg, rgba(180,100,40,0.6), rgba(120,60,20,0.8), rgba(160,90,35,0.6))"
                        : "linear-gradient(90deg, rgba(100,55,20,0.7), rgba(150,80,30,0.9), rgba(110,60,22,0.7))",
                      borderBottom: "1px solid rgba(0,0,0,0.3)",
                    }}
                  />
                ))}
                {/* Sheen overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-gold-400/10 to-transparent" />

                

                {/* Bottom overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-obsidian-950 to-transparent">
                  <p className="font-display text-sm text-gold-300/80 italic" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    "Bringing wood back to life."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-neutral-900/70 border border-gold-600/40 px-6 py-4 gold-glow"
            >
              <div className="text-2xl font-display font-bold gold-text" style={{ fontFamily: "var(--font-playfair), serif" }}>10+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-gold-600/60 mt-0.5">Years Serving Austin</div>
            </motion.div>

            {/* Top-left accent card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -top-11 -left-4 sm:-left-8 bg-neutral-900/70 border border-gold-600/40 px-6 py-4 gold-glow"
            >
              <div className="text-2xl font-display font-bold gold-text" style={{ fontFamily: "var(--font-playfair), serif" }}>500+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-gold-600/60 mt-0.5">Projects Completed</div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold-500/70 mb-4"
              style={{ fontFamily: "var(--font-cinzel), serif" }}>
              About Us
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="gold-text">Austin's</span>{" "}
              <span className="text-gold-100">Staining</span>
              <br />
              <span className="text-gold-100">Specialists</span>
            </h2>
            <div className="gold-divider w-20 mb-6" />
            <p className="font-sans text-gold-100/50 font-light leading-relaxed text-base mb-4">
              Precision Stain & Seal was founded right here in Austin, Texas
              with one mission: to give every fence and deck the care it
              deserves. Over a decade later, that mission hasn't changed.
            </p>
            <p className="font-sans text-gold-100/50 font-light leading-relaxed text-base mb-8">
              We're not a franchise. We're your neighbors — and we treat every
              job like it's our own home. From a picket fence in Buda to a
              wraparound deck in Westlake, we bring the same level of precision
              and professionalism to every project.
            </p>

            {/* Values list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex gap-3 group"
                  >
                    <Icon size={18} className="text-gold-500 mt-0.5 shrink-0 group-hover:text-gold-300 transition-colors" />
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-gold-300 mb-1">
                        {v.title}
                      </h4>
                      <p className="font-sans text-xs text-gold-100/40 leading-relaxed font-light">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Service area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 flex items-center gap-2.5 text-xs font-sans text-gold-600/60 border-t border-gold-800/20 pt-6"
            >
              <MapPin size={13} className="text-gold-500/60 shrink-0" />
              <span>Serving Austin, Round Rock, Cedar Park, Pflugerville, Kyle, Buda, Dripping Springs & surrounding areas</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
