# Astro components

The site pages are built with Astro templates and reusable components. Pages
use the shared metadata and document shell in `src/layouts/` and page pieces in
`src/components/`. Seattle's detailed exhibit and library copy lives in
`src/pages/seattle/exhibits/index.astro` and `src/pages/seattle/library/index.astro`,
using the same generic layout and content components as the rest of the site.
The Seattle visit page keeps short introductions and links to those routes.
The component demo is available at `/demo` while running
`npm run dev`; it is excluded from `npm run build` output.

Use Node.js 22.23.4 or newer and run `npm ci` to install the locked dependencies.
Run `npm run dev` to work on Astro pages and `npm run build` to generate
the output in `dist/`. Run `npm run preview -- --port 4001` to preview that build.
The build generates the original pages plus the Seattle visit, exhibits, and library pages.
The migrated pages are available at `http://localhost:4001/`,
`http://localhost:4001/seattle.html`,
`http://localhost:4001/seattle/visiting-info.html`,
`http://localhost:4001/seattle/exhibits.html`,
`http://localhost:4001/seattle/library.html`,
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
