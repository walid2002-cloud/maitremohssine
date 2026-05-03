"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { lang, setLang, isRtl } = useLang();
  const t = translations.nav[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.home, href: "#accueil" },
    { label: t.program, href: "#programme" },
    { label: t.salesPoints, href: "#choisis-ta-ville" },
    { label: t.tour, href: "#tournee" },
    { label: t.teachers, href: "#professeurs" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/95 border-b border-[#c9a227]/30"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#accueil" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 border border-[#c9a227] flex items-center justify-center bg-[#c9a227] text-black font-black text-xs">
              RN
            </div>
            <span className="font-bold text-white text-sm hidden sm:block tracking-tight">
              {lang === "fr" ? "Révision Nationale" : "مراجعة وطنية"}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-white/55 hover:text-[#c9a227] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
              className="px-3 py-1.5 text-xs font-bold border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227]/10 transition-colors uppercase"
            >
              {t.langSwitch}
            </button>
            <a
              href="#choisis-ta-ville"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#c9a227] text-black text-xs font-bold uppercase tracking-wide hover:bg-[#e4c04a] transition-colors"
            >
              {t.reserve}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#c9a227]"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#c9a227]/20 bg-black overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm text-white/70 hover:text-[#c9a227] border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#choisis-ta-ville"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-3 py-3 bg-[#c9a227] text-black font-bold text-sm uppercase"
              >
                {t.reserve}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
