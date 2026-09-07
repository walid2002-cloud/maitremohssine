"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollow from "@/components/CursorFollow";
import LeadPopup from "@/components/forms/LeadPopup";
import { SmoothScroll } from "@/providers/SmoothScroll";
import { useLang } from "@/context/LanguageContext";

export default function SiteShell({ children }: { children: ReactNode }) {
  const { isRtl } = useLang();

  return (
    <div className="min-h-screen bg-black text-white" dir={isRtl ? "rtl" : "ltr"}>
      <SmoothScroll />
      <CursorFollow />
      <Navbar />
      {children}
      <Footer />
      <LeadPopup />
    </div>
  );
}
