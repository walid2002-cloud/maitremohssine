"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/centers";
import { getEnrollWhatsAppLink } from "@/data/publicLinks";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const t = useCopy().cta;

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.16),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-gold/30 bg-black/50 px-6 py-16 text-center shadow-[0_0_80px_rgba(201,162,39,0.12)] backdrop-blur-xl sm:px-12"
      >
        <h2 className="text-3xl font-black sm:text-6xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/55">{t.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={getEnrollWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              {t.whatsapp}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="h-5 w-5" />
              {t.phone} · {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
