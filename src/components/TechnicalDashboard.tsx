"use client";

import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

import { Line, Bar, Scatter } from "react-chartjs-2";
import { motion } from "motion/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

// ========================================
// PROJECT DATA
// ========================================

const projects = [
  {
    name: "Opsora",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Cloudinary",
      "GitHub Actions (CI/CD)",
      "Traefik",
    ],
  },
  {
    name: "Click Booth App",
    technologies: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI",
      "Midtrans",
      "Fonnte",
      "Cloudinary",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Next Balance App",
    technologies: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Sportify Court App",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "PostgreSQL",
      "React.js",
      "Midtrans",
      "GeminiAI",
      "Bootstrap",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Smart Chat App",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "PostgreSQL",
      "React.js",
      "Socket.io",
      "Vite",
      "GeminiAI",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "SIO App - Microservices",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
      "RabbitMQ",
      "Traefik",
      "PDFKit",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "My Social Media App",
    technologies: [
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "Apollo Server-client",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Furniqo",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "PostgreSQL",
      "React.js",
      "Bootstrap",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "SIO App",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "EJS",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Toride Store",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    name: "Prelo App",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Docker",
      "GitHub Actions (CI/CD)",
    ],
  },
];

// ========================================
// TECHNOLOGY GROUPS
// ========================================

const technologyGroups = {
  Frontend: [
    "Next.js",
    "React.js",
    "React Native",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "EJS",
    "Vite",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "GraphQL",
    "Apollo Server-client",
    "Sequelize",
    "Prisma ORM",
    "PDFKit",
  ],

  Database: [
    "PostgreSQL",
    "MongoDB",
  ],

  Language: [
    "TypeScript",
    "JavaScript",
  ],

  Infrastructure: [
    "Docker",
    "GitHub Actions (CI/CD)",
    "Traefik",
    "Cloudinary",
  ],
};

type Filter = "All" | keyof typeof technologyGroups;

// ========================================
// HELPERS
// ========================================

function getProjectTechnologies(
  project: (typeof projects)[number],
  filter: Filter
) {
  if (filter === "All") {
    return project.technologies;
  }

  const group = technologyGroups[filter];

  return project.technologies.filter((technology) =>
    group.includes(technology)
  );
}

function shortProjectName(name: string) {
  const names: Record<string, string> = {
    Opsora: "Opsora",
    "Click Booth App": "Click Booth",
    "Next Balance App": "Next Balance",
    "Sportify Court App": "Sportify",
    "Smart Chat App": "Smart Chat",
    "SIO App - Microservices": "SIO Microservices",
    "My Social Media App": "Social Media",
    Furniqo: "Furniqo",
    "SIO App": "SIO",
    "Toride Store": "Toride",
    "Prelo App": "Prelo",
  };

  return names[name] ?? name;
}

// ========================================
// INTEGRATION INDICATORS
// ========================================

const integrationTechnologies = [
  "Midtrans",
  "OpenAI",
  "GeminiAI",
  "Cloudinary",
  "Socket.io",
  "RabbitMQ",
  "GitHub Actions (CI/CD)",
  "Traefik",
  "Fonnte",
];

// ========================================
// COMPONENT
// ========================================

export default function TechnicalDashboard() {
  const [filter, setFilter] = useState<Filter>("All");

  // ======================================
  // LINE CHART
  // ======================================

  const lineData = useMemo(
    () => ({
      labels: projects.map((project) =>
        shortProjectName(project.name)
      ),

      datasets: [
        {
          label: "Technologies per Project",

          data: projects.map(
            (project) =>
              getProjectTechnologies(project, filter).length
          ),

          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14, 165, 233, 0.08)",

          pointBackgroundColor: "#0ea5e9",
          pointBorderColor: "#0ea5e9",

          pointRadius: 4,
          pointHoverRadius: 6,

          borderWidth: 2,
          tension: 0.3,
        },
      ],
    }),
    [filter]
  );

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#11131d",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        padding: 10,

        callbacks: {
          label: (context) =>
            `${context.raw} technologies`,
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
          font: {
            size: 10,
          },
        },

        grid: {
          display: false,
        },

        border: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#94a3b8",
          precision: 0,
          font: {
            size: 10,
          },
        },

        grid: {
          color: "rgba(148, 163, 184, 0.10)",
        },

        border: {
          display: false,
        },
      },
    },

    animation: {
      duration: 800,
      easing: "easeOutQuart",
    },
  };

  // ======================================
  // STACKED BAR
  // ======================================

  const stackedBarData = useMemo(() => {
    const countByGroup = (
      project: (typeof projects)[number],
      group: keyof typeof technologyGroups
    ) => {
      return project.technologies.filter((technology) =>
        technologyGroups[group].includes(technology)
      ).length;
    };

    return {
      labels: projects.map((project) =>
        shortProjectName(project.name)
      ),

      datasets: [
        {
          label: "Frontend",

          data: projects.map((project) =>
            filter === "All" || filter === "Frontend"
              ? countByGroup(project, "Frontend")
              : 0
          ),

          backgroundColor: "#0284c7",
        },

        {
          label: "Backend",

          data: projects.map((project) =>
            filter === "All" || filter === "Backend"
              ? countByGroup(project, "Backend")
              : 0
          ),

          backgroundColor: "#0ea5e9",
        },

        {
          label: "Database",

          data: projects.map((project) =>
            filter === "All" || filter === "Database"
              ? countByGroup(project, "Database")
              : 0
          ),

          backgroundColor: "#38bdf8",
        },

        {
          label: "Language",

          data: projects.map((project) =>
            filter === "All" || filter === "Language"
              ? countByGroup(project, "Language")
              : 0
          ),

          backgroundColor: "#7dd3fc",
        },

        {
          label: "Infrastructure",

          data: projects.map((project) =>
            filter === "All" || filter === "Infrastructure"
              ? countByGroup(project, "Infrastructure")
              : 0
          ),

          backgroundColor: "#bae6fd",
        },
      ],
    };
  }, [filter]);

  const stackedBarOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          color: "#cbd5e1",
          usePointStyle: true,
          padding: 12,

          font: {
            size: 11,
          },
        },
      },

      tooltip: {
        backgroundColor: "#11131d",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        padding: 10,
      },
    },

    scales: {
      x: {
        stacked: true,

        ticks: {
          color: "#94a3b8",
          font: {
            size: 10,
          },
        },

        grid: {
          display: false,
        },

        border: {
          display: false,
        },
      },

      y: {
        stacked: true,
        beginAtZero: true,

        ticks: {
          color: "#94a3b8",
          precision: 0,
          font: {
            size: 10,
          },
        },

        grid: {
          color: "rgba(148, 163, 184, 0.10)",
        },

        border: {
          display: false,
        },
      },
    },

    animation: {
      duration: 800,
      easing: "easeOutQuart",
    },
  };

  // ======================================
  // SCATTER CHART
  // ======================================

  const scatterData = useMemo(() => {
  // Menyimpan jumlah titik pada koordinat yang sama
    const coordinateCounts = new Map<string, number>();

    const data = projects.map((project) => {
      const selectedTechnologies =
        getProjectTechnologies(project, filter);

      const actualX = selectedTechnologies.length;

      const actualY = project.technologies.filter((technology) =>
        integrationTechnologies.includes(technology)
      ).length;

      const key = `${actualX}-${actualY}`;

      const duplicateIndex =
        coordinateCounts.get(key) ?? 0;

      coordinateCounts.set(key, duplicateIndex + 1);

      // Jitter kecil agar titik yang overlap tetap terlihat.
      // Polanya simetris supaya tidak menggeser semuanya ke satu arah.
      const jitterValues = [0, -0.06, 0.06, -0.10, 0.10];

      const jitter =
        jitterValues[
          duplicateIndex % jitterValues.length
        ];

      return {
        // Slight horizontal jitter only
        // Y remains exactly aligned with integration level
        x: actualX + jitter,
        y: actualY,

        // Original values for tooltip
        actualX,
        actualY,

        projectName: project.name,
      };
    });

    return {
      datasets: [
        {
          label: "Projects",
          data,

          backgroundColor: "#0ea5e9",

          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    };
  }, [filter]);

  const scatterOptions: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#11131d",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        padding: 10,

        callbacks: {
          title: (items) => {
            const point = items[0].raw as {
              projectName: string;
            };

            return point.projectName;
          },

          label: (context) => {
            const point = context.raw as {
              actualX: number;
              actualY: number;
            };

            return [
              `Technologies: ${point.actualX}`,
              `Integration indicators: ${point.actualY}`,
            ];
          },
        },
      },
    },

    scales: {
      x: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Technologies",
          color: "#94a3b8",
          font: {
            size: 11,
          },
        },

        ticks: {
          color: "#94a3b8",
          precision: 0,
          font: {
            size: 10,
          },
        },

        grid: {
          color: "rgba(148, 163, 184, 0.10)",
        },

        border: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Integrations",
          color: "#94a3b8",
          font: {
            size: 11,
          },
        },

        ticks: {
          color: "#94a3b8",
          precision: 0,
          font: {
            size: 10,
          },
        },

        grid: {
          color: "rgba(148, 163, 184, 0.10)",
        },

        border: {
          display: false,
        },
      },
    },

    animation: {
      duration: 800,
      easing: "easeOutQuart",
    },
  };

  // ======================================
  // JSX
  // ======================================

  return (
    <motion.div
      className="mt-12 border-t border-white/5 pt-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* Header */}
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
          Technical Dashboard
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Advanced project analysis
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Interactive technical reporting across the technologies
          used in my projects.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {(
          [
            "All",
            "Frontend",
            "Backend",
            "Database",
            "Language",
            "Infrastructure",
          ] as Filter[]
        ).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              filter === item
                ? "border-sky-500 bg-sky-500 text-white"
                : "border-white/10 bg-[#11131d] text-slate-300 hover:border-sky-500/40 hover:text-sky-400"
            }`}
          >
            {item}
          </button>
        ))}

        <span className="flex items-center px-2 text-xs text-slate-500">
          {projects.length} projects
        </span>
      </div>

      {/* Line + Scatter */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Line */}
        <motion.div
          className="rounded-xl border border-white/10 bg-[#11131d] p-6 transition-colors duration-300 hover:border-white/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
            ease: "easeOut",
          }}
        >
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-white">
              Technology Count by Project
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Number of technologies used by each project.
            </p>
          </div>

          <div className="h-[280px] sm:h-[300px] lg:h-[320px]">
            <Line
              data={lineData}
              options={lineOptions}
            />
          </div>
        </motion.div>

        {/* Scatter */}
        <motion.div
          className="rounded-xl border border-white/10 bg-[#11131d] p-6 transition-colors duration-300 hover:border-white/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-white">
              Technology & Integration Map
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Technology count compared with integration indicators.
            </p>
          </div>

          <div className="h-[280px] sm:h-[300px] lg:h-[320px]">
            <Scatter
              data={scatterData}
              options={scatterOptions}
            />
          </div>
        </motion.div>
      </div>

      {/* Stacked Bar */}
      <motion.div
        className="mt-5 rounded-xl border border-white/10 bg-[#11131d] p-6 transition-colors duration-300 hover:border-white/15"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-white">
            Technology Composition by Project
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Distribution across frontend, backend, database,
            language, and infrastructure categories.
          </p>
        </div>

        <div className="h-[300px] sm:h-[320px] lg:h-[340px]">
          <Bar
            data={stackedBarData}
            options={stackedBarOptions}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}