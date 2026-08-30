import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événement National 1 — SOLD OUT",
  description:
    "Édition terminée avec succès. Revivez les meilleurs moments de la tournée nationale et soyez informé de la prochaine édition.",
};

export default function EvenementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
