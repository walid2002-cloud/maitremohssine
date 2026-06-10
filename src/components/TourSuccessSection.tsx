"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function TourSuccessSection() {
  const { lang, isRtl } = useLang();
  const t = translations.tourSuccess[lang];

  return (
    <section
      id="succes"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative py-16 sm:py-20 border-b border-[#c9a227]/15"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.07)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-[#c9a227]/80 text-xs font-bold uppercase tracking-[0.3em]">
            {t.badge}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center rounded-sm border border-[#c9a227]/25 bg-[#0a0a0a]/80 px-4 py-6 sm:py-8 text-center"
            >
              <span className="text-2xl sm:text-3xl mb-2" aria-hidden>
                {stat.icon}
              </span>
              <p className="text-[#e8d089] text-sm sm:text-base font-black leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
