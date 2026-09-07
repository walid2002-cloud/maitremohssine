"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/context/LanguageContext";
import {
  detectPageLabel,
  detectTrafficSource,
  submitLead,
  type LeadKind,
} from "@/lib/leads";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-2xl border border-gold/20 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-gold";

type Props = {
  kind: LeadKind;
  compact?: boolean;
  onSuccess?: () => void;
};

export default function LeadForm({ kind, compact, onSuccess }: Props) {
  const t = useCopy().form;
  const openedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    whatsapp: "",
    filiere: "",
    ville: "",
    motivation: "",
    company: "",
  });

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const set =
    (key: keyof typeof values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const result = await submitLead({
        kind,
        nom: values.nom,
        prenom: values.prenom,
        whatsapp: values.whatsapp,
        filiere: values.filiere,
        ville: values.ville,
        motivation: kind === "challenger" ? values.motivation : "",
        source: detectTrafficSource(),
        page: detectPageLabel(window.location.pathname),
        company: values.company,
        formOpenedAt: openedAt.current,
      });
      if (!result.ok) {
        setStatus("error");
        return;
      }
      setStatus("ok");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <p className="rounded-2xl border border-gold/25 bg-gold/10 px-5 py-6 text-center text-sm text-white/80">
        {t.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-3", compact ? "" : "sm:grid-cols-2")}>
      <input
        tabIndex={-1}
        autoComplete="off"
        value={values.company}
        onChange={set("company")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <input required name="nom" placeholder={t.nom} value={values.nom} onChange={set("nom")} className={fieldClass} />
      <input
        required
        name="prenom"
        placeholder={t.prenom}
        value={values.prenom}
        onChange={set("prenom")}
        className={fieldClass}
      />
      <input
        required
        name="whatsapp"
        type="tel"
        placeholder={t.whatsapp}
        value={values.whatsapp}
        onChange={set("whatsapp")}
        className={fieldClass}
      />
      <input
        required
        name="filiere"
        placeholder={t.filiere}
        value={values.filiere}
        onChange={set("filiere")}
        className={fieldClass}
      />
      <input
        required
        name="ville"
        placeholder={t.ville}
        value={values.ville}
        onChange={set("ville")}
        className={cn(fieldClass, kind === "challenger" ? "sm:col-span-2" : "sm:col-span-2")}
      />
      {kind === "challenger" && (
        <textarea
          name="motivation"
          rows={4}
          placeholder={t.motivation}
          value={values.motivation}
          onChange={set("motivation")}
          className="min-h-[110px] w-full rounded-2xl border border-gold/20 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-gold sm:col-span-2"
        />
      )}
      {status === "error" && (
        <p className="text-sm text-red-300 sm:col-span-2">{t.error}</p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? t.sending : kind === "challenger" ? t.submitChallenger : t.submit}
        </Button>
      </div>
    </form>
  );
}
