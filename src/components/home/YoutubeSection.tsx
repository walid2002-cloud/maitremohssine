"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Play } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { YOUTUBE_SUBSCRIBE } from "@/data/centers";
import { recommendedVideos, ytEmbed, ytThumb, type YtVideo } from "@/data/youtube";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

async function loadCatalog(): Promise<{ videos: YtVideo[] }> {
  return { videos: recommendedVideos };
}

function VideoCard({
  video,
  onOpen,
}: {
  video: YtVideo;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video.id)}
      className="group relative w-[min(78vw,320px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black text-start transition hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(201,162,39,0.18)]"
    >
      <div className="relative aspect-video">
        <Image src={ytThumb(video.id)} alt={video.title} fill className="object-cover" sizes="320px" />
        <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
        <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black opacity-90 transition group-hover:scale-110">
          <Play className="h-5 w-5 fill-current" />
        </span>
      </div>
      <p className="p-3 text-sm font-medium text-white/80">{video.title}</p>
      {video.theme ? (
        <p className="px-3 pb-3 text-[11px] uppercase tracking-widest text-gold/80">{video.theme}</p>
      ) : null}
    </button>
  );
}

export default function YoutubeSection() {
  const t = useCopy().youtube;
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const { data } = useQuery({
    queryKey: ["youtube-catalog"],
    queryFn: loadCatalog,
  });

  const videos = data?.videos ?? recommendedVideos;
  const loop = useMemo(() => [...videos, ...videos], [videos]);
  const paused = hovering || Boolean(active) || reduced;

  return (
    <section id="youtube" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
            <p className="mt-3 max-w-xl text-white/50">{t.subtitle}</p>
          </div>
          <Button asChild>
            <a href={YOUTUBE_SUBSCRIBE} target="_blank" rel="noopener noreferrer">
              {t.subscribe}
            </a>
          </Button>
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">{t.latest}</p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onTouchStart={() => setHovering(true)}
        onTouchEnd={() => {
          if (!active) setHovering(false);
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent sm:w-16" />

        <div className={cn("overflow-hidden", reduced && "overflow-x-auto")}>
          <div
            dir="ltr"
            className={cn(
              "flex w-max gap-4 px-4 pb-2 sm:px-6",
              !reduced && "yt-marquee-track",
              paused && !reduced && "is-paused"
            )}
          >
            {(reduced ? videos : loop).map((v, i) => (
              <VideoCard key={`${v.id}-${i}`} video={v} onOpen={setActive} />
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => {
            setActive(null);
            setHovering(false);
          }}
        >
          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="YouTube"
              src={`${ytEmbed(active)}?autoplay=1`}
              className="h-full w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
