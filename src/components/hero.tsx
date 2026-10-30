"use client";

import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FileText,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";
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

  const handleViewCV = () => {
    window.open("/cv", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Subtle radial spotlight & architectural grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Monospace Technical Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-xs font-mono text-muted-foreground"
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
            <div className="h-px w-8 bg-border" />
            <div className="min-h-[1.75rem] flex items-center">
              <h2 className="text-sm sm:text-base font-mono text-primary tracking-wider uppercase">
                {typedText}
                <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse align-middle" />
              </h2>
            </div>
            <div className="h-px w-8 bg-border" />
          </div>
        </motion.div>

        {/* High-Signal Value Proposition */}
        <motion.div
          className="space-y-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
            {HERO_DATA.headline}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {HERO_DATA.subheadline}
          </p>
        </motion.div>

        {/* Primary Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group px-7 font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-sm"
          >
            Explore Systems
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>

          <Button
            onClick={handleViewCV}
            variant="outline"
            size="lg"
            className="group px-7 font-medium rounded-xl border-border/80 bg-card/40 hover:bg-card hover:border-primary/40"
          >
            <FileText className="mr-2 h-4 w-4 text-primary" />
            Resume / CV
          </Button>

          <Button
            onClick={scrollToContact}
            variant="ghost"
            size="lg"
            className="px-6 font-medium text-muted-foreground hover:text-foreground rounded-xl"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </motion.div>

        {/* Clean Social Bar */}
        <motion.div
          className="flex justify-center items-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border/60 transition-colors"
              aria-label={`${social.label} Profile`}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}