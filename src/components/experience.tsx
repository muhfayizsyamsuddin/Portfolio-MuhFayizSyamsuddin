"use client";

import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCE_DATA } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            Career & Academic Track
          </p>
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Engineering Experience & Education
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A progression from hardware instrumentation and control systems to full-stack web engineering, microservices, and AI workflow automation.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l border-border/70 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

              <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm p-6 sm:p-7 hover:border-primary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/50">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-muted-foreground gap-1 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-2 mb-6">
                  {exp.impact.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-foreground/90 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Clean Monospace Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-background/80 border border-border/70 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}