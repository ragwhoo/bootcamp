"use client";

import { useState } from "react";
import { portCategories, portMemoryAids, portTroubleshootingSteps, portCommands } from "@/content/ports";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

function IconByName({ name, className }: { name: string; className?: string }) {
  const Icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function PortsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = portCategories
    .filter((cat) => !activeCategory || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      ports: cat.ports.filter(
        (port) =>
          port.port.includes(search) ||
          port.service.toLowerCase().includes(search.toLowerCase()) ||
          port.description.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.ports.length > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-white">L&D Bootcamp</Link>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">Common Ports & Services</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Common Ports & Services</h1>
        <p className="mt-2 text-gray-400">Essential port numbers and their associated services for network troubleshooting and administration.</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search ports or services..."
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
        {portCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
              activeCategory === cat.id ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5"
            }`}
          >
            <IconByName name={cat.icon} className="h-4 w-4" />
            {cat.title}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <IconByName name={cat.icon} className="h-5 w-5" />
              {cat.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 pr-4 font-semibold text-white">Port</th>
                    <th className="pb-3 pr-4 font-semibold text-white">Protocol</th>
                    <th className="pb-3 pr-4 font-semibold text-white">Service</th>
                    <th className="pb-3 font-semibold text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.ports.map((port, i) => (
                    <tr key={`${port.port}-${port.service}-${i}`} className="border-b border-white/5">
                      <td className="py-3 pr-4 font-mono font-medium text-white">{port.port}</td>
                      <td className="py-3 pr-4 text-gray-400">{port.protocol || "-"}</td>
                      <td className="py-3 pr-4 font-medium text-white">{port.service}</td>
                      <td className="py-3 text-gray-400">{port.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-gray-400">No ports found matching &quot;{search}&quot;</p>
        </div>
      )}

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
          <LucideIcons.Bookmark className="h-5 w-5" />
          Memory Aids
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {portMemoryAids.map((aid) => (
            <div key={aid.port} className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
              <span className="font-mono font-bold text-white">{aid.port}</span>
              <span className="text-gray-500">→</span>
              <span className="text-gray-300">{aid.service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
          <LucideIcons.HelpCircle className="h-5 w-5" />
          Troubleshooting Flow
        </h2>
        <div className="flex flex-col gap-2">
          {portTroubleshootingSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-gray-300">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
          <LucideIcons.Terminal className="h-5 w-5" />
          Useful Commands
        </h2>
        <div className="space-y-3">
          {portCommands.map((cmd) => (
            <div key={cmd.command} className="rounded-lg bg-white/5 p-3">
              <code className="block whitespace-pre text-sm font-mono text-white">{cmd.command}</code>
              <p className="mt-1 text-sm text-gray-400">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
