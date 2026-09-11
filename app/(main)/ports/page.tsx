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
      <nav className="text-muted-foreground mb-4 text-sm">
        <Link href="/" className="hover:text-foreground">L&D Bootcamp</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">Common Ports & Services</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-foreground text-3xl font-bold">Common Ports & Services</h1>
        <p className="text-muted-foreground mt-2">Essential port numbers and their associated services for network troubleshooting and administration.</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search ports or services..."
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
        {portCategories.map((cat) => (
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
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-border border-b">
                    <th className="text-foreground pb-3 pr-4 font-semibold">Port</th>
                    <th className="text-foreground pb-3 pr-4 font-semibold">Protocol</th>
                    <th className="text-foreground pb-3 pr-4 font-semibold">Service</th>
                    <th className="text-foreground pb-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.ports.map((port, i) => (
                    <tr key={`${port.port}-${port.service}-${i}`} className="border-border/50 border-b">
                      <td className="text-foreground py-3 pr-4 font-mono font-medium">{port.port}</td>
                      <td className="text-muted-foreground py-3 pr-4">{port.protocol || "-"}</td>
                      <td className="text-foreground py-3 pr-4 font-medium">{port.service}</td>
                      <td className="text-muted-foreground py-3">{port.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="border-border bg-card/50 rounded-xl border p-8 text-center backdrop-blur-sm">
          <p className="text-muted-foreground">No ports found matching &quot;{search}&quot;</p>
        </div>
      )}

      <div className="border-border bg-card/50 mt-8 rounded-xl border p-6 backdrop-blur-sm">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-bold">
          <LucideIcons.Bookmark className="h-5 w-5" />
          Memory Aids
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {portMemoryAids.map((aid) => (
            <div key={aid.port} className="bg-muted flex items-center gap-2 rounded-lg px-4 py-2">
              <span className="text-foreground font-mono font-bold">{aid.port}</span>
              <span className="text-muted-foreground/50">→</span>
              <span className="text-muted-foreground">{aid.service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-border bg-card/50 mt-8 rounded-xl border p-6 backdrop-blur-sm">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-bold">
          <LucideIcons.HelpCircle className="h-5 w-5" />
          Troubleshooting Flow
        </h2>
        <div className="flex flex-col gap-2">
          {portTroubleshootingSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="bg-muted text-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-border bg-card/50 mt-8 rounded-xl border p-6 backdrop-blur-sm">
        <h2 className="text-foreground mb-4 flex items-center gap-2 text-xl font-bold">
          <LucideIcons.Terminal className="h-5 w-5" />
          Useful Commands
        </h2>
        <div className="space-y-3">
          {portCommands.map((cmd) => (
            <div key={cmd.command} className="bg-muted rounded-lg p-3">
              <code className="text-foreground block whitespace-pre text-sm font-mono">{cmd.command}</code>
              <p className="text-muted-foreground mt-1 text-sm">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
