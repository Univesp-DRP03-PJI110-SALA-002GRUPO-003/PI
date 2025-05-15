import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite acesso externo
    port: 5173, // Altere se precisar usar uma porta diferente,
  },
  resolve: {
    alias: {
      "@web": path.resolve(__dirname, "./src"),
    },
  },
});
