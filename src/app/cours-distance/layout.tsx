import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cours à distance",
  description:
    "Cours à distance avec Maître Mohssine : méthode, live, replays et suivi WhatsApp partout au Maroc.",
};

export default function RemoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
