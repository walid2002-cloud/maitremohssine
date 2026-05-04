import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Révision Régionale 1er Bac — Événement National avec Maître Mohssine",
  description:
    "Choisis ta ville, découvre la date, le lieu, les points de vente et réserve ta place pour l’Événement National 1er Bac avec Maître Mohssine.",
  metadataBase: new URL("https://www.maitremohssine.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Révision Régionale 1er Bac — Événement National avec Maître Mohssine",
    description:
      "Tournée nationale de révision 1er Bac dans plusieurs villes du Maroc. Réserve ta place facilement.",
    url: "https://www.maitremohssine.com",
    siteName: "Maître Mohssine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Événement National 1er Bac avec Maître Mohssine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Révision Régionale 1er Bac — Événement National avec Maître Mohssine",
    description:
      "Choisis ta ville et réserve ta place pour la révision nationale 1er Bac.",
    images: ["/og-image.jpg"],
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
        <GoogleAnalytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
