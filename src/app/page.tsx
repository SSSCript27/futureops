
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">DevOps notes that ship</h1>
        <p className="text-slate-700">
          Deep dives, runbooks, incident learnings, automation patterns, and platform engineering playbooks.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Latest posts</h2>
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
            </li>
          ))}
        </ul>

        <a className="underline underline-offset-4" href="/futureops/blog/">
          View all posts →
        </a>
      </section>
    </div>
  );
}
