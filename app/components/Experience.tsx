import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-4xl font-medium italic tracking-tight sm:text-5xl">
          Experience
        </h2>

        <ol className="mt-10 space-y-10 border-l border-card-border">
          {experience.map((entry) => (
            <li key={entry.id} className="relative pl-8">
              <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                {entry.era} · {entry.range}
              </p>
              <h3 className="mt-1 font-semibold">{entry.title}</h3>
              <p className="text-sm text-muted">
                {entry.org} · {entry.location}
              </p>
              <p className="mt-2 max-w-xl text-sm text-muted">{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
