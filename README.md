# Astro components

The site pages are built with Astro templates and reusable components. Pages
use the shared metadata and document shell in `src/layouts/` and page pieces in
`src/components/`. The component demo is available at `/demo` while running
`npm run dev`; it is excluded from `npm run build` output.

Run `npm run dev` to work on Astro pages, `npm run build` to generate the
Astro output in `dist/`, or `npm run preview` to preview that build. The build
generates the homepage, Seattle, Denver, support, THG, and 404 pages. In Nova,
the `Build Astro` task serves the live component demo at
`http://localhost:4000/demo`. Select the `Preview Built Astro` task and run its
Build action followed by Run to serve the generated site on port 4001. The
migrated pages are available at `http://localhost:4001/`,
`http://localhost:4001/seattle.html`, `http://localhost:4001/denver.html`,
`http://localhost:4001/support.html`, and `http://localhost:4001/thg.html`.
Rebuild after making changes before previewing the generated output.

## GitHub Pages preview

The Pages destination is set in one place: `PAGES_SITE_URL` in
`site.config.mjs`. The workflow builds for that URL, checks that `/demo` is
absent, and uploads only `dist/`. Pull requests run the build check without
publishing. Run `PAGES_BUILD=true npm run build` and then
`node scripts/verify-pages-output.mjs` to reproduce that output locally.
When the production-page migration reaches `trunk`, change Settings → Pages →
Build and deployment → Source to **GitHub Actions**. Pushes to `trunk` then
deploy the compiled site. Until that one-time switch, Pages still publishes the
repository root without compiling Astro. To move to `connections.museum` later,
change `PAGES_SITE_URL` to `https://connections.museum/` and configure that
custom domain in Pages; the workflow and link code will use the new base path.

Add page templates under `src/pages/`, shared layouts under `src/layouts/`, and
reusable HTML components under `src/components/`. Put files referenced by
absolute URL in `public/`.

Read [the contributor guide](docs/components.md) for project-wide image and
build rules. Semantic HTML, heading and grid composition, prop guidance, and
usage examples live beside the component implementations in
`src/components/structure/` and `src/components/content/`.

# Acknowledgements.

This project uses the grid-system and lightweight framework [Raster](https://rsms.me/raster/), which is open-source and [on Github here](https://github.com/rsms/raster).

It also uses the typeface [Jost\*](https://indestructibletype.com/Jost.html) by the wonderful foundry Indestructible Type. It is available for our use under the [SIL Open Font License](https://openfontlicense.org).
