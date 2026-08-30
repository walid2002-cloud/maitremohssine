"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function EventTeaserSection() {
  const t = useCopy().eventTeaser;

  return (
    <section id="evenement" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-gold/25"
        >
          <div className="relative min-h-[420px] lg:min-h-[480px]">
            <Image
              src="/images/event-crowd.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/25" />
            <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-8 lg:min-h-[480px] lg:p-14">
              <span className="w-fit rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                {t.soldOut}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
              <h2 className="mt-2 text-3xl font-black sm:text-5xl">{t.title}</h2>
              <p className="mt-4 max-w-xl text-white/70">{t.subtitle}</p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/evenement">
                    {t.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
