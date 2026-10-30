"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  ArrowUpRight,
  Cpu,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { PROJECTS_DATA, ENGINEERING_LABS } from "@/data/portfolio";
import { ProjectArchitecture } from "./ProjectArchitecture";

export function Projects() {
  const [showArchive, setShowArchive] = useState(false);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const archiveProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 1. HEADER: FEATURED SYSTEMS */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            Selected Works & Infrastructure
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Featured Production Systems
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Full-cycle applications engineered from database schema and backend APIs to containerized Docker deployments behind Traefik reverse proxies.
          </p>
        </motion.div>

        {/* 2. FEATURED BENTO / EDITORIAL GRID (2 Kolom Besar agar tidak sempit) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Top Media Frame */}
              <div className="aspect-[16/9] relative bg-muted/40 border-b border-border/60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} interface preview`}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-[1.03] ${project.isLogoImage
                    ? "object-contain p-10 bg-zinc-950/40"
                    : "object-cover"
                    }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-background/90 backdrop-blur-md text-foreground border border-border/80 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Context Callout */}
                  <div className="rounded-xl bg-muted/40 border border-border/60 p-3.5 flex items-start gap-2.5">
                    <Cpu className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Architecture: </span>
                      {project.architectureNote}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Clean Monospace Stack Pills (Max 6, Tanpa Ikon <> Berulang) */}
                  <div
                    className="flex flex-wrap gap-1.5"
                    aria-label={`Core technologies for ${project.name}`}
                  >
                    {project.coreStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-background/80 border border-border/80 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.extraStack && project.extraStack.length > 0 && (
                      <span className="px-2 py-1 rounded-md text-xs font-mono text-muted-foreground/70">
                        +{project.extraStack.length} more
                      </span>
                    )}
                  </div>

                  {/* Dual Action Bar */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button
                        size="sm"
                        asChild
                        className="rounded-lg font-medium px-4"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live System
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="rounded-lg border-border/80 bg-card/40 hover:bg-card"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 3. ARCHIVE TOGGLE (Untuk Proyek Tambahan seperti Sportify, Smart Chat, Furniqo) */}
        <div className="mt-10">
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowArchive((prev) => !prev)}
              className="rounded-xl border-border/80 font-mono text-xs px-5"
            >
              {showArchive ? (
                <>
                  Hide Additional Projects ({archiveProjects.length})
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View Additional Deployed Projects ({archiveProjects.length})
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showArchive && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
            >
              {archiveProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-border/70 bg-card/30 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-semibold text-foreground">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                            aria-label={`${project.name} GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted"
                            aria-label={`${project.name} Live Demo`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {project.coreStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-muted-foreground bg-background/60 px-2 py-0.5 rounded border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* 4. ENGINEERING LABS & TECHNICAL EXPLORATIONS (MAXY ACADEMY TRACK) */}
        <div className="mt-24 pt-16 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">
              <FlaskConical className="h-3.5 w-3.5" />
              <span>Engineering Labs & R&D</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
              Backend, AI & Automation Explorations
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Focused technical implementations from the Maxy Academy Backend & AI Bootcamp—covering Laravel enterprise cycles, payment webhooks, LLM chatbots, and headless browser data mining.
            </p>
          </div>

          <div className="divide-y divide-border/60 rounded-2xl border border-border/80 bg-card/30 overflow-hidden">
            {ENGINEERING_LABS.map((lab) => (
              <div
                key={lab.id}
                className="p-6 hover:bg-card/60 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center"
              >
                <div className="lg:col-span-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                      {lab.domain}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      {lab.deliverableType}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    {lab.title}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    {lab.track}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {lab.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {lab.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-background border border-border/70 text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end gap-2">
                  {lab.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="rounded-lg text-xs font-mono h-8 px-3"
                    >
                      <a
                        href={lab.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. UNDER THE HOOD: SYSTEM ARCHITECTURE */}
        <ProjectArchitecture />
      </div>
    </div>
  );
}