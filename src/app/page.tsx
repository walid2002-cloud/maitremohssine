"use client";

import Navbar from "@/components/Navbar";
import SimpleHero from "@/components/SimpleHero";
import CityCardsSection from "@/components/CityCardsSection";
import TourGrid from "@/components/TourGrid";
import Teachers from "@/components/Teachers";
import EventGallery from "@/components/EventGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <SimpleHero />
      <CityCardsSection />
      <TourGrid />
      <Teachers />
      <EventGallery />
      <VideoShowcase />
      <Testimonials />
      <Footer />
    </main>
  );
}
