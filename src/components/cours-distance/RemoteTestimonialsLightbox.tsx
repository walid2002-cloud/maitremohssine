"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { REMOTE_TESTIMONIAL_SHOTS } from "@/data/remoteTestimonials";

const TOTAL = REMOTE_TESTIMONIAL_SHOTS.length;

type View = "grid" | "detail";

type Props = {
  open: boolean;
  onClose: () => void;
  initialView: View;
  initialIndex: number;
};

export default function RemoteTestimonialsLightbox({
  open,
  onClose,
  initialView,
  initialIndex,
}: Props) {
  const [view, setView] = useState<View>(initialView);
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    setView(initialView);
    setIndex(initialIndex);
    setZoomed(false);
  }, [open, initialView, initialIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? TOTAL - 1 : i - 1));
    setZoomed(false);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TOTAL);
    setZoomed(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (view !== "detail") return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, view, onClose, prev, next]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || view !== "detail") return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const dx = endX - touchStartX.current;
    if (dx < -48) next();
    else if (dx > 48) prev();
    touchStartX.current = null;
  };

  if (!open) return null;

  const shot = REMOTE_TESTIMONIAL_SHOTS[index];

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#050505]/[0.98] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie des témoignages"
    >
      <div className="flex shrink-0 items-center justify-between border-b border-gold/10 px-4 py-3 sm:px-6">
        <p className="text-sm font-semibold text-white/80">
          {view === "grid"
            ? "Tous les témoignages"
            : `${String(index + 1).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-gold/25 p-2 text-white transition-colors hover:border-gold/50 hover:bg-gold/10"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {view === "grid" ? (
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {REMOTE_TESTIMONIAL_SHOTS.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => {
                  setIndex(i);
                  setView("detail");
                }}
                className="group overflow-hidden rounded-xl border border-gold/15 bg-black transition duration-300 hover:scale-[1.02] hover:border-gold/40"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={360}
                  height={480}
                  className="h-auto max-h-48 w-full object-contain sm:max-h-56"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  loading={i < 4 ? "eager" : "lazy"}
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={prev}
            className="absolute start-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/25 bg-black/60 p-2.5 text-white backdrop-blur-sm transition hover:border-gold/45 sm:start-6"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute end-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold/25 bg-black/60 p-2.5 text-white backdrop-blur-sm transition hover:border-gold/45 sm:end-6"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={shot.src}
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: zoomed ? 1.35 : 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={() => setZoomed((z) => !z)}
              className="max-h-[min(85vh,900px)] max-w-full overflow-auto rounded-2xl border border-gold/20 bg-black shadow-[0_0_80px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1280}
                className="h-auto max-h-[min(85vh,900px)] w-auto max-w-[min(100vw-2rem,520px)] object-contain sm:max-w-xl"
                sizes="(max-width: 640px) 100vw, 520px"
                priority
              />
            </motion.button>
          </AnimatePresence>
          <p className="mt-4 text-center text-xs text-white/40">
            {zoomed ? "Appuyez pour réduire" : "Appuyez pour agrandir"}
          </p>
        </div>
      )}
    </div>
  );
}
