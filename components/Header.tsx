"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthStatus } from "./AuthStatus";

export function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">L&D Bootcamp</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">Home</Link>
          <Link href="/learning-outcome/1" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">Modules</Link>
          <Link href="/glossary" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">Glossary</Link>
          <Link href="/ports" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">Ports</Link>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-48 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none sm:w-64"
            />
          </form>
        </nav>
        <div className="flex items-center gap-4">
          <AuthStatus />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="min-h-[44px] min-w-[44px] rounded-lg border border-white/20 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-48 overflow-y-auto rounded-lg border border-white/10 bg-gray-900 shadow-lg" style={{ maxHeight: "80vh" }}>
          <nav className="flex flex-col p-2">
            <Link href="/" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Home</Link>
            <Link href="/learning-outcome/1" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Modules</Link>
            <Link href="/glossary" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Glossary</Link>
            <Link href="/ports" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Ports</Link>
            <Link href="/search" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Search</Link>
            <Link href="/auth/sign-in" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-gray-300 hover:bg-white/10">Sign In</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
