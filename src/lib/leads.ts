import { getGoogleScriptUrl } from "@/config/googleScript";

export type LeadKind = "popup" | "distance" | "challenger";

export type LeadPayload = {
  kind: LeadKind;
  nom: string;
  prenom: string;
  telephone: string;
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
  if (typeof window === "undefined") return "direct";
  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") || params.get("source") || "").trim();
  if (utm) return utm;
  const ref = document.referrer.trim();
  if (!ref) return "direct";
  try {
    const refHost = new URL(ref).hostname.replace(/^www\./, "");
    const siteHost = window.location.hostname.replace(/^www\./, "");
    if (refHost === siteHost) return "direct";
    return ref;
  } catch {
    return "direct";
  }
}

function parseGasOk(text: string): boolean {
  try {
    const data = JSON.parse(text) as { ok?: boolean; success?: boolean };
    return data.ok === true || data.success === true;
  } catch {
    return (
      text.includes('"ok":true') ||
      text.includes('"ok": true') ||
      text.includes('"success":true') ||
      text.includes('"success": true')
    );
  }
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const url = getGoogleScriptUrl();
  if (!url) {
    return { ok: false, error: "not_configured" };
  }

  if (payload.company?.trim()) {
    return { ok: true };
  }

  if (payload.formOpenedAt && Date.now() - payload.formOpenedAt < 2500) {
    return { ok: false, error: "too_fast" };
  }

  const { nom, prenom, telephone, filiere, ville } = payload;
  if (!nom || !prenom || !telephone || !filiere || !ville) {
    return { ok: false, error: "missing_fields" };
  }

  const body = new URLSearchParams();
  body.append("nom", nom);
  body.append("prenom", prenom);
  body.append("telephone", telephone);
  body.append("filiere", filiere);
  body.append("ville", ville);
  body.append("page", payload.page || "/");
  body.append("source", payload.source || "direct");
  if (payload.motivation?.trim()) {
    body.append("motivation", payload.motivation.trim());
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("[submitLead] GAS HTTP", res.status, text.slice(0, 240));
      return { ok: false, error: "upstream" };
    }

    if (parseGasOk(text)) {
      return { ok: true };
    }

    console.error("[submitLead] GAS invalid response", text.slice(0, 240));
    return { ok: false, error: "invalid_response" };
  } catch (error) {
    console.error("[submitLead] GAS fetch failed", error);
    return { ok: false, error: "network" };
  }
}

export const POPUP_STORAGE_KEY = "mm_lead_popup_hide_until";
export const POPUP_HIDE_MS = 1000 * 60 * 60 * 24 * 14;

const EMPTY_VALUES = {
  nom: "",
  prenom: "",
  whatsapp: "",
  filiere: "",
  ville: "",
  motivation: "",
  company: "",
};

export { EMPTY_VALUES as LEAD_FORM_EMPTY_VALUES };
