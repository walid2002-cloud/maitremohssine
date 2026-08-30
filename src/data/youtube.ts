export type YtVideo = {
  id: string;
  title: string;
};

export const youtubeVideos: YtVideo[] = [
  { id: "ZzCbet62-jI", title: "Maître Mohssine — dernière vidéo" },
  { id: "1KPFHGH2B68", title: "Cours de français" },
  { id: "J1jSgqL_DMo", title: "Méthode d'examen" },
  { id: "ONFJshFfZZ0", title: "Révision régionale" },
  { id: "hiof8PpUluk", title: "Conseils 1er Bac" },
  { id: "3OAIUF4aTL4", title: "Analyse de texte" },
  { id: "jlrOsyYv7fU", title: "Production écrite" },
  { id: "v3oWUfLfMOI", title: "Grammaire" },
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
