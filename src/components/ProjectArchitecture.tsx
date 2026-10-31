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
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ProjectKey = "opsora" | "pinventa" | "sio" | "cms_booking" | "clickbooth";

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
    name: "Opsora ERP",
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
    name: "Pinventa B2B AI Agent",
    badge: "Agentic AI + n8n Orchestration",
    summary:
      "Autonomous geo-targeted B2B sales prospecting architecture: discovers businesses by radius, enriches verified public data, computes weighted 0–100 lead scores, and drafts tailored outreach.",
    layers: [
      {
        label: "Geo-Discovery & Map UI",
        description: "Pin/radius input, industry filter & lead dashboard",
        items: ["Next.js (App Router)", "TypeScript", "Google Maps / Places API"],
        icon: Globe,
      },
      {
        label: "Agent Orchestration & Enrichment",
        description: "Multi-step discovery, website & contact verification",
        items: ["n8n Agent Workflow", "Authorized Web Enrichment", "Duplicate Detection"],
        icon: Webhook,
      },
      {
        label: "AI Qualification & Outreach Engine",
        description: "0–100 weighted lead scoring & anti-hallucination guardrails",
        items: ["LLM Reasoning API", "Evidence-Based Lead Scoring", "Personalized Email Drafter"],
        icon: Bot,
      },
      {
        label: "Sales-Ready Lead Storage",
        description: "Structured prospect tracking & export pipeline",
        items: ["Structured Lead Database", "Verification Status Tracking", "CSV / Sheets Export"],
        icon: Database,
      },
    ],
  },

  sio: {
    name: "SIO Microservices",
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
        items: ["Order Service (Express)", "Menu/User Service", "PDFKit Invoice Worker"],
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

  cms_booking: {
    name: "Denver CMS & Studio Booking",
    badge: "Type-Safe Full-Stack Next.js",
    summary:
      "Unified full-stack architecture powering both Denver Build CMS and Photography Booking System with strict schema validation and self-hosted container routing.",
    layers: [
      {
        label: "Edge Routing & SSR UI",
        description: "SEO-optimized pages & admin dashboard",
        items: ["Traefik Proxy", "Next.js App Router", "Tailwind CSS"],
        icon: Globe,
      },
      {
        label: "Validation & Server Logic",
        description: "Runtime payload validation & type-safe mutations",
        items: ["TypeScript", "Zod Schema Validation", "Next.js API / Actions"],
        icon: ShieldCheck,
      },
      {
        label: "Data & Media Pipeline",
        description: "Relational persistence & optimized gallery delivery",
        items: ["Prisma ORM", "PostgreSQL", "Cloudinary", "Docker CI/CD"],
        icon: Database,
      },
    ],
  },

  clickbooth: {
    name: "Click Booth AI",
    badge: "AI + Payment & WA Webhooks",
    summary:
      "Interactive digital photobooth integrating generative AI processing, automated payment gateway webhooks, and instant WhatsApp media delivery.",
    layers: [
      {
        label: "Interactive Camera & UI",
        description: "Browser media capture & custom frame compositor",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
        icon: Globe,
      },
      {
        label: "AI & Third-Party Webhooks",
        description: "AI enhancement, checkout callback & instant messaging",
        items: ["OpenAI API", "Midtrans Payment Webhook", "Fonnte WhatsApp API"],
        icon: Webhook,
      },
      {
        label: "NoSQL & Cloud Storage",
        description: "Session state, transaction logs & photo storage",
        items: ["MongoDB", "Cloudinary CDN", "Docker + GitHub Actions"],
        icon: Database,
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
        <div className="mb-8 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">
              System Design & Under the Hood
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Production Architecture Breakdown
            </h3>
          </div>

          {/* Swipeable Horizontal Pills di Mobile, 5-Column Grid di Desktop */}
          <div
            className="flex lg:grid lg:grid-cols-5 gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-xl border border-border/80 bg-card/60"
            role="group"
            aria-label="Select architecture project"
          >
            {(Object.keys(architectures) as ProjectKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveProject(key)}
                aria-pressed={activeProject === key}
                className={`shrink-0 rounded-lg px-3.5 py-2.5 text-xs font-mono text-center truncate transition-all cursor-pointer ${activeProject === key
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
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
              <div className="flex flex-wrap items-center gap-3 mb-2">
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
                      <ArrowDown className="h-4 w-4 text-primary/60" />
                    </div>
                  )}
                  <div className="grid gap-4 rounded-xl border border-border/60 bg-background/60 p-4 md:grid-cols-[250px_1fr] md:items-center">
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
    </div >
  );
}