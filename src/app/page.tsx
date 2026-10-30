import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </Link>

      <Navbar />

      <main id="main-content" className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
        <section id="hero" aria-labelledby="hero-heading" className="scroll-mt-16">
          <Hero />
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-16 border-t border-border/50"
        >
          <About />
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-16 border-t border-border/50"
        >
          <Skills />
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-16 border-t border-border/50"
        >
          <Projects />
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-16 border-t border-border/50"
        >
          <Experience />
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 border-t border-border/50"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}