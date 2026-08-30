"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const t = useCopy().testimonials;
  const [i, setI] = useState(0);
  const item = t.items[i];

  const prev = () => setI((n) => (n === 0 ? t.items.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % t.items.length);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
        <p className="mt-3 text-white/50">{t.subtitle}</p>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-gold/20 bg-white/[0.03] px-8 py-12 backdrop-blur-xl">
          <Quote className="mx-auto h-8 w-8 text-gold/70" />
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.name}-${item.text}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">&ldquo;{item.text}&rdquo;</p>
              <p className="mt-6 font-bold text-gold">{item.name}</p>
              <p className="text-sm text-white/40">{item.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button type="button" onClick={prev} className="rounded-full border border-gold/30 p-2 hover:bg-gold/10" aria-label="Prev">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={next} className="rounded-full border border-gold/30 p-2 hover:bg-gold/10" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
