"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  tourMoments,
  getReelEmbedUrl,
  hasPlayableMedia,
  type TourMoment,
} from "@/data/souvenirs";

export default function BestMomentsSection() {
  const { lang, isRtl } = useLang();
  const t = translations.bestMoments[lang];
  const [activeMoment, setActiveMoment] = useState<TourMoment | null>(null);

  const openMedia = (moment: TourMoment) => {
    if (!hasPlayableMedia(moment)) return;
    setActiveMoment(moment);
  };

  const closeMedia = () => setActiveMoment(null);

  const useLocalVideo = Boolean(activeMoment?.videoUrl);

  return (
    <>
      <section
        id="moments"
        dir={isRtl ? "rtl" : "ltr"}
        className="relative py-16 sm:py-20 border-b border-[#c9a227]/15"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-[#c9a227]/80 text-xs font-bold uppercase tracking-[0.3em]">
              {t.badge}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {t.title}
            </h2>
            <p className="mt-3 text-white/45 text-sm sm:text-base max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tourMoments.map((moment, i) => {
              const canPlay = hasPlayableMedia(moment);
              const sessionLabel =
                lang === "fr" ? moment.sessionLabel : moment.sessionLabelAr;

              return (
                <motion.article
                  key={moment.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-sm border border-[#c9a227]/25 bg-[#0a0a0a]/90 p-5 transition-colors hover:border-[#c9a227]/45"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <span className="absolute top-4 end-4 text-[8px] sm:text-[9px] font-black uppercase tracking-wide text-red-400/90">
                    {t.soldOutBadge}
                  </span>

                  <div className="relative pe-14">
                    <h3 className="font-bold text-white text-lg">
                      {lang === "fr" ? moment.city : moment.cityAr}
                    </h3>
                    <p className="mt-1 text-[#c9a227] text-sm font-medium">
                      {lang === "fr" ? moment.date : moment.dateAr}
                    </p>
                    {sessionLabel ? (
                      <p className="mt-1 text-white/40 text-xs">{sessionLabel}</p>
                    ) : null}

                    {canPlay ? (
                      <button
                        type="button"
                        onClick={() => openMedia(moment)}
                        className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border border-[#c9a227]/50 bg-[#c9a227]/[0.06] px-4 text-xs font-bold uppercase tracking-wide text-[#e8d089] transition-colors hover:bg-[#c9a227]/15"
                      >
                        {t.viewAmbiance}
                      </button>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeMoment && hasPlayableMedia(activeMoment) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeMedia}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative w-full max-w-[min(100%,22rem)] overflow-hidden rounded-sm border-2 border-[#c9a227]/55 bg-[#0a0a0a] shadow-[0_0_80px_rgba(201,162,39,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeMedia}
                className="absolute top-3 end-3 z-10 w-9 h-9 flex items-center justify-center rounded-sm border border-[#c9a227]/50 bg-black/70 text-[#c9a227] hover:bg-[#c9a227]/15 transition-colors"
                aria-label={t.close}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-4 pt-4 pb-3 border-b border-[#c9a227]/20 pe-14">
                <p className="font-bold text-white text-sm">
                  {lang === "fr" ? activeMoment.city : activeMoment.cityAr}
                </p>
                <p className="text-[#c9a227] text-xs mt-0.5">
                  {lang === "fr" ? activeMoment.date : activeMoment.dateAr}
                </p>
              </div>

              <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                {useLocalVideo ? (
                  <video
                    key={activeMoment.videoUrl}
                    src={activeMoment.videoUrl}
                    controls
                    playsInline
                    autoPlay
                    muted
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                  />
                ) : activeMoment.reelUrl ? (
                  <iframe
                    key={activeMoment.reelUrl}
                    src={getReelEmbedUrl(activeMoment.reelUrl)}
                    title={`${activeMoment.city} — ${activeMoment.date}`}
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ border: "none" }}
                  />
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
