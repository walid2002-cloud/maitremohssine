"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities, formatPhoneToWhatsApp } from "@/data/cities";

export default function TourGrid() {
  const { lang, isRtl } = useLang();
  const t = translations.tourGrid[lang];
  const tc = translations.citySection[lang];
  const [openPvId, setOpenPvId] = useState<string | null>(null);

  return (
    <section id="tournee" dir={isRtl ? "rtl" : "ltr"} className="py-12 sm:py-16 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {cities.map((city, i) => {
            const pvOpen = openPvId === city.id;
            const showPvBtn = city.id === "casablanca" && city.salesPoints.length > 0;

            return (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="flex flex-col gap-2 px-4 py-3 border border-[#c9a227]/25 bg-[#0a0a0a] text-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                  <span className="font-bold text-white">{lang === "fr" ? city.city : city.cityAr}</span>
                  <span className="text-[#c9a227] font-semibold shrink-0">
                    {lang === "fr" ? city.date : city.dateAr}
                  </span>
                  <span className="text-white/55 sm:text-right sm:max-w-[50%]">
                    {lang === "fr" ? city.lieu : city.lieuAr}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {city.venueMaps ? (
                    <a
                      href={city.venueMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-[#c9a227] hover:text-[#e4c04a] border border-[#c9a227]/40 rounded px-2.5 py-1.5 hover:bg-[#c9a227]/10 transition-colors"
                    >
                      <span aria-hidden>📍</span>
                      {t.openMap}
                    </a>
                  ) : null}
                  {showPvBtn ? (
                    <button
                      type="button"
                      aria-expanded={pvOpen}
                      onClick={() => setOpenPvId(pvOpen ? null : city.id)}
                      className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-[#c9a227] hover:text-[#e4c04a] border border-[#c9a227]/40 rounded px-2.5 py-1.5 hover:bg-[#c9a227]/10 transition-colors"
                    >
                      <span aria-hidden>🏪</span>
                      {pvOpen ? t.salesPointsHide : t.salesPoints}
                    </button>
                  ) : null}
                </div>

                <AnimatePresence initial={false}>
                  {pvOpen && showPvBtn ? (
                    <motion.div
                      key="pv-list"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden border-t border-[#c9a227]/20 pt-2 mt-1"
                    >
                      <ul className="space-y-2.5 max-h-[min(70vh,28rem)] overflow-y-auto pr-1">
                        {city.salesPoints.map((sp, idx) => (
                          <li
                            key={idx}
                            className="rounded border border-[#c9a227]/20 bg-black/50 px-3 py-2.5 text-xs"
                          >
                            <p className="font-bold text-white">{sp.name}</p>
                            <p className="text-[#c9a227]/90 mt-0.5">{sp.quartier}</p>
                            <p className="text-white/45 mt-1 leading-snug">{sp.adresse}</p>
                            <p className="text-white/55 mt-1">
                              {tc.phone} {sp.telephone}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <a
                                href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(`Bonjour, je veux réserver pour ${city.city}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-2.5 py-1.5 bg-[#c9a227] text-black font-bold hover:bg-[#e4c04a] transition-colors"
                              >
                                {tc.whatsapp}
                              </a>
                              {sp.maps ? (
                                <a
                                  href={sp.maps}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-2.5 py-1.5 border border-[#c9a227]/55 text-[#c9a227] font-bold hover:bg-[#c9a227]/10 transition-colors"
                                >
                                  {tc.maps}
                                </a>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
