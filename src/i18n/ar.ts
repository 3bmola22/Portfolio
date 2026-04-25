// ============================================
// Arabic Dictionary - اللغة العربية
// ============================================

import type { Dictionary } from "./en";

export const ar: Dictionary = {
  // --- NAV ---
  nav: {
    home: "الرئيسية",
    about: "عن أحمد",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "تواصل معي",
    langToggle: "EN",
    downloadCV: "تحميل السيرة الذاتية",
  },

  // --- HERO ---
  hero: {
    greeting: "مرحباً، أنا",
    name: "أحمد عبد المولى",
    title: "مطوّر واجهات أمامية",
    subtitle: "متخصص في React.js",
    description:
      "مطوّر React.js متمكّن من HTML و CSS و JavaScript و React 19 و Next.js و TypeScript و Tailwind CSS. أنشأت منصة تجارة إلكترونية حصلت على تقييم 98-100 في Lighthouse. أركّز على تطوير الواجهات الأمامية والتطبيقات المتجاوبة وتصميم واجهات المستخدم.",
    cta: "اطّلع على أعمالي",
    contact: "تواصل معي",
    scrollDown: "اسحب للأسفل",
  },

  // --- ABOUT ---
  about: {
    badge: "عن أحمد",
    title: "مطوّر شغوف من",
    titleHighlight: "القاهرة، مصر",
    description:
      "مطوّر React.js متمكّن من HTML و CSS و JavaScript و React 19 و Next.js و TypeScript و Tailwind CSS. أنشأت منصة تجارة إلكترونية حصلت على تقييم 98-100 في Lighthouse. أركّز على تطوير الواجهات الأمامية والتطبيقات المتجاوبة وتصميم واجهات المستخدم.",
    education: {
      label: "التعليم",
      degree: "دبلوم احترافي في تطوير الواجهات الأمامية",
      school: "Route Academy",
    },
    location: {
      label: "الموقع",
      value: "القاهرة، مصر",
    },
    available: {
      label: "الحالة",
      value: "متاح للعمل",
    },
    experience: {
      label: "التخصص",
      value: "الواجهات الأمامية",
    },
    stats: {
      projects: "مشاريع",
      skills: "مهارة",
      lighthouse: "تقييم Lighthouse",
      coffee: "كوب قهوة ☕",
    },
  },

  // --- SKILLS ---
  skills: {
    badge: "المهارات التقنية",
    title: "التقنيات التي",
    titleHighlight: "أعمل بها",
    description:
      "مجموعة منتقاة من أحدث تقنيات الواجهات الأمامية التي أستخدمها لبناء تطبيقات سريعة وجميلة وسهلة الوصول.",
    categories: {
      core: "التقنيات الأساسية",
      styling: "التصميم وواجهة المستخدم",
      tools: "الأدوات وسير العمل",
    },
  },

  // --- PROJECTS ---
  projects: {
    badge: "أعمالي",
    title: "المشاريع",
    titleHighlight: "المميزة",
    description:
      "مجموعة مختارة من المشاريع التي بنيتها — بتركيز على الأداء والكود النظيف وتجربة المستخدم الممتازة.",
    liveDemo: "العرض المباشر",
    sourceCode: "كود المصدر",
    items: [
      {
        id: 1,
        title: "تطبيق التجارة الإلكترونية",
        description:
          "منصة تجارة إلكترونية متكاملة مبنية بـ React 19 و Next.js. حصلت على تقييم 98-100 في أداء Lighthouse. تشمل عرض المنتجات وإدارة سلة التسوق والمصادقة وتجربة شراء سلسة.",
        tags: ["React 19", "Next.js", "Tailwind CSS", "TypeScript"],
        live: "https://e-commerce-app-alpha-olive.vercel.app/",
        github: "https://github.com/3bmola22",
        featured: true,
      },
      {
        id: 2,
        title: "تطبيق التواصل الاجتماعي",
        description:
          "تطبيق تواصل اجتماعي عصري يتميّز بتفاعلات فورية وملفات شخصية للمستخدمين ومنشورات وإعجابات وتعليقات. مبني للأداء العالي والاستجابة على جميع الأجهزة.",
        tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        live: "https://social-media-app-one-mu.vercel.app/",
        github: "https://github.com/3bmola22",
        featured: true,
      },
    ],
  },

  // --- CONTACT ---
  contact: {
    badge: "تواصل معي",
    title: "لنعمل",
    titleHighlight: "معاً",
    description:
      "لديك مشروع في ذهنك أو تريد التعاون؟ يسعدني سماعك. أملأ النموذج أو تواصل معي مباشرةً.",
    form: {
      name: "اسمك",
      namePlaceholder: "محمد أحمد",
      email: "بريدك الإلكتروني",
      emailPlaceholder: "example@mail.com",
      subject: "الموضوع",
      subjectPlaceholder: "استفسار عن مشروع",
      message: "رسالتك",
      messagePlaceholder: "أخبرني عن مشروعك...",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك بنجاح! سأرد عليك قريباً. 🎉",
      error: "حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرةً.",
    },
    info: {
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      location: "الموقع",
      social: "التواصل الاجتماعي",
    },
  },

  // --- FOOTER ---
  footer: {
    rights: "جميع الحقوق محفوظة.",
    madeWith: "صُنع بـ",
    by: "بواسطة أحمد عبد المولى",
  },
};
