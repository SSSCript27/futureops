
import { getAllPosts } from "@/lib/posts";

export const dynamic = "error";

export function generateStaticParams() {
  const posts = getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) =>
    (p.frontmatter.tags ?? []).forEach((t) => set.add(t.toLowerCase()))
  );
  return Array.from(set).map((tag) => ({ tag }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter((p) =>
    (p.frontmatter.tags ?? [])
      .map((t) => t.toLowerCase())
      .includes(params.tag)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">#{params.tag}</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border p-4">
            <a
              className="text-lg font-semibold underline underline-offset-4"
              href={`/futureops/blog/${p.slug}/`}
            >
              {p.frontmatter.title}
            </a>
            <div className="mt-1 text-sm text-slate-600">{p.frontmatter.date}</div>
            <p className="mt-2 text-slate-700">{p.frontmatter.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
