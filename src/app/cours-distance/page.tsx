"use client";

import Link from "next/link";
import { useCopy } from "@/context/LanguageContext";
import RemoteEnrollmentSection from "@/components/cours-distance/RemoteEnrollmentSection";
import RemoteVideoFaq from "@/components/cours-distance/RemoteVideoFaq";
import RemotePromoFlyer from "@/components/cours-distance/RemotePromoFlyer";
import RemoteTestimonials from "@/components/cours-distance/RemoteTestimonials";
import DemoVideo from "@/components/media/DemoVideo";
import { Button } from "@/components/ui/button";
import { trackCourseRegistrationClick } from "@/lib/metaPixel";

export default function RemotePage() {
  const t = useCopy().remotePage;

  return (
    <main className="pt-28 pb-10">
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold sm:tracking-[0.25em]">
          {t.badge}
        </p>
        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {t.description}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold text-gold sm:text-base">{t.offer}</p>
      </section>

      <DemoVideo showFooterCta />

      <RemotePromoFlyer />

      <RemoteEnrollmentSection />

      <RemoteTestimonials />

      <RemoteVideoFaq />

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-4 sm:px-6">
        <div className="rounded-[2rem] border border-gold/25 bg-gradient-to-b from-gold/[0.08] to-transparent p-8 text-center sm:p-12">
          <h2 className="text-2xl font-black sm:text-4xl">{t.finalCta.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/55">{t.finalCta.subtitle}</p>
          <p className="mt-4 text-lg font-bold text-gold">{t.finalCta.price}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#inscription" onClick={() => trackCourseRegistrationClick()}>
              {t.finalCta.button}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
