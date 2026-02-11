
import fs from "fs";
import path from "path";
import { site } from "../src/lib/site.js";
import { getAllPosts } from "../src/lib/posts.js";

const outDir = path.join(process.cwd(), "public");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const posts = getAllPosts();

const items = posts
  .map((p) => {
    const link = `${site.url}/blog/${p.slug}/`;
    return `
      <item>
        <title><![CDATA[${p.frontmatter.title}]]></title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
        <description><![CDATA[${p.frontmatter.summary}]]></description>
      </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${site.name}</title>
    <link>${site.url}</link>
    <description>${site.description}</description>
    ${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(outDir, "rss.xml"), rss);
console.log("✅ RSS generated: public/rss.xml");
