// ============================================
// English Dictionary - اللغة الإنجليزية
// ============================================

export const en = {
  // --- NAV ---
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    langToggle: "AR",
    downloadCV: "Download CV",
  },

  // --- HERO ---
  hero: {
    greeting: "Hi, I'm",
    name: "Ahmed Abdlmawla",
    title: "Junior Front-End Developer",
    subtitle: "React.js Developer",
    description:
      "React.js Developer skilled in HTML, CSS, JavaScript, React 19, Next.js, TypeScript & Tailwind CSS. Built an e-commerce platform with 98-100 Lighthouse scores. Focused on front-end development, responsive web applications & user interface design.",
    cta: "View My Work",
    contact: "Get In Touch",
    scrollDown: "Scroll Down",
  },

  // --- ABOUT ---
  about: {
    badge: "About Me",
    title: "Passionate Developer from",
    titleHighlight: "Cairo, Egypt",
    description:
      "React.js Developer skilled in HTML, CSS, JavaScript, React 19, Next.js, TypeScript & Tailwind CSS. Built an e-commerce platform with 98-100 Lighthouse scores. Focused on front-end development, responsive web applications & user interface design.",
    education: {
      label: "Education",
      degree: "Front-End Web Development Professional Diploma",
      school: "Route Academy",
    },
    location: {
      label: "Location",
      value: "Cairo, Egypt",
    },
    available: {
      label: "Status",
      value: "Available for Work",
    },
    experience: {
      label: "Experience",
      value: "Front-End Focused",
    },
    stats: {
      projects: "Projects",
      skills: "Skills",
      lighthouse: "Lighthouse Score",
      coffee: "Cups of Coffee",
    },
  },

  // --- SKILLS ---
  skills: {
    badge: "Technical Skills",
    title: "Technologies I",
    titleHighlight: "Work With",
    description:
      "A curated set of modern front-end technologies I use to build fast, accessible, and beautiful web applications.",
    categories: {
      core: "Core Technologies",
      styling: "Styling & UI",
      tools: "Tools & Workflow",
    },
  },

  // --- PROJECTS ---
  projects: {
    badge: "My Projects",
    title: "Featured",
    titleHighlight: "Work",
    description:
      "A selection of projects I've built — focused on performance, clean code, and great user experience.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    items: [
      {
        id: 1,
        title: "E-Commerce App",
        description:
          "A full-featured e-commerce platform built with React 19 & Next.js. Achieved 98-100 Lighthouse performance scores. Features product listings, cart management, authentication, and a smooth checkout experience.",
        tags: ["React 19", "Next.js", "Tailwind CSS", "TypeScript"],
        live: "https://e-commerce-app-alpha-olive.vercel.app/",
        // ⚠️ يا أحمد: أضف رابط الـ GitHub repo هنا
        github: "https://github.com/3bmola22/E-commerce-App",
        featured: true,
      },
      {
        id: 2,
        title: "Social Media App",
        description:
          "A modern social media application with real-time interactions, user profiles, posts, likes, and comments. Built for performance and responsiveness across all devices.",
        tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        live: "https://social-media-app-one-mu.vercel.app/",
        // ⚠️ يا أحمد: أضف رابط الـ GitHub repo هنا
        github: "https://github.com/3bmola22/social-media-app",
        featured: true,
      },
    ],
  },

  // --- CONTACT ---
  contact: {
    badge: "Contact Me",
    title: "Let's Work",
    titleHighlight: "Together",
    description:
      "Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form or reach me directly.",
    form: {
      name: "Your Name",
      namePlaceholder: "John Doe",
      email: "Your Email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project Inquiry",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon. 🎉",
      error: "Something went wrong. Please try again or email me directly.",
    },
    info: {
      email: "Email",
      phone: "Phone / WhatsApp",
      location: "Location",
      social: "Social Media",
    },
  },

  // --- FOOTER ---
  footer: {
    rights: "All rights reserved.",
    madeWith: "Made with",
    by: "by Ahmed Abdlmawla",
  },
};

export type Dictionary = typeof en;
