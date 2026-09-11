"use client";

import { useState, useEffect } from "react";
import { StickyNote } from "lucide-react";

export function HomeNotes() {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bootcamp-notes");
    if (stored) setNote(stored);
  }, []);

  function save() {
    localStorage.setItem("bootcamp-notes", note);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="border-border bg-card/50 rounded-xl border p-6 backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-2">
        <StickyNote className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-foreground text-lg font-semibold">My Notes</h2>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        rows={8}
        className="border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:ring-ring w-full resize-y rounded-lg border p-4 text-sm outline-none focus:ring-2"
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={save}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
        >
          Save Notes
        </button>
        {saved && (
          <span className="text-sm text-green-600 dark:text-green-400">Saved!</span>
        )}
      </div>
    </div>
  );
}
