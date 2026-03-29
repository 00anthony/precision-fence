"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Award } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScrollDown = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-linear-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950" />

        {/* Gold radial glow top-right */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-gold-900/10 rounded-full blur-[120px]" />

        {/* Gold radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-gold-800/8 rounded-full blur-[100px]" />

        {/* Hex pattern overlay */}
        <div className="absolute inset-0 hex-pattern opacity-100" />

        {/* Diagonal light beam */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.15) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Decorative wood plank lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px opacity-5"
            style={{
              top: `${10 + i * 12}%`,
              background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating shield logo background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="opacity-[0.04]"
        >
          <svg viewBox="0 0 200 240" className="w-125 h-150 md:w-175 md:h-210">
            <path
              d="M100 10L190 50V130C190 180 100 230 100 230C100 230 10 180 10 130V50L100 10Z"
              fill="url(#bgShieldGrad)"
              stroke="url(#bgShieldGrad)"
              strokeWidth="1"
            />
            {/* Wood grain lines */}
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="20"
                y1={60 + i * 12}
                x2="180"
                y2={60 + i * 12}
                stroke="url(#bgShieldGrad)"
                strokeWidth="0.5"
                opacity="0.5"
              />
            ))}
            <circle cx="100" cy="50" r="20" fill="url(#bgShieldGrad)" />
            {/* Drop */}
            <path d="M100 35 C100 35 90 50 90 58 C90 63 95 68 100 68 C105 68 110 63 110 58 C110 50 100 35 100 35Z" fill="url(#bgShieldGrad)" />
            <defs>
              <linearGradient id="bgShieldGrad" x1="10" y1="10" x2="190" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B6914" />
                <stop offset="0.5" stopColor="#FFD700" />
                <stop offset="1" stopColor="#8B6914" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-gold-700/40 bg-gold-950/30 backdrop-blur-sm"
        >
          <Star size={10} className="text-gold-500 fill-gold-500" />
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-gold-500/90 font-medium">
            Austin, Texas Premium Service
          </span>
          <Star size={10} className="text-gold-500 fill-gold-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="font-display mb-4 leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic text-gold-200/10 absolute-blur select-none pointer-events-none"
            style={{ WebkitTextStroke: "1px rgba(201,168,76,0.15)", color: "transparent", position: "relative" }}
          >
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black gold-shimmer">
            PRECISION
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/90 mt-1">
            STAIN & SEAL
          </span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="gold-divider w-48 sm:w-64 mx-auto my-6"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-accent text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-500/80 mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Fences & Decks — Austin, Texas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl mx-auto font-sans text-base sm:text-lg text-gold-100/50 font-light leading-relaxed mb-10"
        >
          We restore, protect, and beautify your outdoor wood surfaces with
          expert craftsmanship and premium-grade stains built for Texas heat.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mb-10"
        >
          {[
            { value: "500+", label: "Projects" },
            { value: "10+", label: "Years" },
            { value: "5★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold gold-text" style={{ fontFamily: "var(--font-playfair), serif" }}>
                {stat.value}
              </div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500/50 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-4 text-sm font-sans tracking-[0.2em] uppercase font-bold overflow-hidden group animate-pulse-gold"
          >
            <span className="absolute inset-0 bg-gold-gradient" />
            <span className="relative text-obsidian-950 flex items-center gap-2">
              <Shield size={14} />
              Get Free Quote
            </span>
          </button>

          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className=" px-8 py-4 text-sm font-sans tracking-[0.2em] uppercase font-semibold border border-gold-600/40 text-gold-400/80 hover:text-gold-300 hover:border-gold-400 transition-all duration-300 flex items-center gap-2"
          >
            <Award size={14} />
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-600/60 hover:text-gold-400 transition-colors group"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-obsidian-950 to-transparent z-10" />
    </section>
  );
}
