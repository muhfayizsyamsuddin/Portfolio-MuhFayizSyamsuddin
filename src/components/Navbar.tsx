"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
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

      // Hitung persentase scroll halaman untuk progress bar tipis
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToHero = () => {
    setActiveSection("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
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
          {/* Brand Logo: Proporsional di h-16 */}
          <button
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

          {/* Right Resume Button: Lebih ramping & tajam */}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}