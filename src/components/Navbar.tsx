"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian-900/95 backdrop-blur-md border-b border-gray-500/20 py-3"
            : "bg-transparent py-5 border-b border-gray-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            {/* Shield Icon */}
            <div className="relative w-9 h-10 shrink-0">
              <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M20 2L38 10V26C38 36 20 46 20 46C20 46 2 36 2 26V10L20 2Z"
                  stroke="url(#shieldGrad)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 10C20 10 15 16 12 20C15 22 20 22 20 22C20 22 25 22 28 20C25 16 20 10 20 10Z"
                  fill="url(#shieldGrad)"
                  opacity="0.8"
                />
                <circle cx="20" cy="17" r="4" fill="url(#shieldGrad)" />
                <defs>
                  <linearGradient id="shieldGrad" x1="2" y1="2" x2="38" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B6914" />
                    <stop offset="0.5" stopColor="#FFD700" />
                    <stop offset="1" stopColor="#8B6914" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-accent text-sm sm:text-base font-700 tracking-widest gold-text"
                style={{ fontFamily: "display, " }}
              >
                PRECISION
              </span>
              <span className="font-display text-[10px] sm:text-xs tracking-[0.2em] text-gold-500/80 font-light">
                STAIN & SEAL
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="cursor-pointer relative font-display text-xs tracking-[0.15em] uppercase text-gold-200/70 hover:text-gold-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient-h group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15125550100"
              className="flex items-center gap-2 text-xs text-gold-400/80 hover:text-gold-300 transition-colors"
            >
              <Phone size={14} />
              <span className="font-display tracking-wider">(512) 555-0100</span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="cursor-pointer relative px-5 py-2.5 text-xs font-display tracking-[0.15em] uppercase font-semibold overflow-hidden group border border-gold-600/60 hover:border-gold-400 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-gold-300 group-hover:text-obsidian-900 transition-colors duration-300">
                Free Quote
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gold-400 hover:text-gold-300 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
              {/* Mobile Logo */}
              <div className="mb-8 text-center">
                <div className="font-accent text-2xl gold-text tracking-widest" style={{ fontFamily: "display, serif" }}>
                  PRECISION
                </div>
                <div className="text-xs tracking-[0.3em] text-gold-500/70 mt-1">STAIN & SEAL</div>
                <div className="gold-divider mt-4 w-32 mx-auto" />
              </div>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-accent text-xl tracking-[0.25em] uppercase gold-text hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "display, serif" }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a href="tel:+15125550100" className="flex items-center gap-2 text-gold-400/80 text-sm">
                  <Phone size={16} />
                  <span>(512) 555-0100</span>
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className=" px-10 py-3 text-sm font-display tracking-[0.2em] uppercase font-semibold bg-gold-gradient text-obsidian-900"
                >
                  Get Free Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
