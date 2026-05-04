export interface SalesPoint {
  name: string;
  quartier: string;
  adresse: string;
  telephone: string;
  maps: string;
}

export interface CityEvent {
  id: string;
  city: string;
  cityAr: string;
  date: string;
  dateAr: string;
  lieu: string;
  lieuAr: string;
  /** Carte Google du lieu de l’événement (salle / hôtel) */
  venueMaps: string;
  salesPoints: SalesPoint[];
  whatsappNumber: string;
}

export const cities: CityEvent[] = [
  {
    id: "casablanca",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    date: "09 mai",
    dateAr: "09 ماي",
    lieu: "Megarama — Salle 8",
    lieuAr: "ميغاراما — القاعة 8",
    venueMaps: "https://maps.app.goo.gl/fe5Lkk5KKocLub8J6",
    whatsappNumber: "212622331464",
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
        name: "Espace Amine Café",
        quartier: "Ain Chock — Sidi Maarouf Sbata — Sidi Othmane — Ben M'sick",
        adresse: "Bd El Qods, Ain Chock, Casablanca",
        telephone: "06 64 75 40 68",
        maps: "https://maps.app.goo.gl/ZV83Eknr1cLR54Ez7",
      },
    ],
  },
  {
    id: "marrakech",
    city: "Marrakech",
    cityAr: "مراكش",
    date: "16 mai",
    dateAr: "16 ماي",
    lieu: "Megarama",
    lieuAr: "ميغاراما",
    venueMaps: "https://maps.app.goo.gl/Q9nAZkU7SGpG2YPP8",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "agadir",
    city: "Agadir",
    cityAr: "أكادير",
    date: "17 mai",
    dateAr: "17 ماي",
    lieu: "Salle Bensargao",
    lieuAr: "قاعة بنسركاو",
    venueMaps: "https://maps.app.goo.gl/kZcdvnGsrn4yWmQV7",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "rabat",
    city: "Rabat",
    cityAr: "الرباط",
    date: "21 mai",
    dateAr: "21 ماي",
    lieu: "Salle Zenith",
    lieuAr: "قاعة زينيت",
    venueMaps: "https://maps.app.goo.gl/d7qmHixFHNx3QFud8",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "meknes",
    city: "Meknès",
    cityAr: "مكناس",
    date: "22 mai",
    dateAr: "22 ماي",
    lieu: "Théâtre Fkih Moumni",
    lieuAr: "مسرح الفقيه المومني",
    venueMaps: "https://maps.app.goo.gl/9dYEKLPEuEJJV3PY7",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "fes",
    city: "Fès",
    cityAr: "فاس",
    date: "23 mai",
    dateAr: "23 ماي",
    lieu: "Megarama",
    lieuAr: "ميغاراما",
    venueMaps: "https://maps.app.goo.gl/2HsPW8qkm1raB9Ux7",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "tanger",
    city: "Tanger",
    cityAr: "طنجة",
    date: "24 mai",
    dateAr: "24 ماي",
    lieu: "Salle Boukmakh",
    lieuAr: "قاعة بوكماخ",
    venueMaps: "https://maps.app.goo.gl/pRJbxmSQhWAJqK7g6",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "tetouan",
    city: "Tétouan",
    cityAr: "تطوان",
    date: "25 mai",
    dateAr: "25 ماي",
    lieu: "Cinéma Spanol",
    lieuAr: "سينما سبانيول",
    venueMaps: "https://maps.app.goo.gl/BMKpCRnk6s16JSj68",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "mohammedia",
    city: "Mohammedia",
    cityAr: "المحمدية",
    date: "30 mai",
    dateAr: "30 ماي",
    lieu: "Hôtel Avanti",
    lieuAr: "فندق أفانتي",
    venueMaps: "https://maps.app.goo.gl/YRDocsDXShDkjjWC6",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
];

export function formatPhoneToWhatsApp(phone: string): string {
  const cleaned = phone.replace(/\s/g, "");
  if (cleaned.startsWith("0")) {
    return "212" + cleaned.slice(1);
  }
  return cleaned;
}

export function getWhatsAppLink(number: string, city: string): string {
  const message = encodeURIComponent(`Bonjour, je veux réserver pour ${city}`);
  return `https://wa.me/${number}?text=${message}`;
}
