import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Merci — Événement National 1 SOLD OUT | Maître Mohssine",
  description:
    "Édition terminée avec succès. Revivez les meilleurs moments de la tournée nationale et soyez informé de la prochaine édition.",
  metadataBase: new URL("https://www.maitremohssine.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Merci — Événement National 1 SOLD OUT | Maître Mohssine",
    description:
      "Édition terminée avec succès. Revivez les meilleurs moments et restez informé pour la prochaine tournée.",
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
    title: "Merci — Événement National 1 SOLD OUT | Maître Mohssine",
    description:
      "Édition terminée avec succès. Rendez-vous l'année prochaine.",
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
