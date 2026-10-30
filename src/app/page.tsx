const sections = [
  { name: "Contacts", description: "People and companies you work with." },
  { name: "Deals", description: "Pipeline stages and opportunity value." },
  { name: "Activities", description: "Calls, emails, meetings, and notes." },
  { name: "AI Agent", description: "Ask Claude to summarize, draft, and update records." },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Claude AI Agent CRM</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Project scaffold. Modules below are placeholders.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <li
            key={section.name}
            className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h2 className="font-medium">{section.name}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
