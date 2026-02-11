
import { getAllPosts } from "@/lib/posts";

export const dynamic = "error";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border p-4">
            <a
              className="text-lg font-semibold underline underline-offset-4"
              href={`/futureops/blog/${p.slug}/`}
            >
              {p.frontmatter.title}
            </a>
            <div className="mt-1 text-sm text-slate-600">
              {p.frontmatter.date} • {p.readingMinutes} min read
            </div>
            <p className="mt-2 text-slate-700">{p.frontmatter.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.frontmatter.tags ?? []).map((t) => (
                <a
                  key={t}
                  href={`/futureops/tags/${t.toLowerCase()}/`}
                  className="rounded-full border px-3 py-1 text-xs text-slate-700"
                >
                  #{t}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
