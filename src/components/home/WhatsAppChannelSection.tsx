"use client";

import { motion } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";
import WhatsAppChannelLink from "@/components/whatsapp/WhatsAppChannelLink";
import WhatsAppChannelQr from "@/components/whatsapp/WhatsAppChannelQr";

export default function WhatsAppChannelSection() {
  const t = useCopy().whatsappChannel;

  return (
    <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-4 sm:px-6"
      >
        <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/10 via-black/40 to-transparent p-6 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-start">
              <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                {t.badge}
              </span>
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">{t.homeTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
                {t.homeText}
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row md:items-start">
                <WhatsAppChannelLink
                  source="home"
                  variant="gold"
                  className="h-12 px-6 text-sm sm:text-base"
                >
                  {t.homeCta}
                </WhatsAppChannelLink>
                <WhatsAppChannelQr
                  label={t.scan}
                  size="sm"
                  className="sm:hidden"
                />
              </div>
            </div>
            <WhatsAppChannelQr
              label={t.scan}
              size="md"
              className="hidden sm:flex"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
