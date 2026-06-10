"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AntigoneSection() {
  const { lang, isRtl } = useLang();
  const t = translations.antigone[lang];

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0520] via-[#0d0828] to-[#080515]" />

      {/* Greek column decorations */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 h-full opacity-[0.04]">
        <div className="h-full w-full greek-border" />
      </div>
      <div className="absolute top-0 right-0 w-16 sm:w-24 h-full opacity-[0.04]">
        <div className="h-full w-full greek-border" />
      </div>

      {/* Dramatic light from above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-800/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.25em] uppercase text-violet-300/70 border border-violet-500/20 rounded-full">
            {t.badge}
          </span>
        </motion.div>

        {/* Column SVG decorations */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-16 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Left column */}
          <svg className="w-8 sm:w-12 h-32 sm:h-48 text-violet-500/15" viewBox="0 0 40 160" fill="currentColor">
            <rect x="8" y="12" width="24" height="136" rx="2" />
            <rect x="4" y="0" width="32" height="14" rx="3" />
            <rect x="4" y="146" width="32" height="14" rx="3" />
            <line x1="14" y1="12" x2="14" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="12" x2="20" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <line x1="26" y1="12" x2="26" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>

          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-xl"
            style={{
              fontStyle: "italic",
              textShadow: "0 0 40px rgba(124, 58, 237, 0.2)",
            }}
          >
            {t.title}
          </motion.h2>

          {/* Right column */}
          <svg className="w-8 sm:w-12 h-32 sm:h-48 text-violet-500/15" viewBox="0 0 40 160" fill="currentColor">
            <rect x="8" y="12" width="24" height="136" rx="2" />
            <rect x="4" y="0" width="32" height="14" rx="3" />
            <rect x="4" y="146" width="32" height="14" rx="3" />
            <line x1="14" y1="12" x2="14" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="12" x2="20" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <line x1="26" y1="12" x2="26" y2="146" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {[t.quote1, t.quote2].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
              className="relative p-8 rounded-2xl border border-violet-500/10 bg-violet-950/20 backdrop-blur-sm"
            >
              <div className="absolute top-4 left-6 text-4xl text-violet-500/20 font-serif">
                &ldquo;
              </div>
              <p className="relative text-lg sm:text-xl text-violet-200/70 italic leading-relaxed pt-4">
                {quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="mx-auto w-20 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#points-de-vente"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-xl shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300"
          >
            {t.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
