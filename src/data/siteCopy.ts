import type { Lang } from "@/data/translations";

export const siteCopy = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      centers: "Nos Centres",
      remote: "Cours à distance",
      event: "Événement National",
      gallery: "Galerie",
      contact: "Contact",
      whatsapp: "WhatsApp",
      langSwitch: "الدارجة",
    },
    hero: {
      kicker: "Soutien scolaire · Maroc",
      title: "MAÎTRE MOHSSINE",
      subtitle: "Le N°1 du soutien scolaire au niveau national.",
      body: "Des milliers d’élèves, une méthode éprouvée, une exigence de l’excellence. Présentiel dans nos centres. Cours à distance partout au Maroc.",
      ctaDiscover: "Découvrir",
      ctaCenters: "Nos centres",
      ctaRemote: "Cours à distance",
      ctaYoutube: "Regarder sur YouTube",
      scroll: "Défiler",
    },
    stats: {
      badge: "Impact",
      title: "Des résultats qui parlent",
      items: [
        { value: 15000, suffix: "+", label: "élèves accompagnés" },
        { value: 50, suffix: " M+", label: "vues YouTube" },
        { value: 7, suffix: "", label: "centres au Maroc" },
        { value: 10000, suffix: "+", label: "réussites" },
      ],
      cities: "Présent dans plusieurs villes",
      success: "Des milliers de réussites",
    },
    about: {
      badge: "Parcours",
      title: "Qui est Maître Mohssine ?",
      lead: "Professeur de français, pédagogue et référence nationale. Il a transformé le soutien scolaire en une expérience exigeante, claire et inspirante.",
      visionTitle: "Vision",
      vision:
        "Offrir à chaque élève marocain une méthode d’excellence, quelle que soit sa ville — du présentiel premium aux cours à distance.",
      missionTitle: "Mission",
      mission:
        "Rendre le français et les examens accessibles, structurés et gagnants. Moins de stress. Plus de méthode. Des notes qui suivent.",
      whyTitle: "Pourquoi le N°1",
      why: "Une pédagogie unique, une chaîne YouTube suivie par des centaines de milliers d’élèves, des centres physiques et une tournée nationale SOLD OUT.",
      timeline: [
        { year: "Début", text: "Un professeur, une salle, une conviction : la méthode avant tout." },
        { year: "YouTube", text: "Des millions de vues. Le français expliqué comme jamais." },
        { year: "Centres", text: "Un réseau à Casablanca, Mohammedia, Soualem." },
        { year: "National", text: "L’Événement National 1 — 9 villes, 100 % SOLD OUT." },
      ],
    },
    youtube: {
      badge: "Chaîne officielle",
      title: "Apprendre comme au cinéma",
      subtitle: "Derniers cours et méthodes d’examen — la référence YouTube du français au Maroc.",
      subscribe: "S'abonner",
      latest: "Dernières vidéos",
      watch: "Lire",
    },
    map: {
      badge: "Réseau",
      title: "Fin nqra 3nd Maître Mohssine ?",
      subtitle: "Clique sur une ville. Chaque centre s’ouvre avec l’adresse, Maps, le téléphone et WhatsApp.",
      viewCenter: "Voir le centre",
      maps: "Google Maps",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      close: "Fermer",
      allCenters: "Tous les centres",
    },
    courses: {
      badge: "Formules",
      title: "Choisis ta façon d’apprendre",
      presentielTitle: "Présentiel",
      presentielDesc:
        "Dans nos centres : salles premium, suivi de groupe, examens blancs et l’énergie d’une vraie classe.",
      presentielCta: "Trouver un centre",
      remoteTitle: "Cours à distance",
      remoteDesc:
        "Live, replays, exercices et suivi WhatsApp. La méthode Maître Mohssine, chez toi, partout au Maroc.",
      remoteCta: "Découvrir le distant",
    },
    why: {
      badge: "Différence",
      title: "Pourquoi nous choisir",
      cards: [
        { title: "Méthode pédagogique", text: "Des étapes claires, des modèles d’examen, zéro improvisation." },
        { title: "Accompagnement", text: "Un suivi humain, des groupes maîtrisés, des réponses rapides." },
        { title: "Examens", text: "Régional, national : on s’entraîne comme le jour J." },
        { title: "Suivi", text: "Progression mesurée, devoirs, feedback. Tu sors de la zone de doute." },
        { title: "Résultats", text: "Des notes qui montent parce que la méthode est répétée jusqu’à la maîtrise." },
        { title: "Réussite", text: "Une culture d’excellence — la même exigence qu’en tournée nationale." },
      ],
    },
    testimonials: {
      badge: "Confiance",
      title: "Parents & élèves",
      subtitle: "La voix de ceux qui ont choisi l’excellence.",
      items: [
        {
          text: "Grâce à cette révision, j'ai compris la méthode de réponse. J'ai eu une très bonne note au régional !",
          name: "Salma B.",
          role: "Élève · Casablanca",
        },
        {
          text: "Les exercices étaient proches de l'examen régional. Je me sentais vraiment préparé le jour J.",
          name: "Yassine M.",
          role: "Élève · Rabat",
        },
        {
          text: "L'ambiance était motivante et organisée. Les professeurs expliquent très bien.",
          name: "Amina K.",
          role: "Élève · Marrakech",
        },
        {
          text: "Je recommande à tous les élèves de 1ère Bac. C'est une préparation complète et efficace.",
          name: "Omar Z.",
          role: "Élève · Fès",
        },
        {
          text: "Mon fils a repris confiance. Le suivi et la clarté des cours ont tout changé.",
          name: "Nadia R.",
          role: "Parent · Mohammedia",
        },
      ],
    },
    gallery: {
      badge: "Galerie",
      title: "Cours, centres, événements",
      subtitle: "L’énergie Maître Mohssine — salles combles, fierté nationale, travail sérieux.",
      captions: [
        "Événement national — Casablanca",
        "Fierté nationale sur scène",
        "Des milliers de flashlights, une seule énergie",
        "Salle comble, objectif atteint",
      ],
    },
    eventTeaser: {
      badge: "Tournée nationale",
      title: "Événement National 1",
      subtitle:
        "Une page dédiée : souvenirs, villes SOLD OUT, photos, vidéos et prochaine édition. Tout l’événement Maître Mohssine est ici.",
      cta: "Ouvrir la page événement",
      soldOut: "SOLD OUT",
    },
    cta: {
      title: "Inscris-toi maintenant",
      subtitle: "Un message. Un appel. Ta place dans un centre ou en cours à distance.",
      whatsapp: "WhatsApp",
      phone: "Téléphone",
    },
    footer: {
      brand: "Maître Mohssine",
      desc: "Le N°1 du soutien scolaire au Maroc. Centres, cours à distance, YouTube — une seule exigence : ta réussite.",
      explore: "Explorer",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
    centersPage: {
      badge: "Réseau",
      title: "Nos centres",
      subtitle: "Recherche par ville, quartier ou nom. Ouvre Maps, appelle, ou écris sur WhatsApp.",
      search: "Rechercher un centre, une ville, un quartier…",
      filterAll: "Toutes les villes",
      empty: "Aucun centre ne correspond à ta recherche.",
    },
    remotePage: {
      badge: "Live & replay",
      title: "Cours à distance",
      subtitle: "La méthode Maître Mohssine, où que tu sois au Maroc.",
      methodTitle: "La méthode",
      method:
        "Cours structurés, modèles d’examen, production écrite et oral. Tu travailles comme en centre — avec la même exigence.",
      howTitle: "Comment ça fonctionne",
      steps: [
        { title: "Inscription WhatsApp", text: "Tu nous écris. On te place dans le groupe et le planning." },
        { title: "Sessions live", text: "Cours en direct, interaction, exercices. Comme une vraie salle." },
        { title: "Replay & suivi", text: "Tu revois. Tu t’entraînes. On corrige. Tes notes suivent." },
      ],
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Faut-il du matériel spécial ?",
          a: "Un téléphone ou un ordinateur, une connexion stable, un cahier. C’est tout.",
        },
        {
          q: "Les replays sont-ils inclus ?",
          a: "Oui. Tu peux revoir les séances pour ancrer la méthode.",
        },
        {
          q: "Puis-je combiner avec un centre ?",
          a: "Oui. Beaucoup d’élèves mixent présentiel et distant selon leur emploi du temps.",
        },
        {
          q: "Comment s’inscrire ?",
          a: "WhatsApp ou téléphone. On te confirme le groupe, les horaires et le règlement en quelques messages.",
        },
      ],
      cta: "S’inscrire sur WhatsApp",
    },
    eventPage: {
      navLabel: "Événement National",
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Cette édition est-elle terminée ?",
          a: "Oui. L’Événement National 1 est SOLD OUT et achevé avec succès dans toutes les villes. Merci à tous les élèves, parents et professeurs.",
        },
        {
          q: "Comment être informé de la prochaine édition ?",
          a: "Écris-nous sur WhatsApp. Tu seras contacté dès l’annonce des nouvelles dates.",
        },
        {
          q: "Les tickets se vendaient-ils le jour J ?",
          a: "Les tickets étaient disponibles le jour de l’événement, sur place. Merci de venir 1 heure avant le début afin de garantir ta place.",
        },
        {
          q: "Où suivre les infos ?",
          a: "Stories et reels de Maître Mohssine, et ce site pour les souvenirs de tournée.",
        },
      ],
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "شنو هو",
      centers: "المراكز",
      remote: "دروس عن بعد",
      event: "الحدث الوطني",
      gallery: "الألبوم",
      contact: "اتصل بنا",
      whatsapp: "واتساب",
      langSwitch: "FR",
    },
    hero: {
      kicker: "الدعم المدرسي · المغرب",
      title: "الأستاذ محسن",
      subtitle: "رقم 1 فالدعم المدرسي على المستوى الوطني.",
      body: "آلاف التلاميذ، طريقة مجربة، ومستوى عالي. حضوري فالمراكز. ودروس عن بعد فكل المغرب.",
      ctaDiscover: "اكتشف",
      ctaCenters: "المراكز",
      ctaRemote: "دروس عن بعد",
      ctaYoutube: "شوف فاليوتيوب",
      scroll: "نزل لتحت",
    },
    stats: {
      badge: "الأثر",
      title: "النتائج هي اللي كتهضر",
      items: [
        { value: 15000, suffix: "+", label: "تلميذ تم مرافقتهم" },
        { value: 50, suffix: " M+", label: "مشاهدة يوتيوب" },
        { value: 7, suffix: "", label: "مراكز فالمغرب" },
        { value: 10000, suffix: "+", label: "نجاح" },
      ],
      cities: "موجود فعدة مدن",
      success: "آلاف النجاحات",
    },
    about: {
      badge: "المسار",
      title: "شنو هو الأستاذ محسن؟",
      lead: "أستاذ الفرنسية، بيداغوجي ومرجع وطني. حول الدعم المدرسي لتجربة واضحة، صارمة وملهمة.",
      visionTitle: "الرؤية",
      vision: "يعطي لكل تلميذ مغربي طريقة امتياز، من أي مدينة — حضوري أو عن بعد.",
      missionTitle: "المهمة",
      mission: "يخليه الفرنسي والامتحانات مفهومين ومنظمين ورابحين. قل التوتر. زيد الطريقة. والنقط كتبع.",
      whyTitle: "علاش رقم 1",
      why: "بيداغوجية فريدة، قناة يوتيوب كيتابعوها مئات الآلاف، مراكز حقيقية، وجولة وطنية SOLD OUT.",
      timeline: [
        { year: "البداية", text: "أستاذ، قاعة، وقناعة: الطريقة قبل كل شيء." },
        { year: "يوتيوب", text: "ملايين المشاهدات. الفرنسية مشروحة بحال عمرها." },
        { year: "المراكز", text: "شبكة فالدار البيضاء، المحمدية، السوالم." },
        { year: "الوطني", text: "الحدث الوطني 1 — 9 مدن، 100% SOLD OUT." },
      ],
    },
    youtube: {
      badge: "القناة الرسمية",
      title: "قرا بحال السينما",
      subtitle: "آخر الدروس ومنهجية الامتحان — مرجع يوتيوب ديال الفرنسية فالمغرب.",
      subscribe: "اشترك",
      latest: "آخر الفيديوهات",
      watch: "شاهد",
    },
    map: {
      badge: "الشبكة",
      title: "فين نقرا عند الأستاذ محسن؟",
      subtitle: "كليكي على المدينة. كل مركز كيتفتح بالعنوان والخريطة والتيليفون والواتساب.",
      viewCenter: "شوف المركز",
      maps: "خرائط غوغل",
      phone: "التيليفون",
      whatsapp: "واتساب",
      close: "سد",
      allCenters: "كل المراكز",
    },
    courses: {
      badge: "الصيغ",
      title: "ختار كيفاش تقرأ",
      presentielTitle: "حضوري",
      presentielDesc: "فالمراكز: قاعات ممتازة، تتبع المجموعة، امتحانات تجريبية وطاقة ديال قسم حقيقي.",
      presentielCta: "لقى مركز",
      remoteTitle: "دروس عن بعد",
      remoteDesc: "لايف، ريپلاي، تمارين وتتبع واتساب. طريقة الأستاذ محسن، عندك فالدار، فأي بلاصة فالمغرب.",
      remoteCta: "اكتشف البعد",
    },
    why: {
      badge: "الفرق",
      title: "علاش تختارنا",
      cards: [
        { title: "الطريقة البيداغوجية", text: "مراحل واضحة، نماذج الامتحان، بلا ارتجال." },
        { title: "المرافقة", text: "تتبع إنساني، مجموعات مضبوطة، أجوبة سريعة." },
        { title: "الامتحانات", text: "الجهوي والوطني: كنتدربو بحال نهار الامتحان." },
        { title: "التتبع", text: "التقدم كيتحسب، فروض، ملاحظات. كتخرج من الشك." },
        { title: "النتائج", text: "النقط كطلعو حيت الطريقة كتتعاود حتى الإتقان." },
        { title: "النجاح", text: "ثقافة الامتياز — نفس الصرامة ديال الجولة الوطنية." },
      ],
    },
    testimonials: {
      badge: "الثقة",
      title: "الآباء والتلاميذ",
      subtitle: "صوت اللي اختارو الامتياز.",
      items: [
        {
          text: "بفضل هاد المراجعة، فهمت المنهجية ديال الإجابة. جبت نقطة مزيانة فالجهوي!",
          name: "سلمى ب.",
          role: "تلميذة · الدار البيضاء",
        },
        {
          text: "التمارين كانو قراب من الامتحان الجهوي. حسيت براسي مستعد نهار الامتحان.",
          name: "ياسين م.",
          role: "تلميذ · الرباط",
        },
        {
          text: "الجو كان محفز ومنظم. الأساتذة كيشرحو مزيان بزاف.",
          name: "أمينة ك.",
          role: "تلميذة · مراكش",
        },
        {
          text: "كنوصي كل تلاميذ الأولى باك. هادي مراجعة كاملة وفعالة.",
          name: "عمر ز.",
          role: "تلميذ · فاس",
        },
        {
          text: "ولدي رجع عندو الثقة. التتبع ووضوح الدروس بدلو كل شيء.",
          name: "نادية ر.",
          role: "ولية أمر · المحمدية",
        },
      ],
    },
    gallery: {
      badge: "الألبوم",
      title: "دروس، مراكز، أحداث",
      subtitle: "طاقة الأستاذ محسن — قاعات عامرة، فخر وطني، وخدمة جدية.",
      captions: [
        "حدث وطني — الدار البيضاء",
        "الفخر الوطني فوق الخشبة",
        "آلاف الأضواء، طاقة وحدة",
        "قاعة عامرة، الهدف تحقق",
      ],
    },
    eventTeaser: {
      badge: "الجولة الوطنية",
      title: "الحدث الوطني 1",
      subtitle:
        "صفحة مستقلة: الذكريات، المدن SOLD OUT، الصور، الفيديوهات والنسخة الجاية. كل الحدث ديال الأستاذ محسن هنا.",
      cta: "فتح صفحة الحدث",
      soldOut: "SOLD OUT",
    },
    cta: {
      title: "تسجّل دابا",
      subtitle: "ميساج. تيليفون. بلاصتك فالمركز أو فالدرس عن بعد.",
      whatsapp: "واتساب",
      phone: "التيليفون",
    },
    footer: {
      brand: "الأستاذ محسن",
      desc: "رقم 1 فالدعم المدرسي فالمغرب. مراكز، دروس عن بعد، يوتيوب — مطلب واحد: نجاحك.",
      explore: "استكشف",
      contact: "اتصال",
      rights: "جميع الحقوق محفوظة.",
    },
    centersPage: {
      badge: "الشبكة",
      title: "المراكز ديالنا",
      subtitle: "قلب بالمدينة، الحي أو الاسم. فتح الخريطة، عيط، ولا كتب واتساب.",
      search: "قلب على مركز، مدينة، حي…",
      filterAll: "كل المدن",
      empty: "ما كاين حتى مركز بهاد البحث.",
    },
    remotePage: {
      badge: "لايف وريپلاي",
      title: "دروس عن بعد",
      subtitle: "طريقة الأستاذ محسن، فين ما كنتي فالمغرب.",
      methodTitle: "الطريقة",
      method: "دروس منظمة، نماذج الامتحان، التعبير الكتابي والشفوي. كتخدم بحال فالمركز — بنفس الصرامة.",
      howTitle: "كيفاش كتمشي",
      steps: [
        { title: "التسجيل واتساب", text: "كتب لينا. كنديروك فالكروب والبرنامج." },
        { title: "حصص لايف", text: "درس مباشر، تفاعل، تمارين. بحال قاعة حقيقية." },
        { title: "ريپلاي وتتبع", text: "كتعاود. كتتمرن. كنصلحو. والنقط كتبع." },
      ],
      faqTitle: "أسئلة متكررة",
      faq: [
        {
          q: "واش خاص تجهيز خاص؟",
          a: "تيليفون أو أوردياتور، إنترنت مستقرة، وكراسة. هادشي كامل.",
        },
        {
          q: "الريپلاي داخل؟",
          a: "آه. تقدر تعاود الحصص باش ترسخ الطريقة.",
        },
        {
          q: "نقدر نخلط مع المركز؟",
          a: "آه. بزاف ديال التلاميذ كيديرو حضوري وعن بعد حسب الوقت.",
        },
        {
          q: "كيفاش نتسجل؟",
          a: "واتساب أو تيليفون. كنأكدو الكروب والوقت والتسجيل فبعض الميساجات.",
        },
      ],
      cta: "تسجّل واتساب",
    },
    eventPage: {
      navLabel: "الحدث الوطني",
      faqTitle: "أسئلة متكررة",
      faq: [
        {
          q: "واش هاد النسخة سالات؟",
          a: "آه. الحدث الوطني 1 SOLD OUT وسالا بنجاح فكل المدن. شكرا لجميع التلاميذ والآباء والأساتذة.",
        },
        {
          q: "كيفاش نعرف النسخة الجاية؟",
          a: "كتب لينا واتساب. غادي نتصلو بيك منين يتعلنو التواريخ الجداد.",
        },
        {
          q: "التيكيات كانو كيتباعو نهار الحدث؟",
          a: "التيكيات كانو متوفرين نهار الحدث، فالمكان. تجي ساعة قبل باش تضمن بلاصتك.",
        },
        {
          q: "فين نتبع الأخبار؟",
          a: "ستوريات وريلز ديال الأستاذ محسن، وهاد الموقع لذكريات الجولة.",
        },
      ],
    },
  },
} as const;

export function getCopy(lang: Lang) {
  return siteCopy[lang];
}
