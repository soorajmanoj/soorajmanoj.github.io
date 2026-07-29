import { education, certifications } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Foundations
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Education</h2>
            <ul className="mt-8 space-y-6">
              {education.map((entry) => (
                <li key={entry.school}>
                  <p className="font-semibold">{entry.school}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{entry.degree}</p>
                  <p className="text-sm text-zinc-500">{entry.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Credentials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Certifications</h2>
            <ul className="mt-8 space-y-6">
              {certifications.map((entry) => (
                <li key={entry.name}>
                  <p className="font-semibold">{entry.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{entry.org}</p>
                  <p className="text-sm text-zinc-500">{entry.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
