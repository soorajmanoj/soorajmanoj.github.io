import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-card-border py-8 text-center text-xs text-muted">
        Built with Next.js + Tailwind CSS.
      </footer>
    </>
  );
}
