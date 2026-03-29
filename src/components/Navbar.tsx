"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Shield } from "lucide-react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // detect mobile once
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      {isMobile ? (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 ${
            scrolled
              ? "bg-obsidian-900/95 backdrop-blur-md border-b border-gray-500/20 py-3"
              : "bg-transparent py-5 border-b border-gray-500/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <Shield fill="gold"/>
              <div className="flex flex-col leading-none">
                
                <span className="text-sm font-bold tracking-widest gold-text">
                  PRECISION
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold-500/80">
                  STAIN & SEAL
                </span>
              </div>
            </a>

            {/* Mobile menu toggle (NO ANIMATION) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gold-400 p-1"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      ) : (
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
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <Shield fill="gold"/>
              <div className="flex flex-col leading-none">
                <span className="font-accent text-sm font-700 tracking-widest gold-text">
                  PRECISION
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold-500/80">
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
                  className="text-xs uppercase text-gold-200/70 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15125550100"
                className="flex items-center gap-2 text-xs text-gold-400/80"
              >
                <Phone size={14} />
                <span>(512) 909-5433</span>
              </a>

              <button
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2.5 text-xs uppercase border border-gold-600/60"
              >
                Free Quote
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {/* MOBILE MENU (NO FRAMER MOTION) */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-xl flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
            {/* Logo */}
            <div className="text-center">
              <div className="text-2xl gold-text tracking-widest">
                PRECISION
              </div>
              <div className="text-xs tracking-[0.3em] text-gold-500/70">
                STAIN & SEAL
              </div>
            </div>

            {/* LINKS (NO ANIMATION) */}
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xl tracking-[0.25em] uppercase gold-text"
              >
                {link.label}
              </button>
            ))}

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href="tel:+15125550100"
                className="flex items-center gap-2 text-gold-400/80 text-sm"
              >
                <Phone size={16} />
                <span>(512) 909-5433</span>
              </a>

              <button
                onClick={() => handleNavClick("#contact")}
                className="px-10 py-3 text-sm uppercase font-semibold bg-gold-gradient text-obsidian-900"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}