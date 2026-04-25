// ============================================
// i18n Entry Point - نقطة دخول الترجمات
// ============================================

export { en } from "./en";
export { ar } from "./ar";
export type { Dictionary } from "./en";

export type Lang = "en" | "ar";

export const dictionaries = {
  en: () => import("./en").then((m) => m.en),
  ar: () => import("./ar").then((m) => m.ar),
};
