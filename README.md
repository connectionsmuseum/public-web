# Astro components

The site uses reusable Astro layouts and content components. The development-only gallery is available at `/demo` with `npm run dev` and is excluded from production output.

Use Node.js 22.23.4 or newer and run `npm ci` to install the locked dependencies.
Run `npm run dev` for development, `npm run build` for production output, and `npm run preview` to inspect a build. No production routes have been migrated yet.

## Responsive images

Contributors add one source image under `images/` and import it into a page or
component. Astro's image components generate optimized widths under
`dist/_astro/` and reference them in the built pages' `srcset` attributes.
Generated files are ignored by Git, so contributors maintain only the source
image.

Add page templates under `src/pages/`, shared layouts under `src/layouts/`, and
reusable HTML components under `src/components/`. Put files referenced by
absolute URL in `public/`.

Read [the contributor guide](docs/components.md) for project-wide image and
build rules. Semantic HTML, heading and grid composition, prop guidance, and
usage examples live beside the component implementations in
`src/components/structure/` and `src/components/content/`.

# Acknowledgements.

This project uses the grid-system and lightweight framework [Raster](https://rsms.me/raster/), which is open-source and [on Github here](https://github.com/rsms/raster).

The site uses [Jost\*](https://indestructibletype.com/Jost.html), a geometric sans-serif typeface by [Indestructible Type](https://indestructibletype.com/). Its regular, semibold, bold, and regular italic WOFF2 files are self-hosted in `public/fonts/` for the Astro build. The shared layout preloads these four styles because each is used above the fold; `font-display: optional` avoids shifting already-visible text if a font is late.

Jost is copyright 2020 The Jost Project Authors and distributed under the [SIL Open Font License, Version 1.1 (OFL)](https://github.com/indestructible-type/Jost/blob/master/OFL.txt). The OFL permits using, studying, modifying, and redistributing the font software, including for commercial work, subject to its terms. The license text is included beside the font files in `public/fonts/`.
