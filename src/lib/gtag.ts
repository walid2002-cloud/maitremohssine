/**
 * Google Analytics 4 — utilitaires côté client uniquement.
 * L’ID peut être surchargé via NEXT_PUBLIC_GA_MEASUREMENT_ID (Vercel / .env.local).
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-B9SHNS8VFW";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function getGtag(): GtagWindow["gtag"] | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as GtagWindow).gtag;
}

/**
 * Envoie un page_view / mise à jour de page pour les navigations client (App Router).
 * À ne pas appeler avant que le script inline GA ait défini `window.gtag`.
 */
export function trackPageView(pathWithQuery: string): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: pathWithQuery,
  });
}

/**
 * Événement personnalisé GA4 (ex: clic CTA, choix de ville).
 * @see https://developers.google.com/analytics/devguides/collection/ga4/events
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, eventParams ?? {});
}
