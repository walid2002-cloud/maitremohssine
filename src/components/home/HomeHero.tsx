"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Play, MapPin, Monitor, Sparkles } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { YOUTUBE_CHANNEL } from "@/data/centers";
import { Button } from "@/components/ui/button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function HomeHero() {
  const t = useCopy().hero;

  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(201,162,39,0.14),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold"
            >
              {t.kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="text-[12vw] font-black leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-[6.5rem]"
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 max-w-xl text-lg font-medium text-gold-bright sm:text-2xl"
            >
              {t.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base"
            >
              {t.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <a href="#apropos">
                  <Sparkles className="h-4 w-4" />
                  {t.ctaDiscover}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/centres">
                  <MapPin className="h-4 w-4" />
                  {t.ctaCenters}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cours-distance">
                  <Monitor className="h-4 w-4" />
                  {t.ctaRemote}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4" />
                  {t.ctaYoutube}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] max-h-[72vh] w-full max-w-md overflow-hidden rounded-[2rem] border border-gold/30 bg-black shadow-[0_40px_120px_rgba(201,162,39,0.18)]">
              <Image
                src="/images/event-flag.png"
                alt="Maître Mohssine"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 start-6 end-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">N°1 National</p>
                <p className="mt-1 text-xl font-black text-white">Maître Mohssine</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/40"
      >
        <span>{t.scroll}</span>
        <ChevronDown className="h-5 w-5 animate-bounce text-gold" />
      </a>
    </section>
  );
}
