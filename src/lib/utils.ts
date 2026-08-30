import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function mapsEmbedSrc(mapsUrl: string, query: string): string {
  if (mapsUrl.includes("google.com/maps/embed") || mapsUrl.includes("output=embed")) {
    return mapsUrl;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&hl=fr&output=embed`;
}
