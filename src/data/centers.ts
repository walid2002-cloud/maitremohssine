export type Center = {
  id: string;
  name: string;
  city: string;
  cityAr: string;
  quartier: string;
  adresse: string;
  plusCode: string;
  mapsQuery: string;
  telephone: string;
  maps: string;
  whatsappNumber: string;
  featuredOnMap?: boolean;
};

export const WHATSAPP_MAIN = "212708457935";
export const PHONE_DISPLAY = "07 08 45 79 35";
export const PHONE_TEL = "+212708457935";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@maitremohssine";
export const YOUTUBE_SUBSCRIBE = "https://www.youtube.com/@maitremohssine?sub_confirmation=1";
export const YOUTUBE_CHANNEL_ID = "UCBjdYk1e7MZthMCl2BXi5vg";

function mapsFromQuery(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const centers: Center[] = [
  {
    id: "sidi-moumen",
    name: "Centre GSM",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    quartier: "Sidi Moumen — 20400",
    adresse: "Centre Sidi Moumen, Casablanca 20400",
    plusCode: "HFJ4+47",
    mapsQuery: "HFJ4+47 Casablanca",
    telephone: "06 27 73 99 71",
    maps: mapsFromQuery("HFJ4+47 Casablanca"),
    whatsappNumber: "212627739971",
    featuredOnMap: true,
  },
  {
    id: "elboukhari-oulfa",
    name: "Centre Excellence Elboukhari",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    quartier: "El Oulfa — Hay Hassani — Sidi Maarouf — Lissasfa",
    adresse:
      "الولفة تقاطع شارع واد ملوية مع شارع واد قرب المارشي (Centre Excellence Elboukhari)",
    plusCode: "",
    mapsQuery: "Centre Excellence Elboukhari El Oulfa Casablanca",
    telephone: "07 72 27 07 43",
    maps: "https://maps.app.goo.gl/rAJypJ1xawygHc588",
    whatsappNumber: "212772270743",
  },
  {
    id: "beta-academy-anassi",
    name: "BETA ACADEMY–ANASSI",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    quartier: "Anassi / Casablanca",
    adresse: "",
    plusCode: "",
    mapsQuery: "BETA ACADEMY Anassi Casablanca",
    telephone: "06 64 95 10 50",
    maps: mapsFromQuery("BETA ACADEMY Anassi Casablanca"),
    whatsappNumber: "212664951050",
  },
  {
    id: "beta-academy-tit-mellil",
    name: "BETA ACADEMY TIT-MELLIL",
    city: "Tit Mellil",
    cityAr: "تيت مليل",
    quartier: "Tit Mellil",
    adresse: "",
    plusCode: "",
    mapsQuery: "BETA ACADEMY TIT-MELLIL",
    telephone: "06 40 40 48 42",
    maps: mapsFromQuery("BETA ACADEMY TIT-MELLIL"),
    whatsappNumber: "212640404842",
  },
  {
    id: "excellence-soualem",
    name: "Centre d'excellence",
    city: "Had Soualem",
    cityAr: "حد السوالم",
    quartier: "Had Soualem",
    adresse: "CENTRE D'EXCELLENCE, Had Soualem",
    plusCode: "C48X+GHV",
    mapsQuery: "C48X+GHV Had Soualem",
    telephone: "07 76 72 64 48",
    maps: mapsFromQuery("C48X+GHV Had Soualem"),
    whatsappNumber: "212776726448",
    featuredOnMap: true,
  },
  {
    id: "gph-mohammedia",
    name: "Centre GPH",
    city: "Mohammedia",
    cityAr: "المحمدية",
    quartier: "La Colline — Mohammedia",
    adresse: "Centre GPH, Mohammedia",
    plusCode: "MJVG+9G",
    mapsQuery: "MJVG+9G Mohammedia",
    telephone: "06 04 83 18 29",
    maps: mapsFromQuery("MJVG+9G Mohammedia"),
    whatsappNumber: "212604831829",
    featuredOnMap: true,
  },
  {
    id: "superprof-mohammedia",
    name: "Centre Groupe Superprof Mohssine",
    city: "Mohammedia",
    cityAr: "المحمدية",
    quartier: "Boulevard Palestine — Mohammedia",
    adresse: "MJR9+352, Bd de Palestine, Mohammedia",
    plusCode: "MJR9+352",
    mapsQuery: "MJR9+352 Bd de Palestine Mohammedia",
    telephone: "06 54 50 44 55",
    maps: mapsFromQuery("MJR9+352 Bd de Palestine Mohammedia"),
    whatsappNumber: "212654504455",
    featuredOnMap: true,
  },
];

export const mapCenters = centers.filter((c) => c.featuredOnMap);

export const centerCities = [...new Set(centers.map((c) => c.city))];
