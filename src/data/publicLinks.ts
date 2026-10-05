/**
 * Lien vers le formulaire / la page pour demander la livraison (Casablanca uniquement).
 * Remplace `HARDCODED` par ton URL, ou définis NEXT_PUBLIC_CASA_DELIVERY_URL dans .env.local
 * (priorité à la variable d’environnement).
 */
const HARDCODED_CASA_DELIVERY_URL = "https://ticket-maitre-mohssine-casa.netlify.app";

export const CASA_DELIVERY_REQUEST_URL = (
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_CASA_DELIVERY_URL
    ? process.env.NEXT_PUBLIC_CASA_DELIVERY_URL
    : HARDCODED_CASA_DELIVERY_URL
).trim();

export const WHATSAPP_NUMBER = "212622331464";

/** Ligne WhatsApp dédiée aux inscriptions cours à distance (flyer promo). */
export const REMOTE_COURSE_WHATSAPP = "212708457935";

export function getRemoteCourseEnrollmentWhatsApp(data: {
  fullName: string;
  telephone: string;
  ville: string;
}): string {
  const lines = [
    "Bonjour, je souhaite m'inscrire aux Cours à Distance.",
    `Nom : ${data.fullName}`,
    `WhatsApp : ${data.telephone}`,
    `Ville : ${data.ville}`,
  ];
  return `https://wa.me/${REMOTE_COURSE_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Chaîne WhatsApp officielle — distincte du contact privé. */
export const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029Vb7xoB5FHWq2JEdr272Q";

export const WHATSAPP_CHANNEL_NAME =
  "Maître Mohssine - الجهوي في الجيب 🇲🇦❤️";

const NEXT_EDITION_MESSAGE =
  "Bonjour, je veux être informé de la prochaine édition de l'Événement National 1.";

export function getNextEditionWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(NEXT_EDITION_MESSAGE)}`;
}

export function getEnrollWhatsAppLink(intent: "centre" | "distance" | "general" = "general"): string {
  const messages = {
    general: "Bonjour, je veux m'inscrire chez Maître Mohssine.",
    centre: "Bonjour, je veux m'inscrire dans un centre Maître Mohssine.",
    distance: "Bonjour, je veux m'inscrire aux cours à distance.",
  } as const;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[intent])}`;
}

export function getLeadWhatsAppLink(data: {
  nom: string;
  prenom: string;
  whatsapp: string;
  filiere: string;
  ville: string;
  motivation?: string;
  kind?: string;
  page?: string;
}): string {
  const lines = [
    "Bonjour, je souhaite m'inscrire via le site Maître Mohssine.",
    "",
    `Nom : ${data.nom}`,
    `Prénom : ${data.prenom}`,
    `WhatsApp : ${data.whatsapp}`,
    `Filière / niveau : ${data.filiere}`,
    `Ville : ${data.ville}`,
  ];
  if (data.motivation?.trim()) lines.push(`Motivation : ${data.motivation.trim()}`);
  if (data.page) lines.push(`Page : ${data.page}`);
  if (data.kind) lines.push(`Formulaire : ${data.kind}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
