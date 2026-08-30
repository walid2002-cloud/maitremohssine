import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos centres",
  description:
    "Tous les centres Maître Mohssine : Casablanca, Mohammedia, Soualem. Adresses, Google Maps, téléphone et WhatsApp.",
};

export default function CentresLayout({ children }: { children: React.ReactNode }) {
  return children;
}
