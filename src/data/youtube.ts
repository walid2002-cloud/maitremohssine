export type YtVideo = {
  id: string;
  title: string;
  theme?: string;
  duration?: string;
  episode?: string;
};

/** Vidéos choisies manuellement — pas le fil “dernières publications”. */
export const recommendedVideos: YtVideo[] = [
  {
    id: "ZRMvpbCCjes",
    title: "Production écrite — méthode et astuces",
    theme: "Production écrite",
  },
  {
    id: "jlrOsyYv7fU",
    title: "De 0 à 20/20 en production écrite",
    theme: "Production écrite",
  },
  {
    id: "ZzCbet62-jI",
    title: "La Boîte à merveilles — résumé chapitre par chapitre",
    theme: "La Boîte à merveilles",
  },
  {
    id: "5gCsXTGvRMw",
    title: "Antigone — résumé scène par scène",
    theme: "Antigone",
  },
  {
    id: "vU8EP_4T7_o",
    title: "Le Dernier Jour d’un condamné — résumé",
    theme: "Le Dernier Jour d’un condamné",
  },
];

/** Alias historique : le bandeau accueil utilise les vidéos recommandées. */
export const youtubeVideos = recommendedVideos;

export const CHALLENGER_PLAYLIST_ID = "PLDIe_997a50pZBQXcPgY3W3pKUc6p_Zgs";
export const WINNER_EPISODE_ID = "6awBejOo_6w";

export const CHALLENGER_PLAYLIST_URL = `https://www.youtube.com/watch?v=uEkdFNss4tY&list=${CHALLENGER_PLAYLIST_ID}`;

export const challengerEpisodes: YtVideo[] = [
  {
    id: "uEkdFNss4tY",
    episode: "01",
    duration: "14:48",
    title: "Le meilleur challenger — épisode 01",
  },
  {
    id: "-fcrxeALSs4",
    episode: "02",
    duration: "15:03",
    title: "Le meilleur challenger — épisode 02 / Imane et Adam",
  },
  {
    id: "9Ks9iZx6NF8",
    episode: "Finale",
    duration: "21:07",
    title: "Le meilleur challenger — Finale / Ikram et Yahya",
  },
  {
    id: "6awBejOo_6w",
    episode: "01",
    duration: "17:46",
    title: "Le meilleur challenger — Anass et Sofia",
  },
  {
    id: "m7phcG2Pb90",
    episode: "02",
    duration: "16:55",
    title: "Le meilleur challenger — Taha et Rym",
  },
  {
    id: "axI9n77yOkU",
    episode: "03",
    duration: "10:48",
    title: "Le meilleur challenger — Salah et Rym",
  },
  {
    id: "HD8KlVbGfHs",
    episode: "03",
    duration: "9:00",
    title: "Le meilleur challenger — Imad et Rym",
  },
  {
    id: "GxDi1ElEfMc",
    episode: "Spécial",
    duration: "17:34",
    title: "Challenge production écrite",
  },
  {
    id: "q0OaAZVBiJg",
    episode: "01",
    duration: "18:42",
    title: "Le meilleur challenger — Kenza et Adam",
  },
  {
    id: "hiEH5wpV5xE",
    episode: "02",
    duration: "17:22",
    title: "Le meilleur challenger — Hiba et Nabil",
  },
  {
    id: "jRlEouF46yQ",
    episode: "03",
    duration: "15:38",
    title: "Le meilleur challenger — Ranya et Ghafour",
  },
  {
    id: "jD6zMi4AxJM",
    episode: "01",
    duration: "9:19",
    title: "Le meilleur challenger — Rayan et Marwa",
  },
  {
    id: "4M4OAJXfb3o",
    episode: "Demi-finale",
    duration: "10:30",
    title: "Demi-finale 01 — Kenza et Ghafour",
  },
  {
    id: "bM7oqSoEkdk",
    episode: "Demi-finale",
    duration: "9:57",
    title: "Demi-finale 02 — Nabil et Rayan",
  },
];

export function ytThumb(id: string, quality: "hqdefault" | "maxresdefault" = "hqdefault") {
  return `https://i.ytimg.com/vi/${id}/${quality}.jpg`;
}

export function ytWatch(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function ytEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}
