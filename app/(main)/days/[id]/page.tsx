import { days } from "@/content/days";
import Link from "next/link";

function getLearningOutcome(topicId: string): number {
  const prefix = topicId.split("-")[0];
  if (prefix === "2") return 2;
  if (prefix === "3") return 3;
  return 1;
}

export function generateStaticParams() {
  return days.map((d) => ({ id: d.id.toString() }));
}

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const day = days.find((d) => d.id === Number(id));

  if (!day) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Day not found</h1>
        <Link href="/" className="mt-4 inline-block text-blue-400 underline hover:text-blue-300">← Back to Home</Link>
      </div>
    );
  }

  const dayIndex = days.findIndex((d) => d.id === day.id);
  const previousDay = dayIndex > 0 ? days[dayIndex - 1] : null;
  const nextDay = dayIndex < days.length - 1 ? days[dayIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-white">L&D Bootcamp</Link>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">Bootcamp by Day</span>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">Day {day.number}</span>
      </nav>

      <div className="mb-10">
        <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-300">
          Day {day.number}
        </span>
        <h1 className="text-3xl font-bold text-white">{day.title}</h1>
        <p className="mt-2 text-gray-400">{day.description}</p>
      </div>

      <div className="mb-10">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-500">Topics Covered</h2>
        <div className="space-y-4">
          {day.topics.map((topic, i) => {
            const num = String(i + 1).padStart(2, "0");
            const lo = topic.topicId ? getLearningOutcome(topic.topicId) : 1;
            const content = (
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                  {topic.description && (
                    <p className="mt-1 text-sm text-gray-400">{topic.description}</p>
                  )}
                </div>
              </div>
            );

            if (topic.topicId) {
              return (
                <Link
                  key={i}
                  href={`/learning-outcome/${lo}/${topic.topicId}`}
                  className="block"
                >
                  {content}
                </Link>
              );
            }
            return <div key={i}>{content}</div>;
          })}
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {previousDay ? (
            <Link href={`/days/${previousDay.id}`} className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white">
              <span>← Day {previousDay.number}</span>
              <span className="truncate text-gray-600">{previousDay.title}</span>
            </Link>
          ) : <div />}
          {nextDay ? (
            <Link href={`/days/${nextDay.id}`} className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white sm:ml-auto">
              <span className="truncate text-gray-600">Day {nextDay.number} {nextDay.title}</span>
              <span>Next Day →</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
