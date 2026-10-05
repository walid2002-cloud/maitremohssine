"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { REMOTE_TESTIMONIAL_SHOTS } from "@/data/remoteTestimonials";
import { Button } from "@/components/ui/button";
import RemoteTestimonialsLightbox from "@/components/cours-distance/RemoteTestimonialsLightbox";

const TOTAL = REMOTE_TESTIMONIAL_SHOTS.length;
const DESKTOP_PREVIEW = 6;
const AUTOPLAY_MS = 5500;

function padIndex(n: number) {
  return String(n).padStart(2, "0");
}

function TestimonialShotImage({
  shot,
  priority,
  className,
  sizes,
}: {
  shot: (typeof REMOTE_TESTIMONIAL_SHOTS)[number];
  priority?: boolean;
  className?: string;
  sizes: string;
}) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={480}
      height={720}
      className={className ?? "h-full w-full object-contain"}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}

export default function RemoteTestimonials() {
  const t = useCopy().remotePage.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    view: "grid" | "detail";
    index: number;
  }>({ open: false, view: "grid", index: 0 });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userPausedRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const previewShots = REMOTE_TESTIMONIAL_SHOTS.slice(0, DESKTOP_PREVIEW);
  const nextIndex = (activeIndex + 1) % TOTAL;
  const nextShot = REMOTE_TESTIMONIAL_SHOTS[nextIndex];
  const activeShot = REMOTE_TESTIMONIAL_SHOTS[activeIndex];

  const stopAutoplay = useCallback(() => {
    userPausedRef.current = true;
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const prev = useCallback(() => {
    stopAutoplay();
    setActiveIndex((i) => (i === 0 ? TOTAL - 1 : i - 1));
  }, [stopAutoplay]);

  const next = useCallback(() => {
    stopAutoplay();
    setActiveIndex((i) => (i + 1) % TOTAL);
  }, [stopAutoplay]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile || userPausedRef.current) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isMobile]);

  useEffect(() => {
    [1, 2].forEach((offset) => {
      const i = (activeIndex + offset) % TOTAL;
      const img = new window.Image();
      img.src = REMOTE_TESTIMONIAL_SHOTS[i].src;
    });
  }, [activeIndex]);

  const openLightbox = (view: "grid" | "detail", index: number) => {
    stopAutoplay();
    setLightbox({ open: true, view, index });
  };

  const onCarouselTouchStart = (e: TouchEvent) => {
    stopAutoplay();
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onCarouselTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const dx = endX - touchStartX.current;
    if (dx < -48) next();
    else if (dx > 48) prev();
    touchStartX.current = null;
  };

  const progress = ((activeIndex + 1) / TOTAL) * 100;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-black sm:text-4xl">{t.title}</h2>
        {"subtitle" in t && t.subtitle ? (
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55 sm:text-base">{t.subtitle}</p>
        ) : null}
      </div>

      {/* Mobile — carrousel compact */}
      <div
        className="mx-auto mt-8 max-w-md md:hidden"
        onTouchStart={onCarouselTouchStart}
        onTouchEnd={onCarouselTouchEnd}
      >
        <div className="relative px-1 pb-2 pt-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-8 z-0 h-[calc(100%-2rem)] rounded-2xl border border-gold/10 bg-neutral-950"
            style={{ transform: "translate(10px, 14px) rotate(2.5deg) scale(0.94)", opacity: 0.35 }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-10 z-0 h-[calc(100%-2.5rem)] rounded-2xl border border-gold/10 bg-neutral-900"
            style={{ transform: "translate(5px, 7px) rotate(-1.5deg) scale(0.97)", opacity: 0.5 }}
          />

          <div className="absolute end-0 top-1/2 z-0 h-[78%] w-[14%] -translate-y-1/2 overflow-hidden rounded-l-xl border border-gold/10 bg-black/80 opacity-50">
            <TestimonialShotImage
              shot={nextShot}
              sizes="80px"
              className="h-full w-[700%] max-w-none object-cover object-left"
            />
          </div>

          <div className="relative z-[1] mx-auto w-[88%]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.button
                key={activeShot.src}
                type="button"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                onClick={() => openLightbox("detail", activeIndex)}
                className="flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-[0_16px_48px_rgba(0,0,0,0.55)] transition-colors hover:border-gold/35"
              >
                <div className="flex h-[min(520px,52vh)] w-full items-center justify-center bg-black">
                  <TestimonialShotImage
                    shot={activeShot}
                    priority={activeIndex === 0}
                    sizes="(max-width: 768px) 88vw, 400px"
                    className="max-h-[min(520px,52vh)] w-full object-contain"
                  />
                </div>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-gold/25 p-2 text-white transition hover:border-gold/45 hover:bg-gold/10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex min-w-[10rem] flex-col items-center gap-2 px-2">
            <p className="font-mono text-sm tabular-nums text-white/80">
              {padIndex(activeIndex + 1)} / {padIndex(TOTAL)}
            </p>
            <div className="flex h-1 w-full max-w-[200px] items-center gap-2">
              <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 start-0 rounded-full bg-gold"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>
            <div className="flex gap-1.5">
              {REMOTE_TESTIMONIAL_SHOTS.map((_, i) => (
                <button
                  key={REMOTE_TESTIMONIAL_SHOTS[i].src}
                  type="button"
                  aria-label={`Témoignage ${i + 1}`}
                  onClick={() => {
                    stopAutoplay();
                    setActiveIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-4 bg-gold" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-gold/25 p-2 text-white transition hover:border-gold/45 hover:bg-gold/10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Tablette / desktop — masonry (6 visibles) */}
      <div className="mt-10 hidden columns-2 gap-4 md:block lg:columns-3 lg:gap-5">
        {previewShots.map((shot, index) => (
          <motion.figure
            key={shot.src}
            className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-gold/15 bg-white/[0.02] shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:scale-[1.015] hover:border-gold/40 sm:mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
          >
            <button
              type="button"
              className="block w-full text-start"
              onClick={() => openLightbox("detail", index)}
            >
              <TestimonialShotImage
                shot={shot}
                priority={index === 0}
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-contain"
              />
            </button>
          </motion.figure>
        ))}
      </div>

      <div className="mt-8 flex justify-center md:mt-10">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="border-gold/30 text-white hover:border-gold/50 hover:bg-gold/10"
          onClick={() => openLightbox("grid", 0)}
        >
          {"viewAll" in t && t.viewAll ? t.viewAll : "Voir tous les témoignages"}
        </Button>
      </div>

      <RemoteTestimonialsLightbox
        open={lightbox.open}
        initialView={lightbox.view}
        initialIndex={lightbox.index}
        onClose={() => setLightbox((s) => ({ ...s, open: false }))}
      />
    </section>
  );
}
