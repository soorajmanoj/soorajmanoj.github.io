import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-black/5 px-3 py-1 text-sm text-zinc-700 dark:bg-white/10 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
