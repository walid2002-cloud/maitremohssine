"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";
import { REMOTE_TESTIMONIAL_SHOTS } from "@/data/remoteTestimonials";

export default function RemoteTestimonials() {
  const t = useCopy().remotePage.testimonials;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-black sm:text-4xl">{t.title}</h2>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
        {REMOTE_TESTIMONIAL_SHOTS.map((shot, index) => (
          <motion.figure
            key={shot.src}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gold/15 bg-white/[0.02] shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={480}
              height={720}
              className="h-auto w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
