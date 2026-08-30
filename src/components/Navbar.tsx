"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useCopy, useLang } from "@/context/LanguageContext";
import { getEnrollWhatsAppLink } from "@/data/publicLinks";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const copy = useCopy();
  const { lang, setLang, isRtl } = useLang();
  const t = copy.nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.home },
    { href: "/#apropos", label: t.about },
    { href: "/centres", label: t.centers },
    { href: "/cours-distance", label: t.remote },
    { href: "/evenement", label: t.event },
    { href: "/evenement#galerie", label: t.gallery },
    { href: "/#contact", label: t.contact },
  ];

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/20 bg-black/55 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6" dir={isRtl ? "rtl" : "ltr"}>
        <Link href="/" className="shrink-0 rounded-md bg-gold px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-black">
          Maître Mohssine
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-medium uppercase tracking-wide text-white/55 transition hover:text-gold",
                (l.href.split("#")[0] === "/" ? pathname === "/" : pathname === l.href.split("#")[0]) && "text-gold"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="rounded-full border border-gold/40 px-3 py-1.5 text-xs font-bold uppercase text-gold hover:bg-gold/10"
          >
            {t.langSwitch}
          </button>
          <a
            href={getEnrollWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase text-black sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            {t.whatsapp}
          </a>
          <button type="button" className="xl:hidden p-2 text-gold" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/15 bg-black/90 backdrop-blur-xl xl:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg px-2 py-2.5 text-sm text-white/70 hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
