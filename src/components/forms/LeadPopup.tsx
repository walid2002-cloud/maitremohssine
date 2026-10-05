"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";
import { useCopy } from "@/context/LanguageContext";
import { POPUP_HIDE_MS, POPUP_STORAGE_KEY } from "@/lib/leads";

/** Pas de popup inscription global sur Cours à distance (popup promo dédié + formulaire page). */
const LEAD_POPUP_DISABLED_PATHS = ["/cours-distance"] as const;

export default function LeadPopup() {
  const t = useCopy().popup;
  const pathname = usePathname();
  const disabled = LEAD_POPUP_DISABLED_PATHS.some((p) => pathname === p);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (disabled) return;
    const until = Number(localStorage.getItem(POPUP_STORAGE_KEY) || 0);
    if (until && Date.now() < until) return;

    const timer = window.setTimeout(() => setOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, [disabled]);

  const dismiss = () => {
    localStorage.setItem(POPUP_STORAGE_KEY, String(Date.now() + POPUP_HIDE_MS));
    setOpen(false);
  };

  if (disabled) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label={t.close}
            onClick={dismiss}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0 }}
            className="relative w-full max-w-lg rounded-[1.75rem] border border-gold/30 bg-[#0a0a0a] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-7"
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute end-3 top-3 rounded-full border border-gold/25 p-2 text-white/70 hover:text-gold"
              aria-label={t.close}
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">{t.badge}</p>
            <h2 id="lead-popup-title" className="mt-2 pr-10 text-2xl font-black">
              {t.title}
            </h2>
            <p className="mt-2 text-sm text-white/50">{t.subtitle}</p>
            <div className="mt-5">
              <LeadForm
                kind="popup"
                compact
                onSuccess={() => {
                  window.setTimeout(dismiss, 1600);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
