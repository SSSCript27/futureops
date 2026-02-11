
import fs from "fs";
import path from "path";
import { site } from "../src/lib/site.js";
import { getAllPosts } from "../src/lib/posts.js";

const outDir = path.join(process.cwd(), "public");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const pages = [
  `${site.url}/`,
  `${site.url}/blog/`,
  `${site.url}/about/`,
  `${site.url}/tags/`
];

const posts = getAllPosts().map((p) => `${site.url}/blog/${p.slug}/`);
const urls = [...pages, ...posts];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
console.log("✅ Sitemap generated: public/sitemap.xml");
