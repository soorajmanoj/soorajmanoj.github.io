"use client";

import { useState } from "react";
import { projects, type Project } from "../data/content";

const categories = ["All", "AI Research", "Data Science", "Systems", "Full-Stack"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered: Project[] =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Portfolio</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          A filterable gallery across research, data, systems, and full-stack work.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border border-black/15 text-zinc-600 hover:bg-black/5 dark:border-white/20 dark:text-zinc-400 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-3 rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{project.name}</h3>
                {project.featured && (
                  <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-zinc-600 dark:bg-white/10 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.code || project.demo) && (
                <div className="flex gap-4 pt-2 text-sm font-medium">
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== project.code && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
