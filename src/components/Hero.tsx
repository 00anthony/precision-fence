"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Award } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Hero() {

  const isMobile = useIsMobile();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND LAYERS */}
      <motion.div
        style={!isMobile ? {  } : undefined}
        className="absolute inset-0 z-0"
      >
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-linear-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950" />

        {/* Gold glow top-right */}
        <div className="absolute top-0 right-0 w-150 h-150 md:blur-[120px] blur-[60px] bg-gold-900/10 rounded-full" />

        {/* Gold glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-100 h-100 md:blur-[100px] blur-2xl bg-gold-800/8 rounded-full" />

        {/* Hex pattern */}
        <div className="absolute inset-0 hex-pattern opacity-100" />

        {/* Diagonal light beam (DISABLED ON MOBILE) */}
        {!isMobile && (
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.15) 50%, transparent 70%)",
            }}
          />
        )}
      </motion.div>

      {/* Decorative wood lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px opacity-5"
            style={{
              top: `${10 + i * 12}%`,
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.5}deg)`,
            }}
          />
        ))}
      </div>

      {/* FLOATING SHIELD */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          animate={
            isMobile
              ? {}
              : { rotate: [0, 2, 0, -2, 0] }
          }
          transition={
            isMobile
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
          className="opacity-[0.04]"
        >
          <svg viewBox="0 0 200 240" className="w-96 md:w-43.75 h-auto">
            <path
              d="M100 10L190 50V130C190 180 100 230 100 230C100 230 10 180 10 130V50L100 10Z"
              fill="url(#bgShieldGrad)"
              stroke="url(#bgShieldGrad)"
              strokeWidth="1"
            />

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

            <path
              d="M100 35 C100 35 90 50 90 58 C90 63 95 68 100 68 C105 68 110 63 110 58 C110 50 100 35 100 35Z"
              fill="url(#bgShieldGrad)"
            />

            <defs>
              <linearGradient
                id="bgShieldGrad"
                x1="10"
                y1="10"
                x2="190"
                y2="230"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B6914" />
                <stop offset="0.5" stopColor="#FFD700" />
                <stop offset="1" stopColor="#8B6914" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* CONTENT */}
      <motion.div
        style={!isMobile ? {  } : undefined}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-gold-700/40 bg-gold-950/30 backdrop-blur-sm"
        >
          <Star size={10} className="text-gold-500 fill-gold-500" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-500/90 font-medium">
            Austin, Texas Premium Service
          </span>
          <Star size={10} className="text-gold-500 fill-gold-500" />
        </motion.div>

        {isMobile ? (
  <h1 className="font-display mb-4 leading-none">
    <span className="block text-4xl sm:text-6xl md:text-8xl font-black gold-shimmer">
      BARTON
    </span>
    <span className="block text-4xl sm:text-6xl md:text-8xl font-black text-white/90 mt-1">
      & BIRCH
    </span>
  </h1>
) : (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="font-display mb-4 leading-none"
  >
    <span className="block text-4xl sm:text-6xl md:text-8xl font-black gold-shimmer">
      BARTON
    </span>
    <span className="block text-4xl sm:text-6xl md:text-8xl font-black text-white/90 mt-1">
      & BIRCH
    </span>
  </motion.h1>
)}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          className="gold-divider w-48 sm:w-64 mx-auto my-6"
        />

        {/* Subheading */}
        <motion.p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-500/80 mb-4">
          Fences & Decks — Austin, Texas
        </motion.p>

        <motion.p className="max-w-xl mx-auto text-base sm:text-lg text-gold-100/50 font-light leading-relaxed mb-10">
          We restore, protect, and beautify your outdoor wood surfaces with expert craftsmanship and premium-grade stains.
        </motion.p>

        

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-sky text-white px-8 py-4 font-handwriting text-xl rounded-full shadow-scrapbook hover:shadow-scrapbook-lg hover:-translate-y-1 transition-all duration-200"
          >
            Get Free Quote
          </a>

          <button
            onClick={() =>
              document.querySelector("#portfolio")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-4 text-sm uppercase font-semibold border border-gold-600/40 text-gold-400/80"
          >
            <Award size={14} className="inline mr-2" />
            View Our Work
          </button>
        </div>
      </motion.div>

      {/* Scroll cue (kept lightweight) */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-600/60"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-obsidian-950 to-transparent z-10" />
    </section>
  );
}