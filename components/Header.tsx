"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { AuthStatus } from "./AuthStatus";

export function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const ThemeIcon = theme === "light" ? Sun : theme === "system" ? Monitor : Moon;

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-foreground text-lg font-bold tracking-tight">L&D Bootcamp</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground">Home</Link>
          <Link href="/learning-outcome/1" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground">Modules</Link>
          <Link href="/glossary" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground">Glossary</Link>
          <Link href="/ports" className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground">Ports</Link>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-foreground placeholder-muted-foreground border-border bg-muted w-48 rounded-lg border px-3 py-1.5 text-sm focus:border-primary focus:outline-none sm:w-64"
            />
          </form>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={cycleTheme}
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border transition-colors"
            aria-label="Toggle theme"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
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
        className="text-foreground border-border hover:bg-muted min-h-[44px] min-w-[44px] rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors"
      >
        Menu
      </button>
      {open && (
        <div className="bg-card border-border absolute right-0 top-full mt-1 w-48 overflow-y-auto rounded-lg border shadow-lg" style={{ maxHeight: "80vh" }}>
          <nav className="flex flex-col p-2">
            <Link href="/" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Home</Link>
            <Link href="/learning-outcome/1" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Modules</Link>
            <Link href="/glossary" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Glossary</Link>
            <Link href="/ports" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Ports</Link>
            <Link href="/search" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Search</Link>
            <Link href="/auth/sign-in" onClick={() => setOpen(false)} className="text-muted-foreground hover:bg-muted hover:text-foreground rounded px-3 py-3 text-sm">Sign In</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
