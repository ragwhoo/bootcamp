import Link from "next/link";

export function DayCard({ number, title, description, topics, href }: { number: string; title: string; description: string; topics: { title: string }[]; href: string }) {
  return (
    <Link href={href} className="border-border bg-card/50 hover:bg-card group block rounded-xl border p-6 backdrop-blur-sm transition-all hover:shadow-lg">
      <span className="border-border bg-muted text-muted-foreground mb-3 inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider">
        Day {number}
      </span>
      <h3 className="text-foreground mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="mb-4">
        <p className="text-muted-foreground/70 mb-2 text-xs font-semibold uppercase tracking-wider">Topics covered</p>
        <ul className="space-y-1">
          {topics.map((t, i) => (
            <li key={i} className="text-muted-foreground flex items-center gap-2 text-sm">
              <span className="bg-border h-1 w-1 flex-shrink-0 rounded-full" />
              {t.title}
            </li>
          ))}
        </ul>
      </div>
      <span className="text-muted-foreground text-sm font-medium transition-colors group-hover:text-foreground">
        View topics →
      </span>
    </Link>
  );
}
