"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ScriptableContext,
} from "chart.js";
import { motion } from "motion/react";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

// ========================================
// TECHNOLOGY USAGE
// ========================================

const technologyLabels = [
  "Docker",
  "GitHub Actions (CI/CD)",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
  "React.js",
  "Bootstrap",
];

const technologyValues = [
  13, // Docker
  13, // GitHub Actions (CI/CD)
  8,  // PostgreSQL
  6,  // Node.js
  6,  // Express.js
  6,  // Tailwind CSS
  5,  // Next.js
  5,  // TypeScript
  4,  // React.js
  4,  // Bootstrap
];

const technologyChartData = {
  labels: technologyLabels,
  datasets: [
    {
      label: "Projects",
      data: technologyValues,

      // Scriptable option
      backgroundColor: (context: ScriptableContext<"bar">) => {
        const value = context.dataset.data[context.dataIndex];

        if (typeof value === "number" && value >= 10) {
          return "#0ea5e9";
        }

        if (typeof value === "number" && value >= 6) {
          return "#38bdf8";
        }

        return "#7dd3fc";
      },

      borderRadius: 4,
      borderSkipped: false,
      barThickness: 16,
    },
  ],
};

const technologyChartOptions: ChartOptions<"bar"> = {
  indexAxis: "y",

  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#ffffff",
      bodyColor: "#d1d5db",
      borderColor: "rgba(255,255,255,0.1)",
      borderWidth: 1,

      callbacks: {
        label: (context) => `${context.raw} projects`,
      },
    },
  },

  scales: {
    x: {
      beginAtZero: true,

      ticks: {
        precision: 0,
        color: "#94a3b8",
      },

      grid: {
        color: "rgba(148, 163, 184, 0.12)",
      },
    },

    y: {
      ticks: {
        color: "#cbd5e1",
      },

      grid: {
        display: false,
      },
    },
  },

  animation: {
    duration: 900,
    easing: "easeOutQuart",
  },
};

// ========================================
// PROJECT DISTRIBUTION
// ========================================

const projectDistributionData = {
  labels: [
    "Business / Management",
    "E-Commerce / Marketplace",
    "Social / Communication",
    "Application / Service",
  ],

  datasets: [
    {
      data: [2, 4, 2, 5],

      backgroundColor: [
        "#0ea5e9",
        "#38bdf8",
        "#7dd3fc",
        "#bae6fd",
      ],

      borderColor: "#11131d",
      borderWidth: 3,
      hoverOffset: 6,
    },
  ],
};

const projectDistributionOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,

  cutout: "68%",

  plugins: {
    legend: {
      position: "bottom",

      labels: {
        color: "#cbd5e1",
        usePointStyle: true,
        pointStyle: "circle",
        padding: 18,
      },
    },

    tooltip: {
      enabled: true,
      backgroundColor: "rgba(15, 23, 42, 0.98)",
      titleColor: "#f8fafc",
      bodyColor: "#e2e8f0",
      borderColor: "#38bdf8",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
      displayColors: true,

      titleFont: {
        size: 13,
        weight: "bold",
      },

      bodyFont: {
        size: 12,
      },

      callbacks: {
        label: (context) => {
          const value = context.raw;
          return `${context.label}: ${value} projects`;
        },
      },
    },
  },

  animation: {
    duration: 900,
    easing: "easeOutQuart",
  },
};

// ========================================
// COMPONENT
// ========================================

export default function DeveloperInsights() {
  return (
    <div className="mt-20 border-t border-white/5 pt-16">
      <div className="w-full">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
            Project Insights
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Project & Technology Insights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            An overview of the technologies used across my projects and their distribution by application category.
          </p>
        </motion.div>

        {/* Charts */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Bar Chart */}
          <motion.div
            className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-colors duration-300 hover:border-sky-500/40"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Technology Usage Across Projects
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Number of projects using each technology.
              </p>
            </div>

            <div className="h-[350px] sm:h-[380px] lg:h-[420px]">
              <Bar
                data={technologyChartData}
                options={technologyChartOptions}
              />
            </div>
          </motion.div>

          {/* Doughnut Chart */}
          <motion.div
            className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-colors duration-300 hover:border-sky-500/40"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Project Distribution
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Distribution of projects by application category.
              </p>
            </div>

            <div className="h-[350px] sm:h-[380px] lg:h-[420px]">
              <Doughnut
                data={projectDistributionData}
                options={projectDistributionOptions}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}