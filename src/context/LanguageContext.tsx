// ============================================
// Language Context - سياق اللغة
// يتحكم في اللغة الحالية (EN/AR) و RTL
// ============================================

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en } from "../i18n/en";
import { ar } from "../i18n/ar";
import type { Dictionary, Lang } from "../i18n";

interface LanguageContextType {
  lang: Lang;
  dict: Dictionary;
  toggleLang: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  dict: en,
  toggleLang: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // نجرّب نجيب اللغة المحفوظة من localStorage
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-lang") as Lang) || "en";
    }
    return "en";
  });

  const dict = lang === "ar" ? ar : en;
  const isRTL = lang === "ar";

  // كل ما تغيّرت اللغة نحدّث الـ HTML attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.style.fontFamily = isRTL
      ? "'Cairo', sans-serif"
      : "'Inter', sans-serif";
    localStorage.setItem("portfolio-lang", lang);
  }, [lang, isRTL]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, dict, toggleLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook للاستخدام السهل
export const useLang = () => useContext(LanguageContext);
