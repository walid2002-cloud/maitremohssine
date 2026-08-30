"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";

const images = [
  "/images/event-marrakesh.png",
  "/images/event-flag.png",
  "/images/event-lights.png",
  "/images/event-crowd.png",
];

export default function GallerySection() {
  const t = useCopy().gallery;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galerie" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
          <p className="mt-3 text-white/50">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl border border-gold/20 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[220px]" : "aspect-[4/5]"}`}>
                <Image src={src} alt={t.captions[i]} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="50vw" />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-3 start-3 end-3 text-start text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {t.captions[i]}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setOpen(null)}
          >
            <div className="relative h-[80vh] w-full max-w-4xl">
              <Image src={images[open]} alt="" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
