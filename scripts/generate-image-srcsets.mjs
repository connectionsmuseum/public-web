import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { responsiveImageWidths } from "../src/lib/responsive-image.mjs";

const sourceRoot = path.resolve("images");
const outputRoot = path.resolve("dist/generated/images");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function imageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await imageFiles(entryPath)));
    else if (supportedExtensions.has(path.extname(entry.name).toLowerCase()))
      files.push(entryPath);
  }

  return files;
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const sourcePath of await imageFiles(sourceRoot)) {
  const relativePath = path.relative(sourceRoot, sourcePath);
  const relativeDirectory = path.dirname(relativePath);
  const extension = path.extname(relativePath);
  const basename = path.basename(relativePath, extension);
  const outputDirectory = path.join(outputRoot, relativeDirectory);
  const metadata = await sharp(sourcePath).metadata();
  // EXIF rotations can swap the displayed width and height. Resize upright
  // pixels so the filename's width always agrees with the actual output.
  const sourceWidth =
    metadata.orientation >= 5 ? metadata.height : metadata.width;
  if (!sourceWidth)
    throw new Error(`Could not read image dimensions: ${relativePath}`);
  const availableWidths = responsiveImageWidths.filter(
    (width) => width < sourceWidth,
  );
  const format = extension.toLowerCase();

  await mkdir(outputDirectory, { recursive: true });
  for (const width of [...availableWidths, sourceWidth]) {
    const outputPath = path.join(
      outputDirectory,
      `${basename}-${width}w${extension}`,
    );
    const image = sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true });
    if (format === ".jpg" || format === ".jpeg")
      await image.jpeg({ quality: 85 }).toFile(outputPath);
    else if (format === ".png") await image.png().toFile(outputPath);
    else await image.webp({ quality: 85 }).toFile(outputPath);
  }
}
