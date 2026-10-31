"use client";

import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Terminal,
  Layers,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HERO_DATA } from "@/data/portfolio";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = HERO_DATA.roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentRole.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % HERO_DATA.roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentRoleIndex, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Radial Glow & Architectural Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(14,165,233,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Monospace Technical Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md text-xs font-mono text-foreground/90 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>{HERO_DATA.eyebrow}</span>
        </motion.div>

        {/* Main Name & Dynamic Role */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-[1.05]"
          >
            {HERO_DATA.name}
          </h1>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-10 bg-primary/40" />
            <div className="min-h-[1.75rem] flex items-center">
              <h2 className="text-sm sm:text-base font-mono font-medium text-primary tracking-wider uppercase">
                {typedText}
                <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse align-middle" />
              </h2>
            </div>
            <div className="h-px w-10 bg-primary/40" />
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="space-y-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
            {HERO_DATA.headline}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {HERO_DATA.subheadline}
          </p>
        </motion.div>

        {/* 2 Tombol Utama dengan Lebar Sama Persis (min-w-[180px]) & Visual Depth */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center justify-center min-w-[185px] px-6 py-3 rounded-xl text-sm font-medium bg-gradient-to-b from-sky-400 to-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 cursor-pointer"
          >
            <Layers className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Explore Projects</span>
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center min-w-[185px] px-6 py-3 rounded-xl text-sm font-medium border border-border/90 bg-card/60 backdrop-blur-sm text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            <span>Get In Touch</span>
          </button>
        </motion.div>

        {/* 4 Social Icons (GitHub, LinkedIn, Instagram, Email) Diapit Garis Samping Seperti Gambar 2 */}
        <motion.div
          className="flex justify-center items-center gap-6 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="h-px bg-border/80 flex-1 max-w-16" />

          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/muhfayizsyamsuddin",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/muh-fayiz-syamsuddin",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://instagram.com/faizms14_",
                icon: Instagram,
                label: "Instagram",
              },
              {
                href: "mailto:muhfayiz14@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                aria-label={`${social.label} Profile`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="h-px bg-border/80 flex-1 max-w-16" />
        </motion.div>
      </div>
    </div>
  );
}