import { defineConfig } from "astro/config";
import { PAGES_SITE_URL } from "./site.config.mjs";

const siteUrl = new URL(
  process.env.PAGES_BUILD === "true"
    ? PAGES_SITE_URL
    : "https://connections.museum/",
);
const basePath = siteUrl.pathname.replace(/\/$/, "") || "/";

const localDemoRoute = {
  name: "local-demo-route",
  hooks: {
    "astro:config:setup": ({ command, injectRoute }) => {
      if (command === "dev") {
        injectRoute({
          pattern: "/demo",
          entrypoint: "./src/demo.astro",
        });
      }
    },
  },
};

export default defineConfig({
  // Keep Astro's generated files separate from the existing hand-authored site.
  outDir: "./dist",
  build: { format: "file" },
  devToolbar: { enabled: false },
  site: siteUrl.origin,
  base: basePath,
  trailingSlash: "never",
  integrations: [localDemoRoute],
});
