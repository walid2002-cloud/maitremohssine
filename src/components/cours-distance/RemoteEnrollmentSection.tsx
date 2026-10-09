"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertTriangle } from "lucide-react";
import { useCopy } from "@/context/LanguageContext";
import { getRemoteCourseEnrollmentWhatsApp } from "@/data/publicLinks";
import { detectTrafficSource, submitLead } from "@/lib/leads";
import { trackCourseDistanceLeadSuccess } from "@/lib/metaPixel";

function splitFullName(full: string): { nom: string; prenom: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { nom: "", prenom: "" };
  if (parts.length === 1) return { nom: parts[0], prenom: "—" };
  return { nom: parts[0], prenom: parts.slice(1).join(" ") };
}

const inputClass =
  "mt-1.5 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none placeholder:text-black/40 focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function RemoteEnrollmentSection() {
  const copy = useCopy();
  const t = copy.remotePage.form;
  const formT = copy.form;
  const openedAt = useRef(Date.now());
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ville, setVille] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting.current || status === "loading") return;

    const name = fullName.trim();
    const phone = whatsapp.trim();
    const city = ville.trim();
    if (!name || !phone || !city) return;

    submitting.current = true;
    setStatus("loading");

    const { nom, prenom } = splitFullName(name);

    try {
      const result = await submitLead({
        kind: "distance",
        nom,
        prenom,
        telephone: phone,
        filiere: "—",
        ville: city,
        source: detectTrafficSource(),
        page: window.location.pathname,
        company,
        formOpenedAt: openedAt.current,
      });

      if (!result.ok) {
        setStatus("error");
        return;
      }

      trackCourseDistanceLeadSuccess();

      window.location.href = getRemoteCourseEnrollmentWhatsApp({
        fullName: name,
        telephone: phone,
        ville: city,
      });
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  return (
    <section id="inscription" className="mx-auto max-w-2xl scroll-mt-28 px-4 py-12 sm:px-6">
      <div className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="border-b border-dashed border-gold/35 bg-black/40 px-5 py-5 sm:px-8">
          <p className="flex items-center justify-center gap-2 text-center text-sm font-bold text-red-300 sm:text-base">
            <AlertTriangle className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {t.pricing.urgency}
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm opacity-50">
              <span className="text-white/60">{t.pricing.pastPeriod}</span>
              <span className="font-bold text-white/50 line-through">{t.pricing.pastPrice}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border-2 border-gold/60 bg-gold/[0.08] px-4 py-3">
              <span className="text-sm font-bold text-white sm:text-base">{t.pricing.currentPeriod}</span>
              <span className="text-lg font-black text-gold sm:text-xl">{t.pricing.currentPrice}</span>
            </div>
          </div>
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <h2 className="text-center text-2xl font-black leading-snug text-white sm:text-3xl">{t.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-white/55 sm:text-base">
            {t.subtitle}
          </p>

          <form onSubmit={onSubmit} className="mt-8 text-start">
            <input
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              aria-hidden
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="remote-fullName" className="text-sm font-semibold text-white/85">
                  {t.fullNameLabel}
                </label>
                <input
                  id="remote-fullName"
                  required
                  name="fullName"
                  placeholder={t.fullName}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="remote-whatsapp" className="text-sm font-semibold text-white/85">
                  {t.whatsappLabel}
                </label>
                <input
                  id="remote-whatsapp"
                  required
                  name="whatsapp"
                  type="tel"
                  placeholder={t.whatsapp}
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="remote-ville" className="text-sm font-semibold text-white/85">
                  {t.villeLabel}
                </label>
                <input
                  id="remote-ville"
                  required
                  name="ville"
                  placeholder={t.ville}
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className={inputClass}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-300" role="alert">
                {formT.error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 flex w-full flex-col items-center justify-center rounded-2xl bg-gold px-6 py-4 text-center shadow-[0_0_40px_rgba(201,162,39,0.25)] transition hover:bg-gold-bright disabled:opacity-60"
            >
              <span className="text-base font-black text-black sm:text-lg">
                {status === "loading" ? formT.sending : t.submitMain}
              </span>
              <span className="mt-1 text-xs font-semibold text-black/70 sm:text-sm">{t.submitSub}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
