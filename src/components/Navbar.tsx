"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      const sections = ["hero", ...navItems.map((item) => item.href.substring(1))];
      const scrollPosition = currentScrollY + 160;

      if (currentScrollY < 100) {
        setActiveSection("hero");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Tutup otomatis menu mobile jika layar diperbesar ke ukuran desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHero = () => {
    setActiveSection("hero");
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-border/60 bg-background/95 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* Top Scroll Progress Indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={scrollToHero}
            className="text-xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Scroll to top"
          >
            Faiz<span className="text-primary font-light">ms</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative py-1.5 text-base font-medium transition-colors duration-200 cursor-pointer group",
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Resume Button & Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-primary/30 bg-card/80 hover:bg-primary text-foreground hover:text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-md hover:shadow-primary/20 transition-all duration-200"
            >
              <FileText className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-border/80 bg-card/60 text-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Bagian yang sebelumnya terpotong) */}
        {isMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden py-4 border-t border-border/60 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer",
                    isActive
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span>{item.name}</span>
                </button>
              );
            })}

            <div className="pt-2 mt-2 border-t border-border/50">
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-mono font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>View Resume / CV</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}