"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";

export default function AboutSection() {
  const t = useCopy().about;

  return (
    <section id="apropos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.08),transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/25"
        >
          <Image
            src="/images/event-marrakesh.png"
            alt="Maître Mohssine"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">{t.lead}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [t.visionTitle, t.vision],
              [t.missionTitle, t.mission],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-gold/15 bg-white/[0.03] p-5 backdrop-blur-md"
              >
                <h3 className="font-bold text-gold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-5">
            <h3 className="font-bold text-white">{t.whyTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{t.why}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-6 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />
          {t.timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-gold/15 bg-black/40 p-5"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-gold">{item.year}</span>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
