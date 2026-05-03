"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const reels = [
  { id: "DKIFXKCoyFJ", url: "https://www.instagram.com/reel/DKIFXKCoyFJ/embed/" },
  { id: "C7kQZjINJkS", url: "https://www.instagram.com/reel/C7kQZjINJkS/embed/" },
  { id: "C7z15P1NHtj", url: "https://www.instagram.com/reel/C7z15P1NHtj/embed/" },
];

export default function VideoShowcase() {
  const { lang, isRtl } = useLang();

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="py-14 sm:py-18 border-b border-[#c9a227]/20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c9a227] text-xs font-bold uppercase tracking-[0.25em]">
            {lang === "fr" ? "Vidéos" : "فيديوهات"}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
            {lang === "fr" ? "Revivez l'expérience" : "عيش التجربة"}
          </h2>
          <p className="mt-2 text-white/50 text-sm max-w-xl mx-auto">
            {lang === "fr"
              ? "Ambiance des événements en quelques reels."
              : "أجواء الأحداث فشي ريلات."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#c9a227]/35 bg-[#0a0a0a] overflow-hidden"
            >
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={reel.url}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  title={`Reel ${index + 1}`}
                  style={{ border: "none" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href="https://www.instagram.com/reel/DKIFXKCoyFJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase text-[#c9a227] border-b border-[#c9a227]/50 hover:border-[#c9a227]"
          >
            {lang === "fr" ? "Instagram" : "انستغرام"}
          </a>
        </p>
      </div>
    </section>
  );
}
