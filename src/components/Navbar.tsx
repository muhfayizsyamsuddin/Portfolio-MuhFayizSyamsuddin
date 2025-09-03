"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// import { ThemeToggle } from "./theme-toggle";
import {
  Menu,
  X,
  User,
  // Code,
  Briefcase,
  FolderOpen,
  Mail,
  Code2,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const sections = [
        "hero",
        ...navItems.map((item) => item.href.substring(1)),
      ];
      const scrollPosition = window.scrollY + 100;

      // Jika di posisi paling atas (hero section)
      if (window.scrollY < 100) {
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

    // Delay untuk memastikan DOM sudah siap
    const timeoutId = setTimeout(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      // Set active section immediately saat diklik
      setActiveSection(sectionId);

      // Scroll ke section
      element.scrollIntoView({ behavior: "smooth" });

      // Tutup mobile menu jika terbuka
      setIsMenuOpen(false);
    }
  };

  const scrollToHero = () => {
    // Set active section ke hero saat logo diklik
    setActiveSection("hero");

    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Jika tidak ada hero section, scroll ke top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Tutup mobile menu jika terbuka
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="text-xl font-bold text-foreground rounded-md px-1">
                Faiz<span className="font-light">ms</span>
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-end mr-8">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-base font-medium text-foreground/80 py-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <div className="p-2 rounded-md text-foreground/80">
                  <Menu className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToHero}
              className="text-xl font-bold transition-all duration-300 focus:outline-none cursor-pointer text-foreground hover:text-primary active:text-primary hover:scale-105 active:scale-95 rounded-md px-1"
              aria-label="Scroll to top / Home"
            >
              Faiz<span className="font-light">ms</span>
            </button>
          </div>

          {/* Desktop Navigation - Moved to the right */}
          <div className="hidden md:flex flex-1 justify-end mr-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex items-center gap-2 text-base font-medium transition-all duration-200 cursor-pointer focus:outline-none py-2",
                      activeSection === item.href.substring(1)
                        ? "text-primary font-semibold transform scale-105" // Aktif: hanya warna + font bold + scale
                        : "text-foreground/80 hover:text-primary hover:scale-105 active:text-primary active:scale-95"
                    )}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex items-center gap-3 w-full text-left text-base font-medium transition-all duration-200 cursor-pointer focus:outline-none px-3 py-2 rounded-lg hover:bg-primary/10 hover:shadow-sm",
                      activeSection === item.href.substring(1)
                        ? "text-primary font-semibold bg-primary/10 border border-primary/20" // Aktif: warna + font bold + background
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
