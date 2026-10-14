"use client";

import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import {
  getRemoteCourseEnrollmentWhatsApp,
  getRemoteCoursePromoWhatsAppLink,
} from "@/data/publicLinks";
import { detectTrafficSource, submitLead } from "@/lib/leads";
import {
  isCourseDistanceRoute,
  trackCourseDistanceLeadSuccess,
  trackCourseDistanceWhatsAppContact,
  trackCourseRegistrationClick,
} from "@/lib/metaPixel";
import { Button } from "@/components/ui/button";

const PROMO_IMAGE = "/images/rappel-controle-1bac-popup.png";
const SESSION_KEY = "maitreMohssinePromoSeen";
const OPEN_DELAY_MS = 700;

const fieldClass =
  "h-10 w-full rounded-xl border border-gold/25 bg-white/[0.06] px-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-gold focus:ring-1 focus:ring-gold/40 sm:h-11 sm:px-4";

function splitFullName(full: string): { nom: string; prenom: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { nom: "", prenom: "" };
  if (parts.length === 1) return { nom: parts[0], prenom: "—" };
  return { nom: parts[0], prenom: parts.slice(1).join(" ") };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function RemoteCoursePromoModal() {
  const t = useCopy().remotePage.promoModal;
  const formCopy = useCopy().remotePage.form;
  const formT = useCopy().form;
  const pathname = usePathname();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openedAt = useRef(Date.now());
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ville, setVille] = useState("");
  const [company, setCompany] = useState("");

  const markSeenAndClose = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    openedAt.current = Date.now();
  }, [open]);

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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting.current || status === "loading") return;

    const name = fullName.trim();
    const phone = whatsapp.trim();
    const city = ville.trim();
    if (!name || !phone || !city) return;

    trackCourseRegistrationClick();
    submitting.current = true;
    setStatus("loading");

    const { nom, prenom } = splitFullName(name);

    try {
      const result = await submitLead({
        kind: "distance",
        nom,
        prenom,
        telephone: phone,
        filiere: "—",
        ville: city,
        source: detectTrafficSource(),
        page: window.location.pathname,
        company,
        formOpenedAt: openedAt.current,
      });

      if (!result.ok) {
        setStatus("error");
        return;
      }

      trackCourseDistanceLeadSuccess();
      markSeenAndClose();

      window.location.href = getRemoteCourseEnrollmentWhatsApp({
        fullName: name,
        telephone: phone,
        ville: city,
      });
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/82 backdrop-blur-md"
            aria-label={t.close}
            onClick={markSeenAndClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[min(680px,calc(100dvh-16px))] w-[min(940px,calc(100vw-16px))] flex-row overflow-hidden rounded-2xl border border-gold/20 bg-[#070707] shadow-[0_0_0_1px_rgba(201,162,39,0.1),0_32px_100px_rgba(0,0,0,0.85)] sm:rounded-[1.35rem]"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={markSeenAndClose}
              className="absolute end-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white backdrop-blur-sm transition hover:border-gold/45 sm:end-3 sm:top-3 sm:h-10 sm:w-10"
              aria-label={t.close}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Affiche — colonne gauche, image entière sans scroll */}
            <div className="flex h-full w-[38%] min-w-[120px] max-w-[380px] shrink-0 items-center justify-center border-e border-white/10 bg-[#0a0a0a] p-1.5 sm:w-[42%] sm:p-3 md:p-4">
              <div className="relative h-full w-full">
                <Image
                  src={PROMO_IMAGE}
                  alt={t.imageAlt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 38vw, 380px"
                  priority
                />
              </div>
            </div>

            {/* Formulaire — colonne droite */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-5 overflow-hidden px-4 py-5 sm:gap-6 sm:px-6 sm:py-6 md:px-8 md:py-7">
              <div className="space-y-2 sm:space-y-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold sm:text-[10px]">
                  {t.cohortLabel}
                </p>
                <h2
                  id={titleId}
                  className="text-base font-black leading-snug text-white sm:text-lg md:text-xl"
                >
                  {t.titleLine1}
                </h2>
                <p className="text-xs font-semibold leading-relaxed text-white/75 sm:text-sm">{t.titleLine2}</p>
                <p className="text-[11px] leading-relaxed text-white/45 sm:text-xs">{t.subtitle}</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-3.5 sm:space-y-4">
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />
                <input
                  required
                  name="fullName"
                  placeholder={formCopy.fullName}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={fieldClass}
                  autoComplete="name"
                />
                <input
                  required
                  name="whatsapp"
                  type="tel"
                  placeholder={formCopy.whatsapp}
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className={fieldClass}
                  autoComplete="tel"
                />
                <input
                  required
                  name="ville"
                  placeholder={formCopy.ville}
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className={fieldClass}
                  autoComplete="address-level2"
                />

                {status === "error" && (
                  <p className="text-[11px] text-red-300 sm:text-xs" role="alert">
                    {formT.error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="!mt-5 h-11 w-full text-sm font-bold sm:!mt-6 sm:h-12"
                >
                  {status === "loading" ? formT.sending : t.ctaOffer}
                </Button>
              </form>

              <div className="flex flex-col gap-4 sm:gap-5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-10 w-full border-emerald-500/35 bg-emerald-950/15 text-xs text-white hover:border-emerald-400/50 sm:h-11 sm:text-sm"
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
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                  {t.ctaWhatsApp}
                </a>
              </Button>

              <button
                type="button"
                onClick={markSeenAndClose}
                className="py-1 text-center text-[11px] text-white/40 transition hover:text-white/60 sm:text-xs"
              >
                {t.skip}
              </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
