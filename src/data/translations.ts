export type Lang = "fr" | "ar";

export const translations = {
  nav: {
    fr: {
      home: "Accueil",
      cities: "Villes",
      salesPoints: "Ma ville",
      teachers: "Professeurs",
      contact: "Contact",
      reserve: "Choisir ma ville",
      langSwitch: "الدارجة",
      tour: "Tournée",
    },
    ar: {
      home: "الرئيسية",
      cities: "المدن",
      salesPoints: "مدينتي",
      teachers: "الأساتذة",
      contact: "اتصل بنا",
      reserve: "ختار مدينتي",
      langSwitch: "FR",
      tour: "الجولة",
    },
  },
  simpleHero: {
    fr: {
      badge: "ÉVÉNEMENT NATIONAL 1",
      title: "Révision pour l'examen régional — 1er Bac dans plusieurs villes du Maroc",
      subtitle:
        "Choisis ta ville, découvre la date, le lieu, les points de vente et réserve ta place facilement.",
      ctaCity: "Choisir ma ville",
      ctaTour: "Voir la tournée nationale",
      imageLine1: "Événement national",
      imageLine2: "1er Bac",
    },
    ar: {
      badge: "حدث وطني 1",
      title: "مراجعة للامتحان الجهوي — الأولى باك فعدة مدن فالمغرب",
      subtitle:
        "ختار مدينتك، شوف التاريخ والمكان ونقاط البيع، وحجز بلاصتك بسهولة.",
      ctaCity: "ختار مدينتي",
      ctaTour: "شوف الجولة الوطنية",
      imageLine1: "حدث وطني",
      imageLine2: "الأولى باك",
    },
  },
  citySection: {
    fr: {
      title: "Choisis ta ville",
      subtitle:
        "Chaque carte est une date — Casablanca a 2 dates — clique pour voir lieu, réservation et points de vente.",
      tapHint: "Appuie pour ouvrir les détails",
      dateLabel: "Date",
      placeLabel: "Lieu",
      pointsTitle: "Points de vente",
      soon: "Les points de vente seront annoncés bientôt.",
      whatsapp: "WhatsApp",
      maps: "Voir sur Maps",
      phone: "Tél.",
      venueMapCta: "Voir le lieu sur Google Maps",
      programTagline: "Maître Mohssine – Événement National 🇲🇦",
      programTicketsDay:
        "🎫 Tickets disponibles uniquement le jour de l’événement.",
      programArriveEarly:
        "⏰ Merci de venir 1 heure avant le début afin de garantir ta place.",
      programFollowSocial:
        "📲 Reste branché(e) aux stories 👀 et reels 🔥 de Maître Mohssine pour toutes les infos et les nouveautés 🚀",
      venueSalesBody:
        "Les points de vente / la billetterie : le jour de l’événement, sur place au même lieu que la session (voir la carte ci-dessus).",
      programHeading: "Programme",
      soldOutBadge: "SOLD OUT",
      soldOutNote: "Cette date est complète.",
      newDateBadge: "Nouvelle date",
      reserveButton: "Réserver",
      completeCasa: "Complet",
      stampSoldOut: "COMPLET",
    },
    ar: {
      title: "ختار مدينتك",
      subtitle:
        "كل كارت هي تاريخ — كازا عندها جوج تواريخ — كليك باش تشوف المكان والحجز ونقاط البيع.",
      tapHint: "كليكي باش تفتح التفاصيل",
      dateLabel: "التاريخ",
      placeLabel: "المكان",
      pointsTitle: "نقاط البيع",
      soon: "نقاط البيع غادي يتعلنو قريبا.",
      whatsapp: "واتساب",
      maps: "شوف على الخريطة",
      phone: "الهاتف",
      venueMapCta: "شوف المكان فخرائط غوغل",
      programTagline: "الأستاذ محسن — الحدث الوطني 🇲🇦",
      programTicketsDay: "🎫 التيكيات غادي تتباع غير فنفس النهار ديال لحدث.",
      programArriveEarly: "⏰ تجي ساعة قبل باش تضمن بلاصتك.",
      programFollowSocial:
        "📲 تابع الستوريات 👀 والريلز 🔥 ديال الأستاذ محسن باش تلحق آخر الأخبار 🚀",
      venueSalesBody:
        "نقاط البيع / التيكيات: فنفس النهار ديال لحدث، فنفس المكان ديال الجلسة (شوف الخريطة لفوق).",
      programHeading: "البرنامج",
      soldOutBadge: "SOLD OUT",
      soldOutNote: "هاد التاريخ عامر.",
      newDateBadge: "تاريخ جديد",
      reserveButton: "احجز",
      completeCasa: "مكتمل",
      stampSoldOut: "كامل",
    },
  },
  tourGrid: {
    fr: {
      title: "Tournée nationale",
      subtitle: "Toutes les dates et lieux d’un coup d’œil.",
      openMap: "Carte",
      salesPoints: "Points de vente",
      salesPointsHide: "Masquer",
      soldOutTag: "SOLD OUT",
      newDateTag: "Nouvelle date",
      reserveButton: "Réserver",
      completeCasa: "Complet",
    },
    ar: {
      title: "الجولة الوطنية",
      subtitle: "كل التواريخ والأماكن فنظرة وحدة.",
      openMap: "خريطة",
      salesPoints: "نقاط البيع",
      salesPointsHide: "خبي",
      soldOutTag: "SOLD OUT",
      newDateTag: "تاريخ جديد",
      reserveButton: "احجز",
      completeCasa: "مكتمل",
    },
  },
  deliveryNotice: {
    fr: "Livraison / retrait : vérifie les zones desservies auprès du point de vente choisi (ex. Sidi Moumen, Anassi, Hay Hassani… selon disponibilité).",
    ar: "التوصيل أو الاستلام: تأكد من المناطق المتوفرة عند نقطة البيع اللي اخترتي.",
  },
  casaDeliveryBox: {
    fr: {
      line1: "Minimum 3 tickets — Errahma & Bouskoura",
      line2: "",
      ctaDelivery: "Demander la livraison",
    },
    ar: {
      line1: "على الأقل 3 تيكيات — الرحمة وبوسكورة",
      line2: "",
      ctaDelivery: "طلب التوصيل",
    },
  },
  intro: {
    fr: {
      dramatic1: "Le jour est venu.",
      dramatic2: "L'événement numéro 1 au niveau national.",
      dramatic3: "La préparation ultime au régional 1er Bac.",
      dramatic4: "9 villes. 4 professeurs. Une seule mission.",
      dramatic5: "Es-tu prêt ?",
      enter: "Entrer dans l'expérience",
      edition: "Édition 2025",
    },
    ar: {
      dramatic1: "جا النهار.",
      dramatic2: "الحدث رقم 1 على المستوى الوطني.",
      dramatic3: "التحضير النهائي للامتحان الجهوي الأولى باك.",
      dramatic4: "9 مدن. 4 أساتذة. مهمة وحدة.",
      dramatic5: "واش أنت مستعد؟",
      enter: "دخل للتجربة",
      edition: "نسخة 2025",
    },
  },
  story: {
    fr: {
      lines: [
        "Le jour approche.",
        "Le stress monte.",
        "Chaque erreur peut coûter cher.",
        "Tu n'as pas droit à l'échec.",
      ],
      transition: "Mais tu n'es pas seul.",
    },
    ar: {
      lines: [
        "النهار قرب…",
        "الضغط كيزيد…",
        "أي غلطة تقدر تكلفك بزاف…",
        "ما عندكش فرصة تغلط.",
      ],
      transition: "ولكن ماشي بوحدك.",
    },
  },
  teachers: {
    fr: {
      title: "L'équipe pédagogique",
      subtitle:
        "Une équipe pédagogique expérimentée pour accompagner les élèves vers la réussite.",
      list: [
        {
          name: "Maître Mohssine",
          subject: "Français",
          desc: "Professeur de français reconnu, méthodes innovantes et résultats prouvés.",
        },
        {
          name: "Mr Jabri Othman",
          subject: "Arabe",
          desc: "Expert en langue arabe, spécialiste de la préparation aux examens.",
        },
        {
          name: "Mr Latifi",
          subject: "Histoire-Géographie",
          desc: "Passionné d'histoire, rend les cours clairs et mémorisables.",
        },
        {
          name: "Mr Rami",
          subject: "Éducation islamique",
          desc: "Approche pédagogique simple et structurée.",
        },
      ],
    },
    ar: {
      title: "فريق الأساتذة",
      subtitle:
        "فريق ديال الأساتذة مجربين باش يعاونو التلاميذ يوجدو مزيان وينجحو.",
      list: [
        {
          name: "الأستاذ محسن",
          subject: "الفرنسية",
          desc: "أستاذ ديال الفرنسية معروف، طرق مبتكرة ونتائج مثبتة.",
        },
        {
          name: "الأستاذ الجبري عثمان",
          subject: "العربية",
          desc: "خبير فاللغة العربية، متخصص فالتحضير للامتحانات.",
        },
        {
          name: "الأستاذ اللطيفي",
          subject: "التاريخ والجغرافيا",
          desc: "شغوف بالتاريخ، كيخلي الدروس واضحة وسهلة الحفظ.",
        },
        {
          name: "الأستاذ الرامي",
          subject: "التربية الإسلامية",
          desc: "طريقة بيداغوجية بسيطة ومنظمة.",
        },
      ],
    },
  },
  citiesTimeline: {
    fr: {
      title: "Tournée nationale",
      subtitle: "9 villes, une seule mission : ta réussite",
      viewSalesPoints: "Voir points de vente",
      whatsapp: "WhatsApp",
      soonText: "Les points de vente seront annoncés bientôt.",
    },
    ar: {
      title: "الجولة الوطنية",
      subtitle: "9 مدن، هدف واحد: نجاحك",
      viewSalesPoints: "نقاط البيع",
      whatsapp: "واتساب",
      soonText: "نقاط البيع غادي يتعلنو قريبا.",
    },
  },
  citySelector: {
    fr: {
      title: "Choisis ta ville",
      subtitle: "Sélectionne ta ville pour voir les détails et points de vente",
      placeholder: "Sélectionner une ville...",
      date: "Date",
      venue: "Lieu",
      salesPointsTitle: "Points de vente",
      noSalesPoints: "Les points de vente seront annoncés bientôt.",
      phone: "Tél",
      maps: "Google Maps",
      whatsapp: "Réserver via WhatsApp",
    },
    ar: {
      title: "ختار مدينتك",
      subtitle: "ختار المدينة ديالك باش تشوف التفاصيل ونقاط البيع",
      placeholder: "ختار مدينة...",
      date: "التاريخ",
      venue: "المكان",
      salesPointsTitle: "نقاط البيع",
      noSalesPoints: "نقاط البيع غادي يتعلنو قريبا.",
      phone: "الهاتف",
      maps: "خرائط غوغل",
      whatsapp: "حجز عبر واتساب",
    },
  },
  antigone: {
    fr: {
      badge: "Acte final",
      title: "Résister, c'est choisir son destin.",
      subtitle:
        "Comme Antigone face à Créon, tu as un choix à faire. Ne laisse personne décider de ton avenir.",
      quote1: "\"C'est maintenant que je dois décider.\"",
      quote2: "\"Le destin, c'est ce qu'on choisit de faire.\"",
      cta: "Choisis ta ville. Choisis ta réussite.",
    },
    ar: {
      badge: "الفصل الأخير",
      title: "الاختيار ديالك هو اللي كيحدد المصير ديالك.",
      subtitle:
        "بحال أنتيغون قدام كريون، عندك اختيار تدير. ما تخلي حتا واحد يقرر عليك مستقبلك.",
      quote1: "\"دابا هو الوقت باش نقرر.\"",
      quote2: "\"المصير هو داك الشي اللي كنختاروه.\"",
      cta: "ختار مدينتك. ختار النجاح ديالك.",
    },
  },
  gallery: {
    fr: {
      title: "L'ambiance de nos événements",
      subtitle:
        "Des milliers d'élèves réunis dans une énergie incroyable à travers le Maroc",
      badge: "Éditions précédentes",
      captions: [
        "Événement national — Casablanca",
        "Fierté nationale sur scène",
        "Des milliers de flashlights, une seule énergie",
        "Salle comble, objectif atteint",
      ],
    },
    ar: {
      title: "أجواء الأحداث ديالنا",
      subtitle:
        "آلاف التلاميذ مجتمعين فطاقة خيالية فمختلف مدن المغرب",
      badge: "النسخ السابقة",
      captions: [
        "حدث وطني — الدار البيضاء",
        "الفخر الوطني فوق الخشبة",
        "آلاف الأضواء، طاقة وحدة",
        "قاعة عامرة، الهدف تحقق",
      ],
    },
  },
  urgency: {
    fr: {
      title: "Ne rate pas cette opportunité !",
      text: "Les places sont limitées. Réserve ta place avant que la salle soit complète.",
      cta: "Réserver maintenant",
    },
    ar: {
      title: "ما تفوتش هاد الفرصة!",
      text: "البلايص محدودة. حجز بلاصتك قبل ما تعمر القاعة.",
      cta: "حجز دابا",
    },
  },
  testimonials: {
    fr: {
      title: "Ce que disent nos élèves",
      subtitle: "Des centaines d'élèves nous font confiance chaque année",
      items: [
        {
          text: "Grâce à cette révision, j'ai compris la méthode de réponse. J'ai eu une très bonne note au régional !",
          name: "Salma B.",
          city: "Casablanca",
        },
        {
          text: "Les exercices étaient proches de l'examen régional. Je me sentais vraiment préparé le jour J.",
          name: "Yassine M.",
          city: "Rabat",
        },
        {
          text: "L'ambiance était motivante et organisée. Les professeurs expliquent très bien.",
          name: "Amina K.",
          city: "Marrakech",
        },
        {
          text: "Je recommande à tous les élèves de 1ère Bac. C'est une préparation complète et efficace.",
          name: "Omar Z.",
          city: "Fès",
        },
      ],
    },
    ar: {
      title: "شنو كيقولو التلاميذ ديالنا",
      subtitle: "مئات التلاميذ كيثقو فينا كل عام",
      items: [
        {
          text: "بفضل هاد المراجعة، فهمت المنهجية ديال الإجابة. جبت نقطة مزيانة فالجهوي!",
          name: "سلمى ب.",
          city: "الدار البيضاء",
        },
        {
          text: "التمارين كانو قراب من الامتحان الجهوي. حسيت براسي مستعد نهار الامتحان.",
          name: "ياسين م.",
          city: "الرباط",
        },
        {
          text: "الجو كان محفز ومنظم. الأساتذة كيشرحو مزيان بزاف.",
          name: "أمينة ك.",
          city: "مراكش",
        },
        {
          text: "كنوصي كل تلاميذ الأولى باك. هادي مراجعة كاملة وفعالة.",
          name: "عمر ز.",
          city: "فاس",
        },
      ],
    },
  },
  footer: {
    fr: {
      title: "Événement National 1",
      desc: "Révision pour l’examen régional 1er Bac — tournée nationale avec Maître Mohssine.",
      contact: "Contact WhatsApp",
      cities: "Nos villes",
      rights: "Tous droits réservés.",
    },
    ar: {
      title: "الحدث الوطني 1",
      desc: "مراجعة للامتحان الجهوي — الأولى باك، جولة وطنية مع الأستاذ محسن.",
      contact: "تواصل واتساب",
      cities: "المدن ديالنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
