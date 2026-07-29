import { research } from "../data/content";

export default function Research() {
  return (
    <section id="research" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Research
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Papers
        </h2>

        <div className="mt-10 space-y-10">
          {research.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <h3 className="text-xl font-semibold">{paper.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">
                {paper.authors.join(", ")}
              </p>
              <p className="text-sm text-zinc-500">
                {paper.venue} · {paper.date}
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">{paper.abstract}</p>
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
              >
                Read paper →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
