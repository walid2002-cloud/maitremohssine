"use client";

import Navbar from "@/components/Navbar";
import SimpleHero from "@/components/SimpleHero";
import BestMomentsSection from "@/components/BestMomentsSection";
import TourSuccessSection from "@/components/TourSuccessSection";
import NextEditionSection from "@/components/NextEditionSection";
import AgencySection from "@/components/AgencySection";
import Footer from "@/components/Footer";
import AmbientMusic from "@/components/AmbientMusic";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white souvenir-page">
      <Navbar />
      <SimpleHero />
      <BestMomentsSection />
      <TourSuccessSection />
      <NextEditionSection />
      <AgencySection />
      <Footer />
      <AmbientMusic />
    </main>
  );
}
