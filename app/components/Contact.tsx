import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-card-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
        <h2 className="font-serif text-4xl font-medium italic tracking-tight sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Actively looking for full-time roles in data science and AI/ML engineering — also open
          to research collaborations and freelance work.
        </p>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Currently on F-1 OPT, eligible for the STEM extension — authorized to work in the U.S.
          with no sponsorship required for up to 3 years.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
            </svg>
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
