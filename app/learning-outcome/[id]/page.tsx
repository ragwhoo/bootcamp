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
        <h1 className="text-2xl font-bold text-white">Learning Outcome not found</h1>
        <a href="/" className="mt-4 inline-block text-blue-400 underline hover:text-blue-300">← Back to Home</a>
      </div>
    );
  }

  const totalTopics = outcome.sections.reduce((acc: number, s: any) => acc + s.topics.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <a href="/" className="hover:text-white">L&D Bootcamp</a>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">{outcome.title}</span>
      </nav>

      <div className="mb-8">
        <span className="mb-2 text-sm font-bold text-gray-500">Learning Outcome {outcome.number}</span>
        <h1 className="text-3xl font-bold text-white">{outcome.title}</h1>
        <p className="mt-2 text-gray-400">{outcome.description}</p>
        <p className="mt-1 text-sm text-gray-500">{totalTopics} topics across {outcome.sections.length} sections</p>
      </div>

      <div className="space-y-8">
        {outcome.sections.map((section: any) => (
          <div key={section.id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-white">
              {section.number} {section.title}
            </h2>
            <ul className="space-y-2">
              {section.topics.map((topic: any) => (
                <li key={topic.id}>
                  <a
                    href={`/learning-outcome/${outcome.id}/${topic.id}`}
                    className="block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/10"
                  >
                    <span className="font-medium text-white">{topic.number}</span>{" "}
                    <span className="text-gray-400">{topic.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
