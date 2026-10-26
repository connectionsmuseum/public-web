import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve("dist");
const base = "/public-web/";

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? filesUnder(entryPath) : [entryPath];
    }),
  );
  return nested.flat();
}

await access(path.join(outputRoot, "index.html"));
await access(path.join(outputRoot, "404.html"));
const htmlFiles = (await filesUnder(outputRoot)).filter((file) =>
  file.endsWith(".html"),
);
if (
  htmlFiles.some((file) =>
    /(?:^|\/)demo(?:\/|\.html$)/.test(path.relative(outputRoot, file)),
  )
) {
  throw new Error(
    "The development-only /demo route was included in the Pages artifact.",
  );
}

let checkedUrls = 0;
for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  for (const [, attribute, value] of html.matchAll(
    /\b(href|src|srcset)="([^"]*)"/g,
  )) {
    const urls =
      attribute === "srcset"
        ? value.split(",").map((candidate) => candidate.trim().split(/\s+/)[0])
        : [value];
    for (const url of urls) {
      if (!url.startsWith("/") || url.startsWith("//")) continue;
      if (!url.startsWith(base)) {
        throw new Error(
          `${htmlFile}: root-relative URL missing ${base}: ${url}`,
        );
      }
      const pathname = url.split(/[?#]/, 1)[0];
      const relativePath = pathname.slice(base.length) || "index.html";
      const outputPath = path.join(outputRoot, relativePath);
      await access(outputPath).catch(() => {
        throw new Error(
          `${htmlFile}: ${url} does not resolve to a built file.`,
        );
      });
      checkedUrls += 1;
    }
  }
}

console.log(
  `Verified ${htmlFiles.length} pages and ${checkedUrls} local URLs; no /demo route.`,
);
