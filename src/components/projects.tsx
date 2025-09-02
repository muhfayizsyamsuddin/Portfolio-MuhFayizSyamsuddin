"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      name: "Click Booth App",
      description:
        "A comprehensive web-based photobooth application with AI integration, payment processing, and cloud storage capabilities.",
      techStack: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "OpenAI",
        "Midtrans",
        "Fonnte",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/muhfayizsyamsuddin",
      demoUrl: "#",
      image: "/logo.png",
      featured: true,
    },
    {
      name: "Next Balance App",
      description:
        "Modern e-commerce platform inspired by NewBalance, featuring product catalog, wishlist management, and responsive design.",
      techStack: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/muhfayizsyamsuddin",
      demoUrl: "https://next-balance.vercel.app",
      image: "/nb.png",
      featured: true,
    },
    {
      name: "My Social Media App",
      description:
        "Cross-platform social media application with real-time messaging, user profiles, following/followers and GraphQL API.",
      techStack: ["GraphQL", "MongoDB", "Apollo Server-client", "React Native"],
      githubUrl: "https://github.com/johndeveloper/weather",
      demoUrl:
        "https://expo.dev/preview/update?message=feat%3A+enhance+ProfileScreen%2C+SearchScreen%2C+and+UserProfile%3B+update+user+ID+handling%2C+improve+loading+states%2C+and+implement+follo&updateRuntimeVersion=1.0.0&createdAt=2025-08-09T18%3A38%3A09.228Z&slug=exp&projectId=76ae8898-b386-4e59-af07-a236eb53ac91&group=f998b3b5-7870-4e3c-96e7-d2af4ab1af4d",
      image: "/mysocialmediaapp.png",
      featured: true,
    },
    {
      name: "Smart Chat App",
      description:
        "Real-time chat platform with AI integration, multiple room support, and Socket.IO for instant messaging.",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React.js",
        "Socket.io",
        "Vite",
        "GeminiAI",
      ],
      githubUrl: "https://github.com/muhfayizsyamsuddin",
      demoUrl: "#",
      image: "/smart-chat.png",
    },
    {
      name: "Sportify Court App",
      description:
        "Sports field booking platform with payment integration and real-time availability checking.",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React.js",
        "Midtrans",
        "GeminiAI",
        "Bootstrap",
        "Vite",
      ],
      githubUrl: "https://github.com/muhfayizsyamsuddin",
      demoUrl: "#",
      image: "/Sportify-Court.png",
    },
    {
      name: "Furniqo",
      description:
        "Furniture e-commerce platform with user profiles, product management, and modern UI/UX design.",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React.js",
        "Bootstrap",
      ],
      githubUrl: "https://furniqo-id.web.app",
      demoUrl: "https://furniqo-id.web.app",
      image: "/furniqo.png",
    },
    {
      name: "SIO App",
      description:
        "A web based application for ordering food and drinks in restaurants.",
      techStack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL"],
      githubUrl: "https://github.com/johndeveloper/weather",
      demoUrl: "https://weather-demo.vercel.app",
      image: "/sio.png",
    },
    {
      name: "Toride Store",
      description:
        "A web based e-commerce app for selling Japanese sports products.",
      techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/johndeveloper/weather",
      demoUrl: "https://weather-demo.vercel.app",
      image: "/toride.png",
    },
    {
      name: "Prelo App",
      description:
        "Web-based e-commerce application for used goods with a shopping cart feature.",
      techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/johndeveloper/weather",
      demoUrl: "https://weather-demo.vercel.app",
      image: "/preloapp.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 scroll-mt-16"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A showcase of my latest projects in full-stack development,
            featuring modern web technologies and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 h-full bg-card/50 backdrop-blur-sm flex flex-col overflow-hidden">
                <div className="aspect-video relative bg-primary/5 overflow-hidden rounded-t-lg">
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=300&width=400"
                    }
                    alt={`Screenshot of ${project.name} project showing the main interface`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      {/* <Badge
                        variant="secondary"
                        className="bg-primary text-white text-xs font-semibold shadow-lg border border-primary px-3 py-1.5 flex items-center gap-1.5 hover:bg-primary/90 transition-all duration-300"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                            fill="currentColor"
                          />
                        </svg>
                        Featured
                      </Badge> */}
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors text-lg">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-pretty text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0 flex-1 flex flex-col">
                  <div
                    className="flex flex-wrap gap-1.5 items-start content-start min-h-[80px]"
                    role="list"
                    aria-label={`Technologies used in ${project.name}`}
                  >
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs py-1.5 px-2.5 bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 flex items-center gap-1 h-7 min-w-fit whitespace-nowrap text-primary"
                        role="listitem"
                      >
                        <Code
                          className="h-3 w-3 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <Button
                      size="sm"
                      asChild
                      className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 text-xs bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                      disabled={project.demoUrl === "#"}
                    >
                      <a
                        href={
                          project.demoUrl !== "#"
                            ? project.demoUrl
                            : project.githubUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${
                          project.demoUrl !== "#" ? "live demo" : "source code"
                        } of ${project.name}`}
                      >
                        {project.demoUrl !== "#" ? (
                          <>
                            <ExternalLink
                              className="h-3.5 w-3.5 mr-1.5"
                              aria-hidden="true"
                            />
                            View Project
                          </>
                        ) : (
                          <>
                            <Github
                              className="h-3.5 w-3.5 mr-1.5"
                              aria-hidden="true"
                            />
                            View Code
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
