
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags?: string[];
  canonicalUrl?: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const fm = data as PostFrontmatter;
  const rt = readingTime(content);

  return {
    slug,
    frontmatter: {
      title: fm.title,
      date: fm.date,
      summary: fm.summary,
      tags: fm.tags ?? [],
      canonicalUrl: fm.canonicalUrl
    },
    content,
    readingMinutes: Math.max(1, Math.round(rt.minutes))
  };
}

export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getAllTags(posts: Post[]): Record<string, number> {
  const map: Record<string, number> = {};
  for (const p of posts) {
    for (const t of p.frontmatter.tags ?? []) {
      const key = t.toLowerCase();
      map[key] = (map[key] ?? 0) + 1;
    }
  }
  return map;
}
