"use client";

import { motion } from "framer-motion";
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

const Facebook = ({ size = 24, ...props }) => [
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
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
];

const Instagram = ({ size = 24, ...props }) => [
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
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
  </svg>
];

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
