"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";
import { REMOTE_FAQ_VIDEO_ENTRIES } from "@/data/remoteFaqVideos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RemoteVideoFaq() {
  const t = useCopy().remotePage.faqVideo;
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const pauseAll = useCallback((exceptId?: string) => {
    for (const [id, el] of Object.entries(videoRefs.current)) {
      if (!el || id === exceptId) continue;
      el.pause();
      try {
        el.currentTime = 0;
      } catch {
        /* ignore */
      }
    }
  }, []);

  const onOpenChange = (value: string) => {
    if (!value) {
      pauseAll();
      return;
    }
    pauseAll(value);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="mb-8 text-center text-3xl font-black">{t.title}</h2>
      <Accordion
        type="single"
        collapsible
        className="rounded-3xl border border-gold/15 px-5"
        onValueChange={onOpenChange}
      >
        {REMOTE_FAQ_VIDEO_ENTRIES.map((entry, index) => {
          const item = t.items[index];
          if (!item) return null;
          const portrait = entry.layout !== "landscape";
          return (
            <AccordionItem key={entry.id} value={entry.id}>
              <AccordionTrigger className="text-start text-[15px] sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={
                    portrait
                      ? "mx-auto w-full max-w-[min(100%,320px)] overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:max-w-[360px]"
                      : "overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                  }
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[entry.id] = el;
                    }}
                    src={entry.videoSrc}
                    controls
                    playsInline
                    preload="metadata"
                    className={
                      portrait
                        ? "aspect-[9/16] w-full max-h-[min(78vh,640px)] bg-black object-cover"
                        : "aspect-video w-full max-h-[70vh] bg-black object-contain"
                    }
                  />
                </motion.div>
                {"hint" in item && item.hint ? (
                  <p className="mt-3 text-center text-xs text-white/40">{item.hint}</p>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
