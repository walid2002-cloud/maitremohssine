"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, FileCheck, LineChart, Trophy, Sparkles } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";

const icons = [BookOpen, HeartHandshake, FileCheck, LineChart, Trophy, Sparkles];

export default function WhySection() {
  const t = useCopy().why;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group h-52 [perspective:1000px]"
              >
                <div className="relative h-full rounded-3xl border border-gold/20 bg-white/[0.03] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 group-hover:[transform:rotateY(12deg)_rotateX(4deg)]">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
