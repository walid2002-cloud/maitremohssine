"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const images = [
  { src: "/images/event-marrakesh.png", alt: "Événement Casablanca" },
  { src: "/images/event-flag.png", alt: "Drapeau marocain sur scène" },
  { src: "/images/event-lights.png", alt: "Flashlights du public" },
  { src: "/images/event-crowd.png", alt: "Salle comble" },
];

export default function EventGallery() {
  const { lang, isRtl } = useLang();
  const t = translations.gallery[lang];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">{t.badge}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">{t.title}</h2>
            <p className="mt-2 text-white/50 text-sm max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:row-span-2 group relative overflow-hidden cursor-pointer aspect-[3/4] md:min-h-[420px] border-2 border-[#c9a227]/50"
              onClick={() => setSelectedImage(0)}
            >
              <Image src={images[0].src} alt={images[0].alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#c9a227] text-xs font-bold mb-1">01</p>
                <p className="text-white font-bold text-sm sm:text-base">{t.captions[0]}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group relative overflow-hidden cursor-pointer aspect-[16/10] border border-[#c9a227]/40"
              onClick={() => setSelectedImage(1)}
            >
              <Image src={images[1].src} alt={images[1].alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[#c9a227] text-xs font-bold mb-1">02</p>
                <p className="text-white font-bold text-sm">{t.captions[1]}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative overflow-hidden cursor-pointer aspect-square border border-[#c9a227]/40"
                  onClick={() => setSelectedImage(idx)}
                >
                  <Image src={images[idx].src} alt={images[idx].alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-[#c9a227] text-[10px] font-bold mb-0.5">0{idx + 1}</p>
                    <p className="text-white text-xs font-bold leading-tight">{t.captions[idx]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-10 h-10 border border-[#c9a227]/50 text-[#c9a227] flex items-center justify-center hover:bg-[#c9a227]/10 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
              }}
              className="absolute left-3 sm:left-6 w-10 h-10 border border-[#c9a227]/40 text-[#c9a227] flex items-center justify-center z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
              }}
              className="absolute right-3 sm:right-6 w-10 h-10 border border-[#c9a227]/40 text-[#c9a227] flex items-center justify-center z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[3/4] sm:aspect-video border border-[#c9a227]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain bg-black"
                sizes="95vw"
                priority
              />
            </motion.div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-[#c9a227] text-xs font-bold">{selectedImage + 1} / {images.length}</p>
              <p className="text-white text-sm mt-1">{t.captions[selectedImage]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
