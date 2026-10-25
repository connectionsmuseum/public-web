# Contributor guide

This repository uses Astro components to keep page updates small and
consistent. Reusable components live under `src/components/structure/` or
`src/components/content/`; each component documents its own semantic contract
and props beside its implementation.

## Images and responsive delivery

Put contributor images under `images/` and import them into a page or component:

```astro
import museumImage from "../../images/exhibits/museum-image.jpeg";

<MediaFigure image={museumImage} alt="A 1970s telephone switch in the Seattle museum">
  Seattle museum telephone switch, photographed by Claire Violet.
</MediaFigure>
```

Use imported Astro image metadata in image components, and keep only the
source originals under `images/`. Components own image delivery; contributors
should not hand-maintain size variants.

Image rules:

- `alt` is a concise, standalone description of the image itself.
- Use `alt=""` only when an image is genuinely decorative or adds no
  information beyond nearby text.
- A caption adds context, attribution, or historical detail; it does not
  replace non-empty alt text.
- Let the components choose format, quality, and standard width candidates.
  Only provide `sizes` when the rendered layout differs from the default.

## Project-wide conventions

- Preserve the museum's reviewed copy and voice during component refactors.
  Check changes against `trunk`, including emphasis, photo credits, and links.
- Adjust the shared type and spacing variables in `museum.css` together.
  Component heading and link scales provide visual emphasis without changing
  the document outline.

- Run `npm run build` before submitting a change. It checks Astro templates and
  regenerates responsive image output.
- Keep generated output in `dist/`; it is ignored by Git.
- Keep the one-page-heading and grid composition rules close to the relevant
  structure components. Read those files before changing page hierarchy or
  Raster cell layout.
- Add new reusable pieces to the appropriate `structure/` or `content/`
  folder, and include a short usage example or contract comment in the file.
- Preview at a narrow viewport as well as a desktop viewport. Check focus
  order, headings, captions, and grid behavior.
- Update this guide only when a project-wide rule changes; component-specific
  behavior belongs beside the component implementation.
