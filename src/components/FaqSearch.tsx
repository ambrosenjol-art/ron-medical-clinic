"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/data/content";

export default function FaqSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((faq) => `${faq.question} ${faq.answer}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <section>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border border-slate-300 p-3"
        placeholder="Search FAQs"
        aria-label="Search frequently asked questions"
      />
      <div className="mt-5 space-y-3">
        {filtered.map((faq) => (
          <details key={faq.question} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
