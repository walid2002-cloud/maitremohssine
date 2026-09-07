"use client";

import { Lock, Video, Radio, FileText, Headphones } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import FaqList from "@/components/FaqList";
import DemoVideo from "@/components/media/DemoVideo";
import LeadForm from "@/components/forms/LeadForm";

const receiveIcons = [Lock, Video, Radio, FileText, Headphones];

export default function RemotePage() {
  const t = useCopy().remotePage;

  return (
    <main className="pt-28 pb-10">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{t.subtitle}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/45">{t.accessLine}</p>
      </div>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-gold/20 bg-white/[0.03] p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-black">{t.methodTitle}</h2>
          <p className="mt-3 leading-relaxed text-white/60">{t.method}</p>
        </div>
      </section>

      <DemoVideo />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">{t.receiveTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/50">{t.receiveLead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.receive.map((card, i) => {
            const Icon = receiveIcons[i] ?? Lock;
            return (
              <div key={card.title} className="rounded-3xl border border-gold/15 bg-black/40 p-6">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/50">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-black">{t.howTitle}</h2>
        <ol className="grid gap-4 md:grid-cols-5">
          {t.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-gold/15 bg-black/40 p-5"
            >
              <span className="text-xs font-black uppercase tracking-widest text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="inscription" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] border border-gold/25 bg-white/[0.03] p-6 text-center sm:p-10">
          <h2 className="text-3xl font-black sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/50">{t.ctaSubtitle}</p>
          <div className="mt-8 text-start">
            <LeadForm kind="distance" />
          </div>
        </div>
      </section>

      <FaqList title={t.faqTitle} items={t.faq} />
    </main>
  );
}
