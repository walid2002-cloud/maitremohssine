"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cities } from "@/data/cities";

export default function Footer() {
  const { lang, isRtl } = useLang();
  const t = translations.footer[lang];
  const brandBadge = translations.simpleHero[lang].badge;

  return (
    <footer id="contact" dir={isRtl ? "rtl" : "ltr"} className="border-t border-[#c9a227]/25 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1.5 border border-[#e8d089]/40 bg-[#c9a227] text-black font-black text-[9px] tracking-[0.08em] text-center leading-tight">
                {brandBadge}
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">{t.desc}</p>
            <a
              href="https://wa.me/212674413332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#c9a227] text-[#c9a227] text-sm font-semibold hover:bg-[#c9a227]/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.contact}
            </a>
          </div>

          <div>
            <h3 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-3">{t.cities}</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.id}>
                  <a href="#choisis-ta-ville" className="text-white/45 hover:text-[#c9a227] text-sm transition-colors">
                    {lang === "fr" ? city.city : city.cityAr}
                    <span className="text-white/20 mx-1">—</span>
                    <span className="text-white/30">{lang === "fr" ? city.date : city.dateAr}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-3">
              {lang === "fr" ? "Liens" : "روابط"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="text-white/45 hover:text-[#c9a227]">{lang === "fr" ? "Accueil" : "الرئيسية"}</a></li>
              <li><a href="#professeurs" className="text-white/45 hover:text-[#c9a227]">{lang === "fr" ? "Professeurs" : "الأساتذة"}</a></li>
              <li><a href="#choisis-ta-ville" className="text-white/45 hover:text-[#c9a227]">{lang === "fr" ? "Réservation" : "الحجز"}</a></li>
              <li><a href="#tournee" className="text-white/45 hover:text-[#c9a227]">{lang === "fr" ? "Tournée" : "الجولة"}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-3">
              {lang === "fr" ? "Matières" : "المواد"}
            </h3>
            <ul className="space-y-2 text-sm text-white/45">
              <li>🇫🇷 {lang === "fr" ? "Français" : "الفرنسية"}</li>
              <li>🇲🇦 {lang === "fr" ? "Arabe" : "العربية"}</li>
              <li>🌍 {lang === "fr" ? "Histoire-Géo" : "تاريخ وجغرافيا"}</li>
              <li>☪️ {lang === "fr" ? "Éducation islamique" : "التربية الإسلامية"}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#c9a227]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {t.title}. {t.rights}</p>
          <p>{lang === "fr" ? "Maître Mohssine" : "الأستاذ محسن"}</p>
        </div>
      </div>
    </footer>
  );
}
