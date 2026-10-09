"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { ytEmbed, ytThumb } from "@/data/youtube";
import { Button } from "@/components/ui/button";
import { trackCourseRegistrationClick, trackCourseVideoPlay } from "@/lib/metaPixel";

const DEMO_YT_ID = "FPDYWJZCjSI";

type Props = {
  showFooterCta?: boolean;
};

export default function DemoVideo({ showFooterCta = false }: Props) {
  const t = useCopy().remotePage.demo;
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14">
      <motion.div
        className="mx-auto w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
      >
        <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-black shadow-[0_0_0_1px_rgba(201,162,39,0.08),0_24px_80px_rgba(201,162,39,0.12),0_40px_100px_rgba(0,0,0,0.55)] sm:rounded-[1.25rem]">
          {playing ? (
            <iframe
              title={t.title}
              src={`${ytEmbed(DEMO_YT_ID)}?autoplay=1&rel=0`}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => {
                trackCourseVideoPlay();
                setPlaying(true);
              }}
              className="relative block w-full"
              aria-label={t.play}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ytThumb(DEMO_YT_ID, "maxresdefault")}
                alt=""
                className="aspect-video w-full object-cover"
              />
              <span className="absolute inset-0 bg-black/20" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-black shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-transform duration-300 hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Play className="h-7 w-7 fill-current sm:h-8 sm:w-8" />
                </span>
              </span>
            </button>
          )}
        </div>
        {showFooterCta ? (
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="#inscription" onClick={() => trackCourseRegistrationClick()}>
                {t.videoCta}
              </Link>
            </Button>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
