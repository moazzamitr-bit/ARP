import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";

const root = process.cwd();
const appOutput = join(root, ".next/server/app");
const dist = join(root, "dist");

async function exists(path) {
  try {
    await readFile(path);
    return true;
  } catch {
    return false;
  }
}

function pageTarget(source) {
  const rel = relative(appOutput, source);
  if (rel === "index.html") {
    return join(dist, "index.html");
  }
  return join(dist, rel.replace(/\.html$/, "/index.html"));
}

function rewriteImageOptimizerUrls(html) {
  return html.replace(/\/_next\/image\?url=([^&"']+)&amp;w=\d+&amp;q=\d+/g, (_, encodedUrl) => {
    return decodeURIComponent(encodedUrl);
  });
}

async function walk(dir, visitor) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(path, visitor);
        return;
      }
      await visitor(path);
    }),
  );
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await cp(join(root, ".next/static"), join(dist, "_next/static"), { recursive: true });

if (await exists(join(root, "public/assets/images/hero-sports-distribution.png"))) {
  await cp(join(root, "public"), dist, { recursive: true });
}

await walk(appOutput, async (source) => {
  const extension = extname(source);

  if (extension === ".html") {
    const target = pageTarget(source);
    const html = rewriteImageOptimizerUrls(await readFile(source, "utf8"));
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }

  if (source.endsWith(".txt.body") || source.endsWith(".xml.body")) {
    const rel = relative(appOutput, source).replace(/\.body$/, "");
    const target = join(dist, rel);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, await readFile(source));
  }
});

