import { cities, getCityGridItems } from "@/data/cities";

export type TourMomentStatus = "sold_out";

export type TourMoment = {
  id: string;
  city: string;
  cityAr: string;
  date: string;
  dateAr: string;
  status: TourMomentStatus;
  sessionLabel?: string;
  sessionLabelAr?: string;
  /** MP4 local — prioritaire si défini (ex. /videos/casa-09.mp4). */
  videoUrl?: string;
  reelUrl?: string;
};

const REEL_BY_SESSION: Record<string, string> = {
  "casa-09": "https://www.instagram.com/reel/DYSgZXKsMIq/",
  "rabat-21-matin": "https://www.instagram.com/reel/DYnVvuJsOm8/",
  "meknes-1": "https://www.instagram.com/reel/DYqG4uUM0tA/",
  "fes-1": "https://www.instagram.com/reel/DYskEz1sOeO/",
  "tanger-1": "https://www.instagram.com/reel/DYu_uG9MTZO/",
  "tetouan-1": "https://www.instagram.com/reel/DYxjzQPsjXf/",
  "casa-28": "https://www.instagram.com/reel/DY5d6d1Nh81/",
};

/** MP4 locaux — décommenter quand les vraies vidéos sont dans /public/videos/ */
const VIDEO_BY_SESSION: Record<string, string> = {
  // "casa-09": "/videos/casa-09.mp4",
  // "rabat-21-matin": "/videos/rabat-21.mp4",
  // "meknes-1": "/videos/meknes-22.mp4",
  // "fes-1": "/videos/fes-23.mp4",
  // "tanger-1": "/videos/tanger-24.mp4",
  // "tetouan-1": "/videos/tetouan-25.mp4",
  // "casa-28": "/videos/casa-28.mp4",
};

const SESSION_LABELS: Record<string, { fr: string; ar: string }> = {
  "rabat-21-matin": { fr: "Matin — 9h à 15h", ar: "صباح — 9h → 15h" },
  "rabat-21-soir": { fr: "Soir — 15h à 21h", ar: "مساء — 15h → 21h" },
};

export function getReelEmbedUrl(reelUrl: string): string {
  const match = reelUrl.match(/reel\/([^/?]+)/);
  if (!match) return reelUrl;
  return `https://www.instagram.com/reel/${match[1]}/embed/?captioned=false`;
}

export function hasPlayableMedia(moment: TourMoment): boolean {
  return Boolean(moment.videoUrl || moment.reelUrl);
}

export const tourMoments: TourMoment[] = getCityGridItems(cities).map(({ city, session }) => {
  const labels = SESSION_LABELS[session.sessionId];
  return {
    id: session.sessionId,
    city: city.city,
    cityAr: city.cityAr,
    date: session.date,
    dateAr: session.dateAr,
    status: "sold_out" as const,
    sessionLabel: labels?.fr,
    sessionLabelAr: labels?.ar,
    videoUrl: VIDEO_BY_SESSION[session.sessionId],
    reelUrl: REEL_BY_SESSION[session.sessionId],
  };
});
