/** Vidéos FAQ — page Cours à distance (ordre d’affichage). */
export type RemoteFaqVideoEntry = {
  id: string;
  videoSrc: string;
  /** Cadre vertical type story (défaut) ou 16:9 */
  layout?: "portrait" | "landscape";
};

export const REMOTE_FAQ_VIDEO_ENTRIES: RemoteFaqVideoEntry[] = [
  { id: "contenu", videoSrc: "/videos/faq/faq-contenu.mp4", layout: "portrait" },
  { id: "support", videoSrc: "/videos/faq/faq-support.mp4", layout: "portrait" },
  { id: "maths", videoSrc: "/videos/faq/faq-maths.mp4", layout: "portrait" },
  {
    id: "litteraires",
    videoSrc: "/videos/faq/faq-litteraires.mp4",
    layout: "portrait",
  },
  { id: "paiement", videoSrc: "/videos/faq/faq-paiement.mp4", layout: "portrait" },
];
