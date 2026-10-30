"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT_DATA } from "@/data/portfolio";
import { Terminal, Server, Cpu } from "lucide-react";

export function About() {
  const icons = [Server, Terminal, Cpu];

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            {ABOUT_DATA.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            {ABOUT_DATA.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {ABOUT_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clean Editorial Portrait */}
          <motion.div
            className="lg:col-span-4 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card p-2 shadow-sm">
              <div className="aspect-square rounded-xl overflow-hidden relative bg-muted">
                <Image
                  src="/faiz.jpg"
                  alt="Muh. Fayiz Syamsuddin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Muh. Fayiz Syamsuddin
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Makassar, ID • Full-Stack & Infra
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Open
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Concrete Engineering Metrics */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm p-6 sm:p-8 space-y-5">
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Concrete Metrics replacing generic AI cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ABOUT_DATA.highlights.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item.metric}
                    className="rounded-xl border border-border/70 bg-card/30 p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-mono font-semibold text-foreground">
                        {item.metric}
                      </span>
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}