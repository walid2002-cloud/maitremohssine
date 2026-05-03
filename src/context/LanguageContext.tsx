"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "@/data/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  isRtl: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "fr" || saved === "ar") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const isRtl = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
