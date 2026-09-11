"use client";

import { useState } from "react";

export function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-border bg-card relative my-4 rounded-lg border p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-muted-foreground text-xs">{language}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground rounded px-2 py-1 text-xs transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="text-foreground overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
