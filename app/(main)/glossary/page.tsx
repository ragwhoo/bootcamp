"use client";

import { useState } from "react";
import { glossaryCategories } from "@/content/glossary";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

function IconByName({ name, className }: { name: string; className?: string }) {
  const Icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

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
      <nav className="text-muted-foreground mb-4 text-sm">
        <Link href="/" className="hover:text-foreground">L&D Bootcamp</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">Glossary</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-foreground text-3xl font-bold">Glossary</h1>
        <p className="text-muted-foreground mt-2">Technical terminology used across the bootcamp. {totalTerms} terms.</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-foreground placeholder-muted-foreground border-border bg-muted w-full rounded-lg border px-4 py-3 backdrop-blur-sm focus:border-primary focus:outline-none"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-lg px-4 py-2 text-sm transition-colors ${
            activeCategory === null ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-muted"
          }`}
        >
          All
        </button>
        {glossaryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
              activeCategory === cat.id ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <IconByName name={cat.icon} className="h-4 w-4" />
            {cat.title}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="border-border bg-card/50 rounded-xl border p-6 backdrop-blur-sm">
            <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-bold">
              <IconByName name={cat.icon} className="h-5 w-5" />
              {cat.title}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cat.entries.map((entry) => (
                <div
                  key={entry.term}
                  className="border-border bg-muted/30 rounded-lg border p-4"
                >
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-foreground font-semibold">{entry.term}</span>
                    {entry.fullForm && (
                      <span className="text-muted-foreground/70 text-xs">({entry.fullForm})</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{entry.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="border-border bg-card/50 rounded-xl border p-8 text-center backdrop-blur-sm">
          <p className="text-muted-foreground">No terms found matching &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
