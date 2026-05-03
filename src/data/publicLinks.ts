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
