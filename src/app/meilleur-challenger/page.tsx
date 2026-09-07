"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/forms/LeadForm";
import VideoModal from "@/components/media/VideoModal";
import {
  CHALLENGER_PLAYLIST_URL,
  WINNER_EPISODE_ID,
  challengerEpisodes,
  ytThumb,
} from "@/data/youtube";

export default function ChallengerPage() {
  const t = useCopy().challenger;
  const [activeId, setActiveId] = useState(challengerEpisodes[0]?.id ?? "");
  const [modal, setModal] = useState<{ id: string; title: string } | null>(null);
  const featured = challengerEpisodes.find((e) => e.id === activeId) ?? challengerEpisodes[0];
  const winnerEpisode = challengerEpisodes.find((e) => e.id === WINNER_EPISODE_ID);

  return (
    <main className="pt-28 pb-16">
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.subtitle}</p>
        <p className="mt-3 text-sm text-white/45">{t.extra}</p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href="#participer">{t.cta}</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-black">{t.playlistTitle}</h2>
          <a
            href={CHALLENGER_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold hover:underline"
          >
            {t.playlistCta}
          </a>
        </div>

        {featured && (
          <button
            type="button"
            onClick={() => setModal({ id: featured.id, title: featured.title })}
            className="group relative mb-8 w-full overflow-hidden rounded-[1.5rem] border border-gold/25 text-start"
          >
            <div className="relative aspect-video">
              <Image
                src={ytThumb(featured.id, "hqdefault")}
                alt={featured.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-black">
                <Play className="h-7 w-7 fill-current" />
              </span>
              <div className="absolute bottom-4 start-4 end-4">
                <p className="text-xs uppercase tracking-widest text-gold">
                  {featured.episode} {featured.duration ? `· ${featured.duration}` : ""}
                </p>
                <p className="mt-1 text-lg font-bold sm:text-2xl">{featured.title}</p>
              </div>
            </div>
          </button>
        )}

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {challengerEpisodes.map((ep) => (
            <button
              key={ep.id}
              type="button"
              onClick={() => {
                setActiveId(ep.id);
                setModal({ id: ep.id, title: ep.title });
              }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black text-start transition hover:border-gold/40"
            >
              <div className="relative aspect-video">
                <Image src={ytThumb(ep.id)} alt="" fill className="object-cover" sizes="25vw" />
                <span className="absolute bottom-2 start-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                  {ep.duration}
                </span>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{ep.episode}</p>
                <p className="mt-1 line-clamp-2 text-xs font-medium text-white/80">{ep.title}</p>
                <p className="mt-2 text-[11px] text-gold">{t.watch}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/10 to-transparent">
          <div className="grid md:grid-cols-2">
            <div className="relative flex aspect-square items-center justify-center border-b border-gold/15 bg-[#0c0c0c] md:aspect-auto md:min-h-[320px] md:border-b-0 md:border-e">
              <Image
                src="/images/winner-anaass-episode.jpg"
                alt=""
                fill
                className="object-cover opacity-35"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-gold shadow-[0_0_40px_rgba(201,162,39,0.35)] sm:h-56 sm:w-56">
                <Image
                  src="/images/winner-anaass.jpg"
                  alt={t.winnerName}
                  fill
                  className="object-cover"
                  sizes="224px"
                  priority
                />
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <span className="inline-flex rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                {t.winnerBadge}
              </span>
              <h2 className="mt-4 text-3xl font-black">{t.winnerTitle}</h2>
              <p className="mt-2 text-xl font-bold text-gold">{t.winnerName}</p>
              <a
                href="https://www.instagram.com/1naaaassss_/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-white/70 hover:text-gold hover:underline"
              >
                {t.winnerInstagram}
              </a>
              <p className="mt-3 text-white/60">{t.winnerText}</p>
              {winnerEpisode && (
                <button
                  type="button"
                  onClick={() =>
                    setModal({
                      id: winnerEpisode.id,
                      title: winnerEpisode.title,
                    })
                  }
                  className="mt-6 text-sm font-semibold text-gold hover:underline"
                >
                  {t.winnerWatch}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="participer" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-black">{t.howTitle}</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border border-gold/15 bg-black/40 p-5">
              <span className="text-xs font-black uppercase tracking-widest text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-gold/25 bg-white/[0.03] p-6 sm:p-10">
          <h2 className="text-center text-3xl font-black">{t.formTitle}</h2>
          <div className="mt-8">
            <LeadForm kind="challenger" />
          </div>
        </div>
      </section>

      {modal && (
        <VideoModal videoId={modal.id} title={modal.title} onClose={() => setModal(null)} />
      )}
    </main>
  );
}
