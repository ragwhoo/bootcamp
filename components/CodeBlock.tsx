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
    <div className="relative my-4 rounded-lg border border-gray-200 bg-gray-900 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="rounded px-2 py-1 text-xs text-gray-400 transition-colors hover:text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto text-sm text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}
