"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { getNextEditionWhatsAppLink } from "@/data/publicLinks";

export default function SimpleHero() {
  const { lang, isRtl } = useLang();
  const t = translations.simpleHero[lang];

  return (
    <section
      id="accueil"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#c9a227]/15 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.12)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,162,39,0.06)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col gap-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-block w-fit px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black bg-[#c9a227]/90"
            >
              {t.badge}
            </motion.span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-black text-white leading-[1.15]">
              {t.title}
            </h1>

            <p className="text-[#e8d089]/90 text-base sm:text-lg leading-relaxed max-w-lg font-medium">
              {t.subtitle}
            </p>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg">
              {t.body}
            </p>

            <div className="pt-2">
              <a
                href={getNextEditionWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center min-h-[52px] px-8 sm:px-10 bg-[#c9a227] text-black font-bold text-sm sm:text-base rounded-sm hover:bg-[#e4c04a] transition-colors shadow-[0_0_32px_rgba(201,162,39,0.15)]"
              >
                {t.ctaNotify}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] sm:aspect-[3/4] max-h-[420px] sm:max-h-[500px] rounded-sm overflow-hidden border border-[#c9a227]/40 bg-[#0a0a0a] shadow-[0_0_60px_rgba(201,162,39,0.12)]"
          >
            <Image
              src="/images/event-marrakesh.png"
              alt=""
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center space-y-1">
              <p className="text-white/90 text-xl sm:text-2xl font-black tracking-tight">
                {t.imageLine1}
              </p>
              <p className="text-[#c9a227] text-lg sm:text-xl font-bold">
                {t.imageLine2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
