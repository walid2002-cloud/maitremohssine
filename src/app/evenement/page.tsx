"use client";

import SimpleHero from "@/components/SimpleHero";
import BestMomentsSection from "@/components/BestMomentsSection";
import TourSuccessSection from "@/components/TourSuccessSection";
import NextEditionSection from "@/components/NextEditionSection";
import AgencySection from "@/components/AgencySection";
import AmbientMusic from "@/components/AmbientMusic";
import CityCardsSection from "@/components/CityCardsSection";
import EventGallery from "@/components/EventGallery";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import StorySection from "@/components/StorySection";
import AntigoneSection from "@/components/AntigoneSection";
import TourGrid from "@/components/TourGrid";
import FaqList from "@/components/FaqList";
import { useCopy } from "@/context/LanguageContext";

export default function EvenementPage() {
  const faq = useCopy().eventPage;

  return (
    <main className="souvenir-page pt-16">
      <SimpleHero />
      <TourSuccessSection />
      <BestMomentsSection />
      <CityCardsSection />
      <TourGrid />
      <EventGallery />
      <Teachers />
      <Testimonials />
      <StorySection />
      <AntigoneSection />
      <FaqList title={faq.faqTitle} items={faq.faq} />
      <NextEditionSection />
      <AgencySection />
      <AmbientMusic />
    </main>
  );
}
