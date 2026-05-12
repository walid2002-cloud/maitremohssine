"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  cities,
  formatPhoneToWhatsApp,
  getWhatsAppLink,
  getCityGridItems,
} from "@/data/cities";
import { CASA_DELIVERY_REQUEST_URL } from "@/data/publicLinks";

export default function TourGrid() {
  const { lang, isRtl } = useLang();
  const t = translations.tourGrid[lang];
  const tc = translations.citySection[lang];
  const casaBox = translations.casaDeliveryBox[lang];
  const [openPvId, setOpenPvId] = useState<string | null>(null);

  return (
    <section id="tournee" dir={isRtl ? "rtl" : "ltr"} className="py-12 sm:py-16 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
          <p className="mt-2 text-white/50 text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {getCityGridItems(cities).map((item, i) => {
            const { city, session, gridKey } = item;
            const sold = session.status === "sold_out";
            const isCasa = city.id === "casablanca";
            const pvOpen = openPvId === gridKey;

            return (
              <motion.div
                key={gridKey}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="flex flex-col gap-2 px-4 py-3 border border-[#c9a227]/25 bg-[#0a0a0a] text-sm"
              >
                <span className="font-bold text-white">{lang === "fr" ? city.city : city.cityAr}</span>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span
                    className={
                      sold && !isCasa
                        ? "text-white/45 line-through decoration-red-500/50"
                        : sold
                          ? "font-semibold text-white/90"
                          : "font-semibold text-[#c9a227]"
                    }
                  >
                    {lang === "fr" ? session.date : session.dateAr}
                  </span>
                  {sold ? (
                    <span className="text-[10px] font-black uppercase tracking-wide text-red-400/95">
                      {t.soldOutTag}
                    </span>
                  ) : isCasa ? (
                    <span className="text-[10px] font-black uppercase tracking-wide text-[#c9a227]">
                      {t.newDateTag}
                    </span>
                  ) : null}
                </div>

                <span className="text-white/50 text-xs sm:text-sm">
                  {lang === "fr" ? session.lieu : session.lieuAr}
                </span>

                {session.venueMaps ? (
                  <a
                    href={session.venueMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-fit items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-bold transition-colors ${
                      sold
                        ? "border border-white/20 text-white/55 hover:border-[#c9a227]/40 hover:text-[#c9a227]"
                        : "border border-[#c9a227]/40 text-[#c9a227] hover:bg-[#c9a227]/10"
                    }`}
                  >
                    <span aria-hidden>📍</span>
                    {t.openMap}
                  </a>
                ) : null}

                {isCasa && sold ? (
                  <button
                    type="button"
                    disabled
                    className="mt-1 inline-flex min-h-[44px] w-full cursor-not-allowed items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-xs font-bold text-white/35"
                  >
                    {t.completeCasa}
                  </button>
                ) : null}

                {isCasa && !sold ? (
                  <div className="mt-1 flex flex-col gap-2 border-t border-[#c9a227]/15 pt-2">
                    <p className="text-xs leading-relaxed text-[#e8d089]">{casaBox.line1}</p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      <motion.a
                        href={CASA_DELIVERY_REQUEST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-[#c9a227]/50 bg-[#c9a227]/15 px-3 text-center text-xs font-black text-[#c9a227] hover:bg-[#c9a227]/25"
                        whileTap={{ scale: 0.98 }}
                      >
                        {casaBox.ctaDelivery}
                      </motion.a>
                      <a
                        href={getWhatsAppLink(city.whatsappNumber, city.city, {
                          bookingDateFr: session.date,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border-2 border-[#c9a227] bg-transparent px-3 text-xs font-black text-[#c9a227] hover:bg-[#c9a227]/10"
                      >
                        {t.reserveButton}
                      </a>
                    </div>

                    <button
                      type="button"
                      aria-expanded={pvOpen}
                      onClick={() => setOpenPvId(pvOpen ? null : gridKey)}
                      className="inline-flex min-h-[40px] w-fit items-center gap-1.5 rounded border border-[#c9a227]/40 px-2.5 py-1.5 text-xs font-bold text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
                    >
                      <span aria-hidden>🏪</span>
                      {pvOpen ? t.salesPointsHide : t.salesPoints}
                    </button>

                    <AnimatePresence initial={false}>
                      {pvOpen ? (
                        <motion.div
                          key="pv-list"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden border-t border-[#c9a227]/20 pt-2"
                        >
                          {city.salesPoints.length === 0 ? (
                            <p className="py-3 text-center text-xs text-white/50">{tc.soon}</p>
                          ) : (
                            <ul className="max-h-[min(70vh,28rem)] space-y-2.5 overflow-y-auto pr-1">
                              {city.salesPoints.map((sp, idx) => (
                                <li
                                  key={idx}
                                  className="rounded border border-[#c9a227]/20 bg-black/50 px-3 py-2.5 text-xs"
                                >
                                  <p className="font-bold text-white">{sp.name}</p>
                                  <p className="mt-0.5 text-[#c9a227]/90">{sp.quartier}</p>
                                  <p className="mt-1 leading-snug text-white/45">{sp.adresse}</p>
                                  <p className="mt-1 text-white/55">
                                    {tc.phone} {sp.telephone}
                                  </p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    <a
                                      href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(
                                        `Bonjour, je veux réserver pour ${city.city} le ${session.date}`
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center bg-[#c9a227] px-2.5 py-1.5 font-bold text-black transition-colors hover:bg-[#e4c04a]"
                                    >
                                      {tc.whatsapp}
                                    </a>
                                    {sp.maps ? (
                                      <a
                                        href={sp.maps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center border border-[#c9a227]/55 px-2.5 py-1.5 font-bold text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
                                      >
                                        {tc.maps}
                                      </a>
                                    ) : null}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : null}

                {!isCasa && !sold && city.salesPoints.length > 0 ? (
                  <div className="mt-1 flex flex-col gap-2 border-t border-[#c9a227]/15 pt-2">
                    <button
                      type="button"
                      aria-expanded={pvOpen}
                      onClick={() => setOpenPvId(pvOpen ? null : gridKey)}
                      className="inline-flex min-h-[40px] w-fit items-center gap-1.5 rounded border border-[#c9a227]/40 px-2.5 py-1.5 text-xs font-bold text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
                    >
                      <span aria-hidden>🏪</span>
                      {pvOpen ? t.salesPointsHide : t.salesPoints}
                    </button>

                    <AnimatePresence initial={false}>
                      {pvOpen ? (
                        <motion.div
                          key="pv-list-other"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden border-t border-[#c9a227]/20 pt-2"
                        >
                          <ul className="max-h-[min(70vh,28rem)] space-y-2.5 overflow-y-auto pr-1">
                            {city.salesPoints.map((sp, idx) => (
                              <li
                                key={idx}
                                className="rounded border border-[#c9a227]/20 bg-black/50 px-3 py-2.5 text-xs"
                              >
                                <p className="font-bold text-white">{sp.name}</p>
                                <p className="mt-0.5 text-[#c9a227]/90">{sp.quartier}</p>
                                <p className="mt-1 leading-snug text-white/45">{sp.adresse}</p>
                                <p className="mt-1 text-white/55">
                                  {tc.phone} {sp.telephone}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <a
                                    href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(
                                      `Bonjour, je veux réserver pour ${city.city} le ${session.date}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-[#c9a227] px-2.5 py-1.5 font-bold text-black transition-colors hover:bg-[#e4c04a]"
                                  >
                                    {tc.whatsapp}
                                  </a>
                                  {sp.maps ? (
                                    <a
                                      href={sp.maps}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center border border-[#c9a227]/55 px-2.5 py-1.5 font-bold text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
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
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
