"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/muhfayizsyamsuddin",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/muh-fayiz-syamsuddin",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/faizms14_",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:muhfayiz14@gmail.com",
    },
  ];

  return (
    <footer className="border-t border-border/60 bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono text-muted-foreground">
          <span>© {currentYear} Muh. Fayiz Syamsuddin</span>
          <span className="hidden sm:inline">•</span>
          <span>Built with Next.js, TypeScript & Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}