import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
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
        <Featured />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-8 text-center text-xs text-zinc-500 dark:border-white/10">
        Built with Next.js + Tailwind CSS.
      </footer>
    </>
  );
}
