"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCopy, useLang } from "@/context/LanguageContext";
import { getEnrollWhatsAppLink } from "@/data/publicLinks";
import WhatsAppChannelLink from "@/components/whatsapp/WhatsAppChannelLink";
import { cn } from "@/lib/utils";
import { isCourseDistanceRoute, trackCourseDistanceWhatsAppContact } from "@/lib/metaPixel";

function onCourseDistanceWhatsAppClick(pathname: string) {
  if (isCourseDistanceRoute(pathname)) trackCourseDistanceWhatsAppContact();
}

function linkActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (!path || path === "/") return href === "/" && pathname === "/";
  return pathname === path;
}

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

  const desktopLinks = [
    { href: "/centres", label: t.centers },
    { href: "/cours-distance", label: t.remote },
    { href: "/meilleur-challenger", label: t.challenger },
    { href: "/evenement", label: t.event },
  ];

  const mobileLinks = [
    { href: "/", label: t.home },
    { href: "/#apropos", label: t.about },
    ...desktopLinks,
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
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <Link href="/" className="shrink-0 text-[13px] font-semibold tracking-[0.22em] text-gold">
          MAÎTRE MOHSSINE
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-[13px] text-white/55 transition hover:text-white",
                linkActive(pathname, l.href) && "text-gold"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="text-[12px] text-white/40 transition hover:text-gold"
          >
            {t.langSwitch}
          </button>
          <WhatsAppChannelLink
            source="header"
            variant="outline"
            className="hidden h-9 px-3 text-[11px] md:inline-flex lg:text-[12px]"
          >
            {t.whatsappChannel}
          </WhatsAppChannelLink>
          <a
            href={getEnrollWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold px-4 py-2 text-[12px] font-semibold text-black sm:inline-flex"
            onClick={() => onCourseDistanceWhatsAppClick(pathname)}
          >
            {t.whatsapp}
          </a>
          <button
            type="button"
            className="p-1.5 text-white/70 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-0.5 px-4 py-4">
              {mobileLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "block rounded-lg px-2 py-2.5 text-sm text-white/65 hover:text-gold",
                    linkActive(pathname, l.href) && "text-gold"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <WhatsAppChannelLink
                source="header"
                variant="outline"
                className="mt-2 w-full px-4 py-2.5 text-sm lg:hidden"
              >
                {t.whatsappChannel}
              </WhatsAppChannelLink>
              <a
                href={getEnrollWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-black sm:hidden"
                onClick={() => onCourseDistanceWhatsAppClick(pathname)}
              >
                {t.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
