import { projects, stats } from "../data/content";

export default function Featured() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  if (!featured) return null;

  return (
    <section id="research" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Depth · Featured
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {featured.name}
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {featured.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-600 dark:border-white/15 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {featured.code && (
          <a
            href={featured.code}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm font-medium underline underline-offset-4"
          >
            View project →
          </a>
        )}
      </div>
    </section>
  );
}
