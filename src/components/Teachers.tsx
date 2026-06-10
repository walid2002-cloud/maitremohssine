"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const teacherIcons = ["🇫🇷", "🇲🇦", "🌍", "☪️"];

export default function Teachers() {
  const { lang, isRtl } = useLang();
  const t = translations.teachers[lang];

  return (
    <section id="professeurs" dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Équipe" : "الفريق"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.list.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border border-[#c9a227]/25 bg-[#0a0a0a] p-5 text-center"
            >
              <div className="text-3xl mb-3">{teacherIcons[index]}</div>
              <h3 className="font-bold text-white text-sm">{teacher.name}</h3>
              <p className="text-[#c9a227] text-xs font-semibold uppercase mt-1 mb-2">{teacher.subject}</p>
              <p className="text-white/45 text-xs leading-relaxed">{teacher.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
