"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { ytEmbed, ytThumb } from "@/data/youtube";

export default function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute end-4 top-4 rounded-full border border-gold/30 p-2 text-white"
        aria-label="Fermer"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/30"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          title={title}
          src={`${ytEmbed(videoId)}?autoplay=1`}
          className="h-full w-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function YtThumbButton({
  id,
  title,
  onOpen,
  className,
}: {
  id: string;
  title: string;
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={onOpen} className={className}>
      <span className="relative block aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ytThumb(id)} alt="" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-black/25" />
        <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black">
          <Play className="h-5 w-5 fill-current" />
        </span>
      </span>
      <span className="sr-only">{title}</span>
    </button>
  );
}

export function useVideoModal() {
  const [active, setActive] = useState<{ id: string; title: string } | null>(null);
  return { active, setActive };
}
