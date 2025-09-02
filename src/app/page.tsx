import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
      >
        Skip to main content
      </Link>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="scroll-mt-16 bg-background"
        >
          <Hero />
        </section>

        {/* About Section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-16 bg-blue-50/30 dark:bg-blue-950/20"
        >
          <About />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-16 bg-background"
        >
          <Skills />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-16 bg-blue-50/40 dark:bg-blue-950/30"
        >
          <Projects />
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-16 bg-background"
        >
          <Experience />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 bg-blue-50/50 dark:bg-blue-950/40"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
