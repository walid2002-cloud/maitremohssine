"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { getRemoteCoursePromoWhatsAppLink } from "@/data/publicLinks";
import {
  isCourseDistanceRoute,
  trackCourseDistanceWhatsAppContact,
  trackCourseRegistrationClick,
} from "@/lib/metaPixel";
import { Button } from "@/components/ui/button";

const PROMO_IMAGE = "/images/cours-distance-promo-flyer.jpg";
const PROMO_W = 1024;
const PROMO_H = 576;
const SESSION_KEY = "maitreMohssinePromoSeen";
const OPEN_DELAY_MS = 700;
const REMOTE_OFFER_PATH = "/cours-distance";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function RemoteCoursePromoModal() {
  const t = useCopy().remotePage.promoModal;
  const pathname = usePathname();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const markSeenAndClose = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  const discoverOffer = useCallback(() => {
    trackCourseRegistrationClick();
    markSeenAndClose();
    if (pathname === REMOTE_OFFER_PATH) {
      window.requestAnimationFrame(() => {
        document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.location.assign(`${REMOTE_OFFER_PATH}#inscription`);
  }, [markSeenAndClose, pathname]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") return;
    } catch {
      /* ignore */
    }
    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") markSeenAndClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, markSeenAndClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center p-3 sm:p-5 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.78)] backdrop-blur-[10px]"
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-[calc(100vw-24px)] max-w-[430px] flex-col overflow-hidden rounded-3xl border border-gold/20 bg-[#070707] shadow-[0_0_0_1px_rgba(201,162,39,0.1),0_32px_100px_rgba(0,0,0,0.85),0_0_80px_rgba(201,162,39,0.08)] md:h-[min(680px,calc(100dvh-64px))] md:max-h-[calc(100dvh-64px)] md:w-[min(1100px,calc(100vw-80px))] md:max-w-[min(1100px,calc(100vw-80px))] md:flex-row"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={markSeenAndClose}
              className="absolute end-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition hover:border-gold/45 hover:bg-black/80 md:end-4 md:top-4"
              aria-label={t.close}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Colonne visuel — mobile : image bord à bord en haut */}
            <motion.div
              className="relative w-full shrink-0 overflow-hidden p-0 md:flex md:h-auto md:w-[55%] md:max-w-[55%] md:items-center md:justify-center md:bg-[#070707] md:p-5 lg:p-6"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            >
              <div className="relative w-full leading-none md:absolute md:inset-0 md:flex md:items-center md:justify-center md:p-5">
                <Image
                  src={PROMO_IMAGE}
                  alt={t.imageAlt}
                  width={PROMO_W}
                  height={PROMO_H}
                  className="block h-auto w-full md:max-h-full md:max-w-full md:w-auto md:object-contain"
                  sizes="(max-width: 768px) calc(100vw - 24px), 55vw"
                  priority
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 end-0 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent md:block"
                aria-hidden
              />
            </motion.div>

            {/* Colonne conversion */}
            <motion.div
              className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 pb-5 pt-3 md:w-[45%] md:max-w-[45%] md:px-6 md:py-6 lg:px-8 lg:py-7"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold md:text-[11px]">
                {t.cohortLabel}
              </p>
              <h2 id={titleId} className="mt-2 text-[1.35rem] font-black leading-[1.15] text-white md:mt-2.5 md:text-[1.65rem] lg:text-[1.75rem]">
                {t.titleLine1}
                <br />
                {t.titleLine2}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-white/50 md:mt-2.5 md:text-sm">
                {t.subtitle}
              </p>

              <ul className="mt-3 space-y-1.5 md:mt-4 md:space-y-2">
                {t.perks.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-xs text-white/75 md:text-sm">
                    <span className="shrink-0 text-gold" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1 md:mt-5">
                <span className="text-base text-white/30 line-through md:text-lg">{t.pricePast}</span>
                <span className="text-3xl font-black leading-none text-gold md:text-[2.35rem]">
                  {t.priceCurrent}
                </span>
                <span className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/75 md:text-xs">
                  {t.pricePromoLabel}
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-2 md:mt-5 md:gap-2.5">
                <Button
                  type="button"
                  size="lg"
                  className="h-12 w-full text-sm md:h-[3.25rem] md:text-base"
                  onClick={discoverOffer}
                >
                  {t.ctaOffer}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-12 w-full border-emerald-500/35 bg-emerald-950/15 text-sm text-white hover:border-emerald-400/50 md:h-[3.25rem] md:text-base"
                  asChild
                >
                  <a
                    href={getRemoteCoursePromoWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (isCourseDistanceRoute(pathname)) {
                        trackCourseDistanceWhatsAppContact();
                      }
                      markSeenAndClose();
                    }}
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0 text-emerald-400" />
                    {t.ctaWhatsApp}
                  </a>
                </Button>
              </div>

              <button
                type="button"
                onClick={markSeenAndClose}
                className="mt-3 py-1 text-center text-xs text-white/40 transition hover:text-white/60 md:mt-3.5 md:text-sm"
              >
                {t.skip}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
