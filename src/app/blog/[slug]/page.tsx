
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const dynamic = "error";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  const url = `${site.url}/blog/${post.slug}/`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    alternates: { canonical: post.frontmatter.canonicalUrl ?? url },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      url,
      type: "article"
    }
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className="prose prose-slate max-w-none">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-sm text-slate-600">
        {post.frontmatter.date} • {post.readingMinutes} min read
      </p>

      <div className="not-prose mt-4 flex flex-wrap gap-2">
        {(post.frontmatter.tags ?? []).map((t) => (
          <a
            key={t}
            href={`/futureops/tags/${t.toLowerCase()}/`}
            className="rounded-full border px-3 py-1 text-xs text-slate-700"
          >
            #{t}
          </a>
        ))}
      </div>

      <hr />
      <MDXRemote source={post.content} />
    </article>
  );
}
