"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Phone, MessageCircle } from "lucide-react";
import { useCopy, useLang } from "@/context/LanguageContext";
import { centerCities, centers } from "@/data/centers";
import { mapsEmbedSrc, telHref, whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CentresPage() {
  const t = useCopy().centersPage;
  const mapT = useCopy().map;
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const [city, setCity] = useState("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return centers.filter((c) => {
      const cityOk = city === "all" || c.city === city;
      const hay = `${c.name} ${c.city} ${c.cityAr} ${c.quartier} ${c.adresse} ${c.plusCode}`.toLowerCase();
      return cityOk && (!query || hay.includes(query));
    });
  }, [q, city]);

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t.badge}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-white/50">{t.subtitle}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.search}
              className="h-12 w-full rounded-full border border-gold/20 bg-white/5 pe-4 ps-10 text-sm outline-none placeholder:text-white/30 focus:border-gold"
            />
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-12 rounded-full border border-gold/20 bg-black px-4 text-sm"
          >
            <option value="all">{t.filterAll}</option>
            {centerCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-6">
          {filtered.length === 0 && <p className="text-white/40">{t.empty}</p>}
          {filtered.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-gold/15 bg-white/[0.03]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {lang === "fr" ? c.city : c.cityAr}
                  </p>
                  <h2 className="mt-1 text-2xl font-black">{c.name}</h2>
                  <p className="mt-2 text-sm text-white/45">{c.quartier}</p>
                  {c.adresse.trim() ? (
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{c.adresse}</p>
                  ) : null}
                  {c.plusCode ? (
                    <p className="mt-2 font-mono text-xs text-gold/80">{c.plusCode}</p>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.whatsappNumber.trim() ? (
                      <Button asChild size="sm">
                        <a href={whatsappLink(c.whatsappNumber, `Bonjour, centre ${c.name}`)}>
                          <MessageCircle className="h-4 w-4" />
                          {mapT.whatsapp}
                        </a>
                      </Button>
                    ) : null}
                    {c.telephone.trim() ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={telHref(c.telephone)}>
                          <Phone className="h-4 w-4" />
                          {c.telephone}
                        </a>
                      </Button>
                    ) : null}
                    {c.maps.trim() ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={c.maps} target="_blank" rel="noopener noreferrer">
                          <MapPin className="h-4 w-4" />
                          {mapT.maps}
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
                <iframe
                  title={c.name}
                  src={mapsEmbedSrc(c.maps, c.mapsQuery)}
                  className="h-64 w-full lg:h-full min-h-[240px]"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
