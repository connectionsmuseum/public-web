import { defineConfig } from "astro/config";

export default defineConfig({
  // Keep Astro's generated files separate from the existing hand-authored site.
  outDir: "./dist",
  build: { format: "file" },
  devToolbar: { enabled: false },
  site: "https://connections.museum",
  trailingSlash: "never",
});
