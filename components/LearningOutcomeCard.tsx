import Link from "next/link";

export function LearningOutcomeCard({ number, title, description, count, href }: { number: string; title: string; description: string; count: string; href: string }) {
  return (
    <Link href={href} className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
      <div className="mb-4 flex items-start justify-between">
        <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-sm font-bold text-white">
          {number}
        </span>
        <svg className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>{count} topics</span>
        <span>·</span>
        <span className="text-gray-400 group-hover:text-white transition-colors">Explore →</span>
      </div>
    </Link>
  );
}
