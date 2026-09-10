"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-50"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          <nav className="flex flex-col p-2">
            <Link href="/" onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Home</Link>
            <Link href="/learning-outcome/1" onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Modules</Link>
            <Link href="/search" onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Search</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
