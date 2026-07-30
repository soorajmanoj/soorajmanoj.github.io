import { research } from "../data/content";
import Reveal from "./Reveal";

export default function Research() {
  return (
    <section id="research" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium italic tracking-tight sm:text-5xl">
            Research
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {research.map((paper, i) => (
            <Reveal key={paper.id} delay={i * 100}>
              <article className="rounded-2xl border border-card-border p-6 transition-shadow hover:shadow-md hover:shadow-accent/5">
                <h3 className="text-xl font-semibold">{paper.title}</h3>
                <p className="mt-2 text-sm text-muted">{paper.authors.join(", ")}</p>
                <p className="text-sm text-muted">
                  {paper.venue} · {paper.date}
                </p>
                <p className="mt-4 text-muted">{paper.abstract}</p>
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  Read paper →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
