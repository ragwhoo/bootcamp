import { learningOutcome1 } from "@/content/learning-outcome-1";
import { learningOutcome2 } from "@/content/learning-outcome-2";
import { learningOutcome3 } from "@/content/learning-outcome-3";

const baseUrl = "https://bootcamp.ptp.cloud";

export default function Sitemap() {
  const outcomes = [learningOutcome1, learningOutcome2, learningOutcome3];

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/glossary`, lastModified: new Date() },
    { url: `${baseUrl}/ports`, lastModified: new Date() },
    { url: `${baseUrl}/search`, lastModified: new Date() },
    { url: `${baseUrl}/days/1`, lastModified: new Date() },
    { url: `${baseUrl}/days/2`, lastModified: new Date() },
  ];

  const outcomePages = outcomes.map((o) => ({
    url: `${baseUrl}/learning-outcome/${o.id}`,
    lastModified: new Date(),
  }));

  const topicPages = outcomes.flatMap((o) =>
    o.sections.flatMap((s) =>
      s.topics.map((t) => ({
        url: `${baseUrl}/learning-outcome/${o.id}/${t.id}`,
        lastModified: new Date(),
      }))
    )
  );

  return [...staticPages, ...outcomePages, ...topicPages];
}
