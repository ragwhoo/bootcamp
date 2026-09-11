import { days } from "@/content/days";
import Link from "next/link";
import { DayNotes } from "@/components/DayNotes";

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
        <h1 className="text-foreground text-2xl font-bold">Day not found</h1>
        <Link href="/" className="text-primary mt-4 inline-block underline hover:opacity-80">← Back to Home</Link>
      </div>
    );
  }

  const dayIndex = days.findIndex((d) => d.id === day.id);
  const previousDay = dayIndex > 0 ? days[dayIndex - 1] : null;
  const nextDay = dayIndex < days.length - 1 ? days[dayIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-muted-foreground mb-4 text-sm">
        <Link href="/" className="hover:text-foreground">L&D Bootcamp</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">Bootcamp by Day</span>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">Day {day.number}</span>
      </nav>

      <div className="mb-10">
        <span className="border-border bg-muted text-muted-foreground mb-3 inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider">
          Day {day.number}
        </span>
        <h1 className="text-foreground text-3xl font-bold">{day.title}</h1>
        <p className="text-muted-foreground mt-2">{day.description}</p>
      </div>

      <div className="mb-10">
        <h2 className="text-muted-foreground/70 mb-6 text-sm font-bold uppercase tracking-wider">Topics Covered</h2>
        <div className="space-y-4">
          {day.topics.map((topic, i) => {
            const num = String(i + 1).padStart(2, "0");
            const lo = topic.topicId ? getLearningOutcome(topic.topicId) : 1;
            const content = (
              <div className="border-border bg-card/50 hover:bg-card flex items-start gap-4 rounded-xl border p-5 backdrop-blur-sm transition-colors">
                <span className="bg-muted text-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold">
                  {num}
                </span>
                <div>
                  <h3 className="text-foreground text-lg font-semibold">{topic.title}</h3>
                  {topic.description && (
                    <p className="text-muted-foreground mt-1 text-sm">{topic.description}</p>
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

      <DayNotes dayId={day.id} />

      <div className="border-border border-t pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {previousDay ? (
            <Link href={`/days/${previousDay.id}`} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors">
              <span>← Day {previousDay.number}</span>
              <span className="text-muted-foreground/50 truncate">{previousDay.title}</span>
            </Link>
          ) : <div />}
          {nextDay ? (
            <Link href={`/days/${nextDay.id}`} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors sm:ml-auto">
              <span className="text-muted-foreground/50 truncate">Day {nextDay.number} {nextDay.title}</span>
              <span>Next Day →</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
