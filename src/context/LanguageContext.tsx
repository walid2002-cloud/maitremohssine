"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { Lang } from "@/data/translations";
import { siteCopy } from "@/data/siteCopy";

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
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "fr" || saved === "ar") {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const isRtl = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "fr";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [lang, isRtl]);

  const value = useMemo(() => ({ lang, setLang, isRtl }), [lang, setLang, isRtl]);
  const messages = siteCopy[lang];

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider locale={lang} messages={messages as unknown as Record<string, unknown>}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useCopy() {
  const { lang } = useLang();
  return siteCopy[lang];
}
