import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { defineConfig } from "vite";

// للتعامل مع __dirname في ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // دعم لـ React
    viteSingleFile(), // لتجميع كل شيء في ملف واحد (اختياري)
  ],
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
