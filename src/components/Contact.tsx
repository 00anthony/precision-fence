"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error:", data);
        alert(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-900/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold-500/70 mb-4"
            style={{ fontFamily: "var(--font-cinzel), serif" }}>
            Get In Touch
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gold-text mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Free Quote
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="max-w-md mx-auto text-gold-100/45 font-sans font-light text-base sm:text-lg">
            Tell us about your project and we'll get back to you within 24 hours
            with a free, no-obligation estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-start"
          >
            <div className="space-y-6">
              <div>
                <h3
                  className="font-display text-xl font-bold text-gold-300 mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Contact Details
                </h3>
                <div className="gold-divider w-12 mb-6" />
              </div>

              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(512) 745-0521",
                  href: "tel:+15125550100",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@precisionstainandseal.com",
                  href: "mailto:info@precisionstainandseal.com",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Austin, TX & Surrounding Areas",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 border border-gold-700/30 flex items-center justify-center group-hover:border-gold-500/50 transition-colors">
                    <Icon size={16} className="text-gold-500 group-hover:text-gold-300 transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-gold-600/55 mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="font-sans text-sm text-gold-300/80 hover:text-gold-200 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-gold-300/80">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-10 border border-gold-800/20 bg-obsidian-900/40 p-5">
              <h4 className="text-xs tracking-[0.2em] uppercase font-sans text-gold-500/70 mb-4 font-semibold">Business Hours</h4>
              {[
                { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center py-2 border-b border-gold-800/15 last:border-0">
                  <span className="font-sans text-xs text-gold-100/50">{day}</span>
                  <span className="font-sans text-xs text-gold-400/70">{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="relative border border-gold-700/20 bg-obsidian-900/40 p-7 sm:p-9">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-600/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-600/50" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle size={48} className="text-gold-500 mb-4" />
                  <h3
                    className="font-display text-2xl font-bold gold-text mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Message Received!
                  </h3>
                  <p className="font-sans text-gold-100/50 text-sm max-w-xs">
                    Thanks for reaching out. We'll have a quote back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full gold-input px-4 py-3 text-sm font-sans rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/60 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(512) 000-0000"
                        className="w-full gold-input px-4 py-3 text-sm font-sans rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full gold-input px-4 py-3 text-sm font-sans rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/60 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full gold-input px-4 py-3 text-sm font-sans rounded-none appearance-none cursor-pointer"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9A84C' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                    >
                      <option value="" style={{ background: "#111111" }}>Select a service…</option>
                      <option value="fence-staining" style={{ background: "#111111" }}>Fence Staining</option>
                      <option value="deck-staining" style={{ background: "#111111" }}>Deck Staining</option>
                      <option value="wood-sealing" style={{ background: "#111111" }}>Wood Sealing</option>
                      <option value="pressure-washing" style={{ background: "#111111" }}>Pressure Washing</option>
                      <option value="wood-restoration" style={{ background: "#111111" }}>Wood Restoration</option>
                      <option value="multiple" style={{ background: "#111111" }}>Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-gold-500/60 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your fence or deck — approximate size, current condition, and what you're hoping to achieve…"
                      className="w-full gold-input px-4 py-3 text-sm font-sans rounded-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer border border-neutral-900 border-t-transparent border-x-transparent mb-2 relative w-full py-4 text-sm font-sans tracking-[0.2em] uppercase font-bold overflow-hidden group disabled:opacity-60 hover:text-amber-200"
                  >
                    <span className="absolute inset-0 bg-gold-gradient" />
                    <span className="relative text-obsidian-950 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Request Free Quote
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-center text-[10px] font-sans text-gold-700/50 tracking-wider">
                    No obligation • Response within 24 hours • Serving all of greater Austin
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
