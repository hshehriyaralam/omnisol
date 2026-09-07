import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "../dist/server/entry-server.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.resolve(projectRoot, "../dist");
const templatePath = path.join(distDirectory, "index.html");
const template = await readFile(templatePath, "utf8");

const routes = [
  "/",
  "/blog",
  "/about",
  "/careers",
  "/contact",
  "/hiring/hiring1",
  "/hiring/hiring2",
  "/hiring/hiring3",
  "/referralPage",
  "/services/aidevelopmentservices",
  "/services/aiagents",
  "/services/chatbotdevelopmentservice",
  "/services/generativeai",
  "/services/aipoc",
  "/services/datamigration",
  "/services/aiconsulting",
  "/services/digitaltransformation",
  "/services/workshop",
  "/services/technicalfeasibility",
  "/services/userexperience",
  "/services/aiDevelopmentServices",
  "/services/chatbotDevelopmentService",
];

for (const route of routes) {
  const renderedHtml = render(route, {});
  const titles = [...renderedHtml.matchAll(/<title>[\s\S]*?<\/title>/g)].map(
    ([tag]) => tag,
  );
  const descriptions = [
    ...renderedHtml.matchAll(/<meta\s+name="description"[^>]*\/>/g),
  ].map(([tag]) => tag);
  const canonicals = [
    ...renderedHtml.matchAll(/<link\s+rel="canonical"[^>]*\/>/g),
  ].map(([tag]) => tag);
  const title = titles.at(-1) ?? "";
  const description = descriptions.at(-1) ?? "";
  const canonical =
    canonicals.find((tag) => tag.includes(`href="https://omnisol-jet.vercel.app${route}"`)) ??
    canonicals.at(-1) ??
    "";
  const head = [title, description, canonical].filter(Boolean).join("\n");
  const appHtml = renderedHtml
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<meta\s+name="description"[^>]*\/>/g, "")
    .replace(/<link\s+rel="canonical"[^>]*\/>/g, "");
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace("</head>", `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const outputPath = route === "/"
    ? path.join(distDirectory, "index.html")
    : path.join(distDirectory, route.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}