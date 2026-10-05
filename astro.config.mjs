// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Phase 1: Grundgerüst mit Theme. i18n-Routing, Sitemap usw. folgen in Phase 2.
export default defineConfig({
  site: "https://zahnarzt-adali.de",
  trailingSlash: "ignore",
  build: { format: "directory" },
  vite: { plugins: [tailwindcss()] },
});
