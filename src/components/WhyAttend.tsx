"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function WhyAttend() {
  const { lang, isRtl } = useLang();
  const t = translations.whyAttend[lang];

  return (
    <section id="programme" dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Programme" : "البرنامج"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-white/50 text-sm max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border border-[#c9a227]/25 bg-[#0a0a0a] p-5 hover:border-[#c9a227]/50 transition-colors"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-[#c9a227] font-bold text-sm uppercase tracking-wide mb-1">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
