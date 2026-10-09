/**
 * Meta (Facebook) Pixel — client-side only, sans données personnelles.
 * Actif en production uniquement. ID surchargeable via NEXT_PUBLIC_META_PIXEL_ID.
 */

export const META_PIXEL_ID = (
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "2136219407213190"
).trim();

export const COURSE_DISTANCE_PATH = "/cours-distance";

type FbqFn = (...args: unknown[]) => void;

type FbqWindow = Window & {
  fbq?: FbqFn;
  _fbq?: FbqFn;
};

export function isCourseDistanceRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return pathname === COURSE_DISTANCE_PATH || pathname === "/cours-a-distance";
}

/** Pixel production : pas d’envoi depuis localhost / preview dev. */
export function isMetaPixelEnabled(): boolean {
  if (!META_PIXEL_ID) return false;
  if (process.env.NODE_ENV !== "production") return false;
  return true;
}

function getFbq(): FbqFn | undefined {
  if (typeof window === "undefined") return undefined;
  if (!isMetaPixelEnabled()) return undefined;
  return (window as FbqWindow).fbq;
}

function safeFbq(...args: unknown[]): void {
  const fbq = getFbq();
  if (!fbq) return;
  fbq(...args);
}

export function trackPageView(): void {
  safeFbq("track", "PageView");
}

export function trackViewCourseDistance(): void {
  safeFbq("trackCustom", "ViewCourseDistance");
}

export function trackCourseRegistrationClick(): void {
  safeFbq("trackCustom", "CourseRegistrationClick");
}

export function trackLead(): void {
  safeFbq("track", "Lead");
}

export function trackCourseDistanceLead(): void {
  safeFbq("trackCustom", "CourseDistanceLead");
}

export function trackContact(): void {
  safeFbq("track", "Contact");
}

export function trackCourseDistanceWhatsAppClick(): void {
  safeFbq("trackCustom", "CourseDistanceWhatsAppClick");
}

export function trackCourseVideoPlay(): void {
  safeFbq("trackCustom", "CourseVideoPlay");
}

/** À appeler uniquement après confirmation réelle de paiement (pas au clic). */
export function trackPurchase(value = 600, currency = "MAD"): void {
  safeFbq("track", "Purchase", { value, currency });
}

export function trackCustomEvent(name: string, params?: Record<string, unknown>): void {
  if (params && Object.keys(params).length > 0) {
    safeFbq("trackCustom", name, params);
  } else {
    safeFbq("trackCustom", name);
  }
}

/** Contact Meta + événement dédié Cours à distance (un clic = une paire d’événements). */
export function trackCourseDistanceWhatsAppContact(): void {
  trackContact();
  trackCourseDistanceWhatsAppClick();
}

/** Lead standard + événement dédié après succès formulaire. */
export function trackCourseDistanceLeadSuccess(): void {
  trackLead();
  trackCourseDistanceLead();
}
