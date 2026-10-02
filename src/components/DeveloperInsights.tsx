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
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Tailwind CSS",
  "React.js",
  "Bootstrap",
  "Next.js",
  "TypeScript",
];

const technologyValues = [
  11,
  11,
  6,
  6,
  6,
  4,
  4,
  4,
  3,
  3,
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
    duration: 700,
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
      data: [5, 2, 2, 2],

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
      backgroundColor: "#111827",
      titleColor: "#ffffff",
      bodyColor: "#d1d5db",
      borderColor: "rgba(255,255,255,0.1)",
      borderWidth: 1,

      callbacks: {
        label: (context) => {
          const value = context.raw;
          return `${context.label}: ${value} projects`;
        },
      },
    },
  },

  animation: {
    duration: 700,
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
            Project Insights
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Project analytics & technology overview
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A visual overview of the technologies and categories
            represented across my projects.
          </p>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bar Chart */}
          <div className="rounded-xl border border-white/10 bg-[#11131d] p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">
                Technology Usage Across Projects
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Number of projects using each technology.
              </p>
            </div>

            <div className="h-[420px]">
              <Bar
                data={technologyChartData}
                options={technologyChartOptions}
              />
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="rounded-xl border border-white/10 bg-[#11131d] p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">
                Project Distribution
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Distribution of projects by application category.
              </p>
            </div>

            <div className="h-[420px]">
              <Doughnut
                data={projectDistributionData}
                options={projectDistributionOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}