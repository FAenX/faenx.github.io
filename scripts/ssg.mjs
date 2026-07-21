import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const workspaceRoot = "/workspaces/faenx.github.io";
const buildDir = path.join(workspaceRoot, "build");
const templatePath = path.join(buildDir, "index.html");

function injectHtml(template, appHtml, headTags) {
  return template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("</head>", `${headTags}</head>`);
}

function splitHeadAndBody(appHtml) {
  const headTagPattern =
    /^(?:(<title[\s\S]*?<\/title>)|(<meta[^>]*\/?>)|(<link[^>]*\/?>)|(<script type="application\/ld\+json">[\s\S]*?<\/script>))+/;
  const match = appHtml.match(headTagPattern);

  if (!match) {
    return { bodyHtml: appHtml, extractedHeadTags: "" };
  }

  const extractedHeadTags = match[0];
  const bodyHtml = appHtml.slice(extractedHeadTags.length);
  return { bodyHtml, extractedHeadTags };
}

async function ensureDirForRoute(routePath) {
  const normalized = routePath === "/" ? "" : routePath.replace(/^\//, "").replace(/\/$/, "");
  const targetDir = normalized ? path.join(buildDir, normalized) : buildDir;
  await fs.mkdir(targetDir, { recursive: true });
  return path.join(targetDir, "index.html");
}

function xmlEscape(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function main() {
  const vite = await createServer({
    root: workspaceRoot,
    logLevel: "error",
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const [{ prerenderRoutes, renderUrl }, { expertisePages, personPage, crawlProjects }] =
      await Promise.all([
        vite.ssrLoadModule("/src/ssg.tsx"),
        vite.ssrLoadModule("/src/data/searchPages.ts"),
      ]);

    const template = await fs.readFile(templatePath, "utf8");

    for (const routePath of prerenderRoutes) {
      const renderPath = routePath === "/404.html" ? "/missing-route/" : routePath;
      const { appHtml, headTags } = renderUrl(renderPath);
      const { bodyHtml, extractedHeadTags } = splitHeadAndBody(appHtml);
      const html = injectHtml(template, bodyHtml, `${headTags}${extractedHeadTags}`);
      const outputPath =
        routePath === "/404.html"
          ? path.join(buildDir, "404.html")
          : await ensureDirForRoute(routePath);
      await fs.writeFile(outputPath, html, "utf8");
    }

    const lastmod = new Date().toISOString().slice(0, 10);
    const sitemapRoutes = [
      "/",
      `/${personPage.slug}/`,
      ...expertisePages.map((page) => `/${page.slug}/`),
      "/projects/",
      ...crawlProjects.map((project) => `/projects/${project.id}/`),
    ];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes
      .map(
        (routePath) =>
          `  <url><loc>${xmlEscape(`https://faenx.github.io${routePath}`)}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${routePath === "/" ? "1.0" : "0.8"}</priority></url>`,
      )
      .join("\n")}\n</urlset>\n`;
    await fs.writeFile(path.join(buildDir, "sitemap.xml"), sitemap, "utf8");
  } finally {
    await vite.close();
  }
}

await main();
