import { education, certifications } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-medium italic tracking-tight">Education</h2>
            <ul className="mt-8 space-y-6">
              {education.map((entry) => (
                <li key={entry.school}>
                  <p className="font-semibold">{entry.school}</p>
                  <p className="text-sm text-muted">{entry.degree}</p>
                  <p className="text-sm text-accent">{entry.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-4xl font-medium italic tracking-tight">
              Certifications
            </h2>
            <ul className="mt-8 space-y-6">
              {certifications.map((entry) => (
                <li key={entry.name}>
                  <p className="font-semibold">{entry.name}</p>
                  <p className="text-sm text-muted">{entry.org}</p>
                  <p className="text-sm text-accent">{entry.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
