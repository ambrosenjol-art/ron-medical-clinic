"use client";

import { useMemo, useState } from "react";
import { blogPosts } from "@/data/content";

export default function BlogSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter((post) => `${post.title} ${post.category} ${post.excerpt}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="space-y-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search health tips, vaccination, nutrition..."
        className="w-full rounded-lg border border-slate-300 p-3"
        aria-label="Search health blog"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((post) => (
          <article key={post.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00B4D8]">{post.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-500">Published: {post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
