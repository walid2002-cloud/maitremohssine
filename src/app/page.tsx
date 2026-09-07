"use client";

import HomeHero from "@/components/home/HomeHero";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import YoutubeSection from "@/components/home/YoutubeSection";
import MapSection from "@/components/home/MapSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhySection from "@/components/home/WhySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventTeaserSection from "@/components/home/EventTeaserSection";
import WhatsAppChannelSection from "@/components/home/WhatsAppChannelSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <StatsSection />
      <AboutSection />
      <YoutubeSection />
      <MapSection />
      <CoursesSection />
      <WhySection />
      <TestimonialsSection />
      <EventTeaserSection />
      <WhatsAppChannelSection />
      <CtaSection />
    </main>
  );
}
