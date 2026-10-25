# Astro components

The site pages are built with Astro templates and reusable components. Pages
use the shared metadata and document shell in `src/layouts/` and page pieces in
`src/components/`. The component demo is available at `/demo` while running
`npm run dev`; it is excluded from `npm run build` output.

Run `npm run dev` to visit the local component demo at `/demo`. Run
`npm run build` to validate the Astro setup, or `npm run preview` to preview
its `dist/` output. Production pages are introduced in the migration PR.
In Nova, use the Run action of `Build Astro` for the live demo on port 4000.
`Preview Built Astro` builds and serves production output on port 4001.

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
