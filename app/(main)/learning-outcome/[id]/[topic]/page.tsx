import Link from "next/link";
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
        <h1 className="text-foreground text-2xl font-bold">Learning Outcome not found</h1>
        <Link href="/" className="text-primary mt-4 inline-block underline hover:opacity-80">← Back to Home</Link>
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
        <h1 className="text-foreground text-2xl font-bold">Topic not found</h1>
        <Link href="/" className="text-primary mt-4 inline-block underline hover:opacity-80">← Back to Home</Link>
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
      elements.push(<p key={key++} className="text-muted-foreground text-lg">{content.intro}</p>);
    }
    if (content.definitions) {
      for (const def of content.definitions) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-6 rounded-lg border p-4">
            <h3 className="text-foreground mb-2 text-lg font-semibold">{def.term}</h3>
            <p className="text-muted-foreground">{def.details || def.definition}</p>
          </div>
        );
      }
    }
    if (content.steps) {
      for (const step of content.steps) {
        if (typeof step === "string") {
          elements.push(
            <div key={key++} className="mb-3 flex items-start gap-3">
              <span className="bg-muted text-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">{key}</span>
              <p className="text-muted-foreground">{step}</p>
            </div>
          );
        } else if (step.title && step.details) {
          elements.push(
            <div key={key++} className="mb-4">
              <h4 className="text-foreground mb-1 text-lg font-semibold">{step.title}</h4>
              <p className="text-muted-foreground">{step.details}</p>
            </div>
          );
        }
      }
    }
    if (content.subsections) {
      for (const sub of content.subsections) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-6 rounded-lg border p-4">
            <h3 className="text-foreground mb-2 text-lg font-semibold">{sub.title}</h3>
            {sub.content ? (
              Array.isArray(sub.content) ? (
                <ul className="space-y-2">
                  {sub.content.map((item: any, i: number) => (
                    typeof item === "string" ? (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span>{item}</span>
                      </li>
                    ) : (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground font-medium">{item.title}</span>
                        <span> - {item.details}</span>
                      </li>
                    )
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{sub.content}</p>
              )
            ) : sub.details ? (
              <p className="text-muted-foreground">{sub.details}</p>
            ) : null}
          </div>
        );
      }
    }
    if (content.tools) {
      elements.push(
        <div key={key++} className="border-border bg-muted/30 mb-6 rounded-lg border p-4">
          <h3 className="text-foreground mb-3 text-lg font-semibold">Key Tools</h3>
          <ul className="space-y-2">
            {content.tools.map((t: any, i: number) => (
              <li key={i} className="text-muted-foreground flex items-start gap-2">
                <span className="text-foreground font-medium">{t.tool}</span>
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
          <div key={key++} className="border-border bg-muted/30 mb-4 rounded-lg border p-3">
            <p className="text-muted-foreground/70 mb-1 text-sm">{cmd.description}</p>
            <div className="overflow-x-auto"><code className="text-foreground whitespace-pre text-sm font-mono">{cmd.command}</code></div>
          </div>
        );
      }
    }
    if (content.types) {
      for (const t of content.types) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-3 rounded-lg border p-3">
            <span className="text-foreground font-semibold">{t.type}</span>
            <span className="text-muted-foreground"> - {t.details}</span>
          </div>
        );
      }
    }
    if (content.hierarchy) {
      for (const h of content.hierarchy) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-3 rounded-lg border p-3">
            <span className="text-foreground font-semibold">{h.level}</span>
            <span className="text-muted-foreground"> - {h.details}</span>
          </div>
        );
      }
    }
    if (content.actions) {
      for (const a of content.actions) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-4 rounded-lg border p-4">
            <h4 className="text-foreground mb-1 font-semibold">{a.title}</h4>
            <p className="text-muted-foreground">{a.details}</p>
          </div>
        );
      }
    }
    if (content.tabs) {
      for (const t of content.tabs) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-2 rounded-lg border p-3">
            <span className="text-foreground font-semibold">{t.tab}</span>
            <span className="text-muted-foreground"> - {t.description}</span>
          </div>
        );
      }
    }
    if (content.fields) {
      for (const f of content.fields) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-2 rounded-lg border p-3">
            <span className="text-foreground font-medium">{f.name}</span>
            <span className="text-muted-foreground"> - {f.description}</span>
          </div>
        );
      }
    }
    if (content.benefits) {
      elements.push(
        <div key={key++} className="border-border bg-muted/30 mb-4 rounded-lg border p-4">
          <h3 className="text-foreground mb-2 text-lg font-semibold">Benefits</h3>
          <ul className="list-disc pl-5 space-y-1">
            {content.benefits.map((b: string, i: number) => <li key={i} className="text-muted-foreground">{b}</li>)}
          </ul>
        </div>
      );
    }
    if (content.drawbacks) {
      elements.push(
        <div key={key++} className="border-border bg-muted/30 mb-4 rounded-lg border p-4">
          <h3 className="text-foreground mb-2 text-lg font-semibold">Drawbacks</h3>
          <ul className="list-disc pl-5 space-y-1">
            {content.drawbacks.map((b: string, i: number) => <li key={i} className="text-muted-foreground">{b}</li>)}
          </ul>
        </div>
      );
    }
    if (content.platforms) {
      for (const p of content.platforms) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-4 rounded-lg border p-4">
            <h4 className="text-foreground font-semibold">{p.name}</h4>
            <p className="text-muted-foreground text-sm">{p.description}</p>
          </div>
        );
      }
    }
    if (content.records) {
      for (const r of content.records) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-1 rounded-lg border p-3">
            <span className="text-foreground font-mono font-medium">{r.type}</span>
            <span className="text-muted-foreground"> - {r.description}</span>
          </div>
        );
      }
    }
    if (content.methods) {
      for (const m of content.methods) {
        elements.push(
          <div key={key++} className="border-border bg-muted/30 mb-2 rounded-lg border p-3">
            <span className="text-foreground font-medium">{m.method}</span>
            <span className="text-muted-foreground"> - {m.details}</span>
          </div>
        );
      }
    }
    return elements;
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col" style={{ height: "calc(100vh - 52px)" }}>
      <nav className="text-muted-foreground shrink-0 px-4 py-4 text-sm sm:px-6 lg:px-8">
        <Link href="/" className="hover:text-foreground">L&D Bootcamp</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <Link href={`/learning-outcome/${outcome.id}`} className="hover:text-foreground">{outcome.title}</Link>
        <span className="text-muted-foreground/50 mx-2">/</span>
        <span className="text-foreground font-medium">{topic.title}</span>
      </nav>

      <div className="flex min-h-0 flex-1 gap-8 px-4 sm:px-6 lg:px-8">
        <aside className="hidden w-64 flex-shrink-0 overflow-y-auto lg:block">
          <nav className="space-y-6 pb-8 pt-4">
            <h3 className="text-muted-foreground/70 text-xs font-bold uppercase tracking-wider">{outcome.title}</h3>
            <div className="space-y-4">
              {outcome.sections.map((sec: any) => (
                <div key={sec.id}>
                  <h4 className="text-muted-foreground mb-1 text-sm font-semibold">{sec.number} {sec.title}</h4>
                  <ul className="space-y-1">
                    {sec.topics.map((t: any) => {
                      const isActive = t.id === topicId;
                      return (
                        <li key={t.id}>
                          <Link
                            href={`/learning-outcome/${outcome.id}/${t.id}`}
                            className={`block truncate rounded px-2 py-1 text-xs transition-colors ${
                              isActive ? "bg-accent text-foreground font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {t.number} {t.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 overflow-y-auto pb-8 pt-4">
          <span className="text-muted-foreground/70 mb-2 text-sm font-bold">{section.number}</span>
          <h1 className="text-foreground text-3xl font-bold">{topic.title}</h1>
          <div className="text-muted-foreground mt-6 space-y-4">
            {renderBody()}
          </div>

          <div className="border-border mt-8 border-t pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {previousHref ? (
                <Link href={previousHref} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors">
                  <span>← Previous</span>
                  <span className="text-muted-foreground/50 truncate">{previous.number} {previous.title}</span>
                </Link>
              ) : <div />}
              {nextHref ? (
                <Link href={nextHref} className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium transition-colors sm:ml-auto">
                  <span className="text-muted-foreground/50 truncate">{next.number} {next.title}</span>
                  <span>Next →</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
