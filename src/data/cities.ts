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
        lieu: "Megarama — Salle 8",
        lieuAr: "ميغاراما — القاعة 8",
        venueMaps: "https://maps.app.goo.gl/fe5Lkk5KKocLub8J6",
        status: "sold_out",
      },
      {
        sessionId: "casa-27",
        date: "27 mai",
        dateAr: "27 ماي",
        lieu: "Megarama — Salle 8",
        lieuAr: "ميغاراما — القاعة 8",
        venueMaps: "https://maps.app.goo.gl/fe5Lkk5KKocLub8J6",
        status: "available",
      },
    ],
    salesPoints: [
      {
        name: "Centre GSM",
        quartier: "Sidi Moumen — Ain Sebaa — Anassi — Attacharok",
        adresse: "بسيدي مومن الشرف قرب مؤسسة الوئام",
        telephone: "06 27 73 99 71",
        maps: "https://maps.app.goo.gl/rD2LqYkpMcUBip9z7",
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
        maps: "https://maps.app.goo.gl/mGjWS8Df2drF5bNDA",
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
        sessionId: "marrakech-1",
        date: "16 mai",
        dateAr: "16 ماي",
        lieu: "Megarama",
        lieuAr: "ميغاراما",
        venueMaps: "https://maps.app.goo.gl/Q9nAZkU7SGpG2YPP8",
        status: "available",
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
        lieu: "Salle Bensargao",
        lieuAr: "قاعة بنسركاو",
        venueMaps: "https://maps.app.goo.gl/kZcdvnGsrn4yWmQV7",
        status: "available",
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
        sessionId: "rabat-1",
        date: "21 mai",
        dateAr: "21 ماي",
        lieu: "Salle Zenith",
        lieuAr: "قاعة زينيت",
        venueMaps: "https://maps.app.goo.gl/d7qmHixFHNx3QFud8",
        status: "available",
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
        status: "available",
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
        status: "available",
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
        status: "available",
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
        status: "available",
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
        date: "30 mai",
        dateAr: "30 ماي",
        lieu: "Hôtel Avanti",
        lieuAr: "فندق أفانتي",
        venueMaps: "https://maps.app.goo.gl/YRDocsDXShDkjjWC6",
        status: "available",
      },
    ],
    salesPoints: [],
  },
];

/** Texte des dates sur la petite carte ville (résumé multi-sessions). */
export function getCityCardDateSummary(city: CityEvent, lang: "fr" | "ar"): string {
  if (city.sessions.length === 1) {
    return lang === "fr" ? city.sessions[0].date : city.sessions[0].dateAr;
  }
  return lang === "fr"
    ? city.sessions.map((s) => s.date).join(" · ")
    : city.sessions.map((s) => s.dateAr).join(" · ");
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
