
import { getAllPosts, getAllTags } from "@/lib/posts";

export const dynamic = "error";

export default function TagsIndex() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);
  const sorted = Object.entries(tags).sort((a, b) => b[1] - a[1]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tags</h1>
      <div className="flex flex-wrap gap-2">
        {sorted.map(([tag, count]) => (
          <a
            key={tag}
            href={`/futureops/tags/${tag}/`}
            className="rounded-full border px-3 py-1 text-sm"
          >
            #{tag} <span className="text-slate-500">({count})</span>
          </a>
        ))}
      </div>
    </div>
  );
}
