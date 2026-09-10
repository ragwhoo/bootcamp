export function TopicSidebar({ currentOutcome, currentSection, sections }: { currentOutcome: string; currentSection: string; sections: { number: string; title: string; topics: { id: string; number: string; title: string }[] }[] }) {
  return (
    <aside className="hidden w-64 flex-shrink-0 lg:block">
      <nav className="sticky top-20 space-y-6 overflow-y-auto pb-8 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">{currentOutcome}</h3>
        <div className="space-y-3">
          {sections.map((section) => (
            <div key={section.number}>
              <h4 className="mb-1 text-sm font-semibold text-gray-900">{section.number} {section.title}</h4>
              <ul className="space-y-1">
                {section.topics.map((topic) => {
                  const isActive = topic.id === currentSection;
                  return (
                    <li key={topic.id}>
                      <a
                        href={`/learning-outcome/${currentOutcome.split(" ")[0]}/${topic.id}`}
                        className={`block truncate rounded px-2 py-1 text-xs transition-colors ${
                          isActive
                            ? "bg-gray-100 font-medium text-black"
                            : "text-gray-500 hover:bg-gray-50 hover:text-black"
                        }`}
                      >
                        {topic.number} {topic.title}
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
  );
}
