"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const n = useCountUp(value, 1600, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-3xl border border-gold/20 bg-white/[0.03] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <p className="text-3xl font-black text-gold sm:text-5xl">
        {n.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/55">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const t = useCopy().stats;

  return (
    <section id="stats" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {t.items.map((item, i) => (
            <StatCard key={item.label} {...item} delay={i * 0.08} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/40">
          <span className="rounded-full border border-gold/20 px-4 py-2">{t.cities}</span>
          <span className="rounded-full border border-gold/20 px-4 py-2">{t.success}</span>
        </div>
      </div>
    </section>
  );
}
