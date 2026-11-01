"use client";

import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCE_DATA } from "@/data/portfolio";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  return (
    <div className="py-20 sm:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2.5">
            Career & Academic Track
          </p>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-4xl font-semibold text-foreground tracking-tight mb-3 sm:mb-4"
          >
            Engineering Experience & Education
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
            A progression from hardware instrumentation and control systems to full-stack web engineering, microservices, and AI workflow automation.
          </p>
        </motion.div>

        {/* Timeline List: Full-width di Mobile (390px), Garis Timeline di sm (640px+) */}
        <div className="relative sm:border-l sm:border-border/70 sm:ml-4 md:ml-6 sm:pl-7 md:pl-10 space-y-6 sm:space-y-10">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: EASE_OUT_EXPO,
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative group"
            >
              {/* Timeline Indicator Dot (Hanya muncul di sm ke atas agar layar 390px lega) */}
              <div className="hidden sm:block absolute -left-[35px] md:-left-[47px] top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

              <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm p-5 sm:p-7 hover:border-primary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-4 pb-4 border-b border-border/50">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-row flex-wrap sm:flex-col sm:items-end text-xs font-mono text-muted-foreground gap-x-4 gap-y-1 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                  {exp.description}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-2 mb-5 sm:mb-6">
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
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-background/80 border border-border/70 text-muted-foreground"
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