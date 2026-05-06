"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  cities,
  formatPhoneToWhatsApp,
  getCityCardDateSummary,
  getFirstAvailableSession,
  getWhatsAppLink,
} from "@/data/cities";
import { CASA_DELIVERY_REQUEST_URL } from "@/data/publicLinks";

export default function CityCardsSection() {
  const { lang, isRtl } = useLang();
  const t = translations.citySection[lang];
  const delivery = translations.deliveryNotice[lang];
  const casaBox = translations.casaDeliveryBox[lang];
  const [openId, setOpenId] = useState<string | null>(null);

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
                {city.id === "casablanca" ? (
                  <span className="mt-1 block space-y-0.5 sm:mx-auto sm:max-w-[10rem]">
                    <span className="block text-[10px] text-white/45 line-through decoration-red-500/60 decoration-2">
                      {lang === "fr" ? "09 mai" : "09 ماي"}
                    </span>
                    <span className="block text-xs font-bold text-[#c9a227]">
                      {lang === "fr" ? "27 mai" : "27 ماي"}
                    </span>
                  </span>
                ) : (
                  <span className="block text-[#c9a227] text-xs sm:text-sm mt-1 font-medium">
                    {getCityCardDateSummary(city, lang)}
                  </span>
                )}
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

                <div className="mt-5 space-y-4">
                  {selected.sessions.map((session) => {
                    const sold = session.status === "sold_out";
                    const casa = selected.id === "casablanca";

                    return (
                      <div
                        key={session.sessionId}
                        className={`relative overflow-hidden rounded-xl border px-4 py-4 ${
                          sold
                            ? "border-red-500/35 bg-black/55"
                            : "border-[#c9a227]/40 bg-[#0d0d0d]"
                        }`}
                      >
                        {sold && (
                          <div
                            className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl"
                            aria-hidden
                          >
                            <span className="select-none text-[3rem] sm:text-[4rem] font-black uppercase tracking-tighter text-red-600/[0.07] rotate-[-9deg]">
                              {t.stampSoldOut}
                            </span>
                          </div>
                        )}

                        <div className="relative z-10">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {sold ? (
                              <motion.span
                                className="inline-flex rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-red-950 to-red-800 text-red-50 border border-red-400/45 shadow-[0_0_12px_rgba(220,38,38,0.25)]"
                                animate={{ opacity: [0.82, 1, 0.82] }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                {t.soldOutBadge}
                              </motion.span>
                            ) : null}
                            {!sold && casa ? (
                              <span className="inline-flex rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-wide bg-[#c9a227] text-black shadow-sm">
                                {t.newDateBadge}
                              </span>
                            ) : null}
                          </div>

                          <div
                            className={`flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-4 ${
                              sold ? "text-white/50" : "text-white/85"
                            }`}
                          >
                            <span className={sold ? "line-through decoration-red-400/50 decoration-2" : ""}>
                              <span className="text-[#c9a227] font-bold">{t.dateLabel} </span>
                              {lang === "fr" ? session.date : session.dateAr}
                            </span>
                            <span className={sold ? "opacity-60" : ""}>
                              <span className="text-[#c9a227] font-bold">{t.placeLabel} </span>
                              {lang === "fr" ? session.lieu : session.lieuAr}
                            </span>
                          </div>

                          {session.venueMaps ? (
                            <div className="relative z-10 mt-3">
                              <a
                                href={session.venueMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center gap-2 min-h-[42px] px-4 text-xs font-bold border rounded-lg transition-colors ${
                                  sold
                                    ? "pointer-events-none border-white/15 text-white/30"
                                    : "border-[#c9a227]/55 text-[#c9a227] hover:bg-[#c9a227]/10"
                                }`}
                                tabIndex={sold ? -1 : 0}
                              >
                                <span aria-hidden>📍</span>
                                {t.venueMapCta}
                              </a>
                            </div>
                          ) : null}

                          {sold ? (
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
                                <span className="text-2xl shrink-0 leading-none" aria-hidden>
                                  📦
                                </span>
                                <div className="min-w-0 text-sm leading-relaxed text-white/90">
                                  <p className="font-bold text-[#e8d089]">{casaBox.line1}</p>
                                  <p className="mt-1 text-white/75">{casaBox.line2}</p>
                                </div>
                              </motion.div>

                              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <motion.a
                                  href={CASA_DELIVERY_REQUEST_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="relative inline-flex w-full min-h-[50px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-[#f0dc82]/40 bg-gradient-to-r from-[#b89220] via-[#c9a227] to-[#dfc056] px-6 text-center text-xs font-black text-black sm:text-sm"
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
                                    bookingDateFr: casaBookingDateFr,
                                  })}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-full min-h-[50px] flex-1 items-center justify-center rounded-lg border-2 border-[#c9a227] bg-transparent px-6 text-xs font-black text-[#c9a227] hover:bg-[#c9a227]/10 sm:text-sm"
                                >
                                  {t.reserveCasa27}
                                </a>
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

                <h4 className="mt-6 text-[#c9a227] text-xs font-black uppercase tracking-widest">
                  {t.pointsTitle}
                </h4>

                {selected.id === "casablanca" ? (
                  selected.salesPoints.length === 0 ? (
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
                              href={`https://wa.me/${formatPhoneToWhatsApp(sp.telephone)}?text=${encodeURIComponent(
                                `Bonjour, je veux réserver pour ${selected.city} le ${casaBookingDateFr}`
                              )}`}
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
                  )
                ) : (
                  <p className="mt-3 text-white/65 text-sm leading-relaxed text-center max-w-lg mx-auto px-1">
                    {t.venueSalesBody}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
