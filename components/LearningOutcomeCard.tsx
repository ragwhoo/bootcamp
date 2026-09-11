import Link from "next/link";

export function LearningOutcomeCard({ number, title, description, count, href }: { number: string; title: string; description: string; count: string; href: string }) {
  return (
    <Link href={href} className="border-border bg-card/50 hover:bg-card group block rounded-xl border p-6 backdrop-blur-sm transition-all hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <span className="border-border bg-muted text-foreground rounded-lg border px-3 py-1 text-sm font-bold">
          {number}
        </span>
        <svg className="text-muted-foreground h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <h2 className="text-foreground mb-2 text-xl font-bold">{title}</h2>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        <span>{count} topics</span>
        <span>·</span>
        <span className="group-hover:text-foreground transition-colors">Explore →</span>
      </div>
    </Link>
  );
}
