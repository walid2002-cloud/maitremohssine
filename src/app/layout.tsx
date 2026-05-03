import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Événement National — Révision 1er Bac avec Maître Mohssine",
  description:
    "L'événement national numéro 1 au Maroc : révision pour l'examen régional 1er Bac. Rejoins Maître Mohssine et son équipe dans 9 villes.",
  keywords: [
    "révision nationale",
    "1er bac",
    "examen régional",
    "maroc",
    "maître mohssine",
    "préparation bac",
    "événement national",
  ],
  openGraph: {
    title: "Événement National — Révision 1er Bac",
    description:
      "L'événement national numéro 1 au Maroc : révision pour l'examen régional 1er Bac.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
