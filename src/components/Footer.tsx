"use client";

import Image from "next/image";
import Link from "next/link";
import { useCopy, useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { PHONE_DISPLAY, PHONE_TEL, YOUTUBE_CHANNEL } from "@/data/centers";
import { getEnrollWhatsAppLink } from "@/data/publicLinks";
import WhatsAppChannelLink from "@/components/whatsapp/WhatsAppChannelLink";
import { usePathname } from "next/navigation";
import { isCourseDistanceRoute, trackCourseDistanceWhatsAppContact } from "@/lib/metaPixel";

const AGENCY_LOGO = "/images/with-khalil-agency-logo.png";

export default function Footer() {
  const pathname = usePathname();
  const copy = useCopy();
  const { lang, isRtl } = useLang();
  const t = copy.footer;
  const n = copy.nav;
  const wc = copy.whatsappChannel;
  const agency = translations.agency[lang];

  return (
    <footer dir={isRtl ? "rtl" : "ltr"} className="border-t border-gold/15 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div>
          <span className="inline-block rounded-md bg-gold px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-black">
            {t.brand}
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">{t.desc}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">{t.explore}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/50">
            <li><Link href="/" className="hover:text-gold">{n.home}</Link></li>
            <li><Link href="/centres" className="hover:text-gold">{n.centers}</Link></li>
            <li><Link href="/cours-distance" className="hover:text-gold">{n.remote}</Link></li>
            <li><Link href="/meilleur-challenger" className="hover:text-gold">{n.challenger}</Link></li>
            <li><Link href="/evenement" className="hover:text-gold">{n.event}</Link></li>
            <li><Link href="/evenement#galerie" className="hover:text-gold">{n.gallery}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">{t.contact}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/50">
            <li>
              <a
                href={getEnrollWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
                onClick={() => {
                  if (isCourseDistanceRoute(pathname)) trackCourseDistanceWhatsAppContact();
                }}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <WhatsAppChannelLink source="footer" variant="text" className="hover:text-gold">
                {wc.footer}
              </WhatsAppChannelLink>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-center sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="relative h-8 w-24">
              <Image src={AGENCY_LOGO} alt="With Khalil Agency" fill className="object-contain" sizes="96px" />
            </div>
            <p className="text-xs text-white/35">{agency.footerCredit}</p>
          </div>
          <p className="w-full border-t border-gold/10 pt-4 text-xs text-white/30">
            © {new Date().getFullYear()} {t.brand}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
