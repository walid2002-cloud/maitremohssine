"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Testimonials() {
  const { lang, isRtl } = useLang();
  const t = translations.testimonials[lang];

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Avis" : "آراء"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#c9a227]/25 bg-[#0a0a0a] p-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-4">&ldquo;{item.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-[#c9a227]/50 flex items-center justify-center text-[#c9a227] font-bold text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-white/40">{item.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
