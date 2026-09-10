import Link from "next/link";

export function DayCard({ number, title, description, topics, href }: { number: string; title: string; description: string; topics: { title: string }[]; href: string }) {
  return (
    <Link href={href} className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
      <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-300">
        Day {number}
      </span>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Topics covered</p>
        <ul className="space-y-1">
          {topics.map((t, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gray-600" />
              {t.title}
            </li>
          ))}
        </ul>
      </div>
      <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-white">
        View topics →
      </span>
    </Link>
  );
}
