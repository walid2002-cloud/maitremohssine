"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities, getWhatsAppLink, formatPhoneToWhatsApp } from "@/data/cities";

export default function CityCardsSection() {
  const { lang, isRtl } = useLang();
  const t = translations.citySection[lang];
  const delivery = translations.deliveryNotice[lang];
  const casaBox = translations.casaDeliveryBox[lang];
  const [openId, setOpenId] = useState<string | null>(null);

  const selected = cities.find((c) => c.id === openId);

  return (
    <section
      id="choisis-ta-ville"
      dir={isRtl ? "rtl" : "ltr"}
      className="py-12 sm:py-16 border-b border-[#c9a227]/20 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/55 text-sm sm:text-base max-w-xl mx-auto">{t.subtitle}</p>
          <p className="mt-2 text-[#c9a227]/80 text-xs">{t.tapHint}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {cities.map((city, i) => {
            const active = openId === city.id;
            return (
              <motion.button
                key={city.id}
                type="button"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                onClick={() => setOpenId(active ? null : city.id)}
                className={`text-left sm:text-center min-h-[88px] sm:min-h-[100px] p-3 sm:p-4 border-2 transition-colors rounded-sm ${
                  active
                    ? "border-[#c9a227] bg-[#c9a227]/10"
                    : "border-[#c9a227]/30 bg-[#0a0a0a] hover:border-[#c9a227]/55"
                }`}
              >
                <span className="block font-bold text-white text-sm sm:text-base">
                  {lang === "fr" ? city.city : city.cityAr}
                </span>
                <span className="block text-[#c9a227] text-xs sm:text-sm mt-1 font-medium">
                  {lang === "fr" ? city.date : city.dateAr}
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-8 border-2 border-[#c9a227]/40 bg-[#0a0a0a] p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-black text-white text-center">
                  {lang === "fr" ? selected.city : selected.cityAr}
                </h3>
                <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm text-white/85">
                  <span>
                    <span className="text-[#c9a227] font-bold">{t.dateLabel} </span>
                    {lang === "fr" ? selected.date : selected.dateAr}
                  </span>
                  <span>
                    <span className="text-[#c9a227] font-bold">{t.placeLabel} </span>
                    {lang === "fr" ? selected.lieu : selected.lieuAr}
                  </span>
                </div>

                {selected.id === "casablanca" && (
                  <motion.div
                    key="casa-delivery"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-5 flex items-start gap-3 rounded-xl border border-[#c9a227]/35 bg-[#1c1a14] px-4 py-3.5 sm:px-5 sm:py-4 shadow-[inset_0_1px_0_0_rgba(201,162,39,0.12)]"
                  >
                    <span className="text-2xl shrink-0 leading-none" aria-hidden>
                      📦
                    </span>
                    <div className="min-w-0 text-sm leading-relaxed text-white/90">
                      <p className="font-bold text-[#e8d089]">{casaBox.line1}</p>
                      <p className="mt-1 text-white/75">{casaBox.line2}</p>
                    </div>
                  </motion.div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppLink(selected.whatsappNumber, selected.city)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center min-h-[48px] px-6 bg-[#c9a227] text-black font-bold text-sm hover:bg-[#e4c04a] transition-colors"
                  >
                    {t.whatsapp}
                  </a>
                </div>

                {(selected.id === "casablanca" || selected.id === "mohammedia") && (
                  <p className="mt-4 text-red-400/95 text-xs leading-relaxed border-l-2 border-red-500/40 pl-3">
                    {delivery}
                  </p>
                )}

                <h4 className="mt-6 text-[#c9a227] text-xs font-black uppercase tracking-widest">
                  {t.pointsTitle}
                </h4>

                {selected.salesPoints.length === 0 ? (
                  <p className="mt-3 text-white/50 text-sm text-center py-4">{t.soon}</p>
                ) : (
                  <ul className="mt-4 space-y-3">
                    {selected.salesPoints.map((sp, idx) => (
                      <li
                        key={idx}
                        className="border border-[#c9a227]/25 p-4 bg-black/40"
                      >
                        <p className="font-bold text-white text-sm">{sp.name}</p>
                        <p className="text-[#c9a227]/90 text-xs mt-0.5">{sp.quartier}</p>
                        <p className="text-white/45 text-xs mt-2">{sp.adresse}</p>
                        <p className="text-white/60 text-xs mt-2">
                          {t.phone} {sp.telephone}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(`Bonjour, je veux réserver pour ${selected.city}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold px-3 py-2 bg-[#c9a227] text-black hover:bg-[#e4c04a]"
                          >
                            {t.whatsapp}
                          </a>
                          {sp.maps ? (
                            <a
                              href={sp.maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold px-3 py-2 border border-[#c9a227]/60 text-[#c9a227] hover:bg-[#c9a227]/10"
                            >
                              {t.maps}
                            </a>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
