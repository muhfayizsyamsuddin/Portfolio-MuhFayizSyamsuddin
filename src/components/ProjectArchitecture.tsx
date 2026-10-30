"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Boxes,
  Bot,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Network,
  Server,
  Webhook,
  type LucideIcon,
} from "lucide-react";

type ProjectKey = "opsora" | "pinventa" | "sio";

type ArchitectureLayer = {
  label: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

type Architecture = {
  name: string;
  badge: string;
  summary: string;
  layers: ArchitectureLayer[];
};

const architectures: Record<ProjectKey, Architecture> = {
  opsora: {
    name: "Opsora Enterprise ERP",
    badge: "Monolith + Containerized Proxy",
    summary:
      "Multi-module enterprise operations platform engineered with strict relational integrity, reverse-proxy SSL termination, and automated CI/CD container delivery.",
    layers: [
      {
        label: "Edge & Reverse Proxy",
        description: "Domain routing, SSL termination & load handling",
        items: ["Client Browser", "Traefik Reverse Proxy"],
        icon: Globe,
      },
      {
        label: "Application & API Layer",
        description: "SSR frontend & RESTful business logic",
        items: ["Next.js", "TypeScript", "Node.js", "Express.js"],
        icon: Layers3,
      },
      {
        label: "Persistence & Cloud Media",
        description: "ACID relational transactions & asset storage",
        items: ["Prisma ORM", "PostgreSQL", "Cloudinary CDN"],
        icon: Database,
      },
      {
        label: "CI/CD & Infrastructure",
        description: "Automated build & container orchestration",
        items: ["Docker Compose", "GitHub Actions (CI/CD)", "Self-Hosted Cloud"],
        icon: GitBranch,
      },
    ],
  },

  pinventa: {
    name: "Pinventa (Maxy Hackathon)",
    badge: "Next.js + n8n AI Workflow",
    summary:
      "Event-driven AI application decoupling user-facing Next.js interactions from complex multi-step LLM and automation pipelines powered by n8n.",
    layers: [
      {
        label: "Client Presentation",
        description: "Interactive UI & real-time state updates",
        items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
        icon: Globe,
      },
      {
        label: "Webhook & Event Bridge",
        description: "Asynchronous payload dispatch & validation",
        items: ["Next.js Server Actions / API", "REST Webhooks", "JSON Schema"],
        icon: Webhook,
      },
      {
        label: "Workflow & AI Orchestration",
        description: "Automated decision nodes & LLM execution",
        items: ["n8n Workflow Engine", "AI Agents / LLM Nodes", "Conditional Routing"],
        icon: Bot,
      },
    ],
  },

  sio: {
    name: "SIO App — Microservices",
    badge: "Event-Driven Microservices",
    summary:
      "Decoupled restaurant ordering architecture utilizing an API gateway, independent domain services, and asynchronous message brokering.",
    layers: [
      {
        label: "SPA Client & Gateway",
        description: "Frontend interface & unified routing entry point",
        items: ["React.js", "Tailwind CSS", "Traefik API Gateway"],
        icon: Globe,
      },
      {
        label: "Domain Microservices",
        description: "Isolated business services & document worker",
        items: ["Order Service (Express)", "Menu/User Service", "PDFKit Worker"],
        icon: Server,
      },
      {
        label: "Async Broker & Persistence",
        description: "Inter-service messaging & relational storage",
        items: ["RabbitMQ Message Broker", "Sequelize ORM", "PostgreSQL"],
        icon: Network,
      },
      {
        label: "Container Delivery",
        description: "Multi-container deployment pipeline",
        items: ["Docker", "GitHub Actions (CI/CD)"],
        icon: Boxes,
      },
    ],
  },
};

export function ProjectArchitecture() {
  const [activeProject, setActiveProject] = useState<ProjectKey>("opsora");
  const architecture = architectures[activeProject];

  return (
    <div className="mt-24 pt-16 border-t border-border/60">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">
              System Design & Under the Hood
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Production Architecture Breakdown
            </h3>
          </div>

          <div
            className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl border border-border/80 bg-card/60"
            role="group"
            aria-label="Select architecture project"
          >
            {(Object.keys(architectures) as ProjectKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveProject(key)}
                aria-pressed={activeProject === key}
                className={`rounded-lg px-4 py-2 text-xs font-mono transition-all cursor-pointer ${activeProject === key
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {architectures[key].name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border/50">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl font-semibold text-foreground">
                  {architecture.name}
                </h4>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20">
                  {architecture.badge}
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
                {architecture.summary}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {architecture.layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={layer.label}>
                  {index > 0 && (
                    <div className="flex justify-center py-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                  )}
                  <div className="grid gap-4 rounded-xl border border-border/60 bg-background/60 p-4 md:grid-cols-[240px_1fr] md:items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm font-semibold text-foreground">
                          {layer.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-border/80 bg-card px-3 py-1.5 text-xs font-mono text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}