"use client";

import { useCopy } from "@/context/LanguageContext";

export default function RemoteTestimonials() {
  const t = useCopy().remotePage.testimonials;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-black sm:text-4xl">{t.title}</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <article
            key={`${item.name}-${item.text.slice(0, 24)}`}
            className="rounded-3xl border border-gold/15 bg-white/[0.03] p-6"
          >
            <p className="text-sm tracking-widest text-gold" aria-hidden>
              ★★★★★
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">&ldquo;{item.text}&rdquo;</p>
            <p className="mt-4 text-sm font-bold text-white/90">— {item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
