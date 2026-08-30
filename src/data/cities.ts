export interface SalesPoint {
  name: string;
  quartier: string;
  adresse: string;
  telephone: string;
  maps: string;
}

export type CitySessionStatus = "available" | "sold_out";

export interface CitySession {
  sessionId: string;
  date: string;
  dateAr: string;
  lieu: string;
  lieuAr: string;
  venueMaps: string;
  status: CitySessionStatus;
  /** Badge « NOUVELLE DATE » + animation dorée (ex. Casa 28, Marrakech 30). */
  newDateHighlight?: boolean;
}

export interface CityEvent {
  id: string;
  city: string;
  cityAr: string;
  sessions: CitySession[];
  salesPoints: SalesPoint[];
  whatsappNumber: string;
}

export const cities: CityEvent[] = [
  {
    id: "casablanca",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    whatsappNumber: "212622331464",
    sessions: [
      {
        sessionId: "casa-09",
        date: "09 mai",
        dateAr: "09 ماي",
        lieu: "Salle 8 Megarama",
        lieuAr: "القاعة 8 — ميغاراما",
        venueMaps: "https://maps.app.goo.gl/fe5Lkk5KKocLub8J6",
        status: "sold_out",
      },
      {
        sessionId: "casa-28",
        date: "28 mai",
        dateAr: "28 ماي",
        lieu: "Salle 8 Megarama",
        lieuAr: "القاعة 8 — ميغاراما",
        venueMaps: "https://maps.app.goo.gl/fe5Lkk5KKocLub8J6",
        status: "sold_out",
        newDateHighlight: true,
      },
    ],
    salesPoints: [
      {
        name: "Centre Sidi Moumen",
        quartier: "Sidi Moumen — 20400",
        adresse: "Centre Sidi Moumen, Casablanca 20400 — HFJ4+47",
        telephone: "06 27 73 99 71",
        maps: "https://www.google.com/maps/search/?api=1&query=HFJ4%2B47%20Casablanca",
      },
      {
        name: "Centre Alpha Cours",
        quartier: "Azhar — Sidi Bernoussi",
        adresse: "centre Alpha cours أمام مؤسسة Elbilia",
        telephone: "06 56 63 16 47",
        maps: "https://maps.app.goo.gl/thLEym77xfyowQGa7",
      },
      {
        name: "Centre Excellence Elboukhari",
        quartier: "El Oulfa — Hay Hassani — Sidi Maarouf — Lissasfa",
        adresse:
          "الولفة تقاطع شارع واد ملوية مع شارع واد قرب المارشي (Centre Excellence Elboukhari)",
        telephone: "07 72 27 07 43",
        maps: "https://maps.app.goo.gl/rAJypJ1xawygHc588",
      },
      {
        name: "Cool School",
        quartier: "Maarif — Bourgogne — Ain Diab — Anfa — Belvédère",
        adresse: "Maarif Cool school, École Romandie, Casablanca",
        telephone: "06 56 16 95 93",
        maps: "https://maps.app.goo.gl/BUsrwRziFbc446X38",
      },
      {
        name: "Centre d'excellence",
        quartier: "Soualem",
        adresse: "تجزئة الساحل رقم 07 حد السوالم قرب صيدلية بسم اللّٰه بالحي الصناعي",
        telephone: "07 76 72 64 48",
        maps: "https://www.google.com/maps/search/?api=1&query=C48X%2BGHV%20Had%20Soualem",
      },
    ],
  },
  {
    id: "marrakech",
    city: "Marrakech",
    cityAr: "مراكش",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "marrakech-16",
        date: "16 mai",
        dateAr: "16 ماي",
        lieu: "Megarama",
        lieuAr: "ميغاراما",
        venueMaps: "https://maps.app.goo.gl/Q9nAZkU7SGpG2YPP8",
        status: "sold_out",
      },
      {
        sessionId: "marrakech-30",
        date: "30 mai",
        dateAr: "30 ماي",
        lieu: "École ISGA — 11h sbah",
        lieuAr: "مدرسة ISGA — 11h صباح",
        venueMaps:
          "https://www.google.com/maps/search/?api=1&query=ISGA+Marrakech+Hivernage",
        status: "sold_out",
        newDateHighlight: true,
      },
    ],
    salesPoints: [],
  },
  {
    id: "agadir",
    city: "Agadir",
    cityAr: "أكادير",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "agadir-1",
        date: "17 mai",
        dateAr: "17 ماي",
        lieu: "Centre Culturel Municipal Ben Sergao",
        lieuAr: "المركز الثقافي البلدي بن سركاو",
        venueMaps: "https://maps.app.goo.gl/hHhTm1FJD4vb4gMb7",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "rabat",
    city: "Rabat",
    cityAr: "الرباط",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "rabat-21-matin",
        date: "21 mai",
        dateAr: "21 ماي",
        lieu: "Salle Zenith — 9h à 15h",
        lieuAr: "قاعة زينيت — 9h → 15h",
        venueMaps: "https://maps.app.goo.gl/d7qmHixFHNx3QFud8",
        status: "sold_out",
      },
      {
        sessionId: "rabat-21-soir",
        date: "21 mai",
        dateAr: "21 ماي",
        lieu: "Salle Zenith — 15h à 21h",
        lieuAr: "قاعة زينيت — 15h → 21h",
        venueMaps: "https://maps.app.goo.gl/d7qmHixFHNx3QFud8",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "meknes",
    city: "Meknès",
    cityAr: "مكناس",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "meknes-1",
        date: "22 mai",
        dateAr: "22 ماي",
        lieu: "Théâtre Fkih Moumni",
        lieuAr: "مسرح الفقيه المومني",
        venueMaps: "https://maps.app.goo.gl/9dYEKLPEuEJJV3PY7",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "fes",
    city: "Fès",
    cityAr: "فاس",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "fes-1",
        date: "23 mai",
        dateAr: "23 ماي",
        lieu: "Megarama",
        lieuAr: "ميغاراما",
        venueMaps: "https://maps.app.goo.gl/2HsPW8qkm1raB9Ux7",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "tanger",
    city: "Tanger",
    cityAr: "طنجة",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "tanger-1",
        date: "24 mai",
        dateAr: "24 ماي",
        lieu: "Salle Boukmakh",
        lieuAr: "قاعة بوكماخ",
        venueMaps: "https://maps.app.goo.gl/pRJbxmSQhWAJqK7g6",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "tetouan",
    city: "Tétouan",
    cityAr: "تطوان",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "tetouan-1",
        date: "25 mai",
        dateAr: "25 ماي",
        lieu: "Cinéma Spanol",
        lieuAr: "سينما سبانيول",
        venueMaps: "https://maps.app.goo.gl/BMKpCRnk6s16JSj68",
        status: "sold_out",
      },
    ],
    salesPoints: [],
  },
  {
    id: "mohammedia",
    city: "Mohammedia",
    cityAr: "المحمدية",
    whatsappNumber: "212600000000",
    sessions: [
      {
        sessionId: "mohammedia-1",
        date: "29 mai",
        dateAr: "29 ماي",
        lieu: "Hôtel Avanti",
        lieuAr: "فندق أفانتي",
        venueMaps: "https://maps.app.goo.gl/YRDocsDXShDkjjWC6",
        status: "sold_out",
      },
    ],
    salesPoints: [
      {
        name: "Centre GPH",
        quartier: "La Colline — Mohammedia",
        adresse: "La colline En face Mssala, Mohammedia",
        telephone: "06 04 83 18 29",
        maps: "https://www.google.com/maps/search/?api=1&query=MJVG%2B9G%20Mohammedia",
      },
      {
        name: "Centre Groupe Superprof Mohssine",
        quartier: "Boulevard Palestine — Mohammedia",
        adresse: "شارع فلسطين قرب محلات بيع الزليج، المحمدية",
        telephone: "06 54 50 44 55",
        maps: "https://www.google.com/maps/search/?api=1&query=MJR9%2B352%20Bd%20de%20Palestine%20Mohammedia",
      },
    ],
  },
];

/** Tri des cartes grille : `session.date` est au format FR « 9 mai », « 16 mai », … */
const FR_MONTH_INDEX: Record<string, number> = {
  janvier: 0,
  février: 1,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
  decembre: 11,
};

const TOUR_GRID_YEAR = 2026;

function tourSessionDateToTime(dateFr: string): number {
  const parts = dateFr.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const day = parseInt(parts[0] ?? "1", 10);
  const rawMonth = parts[1] ?? "mai";
  const monthKey = rawMonth.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const month = FR_MONTH_INDEX[rawMonth] ?? FR_MONTH_INDEX[monthKey];
  if (month === undefined || Number.isNaN(day)) {
    return 0;
  }
  return new Date(TOUR_GRID_YEAR, month, day).getTime();
}

/** Une entrée par carte dans les grilles « Choisis ta ville » et « Tournée » (Casablanca = 2 cartes). */
export type CityGridItem = {
  gridKey: string;
  city: CityEvent;
  session: CitySession;
};

export function getCityGridItems(citiesList: CityEvent[]): CityGridItem[] {
  const out: CityGridItem[] = [];
  for (const city of citiesList) {
    for (const s of city.sessions) {
      out.push({
        gridKey: `${city.id}-${s.sessionId}`,
        city,
        session: s,
      });
    }
  }
  out.sort((a, b) => {
    const ta = tourSessionDateToTime(a.session.date);
    const tb = tourSessionDateToTime(b.session.date);
    if (ta !== tb) return ta - tb;
    return a.gridKey.localeCompare(b.gridKey);
  });
  return out;
}

/** Texte des dates sur la petite carte ville (résumé multi-sessions). */
export function getCityCardDateSummary(city: CityEvent, lang: "fr" | "ar"): string {
  const dates = city.sessions.map((s) => (lang === "fr" ? s.date : s.dateAr));
  const unique = [...new Set(dates)];
  if (unique.length === 1) {
    return unique[0];
  }
  return unique.join(" · ");
}

/** Première session disponible (ex. message WhatsApp avec la bonne date). */
export function getFirstAvailableSession(city: CityEvent): CitySession | undefined {
  return city.sessions.find((s) => s.status === "available");
}

export function formatPhoneToWhatsApp(phone: string): string {
  const cleaned = phone.replace(/\s/g, "");
  if (cleaned.startsWith("0")) {
    return "212" + cleaned.slice(1);
  }
  return cleaned;
}

export function getWhatsAppLink(
  number: string,
  city: string,
  options?: { bookingDateFr?: string }
): string {
  const line =
    options?.bookingDateFr != null
      ? `Bonjour, je veux réserver pour ${city} le ${options.bookingDateFr}`
      : `Bonjour, je veux réserver pour ${city}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(line)}`;
}
