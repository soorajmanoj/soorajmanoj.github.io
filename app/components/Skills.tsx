import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-4xl font-medium italic tracking-tight sm:text-5xl">
          Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
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
