export type LeadKind = "popup" | "distance" | "challenger";

export type LeadPayload = {
  kind: LeadKind;
  nom: string;
  prenom: string;
  whatsapp: string;
  filiere: string;
  ville: string;
  motivation?: string;
  source: string;
  page: string;
  /** Honeypot — must stay empty. */
  company?: string;
  formOpenedAt: number;
};

export function detectTrafficSource(): string {
  if (typeof window === "undefined") return "Site direct";
  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") || params.get("source") || "").toLowerCase();
  const ref = document.referrer.toLowerCase();
  const hay = `${utm} ${ref}`;
  if (hay.includes("google")) return "Google";
  if (hay.includes("youtube") || hay.includes("youtu.be")) return "YouTube";
  if (hay.includes("instagram")) return "Instagram";
  if (hay.includes("tiktok")) return "TikTok";
  if (hay.includes("facebook") || hay.includes("fb.")) return "Facebook";
  if (!document.referrer || ref.includes(window.location.host)) return "Site direct";
  return "Site direct";
}

export function detectPageLabel(pathname: string): string {
  if (pathname.startsWith("/cours-distance")) return "Cours à distance";
  if (pathname.startsWith("/meilleur-challenger")) return "Challenger";
  if (pathname.startsWith("/centres")) return "Nos centres";
  if (pathname.startsWith("/evenement")) return "Événement national";
  return "Accueil";
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return { ok: false };
  const data = (await res.json()) as { ok?: boolean };
  return { ok: Boolean(data.ok) };
}

export const POPUP_STORAGE_KEY = "mm_lead_popup_hide_until";
export const POPUP_HIDE_MS = 1000 * 60 * 60 * 24 * 14;
