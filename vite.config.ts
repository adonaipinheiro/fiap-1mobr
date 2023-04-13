import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "FIAP",
        short_name: "FIAP",
        description: "Educação que transforma",
        theme_color: "#ba1247",
        icons: [
          {
            src: "fiap_192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "fiap.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
