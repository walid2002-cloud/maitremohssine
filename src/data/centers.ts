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

export const WHATSAPP_MAIN = "212622331464";
export const PHONE_DISPLAY = "06 22 33 14 64";
export const PHONE_TEL = "+212622331464";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@maitremohssine";
export const YOUTUBE_SUBSCRIBE = "https://www.youtube.com/@maitremohssine?sub_confirmation=1";
export const YOUTUBE_CHANNEL_ID = "UCBjdYk1e7MZthMCl2BXi5vg";

function mapsFromQuery(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const centers: Center[] = [
  {
    id: "sidi-moumen",
    name: "Centre Sidi Moumen",
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
    id: "alpha-bernoussi",
    name: "Centre Alpha Cours",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    quartier: "Azhar — Sidi Bernoussi",
    adresse: "centre Alpha cours أمام مؤسسة Elbilia",
    plusCode: "",
    mapsQuery: "Centre Alpha Cours Sidi Bernoussi Casablanca",
    telephone: "06 56 63 16 47",
    maps: "https://maps.app.goo.gl/thLEym77xfyowQGa7",
    whatsappNumber: "212656631647",
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
    id: "cool-school-maarif",
    name: "Cool School",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    quartier: "Maarif — Bourgogne — Ain Diab — Anfa — Belvédère",
    adresse: "Maarif Cool school, École Romandie, Casablanca",
    plusCode: "",
    mapsQuery: "Cool School École Romandie Maarif Casablanca",
    telephone: "06 56 16 95 93",
    maps: "https://maps.app.goo.gl/BUsrwRziFbc446X38",
    whatsappNumber: "212656169593",
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
