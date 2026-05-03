export type Lang = "fr" | "ar";

export const translations = {
  nav: {
    fr: {
      home: "Accueil",
      program: "Programme",
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
      program: "البرنامج",
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
      subtitle: "9 villes — clique sur la tienne pour voir date, lieu et réservation.",
      tapHint: "Appuie pour ouvrir les détails",
      dateLabel: "Date",
      placeLabel: "Lieu",
      pointsTitle: "Points de vente",
      soon: "Les points de vente seront annoncés bientôt.",
      whatsapp: "WhatsApp",
      maps: "Google Maps",
      phone: "Tél.",
    },
    ar: {
      title: "ختار مدينتك",
      subtitle: "9 مدن — كليكي على المدينة ديالك باش تشوف التاريخ والمكان والحجز.",
      tapHint: "كليكي باش تفتح التفاصيل",
      dateLabel: "التاريخ",
      placeLabel: "المكان",
      pointsTitle: "نقاط البيع",
      soon: "نقاط البيع غادي يتعلنو قريبا.",
      whatsapp: "واتساب",
      maps: "خرائط غوغل",
      phone: "الهاتف",
    },
  },
  tourGrid: {
    fr: {
      title: "Tournée nationale",
      subtitle: "Toutes les dates et lieux d’un coup d’œil.",
    },
    ar: {
      title: "الجولة الوطنية",
      subtitle: "كل التواريخ والأماكن فنظرة وحدة.",
    },
  },
  deliveryNotice: {
    fr: "Livraison / retrait : vérifie les zones desservies auprès du point de vente choisi (ex. Sidi Moumen, Anassi, Hay Hassani… selon disponibilité).",
    ar: "التوصيل أو الاستلام: تأكد من المناطق المتوفرة عند نقطة البيع اللي اخترتي.",
  },
  casaDeliveryBox: {
    fr: {
      line1: "Livraison disponible (Casablanca)",
      line2: "Minimum 3 tickets — Zones : Errahma & Bouskoura",
      ctaDelivery: "Demander la livraison",
    },
    ar: {
      line1: "كاينة خدمة التوصيل (كازا)",
      line2: "خاصك تحجز 3 تيكيات على الأقل — المناطق: الرحمة وبوسكورة",
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
  whyAttend: {
    fr: {
      title: "Pourquoi venir ?",
      subtitle: "Tout ce dont tu as besoin pour réussir ton examen régional",
      items: [
        {
          title: "Révision complète du programme",
          desc: "Tous les cours et chapitres essentiels revus de manière structurée.",
          icon: "📚",
        },
        {
          title: "Exercices types examen régional",
          desc: "Entraîne-toi sur des exercices similaires à ceux de l'examen.",
          icon: "✍️",
        },
        {
          title: "Méthodes simples pour répondre",
          desc: "Des techniques claires et efficaces pour chaque matière.",
          icon: "💡",
        },
        {
          title: "Professeurs expérimentés",
          desc: "Encadrés par des enseignants reconnus et passionnés.",
          icon: "🎓",
        },
        {
          title: "Ambiance motivante",
          desc: "Une énergie collective pour booster ta confiance.",
          icon: "🔥",
        },
        {
          title: "Places limitées",
          desc: "Nombre de places restreint pour garantir la qualité.",
          icon: "🎟️",
        },
      ],
    },
    ar: {
      title: "علاش تجي؟",
      subtitle: "كلشي لي خاصك باش تنجح فالجهوي",
      items: [
        {
          title: "مراجعة كاملة للبرنامج",
          desc: "كل الدروس والفصول المهمة كيتراجعو بطريقة منظمة.",
          icon: "📚",
        },
        {
          title: "تمارين بحال ديال الامتحان الجهوي",
          desc: "تدرب على تمارين قريبة من اللي كيجيو فالامتحان.",
          icon: "✍️",
        },
        {
          title: "طرق بسيطة للإجابة",
          desc: "تقنيات واضحة وفعالة لكل مادة.",
          icon: "💡",
        },
        {
          title: "أساتذة ذوو خبرة",
          desc: "مرافقة من أساتذة معروفين ومحترفين.",
          icon: "🎓",
        },
        {
          title: "جو محفز",
          desc: "طاقة جماعية كتعطيك الثقة فراسك.",
          icon: "🔥",
        },
        {
          title: "البلايص محدودة",
          desc: "عدد البلايص قليل باش نضمنو الجودة.",
          icon: "🎟️",
        },
      ],
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
      title: "Révision Nationale 1er Bac",
      desc: "Révision Nationale 1er Bac — Préparation intensive à l'examen régional.",
      contact: "Contact WhatsApp",
      cities: "Nos villes",
      rights: "Tous droits réservés.",
    },
    ar: {
      title: "مراجعة وطنية للأولى باك",
      desc: "مراجعة وطنية للأولى باك — تحضير قوي للامتحان الجهوي.",
      contact: "تواصل واتساب",
      cities: "المدن ديالنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
