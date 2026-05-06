"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  cities,
  formatPhoneToWhatsApp,
  getFirstAvailableSession,
  getWhatsAppLink,
  getCityGridItems,
} from "@/data/cities";
import { CASA_DELIVERY_REQUEST_URL } from "@/data/publicLinks";

export default function CityCardsSection() {
  const { lang, isRtl } = useLang();
  const t = translations.citySection[lang];
  const tg = translations.tourGrid[lang];
  const delivery = translations.deliveryNotice[lang];
  const casaBox = translations.casaDeliveryBox[lang];
  const [openId, setOpenId] = useState<string | null>(null);
  const [casaPvDetailOpen, setCasaPvDetailOpen] = useState(false);

  useEffect(() => {
    setCasaPvDetailOpen(false);
  }, [openId]);

  const selected = cities.find((c) => c.id === openId);
  const casaAvailable = selected?.id === "casablanca" ? getFirstAvailableSession(selected) : undefined;
  const casaBookingDateFr = casaAvailable?.date ?? "27 mai";

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
          {getCityGridItems(cities).map((item, i) => {
            const { city, session, gridKey } = item;
            const active = openId === city.id;
            const sold = session.status === "sold_out";
            return (
              <motion.button
                key={gridKey}
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
                  {lang === "fr" ? session.date : session.dateAr}
                </span>
                {city.id === "casablanca" ? (
                  <span
                    className={`mt-1 block text-[9px] sm:text-[10px] font-black uppercase tracking-wide ${
                      sold ? "text-red-400/95" : "text-[#c9a227]"
                    }`}
                  >
                    {sold ? t.soldOutBadge : t.newDateBadge}
                  </span>
                ) : null}
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

                <div
                  className={
                    selected.id === "casablanca"
                      ? "mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4"
                      : "mt-5 space-y-4"
                  }
                >
                  {selected.sessions.map((session) => {
                    const sold = session.status === "sold_out";
                    const casa = selected.id === "casablanca";

                    return (
                      <div
                        key={session.sessionId}
                        className={`relative overflow-hidden rounded-xl border px-4 pb-4 pt-4 ${
                          sold && casa
                            ? "border-[#c9a227]/35 bg-[#0a0a0a]"
                            : sold
                              ? "border-red-500/35 bg-black/55"
                              : "border-[#c9a227]/40 bg-[#0d0d0d]"
                        }`}
                      >
                        {sold && casa ? (
                          <div
                            className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
                            aria-hidden
                          >
                            <span className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black uppercase tracking-tight text-[#c9a227]/[0.055] rotate-[-11deg] text-[2.75rem] sm:text-[3.25rem]">
                              {t.stampSoldOut}
                            </span>
                          </div>
                        ) : null}

                        {sold && casa ? (
                          <motion.div
                            className="absolute top-3 end-3 z-20"
                            initial={{ scale: 0.35, rotate: -24, opacity: 0 }}
                            animate={{ scale: 1, rotate: -10, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 420, damping: 19, mass: 0.85 }}
                          >
                            <motion.span
                              className="inline-flex items-center rounded-sm border-2 border-red-500/95 bg-gradient-to-br from-red-950 to-red-900 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-red-50 shadow-[0_6px_22px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-red-400/25"
                              animate={{ scale: [1, 1.055, 1] }}
                              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                            >
                              {t.soldOutBadge}
                            </motion.span>
                          </motion.div>
                        ) : null}

                        <div className={`relative z-10 ${sold && casa ? "pe-24 sm:pe-28" : ""}`}>
                          <div className="mb-3 flex min-h-[2rem] flex-wrap items-start gap-2">
                            {!sold && casa ? (
                              <span className="inline-flex rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-wide bg-[#c9a227] text-black shadow-sm">
                                {t.newDateBadge}
                              </span>
                            ) : null}
                            {sold && !casa ? (
                              <motion.span
                                className="inline-flex rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-red-950 to-red-800 text-red-50 border border-red-400/45 shadow-[0_0_12px_rgba(220,38,38,0.25)]"
                                animate={{ opacity: [0.82, 1, 0.82] }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                {t.soldOutBadge}
                              </motion.span>
                            ) : null}
                          </div>

                          <div className="flex flex-col gap-2 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:gap-4">
                            <span>
                              <span className="font-bold text-[#c9a227]">{t.dateLabel} </span>
                              {lang === "fr" ? session.date : session.dateAr}
                            </span>
                            <span>
                              <span className="font-bold text-[#c9a227]">{t.placeLabel} </span>
                              {lang === "fr" ? session.lieu : session.lieuAr}
                            </span>
                          </div>

                          {session.venueMaps ? (
                            <div className="relative z-10 mt-3">
                              <a
                                href={session.venueMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border px-4 text-xs font-bold transition-colors ${
                                  sold
                                    ? "border-white/20 text-white/55 hover:border-[#c9a227]/40 hover:text-[#c9a227]"
                                    : "border-[#c9a227]/55 text-[#c9a227] hover:bg-[#c9a227]/10"
                                }`}
                              >
                                <span aria-hidden>📍</span>
                                {t.venueMapCta}
                              </a>
                            </div>
                          ) : null}

                          {sold && casa ? (
                            <>
                              <p className="relative z-10 mt-3 text-sm text-red-300/90">{t.soldOutNote}</p>
                              <button
                                type="button"
                                disabled
                                className="relative z-10 mt-4 flex min-h-[48px] w-full cursor-not-allowed items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-sm font-bold text-white/35"
                              >
                                {t.completeCasa}
                              </button>
                            </>
                          ) : null}

                          {sold && !casa ? (
                            <p className="relative z-10 mt-3 text-sm text-red-300/90">{t.soldOutNote}</p>
                          ) : null}

                          {!sold && casa && (
                            <div className="relative z-10 mt-4 space-y-4">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.35 }}
                                className="flex items-start gap-3 rounded-xl border border-[#c9a227]/35 bg-[#1c1a14] px-4 py-3.5 shadow-[inset_0_1px_0_0_rgba(201,162,39,0.12)]"
                              >
                                <span className="shrink-0 text-2xl leading-none" aria-hidden>
                                  📦
                                </span>
                                <div className="min-w-0 text-sm leading-relaxed text-white/90">
                                  <p className="font-bold text-[#e8d089]">{casaBox.line1}</p>
                                  {casaBox.line2 ? (
                                    <p className="mt-1 text-white/75">{casaBox.line2}</p>
                                  ) : null}
                                </div>
                              </motion.div>

                              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <motion.a
                                  href={CASA_DELIVERY_REQUEST_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="relative inline-flex min-h-[50px] w-full flex-1 items-center justify-center overflow-hidden rounded-lg border border-[#f0dc82]/40 bg-gradient-to-r from-[#b89220] via-[#c9a227] to-[#dfc056] px-6 text-center text-xs font-black text-black sm:text-sm"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  animate={{
                                    boxShadow: [
                                      "0 0 0 0 rgba(201, 162, 39, 0.35)",
                                      "0 0 22px 2px rgba(201, 162, 39, 0.4)",
                                      "0 0 0 0 rgba(201, 162, 39, 0.35)",
                                    ],
                                  }}
                                  transition={{
                                    boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                                  }}
                                >
                                  <span className="relative z-10">{casaBox.ctaDelivery}</span>
                                </motion.a>

                                <a
                                  href={getWhatsAppLink(selected.whatsappNumber, selected.city, {
                                    bookingDateFr: session.date,
                                  })}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-[50px] w-full flex-1 items-center justify-center rounded-lg border-2 border-[#c9a227] bg-transparent px-6 text-xs font-black text-[#c9a227] hover:bg-[#c9a227]/10 sm:text-sm"
                                >
                                  {t.reserveButton}
                                </a>
                              </div>

                              <div className="mt-4">
                                <button
                                  type="button"
                                  aria-expanded={casaPvDetailOpen}
                                  onClick={() => setCasaPvDetailOpen((o) => !o)}
                                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#c9a227]/45 px-4 text-xs font-bold text-[#c9a227] hover:bg-[#c9a227]/10 sm:text-sm"
                                >
                                  <span aria-hidden>🏪</span>
                                  {casaPvDetailOpen ? tg.salesPointsHide : t.pointsTitle}
                                </button>
                                <AnimatePresence initial={false}>
                                  {casaPvDetailOpen ? (
                                    <motion.div
                                      key="casa-pv-detail"
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.22 }}
                                      className="overflow-hidden"
                                    >
                                      {selected.salesPoints.length === 0 ? (
                                        <p className="mt-3 py-4 text-center text-sm text-white/50">{t.soon}</p>
                                      ) : (
                                        <ul className="mt-3 max-h-[min(55vh,22rem)] space-y-3 overflow-y-auto pr-1">
                                          {selected.salesPoints.map((sp, idx) => (
                                          <li
                                            key={idx}
                                            className="border border-[#c9a227]/25 bg-black/40 p-4"
                                          >
                                            <p className="text-sm font-bold text-white">{sp.name}</p>
                                            <p className="mt-0.5 text-xs text-[#c9a227]/90">{sp.quartier}</p>
                                            <p className="mt-2 text-xs text-white/45">{sp.adresse}</p>
                                            <p className="mt-2 text-xs text-white/60">
                                              {t.phone} {sp.telephone}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                              <a
                                                href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(
                                                  `Bonjour, je veux réserver pour ${selected.city} le ${casaBookingDateFr}`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#c9a227] px-3 py-2 text-xs font-bold text-black hover:bg-[#e4c04a]"
                                              >
                                                {t.whatsapp}
                                              </a>
                                              {sp.maps ? (
                                                <a
                                                  href={sp.maps}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="border border-[#c9a227]/60 px-3 py-2 text-xs font-bold text-[#c9a227] hover:bg-[#c9a227]/10"
                                                >
                                                  {t.maps}
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
                            </div>
                          )}

                        </div>
                      </div>
                    );
                  })}
                </div>

                {selected.id !== "casablanca" && (
                  <div className="mt-6 max-w-lg mx-auto space-y-3 rounded-xl border border-[#c9a227]/25 bg-black/30 px-4 py-4">
                    <p className="text-[#c9a227] font-black text-xs uppercase tracking-widest text-center">
                      {t.programHeading}
                    </p>
                    <p className="text-white text-sm font-bold text-center">{t.programTagline}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{t.programTicketsDay}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{t.programArriveEarly}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{t.programFollowSocial}</p>
                  </div>
                )}

                {(selected.id === "casablanca" || selected.id === "mohammedia") && (
                  <p className="mt-4 text-red-400/95 text-xs leading-relaxed border-l-2 border-red-500/40 pl-3">
                    {delivery}
                  </p>
                )}

                {selected.id !== "casablanca" ? (
                  <>
                    <h4 className="mt-6 text-[#c9a227] text-xs font-black uppercase tracking-widest">
                      {t.pointsTitle}
                    </h4>
                    <p className="mt-3 text-white/65 text-sm leading-relaxed text-center max-w-lg mx-auto px-1">
                      {t.venueSalesBody}
                    </p>
                  </>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
