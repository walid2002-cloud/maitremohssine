"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities } from "@/data/cities";

export default function TourGrid() {
  const { lang, isRtl } = useLang();
  const t = translations.tourGrid[lang];

  return (
    <section id="tournee" dir={isRtl ? "rtl" : "ltr"} className="py-12 sm:py-16 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 px-4 py-3 border border-[#c9a227]/25 bg-[#0a0a0a] text-sm"
            >
              <span className="font-bold text-white">
                {lang === "fr" ? city.city : city.cityAr}
              </span>
              <span className="text-[#c9a227] font-semibold shrink-0">
                {lang === "fr" ? city.date : city.dateAr}
              </span>
              <span className="text-white/55 sm:text-right sm:max-w-[55%]">
                {lang === "fr" ? city.lieu : city.lieuAr}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
