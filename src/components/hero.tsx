"use client";

import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FileText,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";
import { useIsClient, useWindowDimensions } from "@/hooks/use-client";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Use custom hooks for client-side safety
  const isClient = useIsClient();
  const dimensions = useWindowDimensions();

  const roles = useMemo(
    () => [
      "Software Developer",
      "Full-Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
  );

  // Generate stable random positions for dots using deterministic approach
  const dotPositions = useMemo(() => {
    if (!isClient) return [];

    // Use deterministic seed-based generation instead of Math.random()
    const generateSeededValue = (seed: number, min: number, max: number) => {
      const x = Math.sin(seed * 12.9898 + seed * 78.233) * 43758.5453;
      const normalized = x - Math.floor(x);
      return min + normalized * (max - min);
    };

    const positions = [];
    for (let i = 0; i < 15; i++) {
      const baseX = Math.max(dimensions.width, 800);
      const baseY = Math.max(dimensions.height, 600);

      positions.push({
        initialX: generateSeededValue(i * 100 + 1, 0, baseX),
        initialY: generateSeededValue(i * 100 + 2, 0, baseY),
        targetX: generateSeededValue(i * 100 + 3, 0, baseX),
        targetY: generateSeededValue(i * 100 + 4, 0, baseY),
        duration: generateSeededValue(i * 100 + 5, 10, 25),
        delay: generateSeededValue(i * 100 + 6, 0, 2),
      });
    }
    return positions;
  }, [isClient, dimensions.width, dimensions.height]);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentRole.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentRoleIndex, isDeleting, roles]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewCV = () => {
    window.open("/CV - Muh. Fayiz Syamsuddin.pdf", "_blank");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="absolute inset-0 bg-primary/[0.01] opacity-[0.03]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-primary/[0.005] opacity-[0.03]" />

      {/* Floating dots animation - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dotPositions.map((dot, i) => (
            <motion.div
              key={`floating-dot-${i}`}
              className="absolute w-1 h-1 bg-primary/20 rounded-full blur-[0.5px]"
              initial={{
                x: dot.initialX,
                y: dot.initialY,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: dot.targetX,
                y: dot.targetY,
                opacity: [0, 0.6, 0.8, 0],
                scale: [0.5, 1.2, 1, 0.5],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: dot.delay,
                opacity: {
                  duration: dot.duration * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-8xl font-extralight text-foreground tracking-tight leading-[0.9] mb-2"
          >
            <motion.span
              className="block font-light whitespace-nowrap"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Muh. Fayiz Syamsuddin.
            </motion.span>
          </h1>

          <motion.div
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="h-px w-8 bg-primary/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
            <div className="min-h-[1.5rem] flex items-center">
              <h2 className="text-sm md:text-base font-medium text-muted-foreground tracking-[0.2em] uppercase">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-4 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </h2>
            </div>
            <motion.div
              className="h-px w-8 bg-primary/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Passionate about creating{" "}
          <motion.span
            className="font-medium text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            innovative web solutions
          </motion.span>{" "}
          and transforming ideas into{" "}
          <motion.span
            className="font-medium text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            seamless, user-friendly applications.
          </motion.span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={handleViewCV}
              size="lg"
              className="group px-8 py-3 font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:scale-105"
              aria-describedby="cv-description"
              suppressHydrationWarning
            >
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:-translate-y-0.5" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="group px-8 py-3 font-medium border-2 border-primary text-foreground bg-foreground/5 hover:bg-primary hover:text-foreground transition-colors duration-300 focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              aria-describedby="contact-description"
              suppressHydrationWarning
            >
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          className="flex justify-center items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div
            className="h-px bg-muted-foreground/20 flex-1 max-w-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />

          <div className="flex gap-3">
            {[
              {
                href: "https://github.com/muhfayizsyamsuddin",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/muh-fayiz-syamsuddin-b43ba2339",
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
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group p-2.5 rounded-xl hover:bg-primary/10 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:outline-none border border-transparent hover:border-primary/20"
                aria-label={`${social.label} Profile`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="h-px bg-muted-foreground/20 flex-1 max-w-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          suppressHydrationWarning
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="sm"
              className="group text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 hover:bg-muted/30 border border-muted-foreground/20 hover:border-primary/30"
              aria-describedby="explore-nav-description"
              suppressHydrationWarning
            >
              Explore Work
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                suppressHydrationWarning
              >
                <ArrowDown className="ml-2 h-4 w-4 group-hover:text-primary transition-colors" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        <span id="cv-description" className="sr-only">
          View Muh. Fayiz Syamsuddin resume as a PDF file in new tab
        </span>
        <span id="contact-description" className="sr-only">
          Navigate to contact section to get in touch
        </span>
        <span id="explore-nav-description" className="sr-only">
          Scroll down to explore projects and portfolio
        </span>
      </div>
    </section>
  );
}
