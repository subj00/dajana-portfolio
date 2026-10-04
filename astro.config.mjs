// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import { siteConfig } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, Open Graph URLs and the sitemap later on.
  site: siteConfig.url,

  // React is only hydrated for components that use a `client:*` directive.
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
