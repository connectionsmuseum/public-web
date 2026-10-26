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

It also uses the typeface [Jost\*](https://indestructibletype.com/Jost.html) by the wonderful foundry Indestructible Type. It is available for our use under the [SIL Open Font License](https://openfontlicense.org).
