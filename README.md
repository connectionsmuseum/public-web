# Astro components

The site pages are built with Astro templates and reusable components. Pages
use the shared metadata and document shell in `src/layouts/` and page pieces in
`src/components/`. Seattle's detailed exhibit and library copy lives in
`src/pages/seattle/exhibits/index.astro` and `src/pages/seattle/library/index.astro`,
using the same generic layout and content components as the rest of the site.
The Seattle visit page keeps short introductions and links to those routes.
The component demo is available at `/demo` while running
`npm run dev`; it is excluded from `npm run build` output.

Run `npm run dev` to work on Astro pages, `npm run build` to generate the
Astro output in `dist/`, or `npm run preview` to preview that build. The build
generates the homepage, Seattle visit page, Seattle exhibits and library pages,
Denver, support, THG, and 404 pages. In Nova,
the `Build Astro` task serves the live component demo at
`http://localhost:4000/demo`. Select the `Preview Built Astro` task and run its
Build action followed by Run to serve the generated site on port 4001. The
migrated pages are available at `http://localhost:4001/`,
`http://localhost:4001/seattle.html`,
`http://localhost:4001/seattle/exhibits.html`,
`http://localhost:4001/seattle/library.html`, `http://localhost:4001/denver.html`,
`http://localhost:4001/support.html`, and `http://localhost:4001/thg.html`.
Rebuild after making changes before previewing the generated output.

## Responsive images

Contributors add one source image under `images/`. Every production build runs
`generate:image-srcsets`, which creates width-suffixed files such as
`example-100w.jpeg` and `example-800w.jpeg` under `dist/generated/images/`.
Astro components use the same standard width list to emit the corresponding
`srcset` in the built pages. Generated files are ignored by Git, so the source
image remains the only file contributors need to maintain.

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
