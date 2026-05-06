"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities, getWhatsAppLink, getFirstAvailableSession } from "@/data/cities";

export default function CitiesTimeline() {
  const { lang, isRtl } = useLang();
  const t = translations.citiesTimeline[lang];
  const tg = translations.tourGrid[lang];

  return (
    <section id="villes" dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Tournée" : "الجولة"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-[#c9a227]/25 bg-[#0a0a0a] px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center border border-[#c9a227]/50 text-[#c9a227] text-xs font-black shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-white">
                    {lang === "fr" ? city.city : city.cityAr}
                  </h3>
                  <p className="text-white/45 text-xs mt-0.5 space-y-1">
                    {city.sessions.map((s) => (
                      <span key={s.sessionId} className="block">
                        📅 {lang === "fr" ? s.date : s.dateAr}
                        {s.status === "sold_out" ? (
                          <span className="text-red-400/80"> — {tg.soldOutTag}</span>
                        ) : null}
                        {" · "}
                        📍 {lang === "fr" ? s.lieu : s.lieuAr}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {city.salesPoints.length === 0 && (
                  <span className="text-red-400/90 text-xs px-2 py-1 border border-red-500/30">{t.soonText}</span>
                )}
                <a
                  href="#points-de-vente"
                  className="text-xs font-bold uppercase px-3 py-2 border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227]/10"
                >
                  {t.viewSalesPoints}
                </a>
                <a
                  href={getWhatsAppLink(
                    city.whatsappNumber,
                    city.city,
                    city.id === "casablanca"
                      ? { bookingDateFr: getFirstAvailableSession(city)?.date ?? "27 mai" }
                      : undefined
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase px-3 py-2 bg-[#c9a227] text-black hover:bg-[#e4c04a]"
                >
                  {t.whatsapp}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
