import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Указываем алиасы для упрощенного импорта
      "@components": "/src/components", // Импорт компонентов через @components
      "@redux": "/src/redux", // Импорт файлов Redux через @redux
    },
  },
});
