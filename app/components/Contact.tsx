import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h2>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Actively looking for full-time roles in data science and AI/ML engineering — also open
          to research collaborations and freelance work.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            LinkedIn
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
