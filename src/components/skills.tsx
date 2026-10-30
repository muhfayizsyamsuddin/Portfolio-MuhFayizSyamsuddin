"use client";

import { motion } from "motion/react";
import { SKILL_PILLARS } from "@/data/portfolio";
import { Layers, Server, Cpu } from "lucide-react";

export function Skills() {
  const pillarIcons = [Layers, Server, Cpu];

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            Technical Stack
          </p>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Engineering Capabilities & Tools
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Grouped by architectural domain—from type-safe frontend interfaces and polyglot backend APIs to AI workflow automation and container orchestration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_PILLARS.map((pillar, index) => {
            const IconComponent = pillarIcons[index % pillarIcons.length];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {pillar.category}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    {pillar.subtitle}
                  </p>

                  <div className="divide-y divide-border/50">
                    {pillar.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="py-2.5 flex items-center justify-between gap-2"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        {skill.context && (
                          <span className="text-xs font-mono text-muted-foreground text-right">
                            {skill.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}