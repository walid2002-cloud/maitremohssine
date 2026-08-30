import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { QueryProvider } from "@/providers/QueryProvider";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Maître Mohssine — N°1 du soutien scolaire au Maroc",
    template: "%s | Maître Mohssine",
  },
  description:
    "Maître Mohssine, le N°1 du soutien scolaire au Maroc. Centres à Casablanca, Mohammedia et Soualem. Cours à distance. Chaîne YouTube officielle. Événement National.",
  metadataBase: new URL("https://www.maitremohssine.com"),
  keywords: [
    "Maître Mohssine",
    "soutien scolaire Maroc",
    "cours de français",
    "1er Bac",
    "centres Casablanca",
    "cours à distance",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Maître Mohssine — N°1 du soutien scolaire au Maroc",
    description:
      "Centres, cours à distance, YouTube. La référence nationale du soutien scolaire.",
    url: "https://www.maitremohssine.com",
    siteName: "Maître Mohssine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maître Mohssine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maître Mohssine — N°1 du soutien scolaire au Maroc",
    description: "Centres, cours à distance, YouTube. La référence nationale.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white">
        <GoogleAnalytics />
        <QueryProvider>
          <LanguageProvider>
            <SiteShell>{children}</SiteShell>
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
