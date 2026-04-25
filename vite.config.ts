import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // ⚠️ مهم: لو بتستخدم vite-plugin-singlefile مع assets
  // ممكن تحتاج تعطيل بعض الإعدادات
  build: {
    target: "esnext", // ضروري لبعض الميزات الحديثة
    cssCodeSplit: false, // يجمع الـ CSS في ملف واحد
    assetsInlineLimit: 1000000, // حول كل الأصول إلى base64
    brotliSize: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // يجعل كل شيء في ملف واحد
      },
    },
  },
});
