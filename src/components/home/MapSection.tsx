"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { useCopy, useLang } from "@/context/LanguageContext";
import { mapCenters } from "@/data/centers";
import { cn, mapsEmbedSrc, telHref, whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  const t = useCopy().map;
  const { lang } = useLang();
  const [activeId, setActiveId] = useState(mapCenters[0]?.id ?? "");
  const selected = mapCenters.find((c) => c.id === activeId) ?? mapCenters[0];

  if (!selected) return null;

  return (
    <section id="centres-map" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">{t.subtitle}</p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-gold/20 bg-[#070707] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]">
          <div className="flex flex-col gap-2 p-4 sm:p-5">
            {mapCenters.map((c) => {
              const isActive = c.id === selected.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-4 text-start transition",
                    isActive
                      ? "border-gold/50 bg-gold/10"
                      : "border-white/10 bg-white/[0.03] hover:border-gold/30"
                  )}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    {lang === "fr" ? c.city : c.cityAr}
                  </p>
                  <p className="mt-1 font-bold text-white">{c.name}</p>
                  <p className="mt-1 text-xs text-white/45">{c.adresse.trim() || c.quartier}</p>
                  {c.plusCode ? (
                    <p className="mt-2 font-mono text-[11px] text-gold/80">{c.plusCode}</p>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="flex min-h-[360px] flex-col border-t border-gold/15 lg:border-t-0 lg:border-s">
            <iframe
              key={selected.id}
              title={selected.name}
              src={mapsEmbedSrc(selected.maps, selected.mapsQuery)}
              className="h-[280px] w-full grow lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="space-y-3 border-t border-gold/15 p-5">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {selected.adresse.trim() || selected.quartier}
                  {selected.plusCode ? ` · ${selected.plusCode}` : ""}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selected.whatsappNumber.trim() ? (
                  <Button asChild size="sm">
                    <a
                      href={whatsappLink(
                        selected.whatsappNumber,
                        `Bonjour, je m'intéresse au ${selected.name}`
                      )}
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t.whatsapp}
                    </a>
                  </Button>
                ) : null}
                {selected.telephone.trim() ? (
                  <Button asChild variant="outline" size="sm">
                    <a href={telHref(selected.telephone)}>
                      <Phone className="h-4 w-4" />
                      {selected.telephone}
                    </a>
                  </Button>
                ) : null}
                {selected.maps.trim() ? (
                  <Button asChild variant="outline" size="sm">
                    <a href={selected.maps} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.maps}
                    </a>
                  </Button>
                ) : null}
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/centres#${selected.id}`}>{t.viewCenter}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
