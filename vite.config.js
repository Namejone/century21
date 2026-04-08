import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        aVendre: "a-vendre.html",
        agency: "agency.html",
        contact: "contact.html",
      },
    },
  },
});
