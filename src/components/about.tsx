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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="group relative rounded-2xl overflow-hidden border border-border/80 bg-card/40 p-3 shadow-sm hover:border-primary/40 transition-colors">
              <div className="aspect-square rounded-xl overflow-hidden relative bg-zinc-900">
                {/* Filter grayscale/contrast halus agar latar merah menyatu elegan dengan dark mode, dan berwarna penuh saat di-hover */}
                <Image
                  src="/faiz.jpg"
                  alt="Muh. Fayiz Syamsuddin"
                  fill
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              <div className="pt-4 pb-1 px-1 flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Muh. Fayiz Syamsuddin
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Full-Stack Developer • Makassar, ID
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 3 Aligned Highlight Cards */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm p-6 sm:p-8 space-y-5">
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Highlight Cards dengan items-start sehingga ikon selalu sejajar di atas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ABOUT_DATA.highlights.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item.metric}
                    className="rounded-xl border border-border/80 bg-card/40 p-5 hover:border-primary/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="text-base font-mono font-semibold text-foreground leading-snug">
                          {item.metric}
                        </span>
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-primary mb-1.5">
                        {item.label}
                      </h4>
                    </div>
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