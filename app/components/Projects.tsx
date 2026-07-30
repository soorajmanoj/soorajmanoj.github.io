"use client";

import { useState } from "react";
import { projects, research, type Project } from "../data/content";
import Reveal from "./Reveal";

const categories = ["All", "AI/ML", "Data Science", "Infrastructure"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered: Project[] =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium italic tracking-tight sm:text-5xl">
            Projects
          </h2>
        </Reveal>

        {/* Research subsection */}
        <div className="mt-14">
          <Reveal>
            <h3 className="font-serif text-2xl font-medium italic tracking-tight">Research</h3>
          </Reveal>

          <div className="mt-6 space-y-6">
            {research.map((paper, i) => (
              <Reveal key={paper.id} delay={i * 100}>
                <article className="rounded-2xl border border-card-border p-6 transition-shadow hover:shadow-md hover:shadow-accent/5">
                  <h4 className="text-xl font-semibold">{paper.title}</h4>
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

        {/* Projects subsection */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-serif text-2xl font-medium italic tracking-tight">Projects</h3>
            <p className="mt-3 max-w-xl text-muted">
              A filterable gallery across AI/ML, data, and infrastructure work.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "border border-card-border text-muted hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 4) * 75}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-card-border p-6 transition-shadow hover:shadow-md hover:shadow-accent/5">
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-sm text-muted">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.code || project.demo || project.paper) && (
                    <div className="flex gap-4 pt-2 text-sm font-medium">
                      {project.code && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                          Code
                        </a>
                      )}
                      {project.demo && project.demo !== project.code && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                          Demo
                        </a>
                      )}
                      {project.paper && (
                        <a href={project.paper} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                          Paper
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
