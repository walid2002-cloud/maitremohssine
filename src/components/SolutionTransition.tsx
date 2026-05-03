"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function SolutionTransition() {
  const { lang, isRtl } = useLang();
  const t = translations.story[lang];

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative py-32 sm:py-44 overflow-hidden"
    >
      {/* Background: transition from dark to slightly brighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a2e] via-[#10103a] to-[#0c1445]" />

      {/* Light breaking through */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-400/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Radial light burst */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-violet-400/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Light line above */}
        <motion.div
          className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate-text-glow leading-tight"
        >
          {t.transition}
        </motion.h2>

        {/* Light line below */}
        <motion.div
          className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent mt-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* Stats badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {[
            { value: "9", label: lang === "fr" ? "Villes" : "مدن" },
            { value: "4", label: lang === "fr" ? "Professeurs" : "أساتذة" },
            { value: "4", label: lang === "fr" ? "Matières" : "مواد" },
            { value: "1", label: lang === "fr" ? "Objectif" : "هدف" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="text-2xl font-extrabold text-violet-400">{stat.value}</span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
