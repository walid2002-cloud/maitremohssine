import { NextResponse } from "next/server";

type Body = {
  kind?: string;
  nom?: string;
  prenom?: string;
  whatsapp?: string;
  filiere?: string;
  ville?: string;
  motivation?: string;
  source?: string;
  page?: string;
  company?: string;
  formOpenedAt?: number;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const opened = Number(body.formOpenedAt) || 0;
  if (opened && Date.now() - opened < 2500) {
    return NextResponse.json({ ok: false, error: "too_fast" }, { status: 429 });
  }

  const nom = clean(body.nom);
  const prenom = clean(body.prenom);
  const whatsapp = clean(body.whatsapp);
  const filiere = clean(body.filiere);
  const ville = clean(body.ville);

  if (!nom || !prenom || !whatsapp || !filiere || !ville) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!webAppUrl) {
    console.error("GOOGLE_SHEETS_WEBAPP_URL is not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const payload = {
    kind: clean(body.kind) || "popup",
    nom,
    prenom,
    whatsapp,
    filiere,
    ville,
    motivation: clean(body.motivation),
    source: clean(body.source) || "Site direct",
    page: clean(body.page) || "Accueil",
  };

  try {
    const res = await fetch(webAppUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Sheets web app error", res.status, text.slice(0, 300));
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Sheets web app fetch failed", error);
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
