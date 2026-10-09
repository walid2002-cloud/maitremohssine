import type { Metadata } from "next";
import { MetaPixel } from "@/components/analytics/MetaPixel";

export const metadata: Metadata = {
  title: "Cours à distance Maître Mohssine",
  description:
    "Cours à distance premium avec Maître Mohssine : lives, PDF, groupes privés et accompagnement partout au Maroc.",
  openGraph: {
    title: "Cours à distance Maître Mohssine",
    description:
      "Un accès privé à des contenus réguliers, des lives, des PDF et un accompagnement à distance.",
    url: "https://www.maitremohssine.com/cours-distance",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cours à distance" }],
  },
};

export default function RemoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  );
}
