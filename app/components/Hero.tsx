import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 sm:py-32">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {profile.location}
        </p>
        {profile.openToWork && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-400/10 dark:text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400" />
            Open to work
          </span>
        )}
      </div>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
        <a
          href="#projects"
          className="rounded-full bg-black px-5 py-2.5 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          View Projects
        </a>
        <a
          href="#research"
          className="rounded-full border border-black/15 px-5 py-2.5 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Featured Research
        </a>
      </div>
    </section>
  );
}
