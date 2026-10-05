"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PACK_SRC = "/images/cours-distance-pack.jpg";

export default function RemotePromoFlyer() {
  return (
    <section className="mx-auto max-w-lg px-4 pb-10 sm:max-w-md sm:px-6 sm:pb-12 md:max-w-lg lg:max-w-xl">
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-shadow duration-500 hover:border-gold/35 hover:shadow-[0_0_48px_rgba(201,162,39,0.14),0_28px_70px_rgba(0,0,0,0.5)] sm:rounded-[1.25rem]"
        initial={{ opacity: 0, y: 28, scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          whileHover={{ scale: 1.012 }}
        >
          <Image
            src={PACK_SRC}
            alt="Packs cours à distance — Français, Math, matières littéraires et contact WhatsApp promo"
            width={921}
            height={1024}
            className="h-auto w-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 480px"
            priority={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
