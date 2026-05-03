"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Urgency() {
  const { lang, isRtl } = useLang();
  const t = translations.urgency[lang];

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-indigo-900/80 to-blue-900/80" />
      <div className="absolute inset-0 bg-[#050816]/40" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-60 h-60 bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-5xl sm:text-6xl mb-6"
          >
            🔥
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.text}
          </p>

          <motion.a
            href="#points-de-vente"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-violet-900 font-bold text-lg rounded-2xl shadow-2xl shadow-violet-500/20 hover:bg-violet-50 transition-colors"
          >
            🎟️ {t.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
