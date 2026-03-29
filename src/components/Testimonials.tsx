"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "South Austin",
    stars: 5,
    text: "Absolutely incredible work on our backyard fence. They pressure washed, sanded the rough spots, and applied a gorgeous walnut stain. The wood looks brand new — better than new, honestly. Our neighbors keep asking who did it.",
    project: "Cedar Privacy Fence",
  },
  {
    name: "James & Carla T.",
    location: "Westlake Hills",
    stars: 5,
    text: "Our deck was embarrassing — gray, cracked, just rough. Precision Stain transformed it in two days. They were professional, arrived on time, cleaned up perfectly, and the result was jaw-dropping. Worth every cent.",
    project: "Composite & Wood Deck",
  },
  {
    name: "Robert H.",
    location: "Cedar Park",
    stars: 5,
    text: "Third time using them now. They did my front fence two years ago, it still looks perfect. Then my back fence. Now the pergola. Every single time, flawless work and honest pricing. This is the team you want.",
    project: "Backyard Pergola",
  },
  {
    name: "Michelle K.",
    location: "Dripping Springs",
    stars: 5,
    text: "They drove out to Dripping Springs without hesitation. 400ft of ranch fencing, treated and sealed in a day and a half. Professional, fast, and the UV-resistant coating they used has held up perfectly through two brutal Texas summers.",
    project: "Ranch Fencing",
  },
  {
    name: "David L.",
    location: "Barton Hills",
    stars: 5,
    text: "My pool deck was faded and slippery — a safety hazard. They recommended the right slip-resistant finish, prepped the surface meticulously, and finished it in a day. It looks incredible and grips perfectly even when wet.",
    project: "Pool Deck Restoration",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={12} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setActive((a) => (a + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-obsidian-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-divider" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-gold-950/20 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold-500/70 mb-4"
            style={{ fontFamily: "var(--font-cinzel), serif" }}>
            Client Reviews
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gold-text mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Testimonials
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Large quote display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Big quote mark */}
          <Quote
            size={80}
            className="absolute -top-6 -left-2 sm:-left-8 text-gold-800/20 rotate-180 pointer-events-none"
          />

          <div className="relative border border-gold-700/25 bg-obsidian-950/60 p-8 sm:p-12 overflow-hidden min-h-70">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold-600/50" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold-600/50" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-obsidian-950 font-bold text-sm font-sans">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-gold-300 text-sm">{t.name}</div>
                        <div className="text-[10px] text-gold-600/60 tracking-wider font-sans">{t.location}</div>
                      </div>
                    </div>
                    <StarRow count={t.stars} />
                  </div>
                  <div className="px-3 py-1.5 bg-gold-950/50 border border-gold-700/30 self-start">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/70">{t.project}</span>
                  </div>
                </div>

                <p
                  className="font-display text-lg sm:text-xl text-gold-100/70 italic leading-relaxed"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  "{t.text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-6 h-1.5 bg-gold-500"
                      : "w-2 h-1.5 bg-gold-800/50 hover:bg-gold-700/70"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-gold-700/30 flex items-center justify-center text-gold-500/70 hover:text-gold-300 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-gold-700/30 flex items-center justify-center text-gold-500/70 hover:text-gold-300 hover:border-gold-500/50 transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-gold-800/20"
        >
          {[
            { value: "5.0", label: "Google Rating" },
            { value: "200+", label: "5-Star Reviews" },
            { value: "A+", label: "BBB Rating" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div
                className="font-display text-2xl sm:text-3xl font-bold gold-text"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {badge.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-gold-600/55 mt-1">
                {badge.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
