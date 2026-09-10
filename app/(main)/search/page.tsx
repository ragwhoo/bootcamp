"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { learningOutcome1 } from "@/content/learning-outcome-1";
import { learningOutcome2 } from "@/content/learning-outcome-2";
import { learningOutcome3 } from "@/content/learning-outcome-3";

const outcomes = [learningOutcome1, learningOutcome2, learningOutcome3];

type TopicEntry = {
  outcomeId: string;
  outcomeTitle: string;
  sectionNumber: string;
  sectionTitle: string;
  topicId: string;
  topicTitle: string;
  excerpt: string;
};

function getAllTopics(): TopicEntry[] {
  const results: TopicEntry[] = [];
  for (const outcome of outcomes) {
    for (const section of outcome.sections) {
      for (const topic of section.topics) {
        const content = topic.content as any;
        const textParts: string[] = [];
        if (content.intro) textParts.push(content.intro);
        if (content.definitions) content.definitions.forEach((d: any) => textParts.push(d.details));
        if (content.steps) content.steps.forEach((s: any) => {
          if (typeof s === "string") textParts.push(s);
          else if (s.details) textParts.push(s.details);
        });
        if (content.subsections) content.subsections.forEach((s: any) => textParts.push(s.content));
        const text = textParts.join(" ");
        results.push({
          outcomeId: outcome.id,
          outcomeTitle: outcome.title,
          sectionNumber: section.number,
          sectionTitle: section.title,
          topicId: topic.id,
          topicTitle: topic.title,
          excerpt: text.slice(0, 200),
        });
      }
    }
  }
  return results;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TopicEntry[]>([]);
  const [searched, setSearched] = useState(false);

  const allTopics = getAllTopics();

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      const filtered = allTopics.filter((t) =>
        t.topicTitle.toLowerCase().includes(q.toLowerCase()) ||
        t.sectionTitle.toLowerCase().includes(q.toLowerCase()) ||
        t.outcomeTitle.toLowerCase().includes(q.toLowerCase()) ||
        t.excerpt.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
      setSearched(true);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    const filtered = allTopics.filter((t) =>
      t.topicTitle.toLowerCase().includes(query.toLowerCase()) ||
      t.sectionTitle.toLowerCase().includes(query.toLowerCase()) ||
      t.outcomeTitle.toLowerCase().includes(query.toLowerCase()) ||
      t.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-white">L&D Bootcamp</Link>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">Search</span>
      </nav>

      <h1 className="text-3xl font-bold text-white">Search</h1>
      <p className="mt-2 text-gray-400">Find topics across the learning path.</p>

      <form onSubmit={handleSearch} className="my-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for DNS, DHCP, RAID, IIS, etc..."
            className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-gray-500 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
          >
            Search
          </button>
        </div>
      </form>

      {searched && (
        <div>
          {results.length === 0 ? (
            <p className="text-gray-500">No results found. Try a different search term.</p>
          ) : (
            <div>
              <p className="mb-4 text-sm text-gray-500">{results.length} result{results.length !== 1 ? "s" : ""} found</p>
              <div className="space-y-4">
                {results.map((result) => (
                  <Link
                    key={result.topicId}
                    href={`/learning-outcome/${result.outcomeId}/${result.topicId}`}
                    className="block rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{result.topicTitle}</h3>
                        <p className="text-sm text-gray-400">
                          {result.sectionNumber} {result.sectionTitle}
                        </p>
                        <p className="text-sm text-gray-500">{result.outcomeTitle}</p>
                      </div>
                      <span className="ml-4 flex-shrink-0 text-xs text-gray-500">{result.sectionNumber}</span>
                    </div>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-400">{result.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!searched && (
        <div className="mt-8">
          <p className="mb-4 text-sm text-gray-500">Popular topics:</p>
          <div className="flex flex-wrap gap-2">
            {["DNS", "DHCP", "Kerberos", "RAID", "IIS", "GPO", "AD DS", "Hypervisor", "NVMe", "FTP", "CNAME"].map((term) => (
              <button
                key={term}
                onClick={() => { setQuery(term); handleSearch({} as React.FormEvent); }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/30 hover:text-white"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-16 text-center"><p className="text-gray-400">Loading...</p></div>}>
      <SearchContent />
    </Suspense>
  );
}
