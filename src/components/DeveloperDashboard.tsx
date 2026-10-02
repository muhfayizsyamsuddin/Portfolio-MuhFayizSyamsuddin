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
    "TypeScript",
    "JavaScript",
    "GraphQL",
    "Apollo Server-client",
    "Sequelize",
    "Prisma ORM",
    "PDFKit",
  ],

  Database: ["PostgreSQL", "MongoDB"],

  DevOps: [
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

function getFilteredProjects(filter: Filter) {
  if (filter === "All") {
    return projects;
  }

  const technologies = technologyGroups[filter];

  return projects.filter((project) =>
    project.technologies.some((technology) =>
      technologies.includes(technology)
    )
  );
}

function shortProjectName(name: string) {
  const names: Record<string, string> = {
    "Opsora": "Opsora",
    "Click Booth App": "Click Booth",
    "Next Balance App": "Next Balance",
    "Sportify Court App": "Sportify",
    "Smart Chat App": "Smart Chat",
    "SIO App - Microservices": "SIO Microservices",
    "My Social Media App": "Social Media",
    "Furniqo": "Furniqo",
    "SIO App": "SIO",
    "Toride Store": "Toride",
    "Prelo App": "Prelo",
  };

  return names[name] ?? name;
}

// ========================================
// COMPONENT
// ========================================

export default function DeveloperDashboard() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(
    () => getFilteredProjects(filter),
    [filter]
  );

  // ======================================
  // LINE CHART
  // ======================================

  const lineData = useMemo(
    () => ({
      labels: filteredProjects.map((project) =>
        shortProjectName(project.name)
      ),

      datasets: [
        {
          label: "Technologies per Project",
          data: filteredProjects.map(
            (project) => project.technologies.length
          ),
          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14, 165, 233, 0.10)",
          pointBackgroundColor: "#0ea5e9",
          pointBorderColor: "#0ea5e9",
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
        },
      ],
    }),
    [filteredProjects]
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
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,

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
        },

        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#94a3b8",
          precision: 0,
        },

        grid: {
          color: "rgba(148, 163, 184, 0.12)",
        },
      },
    },

    animation: {
      duration: 700,
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
      labels: filteredProjects.map((project) =>
        shortProjectName(project.name)
      ),

      datasets: [
        {
          label: "Frontend",
          data: filteredProjects.map((project) =>
            countByGroup(project, "Frontend")
          ),
          backgroundColor: "#0ea5e9",
        },

        {
          label: "Backend",
          data: filteredProjects.map((project) =>
            countByGroup(project, "Backend")
          ),
          backgroundColor: "#38bdf8",
        },

        {
          label: "Database",
          data: filteredProjects.map((project) =>
            countByGroup(project, "Database")
          ),
          backgroundColor: "#7dd3fc",
        },

        {
          label: "DevOps",
          data: filteredProjects.map((project) =>
            countByGroup(project, "DevOps")
          ),
          backgroundColor: "#bae6fd",
        },
      ],
    };
  }, [filteredProjects]);

  const stackedBarOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          color: "#cbd5e1",
          usePointStyle: true,
          padding: 18,
        },
      },

      tooltip: {
        backgroundColor: "#11131d",
        titleColor: "#ffffff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
      },
    },

    scales: {
      x: {
        stacked: true,

        ticks: {
          color: "#94a3b8",
        },

        grid: {
          display: false,
        },
      },

      y: {
        stacked: true,
        beginAtZero: true,

        ticks: {
          color: "#94a3b8",
          precision: 0,
        },

        grid: {
          color: "rgba(148, 163, 184, 0.12)",
        },
      },
    },

    animation: {
      duration: 600,
    },
  };

  // ======================================
  // SCATTER CHART
  // ======================================

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

  const scatterData = useMemo(
    () => ({
      datasets: [
        {
          label: "Projects",

          data: filteredProjects.map((project) => {
            const integrationCount =
              project.technologies.filter((technology) =>
                integrationTechnologies.includes(technology)
              ).length;

            return {
              x: project.technologies.length,
              y: integrationCount,
              projectName: project.name,
            };
          }),

          backgroundColor: "#0ea5e9",
          pointRadius: 7,
          pointHoverRadius: 9,
        },
      ],
    }),
    [filteredProjects]
  );

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
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,

        callbacks: {
          title: (items) => {
            const item = items[0];
            const point = item.raw as {
              x: number;
              y: number;
              projectName: string;
            };

            return point.projectName;
          },

          label: (context) => {
            const point = context.raw as {
              x: number;
              y: number;
            };

            return [
              `Technologies: ${point.x}`,
              `Integration indicators: ${point.y}`,
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
          text: "Number of Technologies",
          color: "#94a3b8",
        },

        ticks: {
          color: "#94a3b8",
          precision: 0,
        },

        grid: {
          color: "rgba(148, 163, 184, 0.12)",
        },
      },

      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Integration Indicators",
          color: "#94a3b8",
        },

        ticks: {
          color: "#94a3b8",
          precision: 0,
        },

        grid: {
          color: "rgba(148, 163, 184, 0.12)",
        },
      },
    },

    animation: {
      duration: 700,
    },
  };

  // ======================================
  // JSX
  // ======================================

  return (
    <section
      id="developer-dashboard"
      className="scroll-mt-16 border-t border-white/5 bg-[#0e101c] py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
            Developer Dashboard
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Technology and project analysis
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            An interactive overview of technology composition and
            integration indicators across my projects.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(
            ["All", "Frontend", "Backend", "Database", "DevOps"] as Filter[]
          ).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-white/10 bg-[#11131d] text-slate-300 hover:border-sky-500/50 hover:text-sky-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Line Chart */}
          <div className="rounded-xl border border-white/10 bg-[#11131d] p-6">
            <h3 className="text-lg font-semibold text-white">
              Project Technology Profile
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Number of technologies used in each project.
            </p>

            <div className="mt-6 h-[350px]">
              <Line
                data={lineData}
                options={lineOptions}
              />
            </div>
          </div>

          {/* Scatter Chart */}
          <div className="rounded-xl border border-white/10 bg-[#11131d] p-6">
            <h3 className="text-lg font-semibold text-white">
              Technology & Integration Map
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Technology count compared with integration indicators.
            </p>

            <div className="mt-6 h-[350px]">
              <Scatter
                data={scatterData}
                options={scatterOptions}
              />
            </div>
          </div>

          {/* Stacked Bar */}
          <div className="rounded-xl border border-white/10 bg-[#11131d] p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white">
              Technology Composition by Project
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Technology distribution across frontend, backend,
              database, and DevOps categories.
            </p>

            <div className="mt-6 h-[400px]">
              <Bar
                data={stackedBarData}
                options={stackedBarOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}