import { learningOutcome1 } from "@/content/learning-outcome-1";
import { learningOutcome2 } from "@/content/learning-outcome-2";
import { learningOutcome3 } from "@/content/learning-outcome-3";

const outcomes = [
  learningOutcome1 as any,
  learningOutcome2 as any,
  learningOutcome3 as any,
];

export async function generateStaticParams() {
  const params: { id: string; topic: string }[] = [];
  for (const outcome of outcomes) {
    for (const section of outcome.sections) {
      for (const topic of section.topics) {
        params.push({ id: outcome.id, topic: topic.id });
      }
    }
  }
  return params;
}

export default async function TopicPage({ params }: { params: Promise<{ id: string; topic: string }> }) {
  const { id: outcomeId, topic: topicId } = await params;

  const outcome = outcomes.find((o: any) => o.id === outcomeId);
  if (!outcome) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Learning Outcome not found</h1>
        <a href="/" className="mt-4 inline-block text-blue-400 underline hover:text-blue-300">← Back to Home</a>
      </div>
    );
  }

  const section = outcome.sections.find((s: any) =>
    s.topics.some((t: any) => t.id === topicId)
  );
  const topic = section?.topics.find((t: any) => t.id === topicId);

  if (!section || !topic) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Topic not found</h1>
        <a href="/" className="mt-4 inline-block text-blue-400 underline hover:text-blue-300">← Back to Home</a>
      </div>
    );
  }

  const content = topic.content as any;

  const outcomeTopics = outcome.sections.flatMap((s: any) => s.topics);
  const topicIndex = outcomeTopics.findIndex((t: any) => t.id === topicId);
  const previous = topicIndex > 0 ? outcomeTopics[topicIndex - 1] : null;
  const next = topicIndex < outcomeTopics.length - 1 ? outcomeTopics[topicIndex + 1] : null;

  const previousHref = previous ? `/learning-outcome/${outcome.id}/${previous.id}` : undefined;
  const nextHref = next ? `/learning-outcome/${outcome.id}/${next.id}` : undefined;

  function renderBody() {
    const elements: React.ReactNode[] = [];
    let key = 0;
    if (content.intro) {
      elements.push(<p key={key++} className="text-lg text-gray-300">{content.intro}</p>);
    }
    if (content.definitions) {
      for (const def of content.definitions) {
        elements.push(
          <div key={key++} className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">{def.term}</h3>
            <p className="text-gray-400">{def.details || def.definition}</p>
          </div>
        );
      }
    }
    if (content.steps) {
      for (const step of content.steps) {
        if (typeof step === "string") {
          elements.push(
            <div key={key++} className="mb-3 flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{key}</span>
              <p className="text-gray-400">{step}</p>
            </div>
          );
        } else if (step.title && step.details) {
          elements.push(
            <div key={key++} className="mb-4">
              <h4 className="mb-1 text-lg font-semibold text-white">{step.title}</h4>
              <p className="text-gray-400">{step.details}</p>
            </div>
          );
        }
      }
    }
    if (content.subsections) {
      for (const sub of content.subsections) {
        elements.push(
          <div key={key++} className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">{sub.title}</h3>
            {sub.content ? (
              Array.isArray(sub.content) ? (
                <ul className="space-y-2">
                  {sub.content.map((item: any, i: number) => (
                    typeof item === "string" ? (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span>{item}</span>
                      </li>
                    ) : (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="font-medium text-white">{item.title}</span>
                        <span> - {item.details}</span>
                      </li>
                    )
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{sub.content}</p>
              )
            ) : sub.details ? (
              <p className="text-gray-400">{sub.details}</p>
            ) : null}
          </div>
        );
      }
    }
    if (content.tools) {
      elements.push(
        <div key={key++} className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="mb-3 text-lg font-semibold text-white">Key Tools</h3>
          <ul className="space-y-2">
            {content.tools.map((t: any, i: number) => (
              <li key={i} className="flex items-start gap-2 text-gray-400">
                <span className="font-medium text-white">{t.tool}</span>
                <span> - {t.description}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (content.commands) {
      for (const cmd of content.commands) {
        elements.push(
          <div key={key++} className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="mb-1 text-sm text-gray-500">{cmd.description}</p>
            <div className="overflow-x-auto"><code className="whitespace-pre text-sm font-mono text-white">{cmd.command}</code></div>
          </div>
        );
      }
    }
    if (content.types) {
      for (const t of content.types) {
        elements.push(
          <div key={key++} className="mb-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-semibold text-white">{t.type}</span>
            <span className="text-gray-400"> - {t.details}</span>
          </div>
        );
      }
    }
    if (content.hierarchy) {
      for (const h of content.hierarchy) {
        elements.push(
          <div key={key++} className="mb-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-semibold text-white">{h.level}</span>
            <span className="text-gray-400"> - {h.details}</span>
          </div>
        );
      }
    }
    if (content.actions) {
      for (const a of content.actions) {
        elements.push(
          <div key={key++} className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-1 font-semibold text-white">{a.title}</h4>
            <p className="text-gray-400">{a.details}</p>
          </div>
        );
      }
    }
    if (content.tabs) {
      for (const t of content.tabs) {
        elements.push(
          <div key={key++} className="mb-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-semibold text-white">{t.tab}</span>
            <span className="text-gray-400"> - {t.description}</span>
          </div>
        );
      }
    }
    if (content.fields) {
      for (const f of content.fields) {
        elements.push(
          <div key={key++} className="mb-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-medium text-white">{f.name}</span>
            <span className="text-gray-400"> - {f.description}</span>
          </div>
        );
      }
    }
    if (content.benefits) {
      elements.push(
        <div key={key++} className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="mb-2 text-lg font-semibold text-white">Benefits</h3>
          <ul className="list-disc pl-5 space-y-1">
            {content.benefits.map((b: string, i: number) => <li key={i} className="text-gray-400">{b}</li>)}
          </ul>
        </div>
      );
    }
    if (content.drawbacks) {
      elements.push(
        <div key={key++} className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="mb-2 text-lg font-semibold text-white">Drawbacks</h3>
          <ul className="list-disc pl-5 space-y-1">
            {content.drawbacks.map((b: string, i: number) => <li key={i} className="text-gray-400">{b}</li>)}
          </ul>
        </div>
      );
    }
    if (content.platforms) {
      for (const p of content.platforms) {
        elements.push(
          <div key={key++} className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold text-white">{p.name}</h4>
            <p className="text-sm text-gray-400">{p.description}</p>
          </div>
        );
      }
    }
    if (content.records) {
      for (const r of content.records) {
        elements.push(
          <div key={key++} className="mb-1 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-mono font-medium text-white">{r.type}</span>
            <span className="text-gray-400"> - {r.description}</span>
          </div>
        );
      }
    }
    if (content.methods) {
      for (const m of content.methods) {
        elements.push(
          <div key={key++} className="mb-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="font-medium text-white">{m.method}</span>
            <span className="text-gray-400"> - {m.details}</span>
          </div>
        );
      }
    }
    return elements;
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-52px)] max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-4 text-sm text-gray-500">
        <a href="/" className="hover:text-white">L&D Bootcamp</a>
        <span className="mx-2 text-gray-600">/</span>
        <a href={`/learning-outcome/${outcome.id}`} className="hover:text-white">{outcome.title}</a>
        <span className="mx-2 text-gray-600">/</span>
        <span className="font-medium text-white">{topic.title}</span>
      </nav>

      <div className="flex min-h-0 flex-1 gap-8">
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <nav className="sticky top-20 space-y-6 overflow-y-auto pb-8 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">{outcome.title}</h3>
            <div className="space-y-4">
              {outcome.sections.map((sec: any) => (
                <div key={sec.id}>
                  <h4 className="mb-1 text-sm font-semibold text-gray-300">{sec.number} {sec.title}</h4>
                  <ul className="space-y-1">
                    {sec.topics.map((t: any) => {
                      const isActive = t.id === topicId;
                      return (
                        <li key={t.id}>
                          <a
                            href={`/learning-outcome/${outcome.id}/${t.id}`}
                            className={`block truncate rounded px-2 py-1 text-xs transition-colors ${
                              isActive ? "bg-white/10 font-medium text-white" : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                            }`}
                          >
                            {t.number} {t.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </aside>

        <div className="flex-1 min-w-0">
          <span className="mb-2 text-sm font-bold text-gray-500">{section.number}</span>
          <h1 className="text-3xl font-bold text-white">{topic.title}</h1>
          <div className="mt-6 space-y-4 text-gray-400">
            {renderBody()}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {previousHref ? (
                <a href={previousHref} className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white">
                  <span>← Previous</span>
                  <span className="truncate text-gray-600">{previous.number} {previous.title}</span>
                </a>
              ) : <div />}
              {nextHref ? (
                <a href={nextHref} className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white sm:ml-auto">
                  <span className="truncate text-gray-600">{next.number} {next.title}</span>
                  <span>Next →</span>
                </a>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
