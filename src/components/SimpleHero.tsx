"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function SimpleHero() {
  const { lang, isRtl } = useLang();
  const t = translations.simpleHero[lang];

  return (
    <section
      id="accueil"
      dir={isRtl ? "rtl" : "ltr"}
      className="pt-20 pb-12 sm:pt-24 sm:pb-16 border-b border-[#c9a227]/20 bg-black"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="order-2 lg:order-1 flex flex-col gap-5"
          >
            <span className="inline-block w-fit px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black bg-[#c9a227]">
              {t.badge}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-4xl font-black text-white leading-snug">
              {t.title}
            </h1>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-lg">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#choisis-ta-ville"
                className="inline-flex justify-center items-center min-h-[52px] px-6 sm:px-8 bg-[#c9a227] text-black font-bold text-sm sm:text-base rounded-sm hover:bg-[#e4c04a] transition-colors"
              >
                {t.ctaCity}
              </a>
              <a
                href="#tournee"
                className="inline-flex justify-center items-center min-h-[52px] px-6 sm:px-8 border-2 border-[#c9a227]/70 text-[#c9a227] font-bold text-sm sm:text-base rounded-sm hover:bg-[#c9a227]/10 transition-colors"
              >
                {t.ctaTour}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] sm:aspect-[3/4] max-h-[420px] sm:max-h-[480px] rounded-md overflow-hidden border-2 border-[#c9a227]/60 bg-[#0a0a0a]"
          >
            <Image
              src="/images/event-marrakesh.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center space-y-1">
              <p className="text-white text-xl sm:text-2xl font-black tracking-tight uppercase">
                {t.imageLine1}
              </p>
              <p className="text-[#c9a227] text-lg sm:text-xl font-black uppercase tracking-wide">
                {t.imageLine2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
