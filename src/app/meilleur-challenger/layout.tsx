import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Meilleur Challenger Maître Mohssine",
  description:
    "Le Meilleur Challenger : défis, épisodes, candidats et cadeaux. Inscris-toi pour participer à l’émission de Maître Mohssine.",
  openGraph: {
    title: "Le Meilleur Challenger Maître Mohssine",
    description: "Des épisodes, des défis, des candidats et des cadeaux.",
    url: "https://www.maitremohssine.com/meilleur-challenger",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Le Meilleur Challenger" }],
  },
};

export default function ChallengerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
