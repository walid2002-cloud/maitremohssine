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
    lieu: "Salle 8 Megarama",
    lieuAr: "القاعة 8 ميغاراما",
    whatsappNumber: "212674413332",
    salesPoints: [
      {
        name: "Centre GSM",
        quartier: "Sidi Moumen - Anassi",
        adresse: "بسيدي مومن الشرف قرب مؤسسة الوئام",
        telephone: "06 74 41 33 32",
        maps: "https://maps.app.goo.gl/rD2LqYkpMcUBip9z7",
      },
      {
        name: "Centre Alpha Cours",
        quartier: "Azhar - Sidi Bernoussi",
        adresse: "centre Alpha cours أمام مؤسسة Elbilia",
        telephone: "07 08 67 37 99",
        maps: "https://maps.app.goo.gl/thLEym77xfyowQGa7",
      },
      {
        name: "Centre Excellence Elboukhari",
        quartier: "Oulfa - Hay Hassani",
        adresse: "الولفة تقاطع شارع واد ملوية مع شارع واد قرب المارشي",
        telephone: "07 00 00 00 00",
        maps: "https://maps.app.goo.gl/rAJypJ1xawygHc588",
      },
      {
        name: "Cool School",
        quartier: "Maarif - Bourgogne",
        adresse: "Maarif Cool school, École Romandie, Casablanca",
        telephone: "06 36 51 45 58",
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
    date: "16 mai",
    dateAr: "16 ماي",
    lieu: "Megarama",
    lieuAr: "ميغاراما",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "agadir",
    city: "Agadir",
    cityAr: "أكادير",
    date: "17 mai",
    dateAr: "17 ماي",
    lieu: "Salle Bensargaw",
    lieuAr: "قاعة بنسركاو",
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
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "meknes",
    city: "Meknès",
    cityAr: "مكناس",
    date: "22 mai",
    dateAr: "22 ماي",
    lieu: "Théâtre Moumni",
    lieuAr: "مسرح المومني",
    whatsappNumber: "212600000000",
    salesPoints: [],
  },
  {
    id: "fes",
    city: "Fès",
    cityAr: "فاس",
    date: "23 mai",
    dateAr: "23 ماي",
    lieu: "Salle Megarama",
    lieuAr: "قاعة ميغاراما",
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
    whatsappNumber: "212600000000",
    salesPoints: [
      {
        name: "Centre GPH",
        quartier: "La Colline",
        adresse: "La colline en face Mssala, Mohammedia",
        telephone: "06 00 00 00 00",
        maps: "https://share.google/0Vpz0wa0M7n9JkY1v",
      },
      {
        name: "Centre Groupe Superprof Mohssine",
        quartier: "Boulevard Palestine",
        adresse: "شارع فلسطين قرب محلات بيع الزليج, Mohammedia",
        telephone: "06 00 00 00 00",
        maps: "https://maps.app.goo.gl/3mbsG7h4zD8NMEzZA",
      },
      {
        name: "Centre Eco",
        quartier: "Benslimane",
        adresse: "test test",
        telephone: "06 00 00 00 00",
        maps: "",
      },
    ],
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
