"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities, getWhatsAppLink, formatPhoneToWhatsApp, getCityCardDateSummary, getFirstAvailableSession } from "@/data/cities";

export default function CitySelector() {
  const { lang, isRtl } = useLang();
  const t = translations.citySelector[lang];
  const notice = translations.deliveryNotice[lang];
  const [selectedId, setSelectedId] = useState<string>("");

  const selectedCity = cities.find((c) => c.id === selectedId);

  return (
    <section id="points-de-vente" dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Réservation" : "الحجز"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <p className="text-red-400/95 text-xs leading-relaxed mb-4 px-1 border-l-2 border-red-500/50 pl-3">
          {notice}
        </p>

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="w-full px-4 py-3.5 text-sm bg-[#0a0a0a] border border-[#c9a227]/40 text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]/30 mb-6"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          <option value="" className="bg-black text-white/50">{t.placeholder}</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id} className="bg-black text-white">
              {lang === "fr" ? `${city.city} — ${getCityCardDateSummary(city, lang)}` : `${city.cityAr} — ${getCityCardDateSummary(city, lang)}`}
            </option>
          ))}
        </select>

        <AnimatePresence mode="wait">
          {selectedCity && (
            <motion.div
              key={selectedCity.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="border border-[#c9a227]/40 bg-[#0a0a0a] overflow-hidden"
            >
              <div className="px-4 py-4 bg-[#c9a227] text-black">
                <p className="text-xs font-black uppercase tracking-wider text-center">
                  {lang === "fr" ? "Avec Maître Mohssine" : "مع الأستاذ محسن"}
                </p>
                <h3 className="text-xl font-black text-center mt-1">
                  {lang === "fr" ? selectedCity.city : selectedCity.cityAr}
                </h3>
                <div className="mt-3 pt-3 border-t border-black/15 flex flex-col gap-2 text-xs font-semibold text-center">
                  {selectedCity.sessions.map((s) => (
                    <div key={s.sessionId} className="flex flex-wrap justify-center gap-3">
                      <span className={s.status === "sold_out" ? "line-through opacity-60" : ""}>
                        📅 {lang === "fr" ? s.date : s.dateAr}
                      </span>
                      <span className={s.status === "sold_out" ? "opacity-50" : ""}>
                        📍 {lang === "fr" ? s.lieu : s.lieuAr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-4">
                  {t.salesPointsTitle}
                </h4>

                {selectedCity.salesPoints.length === 0 ? (
                  <p className="text-white/45 text-sm text-center py-6">{t.noSalesPoints}</p>
                ) : (
                  <div className="space-y-3">
                    {selectedCity.salesPoints.map((sp, i) => (
                      <div
                        key={i}
                        className="border border-[#c9a227]/20 p-4 bg-black"
                      >
                        <h5 className="font-bold text-white text-sm">{sp.name}</h5>
                        <p className="text-[#c9a227]/80 text-xs mt-0.5">{sp.quartier}</p>
                        <p className="text-white/45 text-xs mt-2">{sp.adresse}</p>
                        <p className="text-white/55 text-xs mt-2">
                          📞 {t.phone}: <span className="text-white font-medium">{sp.telephone}</span>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(
                              `Bonjour, je veux réserver pour ${selectedCity.city} le ${getFirstAvailableSession(selectedCity)?.date ?? "27 mai"}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold uppercase px-3 py-2 bg-[#c9a227] text-black hover:bg-[#e4c04a]"
                          >
                            {t.whatsapp}
                          </a>
                          {sp.maps && (
                            <a
                              href={sp.maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold uppercase px-3 py-2 border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227]/10"
                            >
                              {t.maps}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={getWhatsAppLink(
                    selectedCity.whatsappNumber,
                    selectedCity.city,
                    selectedCity.id === "casablanca"
                      ? { bookingDateFr: getFirstAvailableSession(selectedCity)?.date ?? "27 mai" }
                      : undefined
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#c9a227] text-black font-black text-sm uppercase tracking-wide hover:bg-[#e4c04a] transition-colors"
                >
                  {t.whatsapp}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
