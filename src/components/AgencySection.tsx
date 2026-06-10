"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const AGENCY_LOGO = "/images/with-khalil-agency-logo.png";

export default function AgencySection() {
  const { lang, isRtl } = useLang();
  const t = translations.agency[lang];

  return (
    <section
      id="agence"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative py-12 sm:py-14 border-t border-[#c9a227]/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[#c9a227]/70 text-[10px] font-bold uppercase tracking-[0.28em]">
            {t.badge}
          </span>

          <div className="relative h-10 sm:h-12 w-28 sm:w-32">
            <Image
              src={AGENCY_LOGO}
              alt="With Khalil Agency"
              fill
              className="object-contain object-center"
              sizes="128px"
            />
          </div>

          <h2 className="text-lg sm:text-xl font-black text-white">{t.title}</h2>

          <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xl">
            {t.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
