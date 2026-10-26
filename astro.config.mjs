import { defineConfig } from "astro/config";

const githubPagesPreview = process.env.GITHUB_PAGES_PREVIEW === "true";

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
  site: githubPagesPreview
    ? "https://connectionsmuseum.github.io"
    : "https://connections.museum",
  base: githubPagesPreview ? "/public-web" : "/",
  trailingSlash: "never",
  integrations: [localDemoRoute],
});
