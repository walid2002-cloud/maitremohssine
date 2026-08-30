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
