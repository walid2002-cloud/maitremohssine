"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AmbientMusic() {
  const { lang, isRtl } = useLang();
  const t = translations.ambientMusic[lang];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      return;
    }

    audio.volume = 0.35;
    try {
      await audio.play();
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ambiance.mp3" loop preload="none" />
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        dir={isRtl ? "rtl" : "ltr"}
        aria-pressed={playing}
        className="fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full border border-[#c9a227]/35 bg-black/80 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-[#c9a227]/90 shadow-[0_0_24px_rgba(201,162,39,0.12)] backdrop-blur-sm transition-colors hover:border-[#c9a227]/60 hover:text-[#e8d089]"
      >
        <span className="text-sm leading-none" aria-hidden>
          {playing ? "🔇" : "🎵"}
        </span>
        {playing ? t.pause : t.play}
      </motion.button>
    </>
  );
}
