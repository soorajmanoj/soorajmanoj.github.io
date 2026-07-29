import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Journey</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>

        <ol className="mt-10 space-y-10 border-l border-black/10 dark:border-white/10">
          {experience.map((entry) => (
            <li key={entry.id} className="relative pl-8">
              <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-black dark:bg-white" />
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {entry.era} · {entry.range}
              </p>
              <h3 className="mt-1 font-semibold">{entry.title}</h3>
              <p className="text-sm text-zinc-500">{entry.org}</p>
              <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
