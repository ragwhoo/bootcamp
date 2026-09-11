import Link from "next/link";
import { learningOutcome1 } from "@/content/learning-outcome-1";
import { learningOutcome2 } from "@/content/learning-outcome-2";
import { learningOutcome3 } from "@/content/learning-outcome-3";

const outcomes = [learningOutcome1, learningOutcome2, learningOutcome3];

export function generateStaticParams() {
  return outcomes.map((lo) => ({ id: lo.id }));
}

export default async function LearningOutcomePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const outcome = outcomes.find((lo) => lo.id === id);

  if (!outcome) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-foreground text-2xl font-bold">Learning Outcome not found</h1>
        <Link href="/" className="text-primary mt-4 inline-block underline hover:opacity-80">← Back to Home</Link>
      </div>
    );
  }

  const totalTopics = outcome.sections.reduce((acc: number, s: any) => acc + s.topics.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-muted-foreground mb-4 text-sm">
        <Link href="/" className="hover:text-foreground">L&D Bootcamp</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">{outcome.title}</span>
      </nav>

      <div className="mb-8">
        <span className="text-muted-foreground/70 mb-2 text-sm font-bold">Learning Outcome {outcome.number}</span>
        <h1 className="text-foreground text-3xl font-bold">{outcome.title}</h1>
        <p className="text-muted-foreground mt-2">{outcome.description}</p>
        <p className="text-muted-foreground/70 mt-1 text-sm">{totalTopics} topics across {outcome.sections.length} sections</p>
      </div>

      <div className="space-y-8">
        {outcome.sections.map((section: any) => (
          <div key={section.id} className="border-border bg-card/50 rounded-xl border p-6 backdrop-blur-sm">
            <h2 className="text-foreground mb-2 text-xl font-bold">
              {section.number} {section.title}
            </h2>
            {section.description && (
              <p className="text-muted-foreground mb-4 text-sm">{section.description}</p>
            )}
            <ul className="space-y-2">
              {section.topics.map((topic: any) => (
                <li key={topic.id}>
                  <Link
                    href={`/learning-outcome/${outcome.id}/${topic.id}`}
                    className="hover:bg-muted block rounded-lg px-4 py-3 text-sm transition-colors"
                  >
                    <span className="text-foreground font-medium">{topic.number}</span>{" "}
                    <span className="text-muted-foreground">{topic.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
