"use client";

import { useState } from "react";
import {
  Github,
  ArrowUpRight,
  Cpu,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  Terminal,
  Globe,
  Sparkles,
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
            Full-cycle applications engineered from database schema and backend APIs to containerized Docker deployments and AI workflow pipelines.
          </p>
        </motion.div>

        {/* 2. FEATURED EDITORIAL GRID */}
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
              {/* Uniform Browser Mockup Header */}
              <div className="border-b border-border/60 bg-zinc-950/70">
                {/* Browser Top Bar (Responsif di layar HP) */}
                <div className="px-3.5 sm:px-4 py-2.5 border-b border-border/40 flex items-center justify-between gap-2 bg-zinc-900/60">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500/80 transition-colors" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-amber-500/80 transition-colors" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500/80 transition-colors" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-md bg-background/60 border border-border/50 text-[11px] font-mono text-muted-foreground truncate">
                    <Globe className="h-3 w-3 text-primary shrink-0" />
                    <span className="truncate">{project.previewHost}</span>
                  </div>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {project.category}
                  </span>
                </div>

                {/* Visual Canvas Area (min-h-[185px] di HP agar tidak sempit) */}
                <div className="min-h-[185px] sm:aspect-[16/8] relative overflow-hidden p-4 sm:p-5 bg-zinc-950 flex flex-col justify-between gap-3">
                  {/* Subtle Technical Grid Background */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.10),transparent_75%)]" />

                  {/* Top Row: System Badge & Key Metric */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-primary/15 text-primary border border-primary/30 max-w-[70%]">
                      <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                      <span className="truncate">
                        {project.systemBadge || project.category}
                      </span>
                    </span>

                    <span className="text-[11px] sm:text-xs font-mono text-emerald-400 shrink-0">
                      {project.systemMetric || "Production Live"}
                    </span>
                  </div>

                  {/* Center Row: System Architecture Flow + Mini Logo (Tampil di HP & Desktop) */}
                  <div className="relative z-10 my-auto py-1 flex items-center justify-between gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary/80">
                        Architecture & Execution Flow
                      </p>
                      <p className="text-sm sm:text-lg font-mono font-semibold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {project.systemFlow || project.name}
                      </p>
                    </div>

                    {project.id === "pinventa" ? (
                      <div
                        className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-[#071526] border border-emerald-400/30 shrink-0 shadow-md flex items-center justify-center"
                        title="Pinventa AI"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 sm:w-7 sm:h-7"
                        >
                          <defs>
                            <linearGradient
                              id="pinGrad"
                              x1="0"
                              y1="0"
                              x2="36"
                              y2="36"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#4ade80" />
                              <stop offset="1" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M16 4C10.477 4 6 8.477 6 14C6 21.5 16 32 16 32C16 32 26 21.5 26 14C26 8.477 21.523 4 16 4Z"
                            stroke="url(#pinGrad)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="16" cy="14" r="3.5" fill="url(#pinGrad)" />
                          <path
                            d="M19.5 14H29M18.5 11.5L26 7.5M18.5 16.5L26 20.5"
                            stroke="#2dd4bf"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <circle cx="30" cy="14" r="2" fill="#f8fafc" />
                          <circle cx="27" cy="7" r="1.8" fill="#4ade80" />
                          <circle cx="27" cy="21" r="1.8" fill="#06b6d4" />
                        </svg>
                      </div>
                    ) : (
                      project.image && (
                        <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl overflow-hidden bg-white p-1.5 border border-white/20 shrink-0 shadow-md block">
                          <Image
                            src={project.image}
                            alt={`${project.name} logo`}
                            fill
                            quality={100}
                            className="object-contain p-1"
                            sizes="128px"
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Bottom Row: Module Pills */}
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {(project.systemModules || project.coreStack.slice(0, 4)).map(
                      (moduleName) => (
                        <span
                          key={moduleName}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/90 border border-border/80 text-muted-foreground"
                        >
                          {moduleName}
                        </span>
                      )
                    )}
                  </div>
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
                  <div className="rounded-xl bg-muted/30 border border-border/60 p-3.5 flex items-start gap-2.5">
                    <Cpu className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Architecture: </span>
                      {project.architectureNote}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Core Stack Pills */}
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

                  {/* Dual Action Bar dengan Hover Biru Konsisten */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all duration-200"
                      >
                        Live System
                        <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium border border-border bg-card/50 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 3. ARCHIVE TOGGLE (Hover Biru Bersih) */}
        <div className="mt-10">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowArchive((prev) => !prev)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-border bg-card/50 font-mono text-xs text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer"
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
            </button>
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
                  className="rounded-xl border border-border/80 bg-card/40 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">
                          {project.name}
                        </h4>
                        <p className="text-[11px] font-mono text-primary/80 flex items-center gap-1 mt-0.5">
                          <Globe className="h-3 w-3" />
                          {project.previewHost}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
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
                            className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
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

        {/* 4. ENGINEERING LABS & R&D (Tanpa Tulisan Bootcamp / Day X, Hover Demo Biru) */}
        <div className="mt-24 pt-16 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">
              <FlaskConical className="h-3.5 w-3.5" />
              <span>Engineering Labs & Technical Explorations</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
              Backend, AI & Automation Modules
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Specialized technical implementations covering Laravel enterprise transaction cycles, payment gateway webhooks, omnichannel LLM chatbots, and headless browser data mining.
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
                    {lab.subtitle}
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
                  {lab.liveUrl ? (
                    <a
                      href={lab.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg text-xs font-mono border border-border bg-card/50 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      Live Demo
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-mono border border-border/60 bg-muted/30 text-muted-foreground">
                      <Terminal className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      Local Script
                    </span>
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