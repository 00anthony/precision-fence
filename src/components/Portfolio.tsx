"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["All", "Fences", "Decks", "Gates", "Pergolas"];

const projects = [
  {
    id: 1,
    title: "Cedar Privacy Fence",
    location: "South Austin",
    category: "Fences",
    color: "#8B5E3C",
    accentColor: "#C9A84C",
    tag: "Walnut Stain",
    description: "120ft cedar fence — stripped, brightened, and sealed.",
  },
  {
    id: 2,
    title: "Treated Pine Deck",
    location: "Westlake",
    category: "Decks",
    color: "#6B4226",
    accentColor: "#B8860B",
    tag: "Mahogany Stain",
    description: "900 sq ft deck with baluster railing, full restoration.",
  },
  {
    id: 3,
    title: "Redwood Ranch Fence",
    location: "Dripping Springs",
    category: "Fences",
    color: "#7A3D2A",
    accentColor: "#FFD700",
    tag: "Natural Redwood",
    description: "400ft ranch fence — cleaned, treated, and UV-sealed.",
  },
  {
    id: 4,
    title: "Backyard Pergola",
    location: "Cedar Park",
    category: "Pergolas",
    color: "#5C4A2A",
    accentColor: "#C9A84C",
    tag: "Golden Oak",
    description: "Custom pergola structure — sanded and sealed.",
  },
  {
    id: 5,
    title: "Wrought Iron & Wood Gate",
    location: "Tarrytown",
    category: "Gates",
    color: "#3E2A18",
    accentColor: "#D4A843",
    tag: "Ebony Blend",
    description: "Custom entry gate — wood sections stained, metal treated.",
  },
  {
    id: 6,
    title: "Pool Deck Restoration",
    location: "Barton Hills",
    category: "Decks",
    color: "#6F5130",
    accentColor: "#FFD700",
    tag: "Teak Finish",
    description: "Slip-resistant pool deck coating — complete restoration.",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-obsidian-900 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 gold-divider" />

      {/* Subtle radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-gold-950/20 blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold-500/70 mb-4"
            style={{ fontFamily: "var(--font-cinzel), serif" }}>
            Our Work
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gold-text mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Portfolio
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="max-w-md mx-auto text-gold-100/45 font-sans font-light text-base sm:text-lg">
            Every project a testament to precision craftsmanship across Austin.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gold-gradient text-obsidian-950 border-transparent font-semibold"
                  : "border-gold-700/30 text-gold-500/60 hover:border-gold-600/50 hover:text-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Wood texture card background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(160deg, ${project.color} 0%, #1a0e06 100%)`,
                  }}
                />

                {/* Wood grain overlay */}
                <div className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      ${project.id % 2 === 0 ? "88deg" : "92deg"},
                      transparent,
                      transparent 6px,
                      rgba(0,0,0,0.15) 6px,
                      rgba(0,0,0,0.15) 8px
                    )`,
                  }}
                />

                {/* Gold shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />

                {/* Stain drop icon */}
                <div className="absolute top-4 right-4">
                  <svg viewBox="0 0 24 30" className="w-6 h-8 opacity-50">
                    <path
                      d="M12 2 C12 2 4 12 4 18 C4 22.4 7.6 26 12 26 C16.4 26 20 22.4 20 18 C20 12 12 2 12 2Z"
                      fill={project.accentColor}
                    />
                  </svg>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-obsidian-950/70 border border-gold-700/30 backdrop-blur-sm">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-gold-500/80">
                    {project.category}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-obsidian-950 via-obsidian-950/80 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="font-display text-base sm:text-lg font-bold text-gold-200 mb-0.5 group-hover:gold-text transition-all duration-300"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-sans text-gold-500/60 tracking-wider">
                        {project.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-[9px] tracking-[0.15em] uppercase font-sans px-2 py-1"
                        style={{
                          background: `${project.accentColor}22`,
                          border: `1px solid ${project.accentColor}55`,
                          color: project.accentColor,
                        }}
                      >
                        {project.tag}
                      </div>
                    </div>
                  </div>

                  {/* Description on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredId === project.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-sans text-gold-100/50 mt-2 overflow-hidden font-light"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-gold-800/20 group-hover:border-gold-600/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-10 text-xs font-sans text-gold-600/50 tracking-widest uppercase"
        >
          Showcasing select projects — hundreds completed across Austin &amp; surrounding areas
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
