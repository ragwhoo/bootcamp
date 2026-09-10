"use client";

import { useState } from "react";
import { glossaryCategories } from "@/content/glossary";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = glossaryCategories
    .filter((cat) => !activeCategory || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      entries: cat.entries.filter(
        (entry) =>
          entry.term.toLowerCase().includes(search.toLowerCase()) ||
          entry.definition.toLowerCase().includes(search.toLowerCase()) ||
          (entry.fullForm && entry.fullForm.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.entries.length > 0);

  const totalTerms = filteredCategories.reduce((acc, cat) => acc + cat.entries.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <a href="/" className="hover:text-white">L&D Bootcamp</a>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">Glossary</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Glossary</h1>
        <p className="mt-2 text-gray-400">Technical terminology used across the bootcamp. {totalTerms} terms.</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm focus:border-white/20 focus:outline-none"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-lg px-4 py-2 text-sm transition-colors ${
            activeCategory === null ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5"
          }`}
        >
          All
        </button>
        {glossaryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
              activeCategory === cat.id ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5"
            }`}
          >
            {cat.icon} {cat.title}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">
              {cat.icon} {cat.title}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cat.entries.map((entry) => (
                <div
                  key={entry.term}
                  className="rounded-lg border border-white/5 bg-white/5 p-4"
                >
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="font-semibold text-white">{entry.term}</span>
                    {entry.fullForm && (
                      <span className="text-xs text-gray-500">({entry.fullForm})</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{entry.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-gray-400">No terms found matching &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
