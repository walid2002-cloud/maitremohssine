"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCopy } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function CoursesSection() {
  const t = useCopy().courses;

  const cards = [
    {
      title: t.presentielTitle,
      desc: t.presentielDesc,
      cta: t.presentielCta,
      href: "/centres",
      img: "/images/event-crowd.png",
    },
    {
      title: t.remoteTitle,
      desc: t.remoteDesc,
      cta: t.remoteCta,
      href: "/cours-distance",
      img: "/images/event-lights.png",
    },
  ];

  return (
    <section id="cours" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-gold/20"
              style={{ perspective: 1200 }}
            >
              <Image
                src={card.img}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition duration-500 group-hover:[transform:rotateY(4deg)_translateZ(12px)]">
                <h3 className="text-3xl font-black">{card.title}</h3>
                <p className="mt-3 max-w-md text-white/70">{card.desc}</p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
