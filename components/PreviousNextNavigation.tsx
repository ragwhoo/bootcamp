import Link from "next/link";

export function PreviousNextNavigation({ previous, next }: { previous?: { href: string; title: string }; next?: { href: string; title: string } }) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
      {previous ? (
        <Link href={previous.href} className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black">
          <span>← Previous Topic</span>
          <span className="text-gray-400">{previous.title}</span>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={next.href} className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black">
          <span className="text-gray-400">{next.title}</span>
          <span>Next Topic →</span>
        </Link>
      ) : <div />}
    </div>
  );
}
