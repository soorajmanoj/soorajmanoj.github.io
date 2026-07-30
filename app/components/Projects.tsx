"use client";

import { useState } from "react";
import { projects, type Project } from "../data/content";

const categories = ["All", "AI/ML", "Data Science", "Systems"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered: Project[] =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          A filterable gallery across AI/ML, data, and systems work.
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
              <h3 className="font-semibold">{project.name}</h3>
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
              {(project.code || project.demo || project.paper) && (
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
                  {project.paper && (
                    <a href={project.paper} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      Paper
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
