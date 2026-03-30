"use client";

import { Phone, Mail, MapPin, } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Fence Staining",
  "Deck Staining",
  "Wood Sealing",
  "Pressure Washing",
  "Wood Restoration",
  "UV Protection",
];

const Facebook = ({ size = 24, ...props }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <title>Facebook</title>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978..." />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"  
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <title>Instagram</title>
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911..." />
  </svg>
);

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian-950 overflow-hidden">
      {/* Top gold divider */}
      <div className="gold-divider" />

      {/* Top section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 48" className="w-8 h-9">
                <path
                  d="M20 2L38 10V26C38 36 20 46 20 46C20 46 2 36 2 26V10L20 2Z"
                  stroke="url(#footerShield)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="20" cy="18" r="5" fill="url(#footerShield)" />
                <path d="M20 26 C16 30 14 34 20 38 C26 34 24 30 20 26Z" fill="url(#footerShield)" opacity="0.6" />
                <defs>
                  <linearGradient id="footerShield" x1="2" y1="2" x2="38" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B6914" />
                    <stop offset="0.5" stopColor="#FFD700" />
                    <stop offset="1" stopColor="#8B6914" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-accent text-sm font-bold tracking-widest gold-text" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                  PRECISION
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-gold-600/70">STAIN & SEAL</span>
              </div>
            </div>

            <p className="font-sans text-xs text-gold-100/40 leading-relaxed mb-5 font-light max-w-xs">
              Austin's premier fence and deck staining specialists. Over a decade of
              precision craftsmanship across Central Texas.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8  flex items-center justify-center text-gold-500/60 hover:text-gold-300 hover:border-gold-500/50 transition-all duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold-500/70 font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-xs text-gold-100/45 hover:text-gold-400 transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold-500/70 font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="font-sans text-xs text-gold-100/45 hover:text-gold-400 transition-colors duration-200 tracking-wide text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold-500/70 font-semibold mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:+15125550100" className="flex items-start gap-2.5 group">
                <Phone size={13} className="text-gold-600/60 mt-0.5 shrink-0 group-hover:text-gold-400 transition-colors" />
                <span className="font-sans text-xs text-gold-100/45 group-hover:text-gold-400 transition-colors">(512) 745-0521</span>
              </a>
              <a href="mailto:info@precisionstainandseal.com" className="flex items-start gap-2.5 group">
                <Mail size={13} className="text-gold-600/60 mt-0.5 shrink-0 group-hover:text-gold-400 transition-colors" />
                <span className="font-sans text-xs text-gold-100/45 group-hover:text-gold-400 transition-colors break-all">
                  info@precisionstainandseal.com
                </span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-gold-600/60 mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-gold-100/45">Austin, Texas & Surrounding Areas</span>
              </div>
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="mt-6 px-5 py-2.5 text-xs font-sans tracking-[0.15em] uppercase font-semibold bg-gold-gradient text-obsidian-950 hover:opacity-90 transition-opacity w-full"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[10px] text-gold-700/50 tracking-wider text-center sm:text-left">
          © {new Date().getFullYear()} Precision Stain & Seal. All rights reserved. Austin, Texas.
        </p>
        <p className="font-sans text-[10px] text-gold-800/40 tracking-wider">
          Licensed · Insured · Local
        </p>
      </div>
    </footer>
  );
}
