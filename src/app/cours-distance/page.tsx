"use client";

import { Monitor, Radio, RefreshCw } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { getEnrollWhatsAppLink } from "@/data/publicLinks";
import { Button } from "@/components/ui/button";
import FaqList from "@/components/FaqList";

const stepIcons = [Monitor, Radio, RefreshCw];

export default function RemotePage() {
  const t = useCopy().remotePage;

  return (
    <main className="pt-28 pb-10">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/50">{t.subtitle}</p>
      </div>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-gold/20 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-black">{t.methodTitle}</h2>
          <p className="mt-3 leading-relaxed text-white/60">{t.method}</p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-black">{t.howTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.title} className="rounded-3xl border border-gold/15 bg-black/40 p-6">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/50">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <FaqList title={t.faqTitle} items={t.faq} />

      <div className="pb-16 text-center">
        <Button asChild size="lg">
          <a href={getEnrollWhatsAppLink("distance")} target="_blank" rel="noopener noreferrer">
            {t.cta}
          </a>
        </Button>
      </div>
    </main>
  );
}
