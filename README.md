# Astro components

The site uses reusable Astro layouts and content components. The development-only gallery is available at `/demo` with `npm run dev` and is excluded from production output.

Use Node.js 22.23.4 or newer and run `npm ci` to install the locked dependencies.
Run `npm run dev` to work on Astro pages and `npm run build` to generate
the output in `dist/`. Run `npm run preview -- --port 4001` to preview that build.
The build generates the homepage, Seattle, Denver, support, THG, the about alias, and 404 pages.
The migrated pages are available at `http://localhost:4001/`,
`http://localhost:4001/seattle.html`,
`http://localhost:4001/denver.html`,
`http://localhost:4001/support.html`,
`http://localhost:4001/thg.html`,
`http://localhost:4001/about.html`,
`http://localhost:4001/404.html`.
Rebuild after making changes before previewing the generated output.

## Responsive images

Contributors add one source image under `images/` and import it into a page or
component. Astro's image components generate optimized widths under
`dist/_astro/` and reference them in the built pages' `srcset` attributes.
Generated files are ignored by Git, so contributors maintain only the source
image.

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
