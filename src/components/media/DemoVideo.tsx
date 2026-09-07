"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";

const DEMO_SRC = "/videos/cours-distance-demo.mp4";

export default function DemoVideo() {
  const t = useCopy().remotePage.demo;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [missing, setMissing] = useState(false);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    void el.play();
    setPlaying(true);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black sm:text-4xl">{t.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/50">{t.text}</p>
      </div>
      <div className="mx-auto max-w-sm">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/30 bg-black shadow-[0_20px_60px_rgba(201,162,39,0.08)]">
          {missing ? (
            <div className="flex aspect-[9/16] items-center justify-center bg-[#0c0c0c] px-6 text-center text-sm text-white/45">
              {t.placeholder}
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="aspect-[9/16] w-full bg-black object-cover"
                playsInline
                preload="metadata"
                controls={playing}
                onError={() => setMissing(true)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src={DEMO_SRC} type="video/mp4" />
              </video>
              {!playing && (
                <button
                  type="button"
                  onClick={play}
                  className="absolute inset-0 flex items-center justify-center bg-black/25"
                  aria-label={t.play}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-black shadow-[0_0_40px_rgba(201,162,39,0.35)]">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
