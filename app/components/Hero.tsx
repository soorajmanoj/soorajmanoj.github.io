import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-6 py-24 sm:flex-row sm:items-center sm:justify-between sm:py-32">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {profile.openToWork && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                Open to work
              </span>
            )}
          </div>
          <h1 className="max-w-3xl font-serif text-5xl font-medium italic tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lg text-muted">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-accent-foreground transition-colors hover:opacity-90"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="rounded-full border border-card-border px-5 py-2.5 transition-colors hover:bg-accent/10"
            >
              Projects
            </a>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="h-32 w-32 shrink-0 rounded-full border-4 border-accent/30 object-cover shadow-lg shadow-accent/10 sm:h-44 sm:w-44"
        />
      </div>
    </section>
  );
}
