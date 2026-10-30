export interface EngineeringHighlight {
    metric: string;
    label: string;
    detail: string;
}

export interface SkillPillar {
    id: string;
    category: string;
    subtitle: string;
    skills: {
        name: string;
        context?: string;
    }[];
}

export const HERO_DATA = {
    eyebrow: "Full-Stack Engineer • Polyglot Backend & AI Automation",
    name: "Muh. Fayiz Syamsuddin.",
    roles: [
        "Full-Stack Engineer",
        "Backend & System Architect",
        "AI & Workflow Automation Builder",
    ],
    headline:
        "Architecting production-ready web platforms, scalable backend services, and automated deployment pipelines.",
    subheadline:
        "Specializing in the TypeScript (Next.js, Node.js) and PHP (Laravel) ecosystems, combined with AI workflow orchestration (n8n, LLMs) and self-managed Docker & Traefik infrastructure.",
};

export const ABOUT_DATA = {
    eyebrow: "Engineering Profile",
    title: "Systems Thinking Meets Production Execution",
    subtitle:
        "Transitioning from physical instrumentation and automation to building resilient software architectures.",
    paragraphs: [
        "My engineering foundation began in Agricultural Technology at Universitas Hasanuddin, where I focused on instrumentation, IoT monitoring, and automatic control systems. That background wired me to view software not just as screens and buttons, but as interconnected systems requiring strict data integrity, clear state transitions, and fault tolerance.",
        "After completing the Full-Stack JavaScript Immersive at Hacktiv8 Indonesia and advancing through the Backend & AI Automation track at Maxy Academy, I expanded into a polyglot engineering workflow. Today, I build end-to-end applications across Next.js, Express, and Laravel—integrating payment gateways (Midtrans, Xendit), AI agents (n8n, OpenRouter, Groq), and deploying them on self-managed cloud servers via Docker, Traefik reverse proxy, and GitHub Actions CI/CD.",
    ],
    highlights: [
        {
            metric: "10+ Live Deployments",
            label: "Self-Hosted Production Systems",
            detail: "Running on custom subdomains with Docker, Traefik SSL routing & CI/CD.",
        },
        {
            metric: "Polyglot Stack",
            label: "TS / JS • PHP • Python",
            detail: "Next.js & Express for modern web/microservices; Laravel for rapid ERP & APIs.",
        },
        {
            metric: "AI & Automation",
            label: "n8n • LLM APIs • Scraping",
            detail: "Automated webhooks, omnichannel chatbots, and headless browser pipelines.",
        },
    ] as EngineeringHighlight[],
};

export const SKILL_PILLARS: SkillPillar[] = [
    {
        id: "frontend",
        category: "Frontend & Client Architecture",
        subtitle: "Type-safe interfaces, custom CMS dashboards, and cross-platform apps",
        skills: [
            { name: "TypeScript", context: "Strict typing & Zod schemas" },
            { name: "Next.js (App Router)", context: "SSR, Server Actions, SEO" },
            { name: "React.js & Vite", context: "SPA & Real-time dashboards" },
            { name: "React Native & Expo", context: "Cross-platform mobile" },
            { name: "Tailwind CSS", context: "Design systems & responsive UI" },
            { name: "Apollo Client", context: "GraphQL state management" },
        ],
    },
    {
        id: "backend",
        category: "Polyglot Backend & Data Layer",
        subtitle: "Scalable REST/GraphQL APIs, relational modeling, and message brokers",
        skills: [
            { name: "Node.js & Express.js", context: "Monolith & Microservices" },
            { name: "PHP & Laravel", context: "MVC, Lumen API & Server DataTables" },
            { name: "PostgreSQL & MySQL", context: "Relational schema & indexing" },
            { name: "MongoDB & Redis", context: "NoSQL & caching layer" },
            { name: "Prisma & Sequelize ORM", context: "Type-safe migrations & queries" },
            { name: "RabbitMQ & Socket.IO", context: "Async messaging & real-time events" },
            { name: "Midtrans & Xendit", context: "Webhook payment integration" },
        ],
    },
    {
        id: "ai-devops",
        category: "AI Automation, Scraping & DevOps",
        subtitle: "Workflow orchestration, data mining, and containerized cloud delivery",
        skills: [
            { name: "Docker & Compose", context: "Multi-container orchestration" },
            { name: "Traefik & Nginx", context: "Reverse proxy & SSL routing" },
            { name: "GitHub Actions", context: "Automated CI/CD pipelines" },
            { name: "n8n Automation", context: "AI agents, Telegram/WA & webhooks" },
            { name: "OpenRouter, Groq & Gemini", context: "LLM integration & classifiers" },
            { name: "Python & Puppeteer", context: "Data mining, CLI & web scraping" },
            { name: "AWS EC2 & Vercel", context: "Cloud compute & edge hosting" },
        ],
    },
];

export interface ProjectItem {
    id: string;
    name: string;
    category: "Enterprise & ERP" | "AI & Automation" | "Full-Stack Web" | "Microservices";
    tagline: string;
    description: string;
    architectureNote: string;
    coreStack: string[]; // Maksimal 5-6 item untuk tampilan kartu yang bersih
    extraStack?: string[];
    githubUrl?: string;
    demoUrl?: string;
    image: string;
    isLogoImage?: boolean; // Penanda sementara jika gambar masih berupa logo
    featured: boolean;
}

export interface EngineeringLabItem {
    id: string;
    title: string;
    track: string;
    domain: "Laravel & Enterprise ERP" | "AI Agents & n8n" | "Automation & Data Mining";
    summary: string;
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    deliverableType: "Live Web App" | "Telegram/WA Bot" | "CLI & Script";
}

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: "opsora",
        name: "Opsora Enterprise ERP",
        category: "Enterprise & ERP",
        tagline: "Multi-module operations, HR, payroll & inventory system",
        description:
            "End-to-end enterprise management platform covering purchasing, sales workflows, employee attendance, automated payroll, performance reviews, and role-based access control.",
        architectureNote:
            "Self-hosted on custom cloud infrastructure via Docker Compose, Traefik reverse proxy, and automated GitHub Actions CI/CD.",
        coreStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Traefik"],
        extraStack: ["Node.js", "Docker", "Cloudinary", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/opsora",
        demoUrl: "https://opsora.faizms.com",
        image: "/opsora-logo.png",
        isLogoImage: true,
        featured: true,
    },
    {
        id: "pinventa",
        name: "Pinventa — AI Workflow Platform",
        category: "AI & Automation",
        tagline: "Maxy Academy Hackathon • Next.js + n8n AI orchestration",
        description:
            "Intelligent web application built during the Maxy Academy Hackathon that bridges a modern Next.js frontend with automated multi-step n8n backend workflows and AI agents.",
        architectureNote:
            "Event-driven webhook architecture connecting client actions to asynchronous n8n automation pipelines.",
        coreStack: ["Next.js", "TypeScript", "n8n", "Tailwind CSS", "AI Webhooks"],
        demoUrl: "https://pinventa.vercel.app",
        githubUrl: "https://github.com/muhfayizsyamsuddin",
        image: "/logonext.png",
        isLogoImage: true,
        featured: true,
    },
    {
        id: "sio-microservices",
        name: "SIO App — Microservices Architecture",
        category: "Microservices",
        tagline: "Distributed restaurant ordering system with message broker",
        description:
            "Re-engineered a monolithic EJS application into decoupled backend microservices with a React SPA frontend, asynchronous inter-service messaging, and automated PDF invoice generation.",
        architectureNote:
            "Uses RabbitMQ for event-driven communication across services, routed behind a Traefik API gateway.",
        coreStack: ["Node.js", "React.js", "RabbitMQ", "PostgreSQL", "Traefik", "Docker"],
        extraStack: ["Express.js", "Sequelize", "PDFKit", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/SIO-deployment",
        demoUrl: "https://sioms.faizms.com",
        image: "/sio.png",
        featured: true,
    },
    {
        id: "denver-build",
        name: "Denver Build & Custom CMS",
        category: "Full-Stack Web",
        tagline: "Corporate construction platform with bespoke admin CMS & SEO engine",
        description:
            "Production corporate platform featuring a custom-built Content Management System to manage project portfolios, client inquiries, dynamic SEO metadata, and media galleries.",
        architectureNote:
            "End-to-end type safety with TypeScript, Zod schema validation, and Prisma ORM deployed via Docker & Traefik.",
        coreStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Docker"],
        extraStack: ["Tailwind CSS", "Cloudinary", "Traefik", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/denver-build",
        demoUrl: "https://denverbuild.faizms.com",
        image: "/denverbuild.png",
        featured: true,
    },
    {
        id: "photography-booking",
        name: "Photography Booking System",
        category: "Full-Stack Web",
        tagline: "Studio reservation workflow & package management platform",
        description:
            "Online booking system allowing clients to explore photography packages, submit reservation requests, and track booking statuses through a dedicated admin workflow.",
        architectureNote:
            "Containerized Next.js & PostgreSQL stack with automated CI/CD delivery and Cloudinary asset pipeline.",
        coreStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Traefik"],
        extraStack: ["Tailwind CSS", "Cloudinary", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/photography-booking-system",
        demoUrl: "https://photobooth.faizms.com",
        image: "/photography-booking-system.png",
        featured: true,
    },
    {
        id: "click-booth",
        name: "Click Booth AI App",
        category: "AI & Automation",
        tagline: "Web photobooth with OpenAI integration, Midtrans payment & WhatsApp delivery",
        description:
            "Interactive digital photobooth integrating OpenAI for smart features, Midtrans payment gateway for automated checkout, and Fonnte API for instant WhatsApp media delivery.",
        architectureNote:
            "Integrates third-party payment webhooks (Midtrans) and messaging APIs (Fonnte) inside a Dockerized Next.js environment.",
        coreStack: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "Midtrans", "Docker"],
        extraStack: ["Tailwind CSS", "Fonnte", "Cloudinary", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Click-Booth",
        demoUrl: "https://clickbooth.faizms.com",
        image: "/logo.png",
        isLogoImage: true,
        featured: true,
    },
    // --- ARCHIVE / ADDITIONAL DEPLOYED PROJECTS ---
    {
        id: "sportify-court",
        name: "Sportify Court Booking",
        category: "Full-Stack Web",
        tagline: "Sports venue reservation with Midtrans & Gemini AI",
        description:
            "Real-time sports court availability and booking platform integrated with Midtrans payment processing and Gemini AI assistant.",
        architectureNote: "REST API with Express & PostgreSQL, containerized with Docker.",
        coreStack: ["React.js", "Express.js", "PostgreSQL", "Midtrans", "Gemini AI"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Sportify-Court",
        demoUrl: "https://sportifycourt.faizms.com",
        image: "/Sportify-Court.png",
        featured: false,
    },
    {
        id: "next-balance",
        name: "Next Balance E-Commerce",
        category: "Full-Stack Web",
        tagline: "Footwear e-commerce catalog & wishlist platform",
        description:
            "Modern e-commerce web application inspired by New Balance with dynamic product filtering, wishlist management, and responsive UI.",
        architectureNote: "Next.js App Router with MongoDB backend and CI/CD pipeline.",
        coreStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Docker"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Next-Balance",
        demoUrl: "https://nextbalance.faizms.com",
        image: "/nb.png",
        featured: false,
    },
    {
        id: "smart-chat",
        name: "Smart Chat Real-Time App",
        category: "Full-Stack Web",
        tagline: "Multi-room instant messaging with Socket.IO & Gemini AI",
        description:
            "Real-time web chat platform supporting concurrent rooms, instant bidirectional events via Socket.IO, and AI-assisted responses.",
        architectureNote: "WebSocket server on Node.js/Express with React + Vite client.",
        coreStack: ["React.js", "Node.js", "Socket.IO", "PostgreSQL", "Gemini AI"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Smart-Chat-Client",
        demoUrl: "https://smartchat.faizms.com",
        image: "/smart-chat.png",
        featured: false,
    },
    {
        id: "social-media-mobile",
        name: "Cross-Platform Social Media App",
        category: "Full-Stack Web",
        tagline: "React Native mobile app powered by GraphQL & Apollo",
        description:
            "Mobile social network featuring user profiles, follower graphs, and real-time feeds built with React Native (Expo) and GraphQL.",
        architectureNote: "GraphQL schema on Apollo Server backed by MongoDB.",
        coreStack: ["React Native", "Expo", "GraphQL", "Apollo", "MongoDB"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/My-Social-Media-App",
        image: "/mysocialmediaapp.png",
        featured: false,
    },
    {
        id: "furniqo",
        name: "Furniqo E-Commerce",
        category: "Full-Stack Web",
        tagline: "Furniture marketplace & product management system",
        description:
            "Full-stack e-commerce web application for furniture retail with customer authentication and catalog management.",
        architectureNote: "Express.js & PostgreSQL backend deployed via Docker.",
        coreStack: ["React.js", "Express.js", "PostgreSQL", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Furniqo-App-Client",
        demoUrl: "https://furniqo.faizms.com",
        image: "/furniqo.png",
        featured: false,
    },
];

// RANGKUMAN KURASI DARI MAXY ACADEMY BOOTCAMP (Day 9 - Day 19)
export const ENGINEERING_LABS: EngineeringLabItem[] = [
    {
        id: "lab-ai-chatbots",
        title: "Omnichannel AI Chatbots & Sentiment Classifier",
        track: "Maxy Academy • AI & LLM Engineering (Day 18–19)",
        domain: "AI Agents & n8n",
        summary:
            "Built web-based AI conversational agents (PeduliKampanye) using Laravel/Next.js with OpenRouter & Groq LLMs, alongside automated Telegram/WhatsApp bots in n8n and Hugging Face review classifiers.",
        stack: ["n8n", "OpenRouter", "Groq LLM", "Hugging Face", "Laravel", "Telegram Bot API"],
        liveUrl: "https://pedulikampanye.vercel.app",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "Live Web App",
    },
    {
        id: "lab-laravel-erp",
        title: "Sales & Purchasing ERP Cycle + RBAC Permissions",
        track: "Maxy Academy • Rapid Enterprise Dev (Day 9 & 12)",
        domain: "Laravel & Enterprise ERP",
        summary:
            "Engineered master data modules, end-to-end sales and purchasing transactions, role-based access permissions, and server-side DataTables with custom export and column visibility.",
        stack: ["PHP", "Laravel MVC", "MySQL", "Server-Side DataTables", "Gentelella"],
        liveUrl: "https://maxy-sales-purchasing.free.je",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "Live Web App",
    },
    {
        id: "lab-xendit-payment",
        title: "Pedulink — Payment Gateway & Microframework API",
        track: "Maxy Academy • API & Payment Integration (Day 11)",
        domain: "Laravel & Enterprise ERP",
        summary:
            "Implemented RESTful web services using Lumen/Laravel and integrated Xendit Payment Gateway with automated callback/webhook transaction verification.",
        stack: ["Laravel", "Lumen", "Xendit API", "RESTful Webhook", "Postman"],
        liveUrl: "https://pedulink.free.je",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "Live Web App",
    },
    {
        id: "lab-scraping-datamining",
        title: "Headless Browser Auth Bypass & E-Commerce Data Mining",
        track: "Maxy Academy • Automation & Python Analytics (Day 14–17)",
        domain: "Automation & Data Mining",
        summary:
            "Developed Puppeteer & Selenium scripts for automated session/authentication bypass (FarmRPG), direct API web scraping, and a Python CLI data-mining tool analyzing Tokopedia CSV datasets.",
        stack: ["Python", "Puppeteer", "Selenium", "Direct API Scraping", "CSV Data Mining"],
        deliverableType: "CLI & Script",
    },
];

export interface ExperienceItem {
    id: string;
    type: "Bootcamp & Training" | "Internship" | "Education";
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    impact: string[];
    technologies: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        id: "maxy-academy",
        type: "Bootcamp & Training",
        title: "Backend & AI Workflow Engineering",
        company: "Maxy Academy",
        location: "Remote / Indonesia",
        duration: "2026",
        description:
            "Intensive backend, enterprise rapid application development, and AI workflow automation program culminating in the Pinventa Hackathon project.",
        impact: [
            "Engineered enterprise sales & purchasing ERP modules using PHP/Laravel, MySQL, role-based permissions, and server-side DataTables",
            "Integrated Xendit payment gateway webhooks and built RESTful microservices using Laravel & Lumen",
            "Developed omnichannel AI chatbots (Web, WhatsApp, Telegram) orchestrated via n8n, OpenRouter, Groq LLMs, and Hugging Face classifiers",
            "Built headless browser automation & auth-bypass scripts (Puppeteer/Selenium) alongside Python CLI data-mining tools for e-commerce datasets",
        ],
        technologies: [
            "PHP & Laravel",
            "n8n Automation",
            "Python",
            "Puppeteer & Selenium",
            "OpenRouter & Groq",
            "Xendit API",
            "MySQL",
        ],
    },
    {
        id: "screenesia-docker",
        type: "Bootcamp & Training",
        title: "Docker & Microservices Architecture",
        company: "Screenesia",
        location: "Makassar, Sulawesi Selatan",
        duration: "Jun 2026 - Aug 2026",
        description:
            "Completed a 28 JP technical training program focused on container orchestration, distributed microservices, and CI/CD delivery.",
        impact: [
            "Architected RESTful microservices with Traefik API Gateway, service discovery, and asynchronous RabbitMQ message brokering",
            "Configured multi-container production environments using Docker, Docker Compose, custom networks, and persistent volumes",
            "Implemented automated CI/CD deployment pipelines and studied Kubernetes & observability fundamentals",
        ],
        technologies: [
            "Docker & Compose",
            "Microservices",
            "Traefik Gateway",
            "RabbitMQ",
            "Kubernetes",
            "GitHub Actions CI/CD",
        ],
    },
    {
        id: "promptive-intern",
        type: "Internship",
        title: "Frontend Developer",
        company: "Promptive",
        location: "Bekasi, Jawa Barat",
        duration: "Oct 2025 - Dec 2025",
        description:
            "Developed and optimized responsive web interfaces in collaboration with product design and backend engineering teams.",
        impact: [
            "Improved frontend rendering performance by 40% through component optimization and asset management",
            "Delivered interactive product features that contributed to a 25% increase in user engagement",
            "Participated in structured code reviews and Git workflows to maintain high frontend code quality",
        ],
        technologies: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "Git"],
    },
    {
        id: "hacktiv8",
        type: "Education",
        title: "Full-Stack JavaScript Immersive",
        company: "Hacktiv8 Indonesia",
        location: "Jakarta Selatan, DKI Jakarta",
        duration: "Apr 2025 - Aug 2025",
        description:
            "Intensive full-stack software engineering bootcamp focused on modern JavaScript/TypeScript web and mobile ecosystems.",
        impact: [
            "Built and deployed multiple end-to-end full-stack web and mobile applications under strict agile sprints",
            "Designed relational and NoSQL database schemas coupled with RESTful and GraphQL (Apollo) APIs",
            "Collaborated in pair-programming and team capstone projects simulating production engineering workflows",
        ],
        technologies: [
            "TypeScript",
            "Next.js",
            "Node.js & Express",
            "React & React Native",
            "PostgreSQL & MongoDB",
            "GraphQL & Apollo",
            "Prisma & Sequelize",
        ],
    },
    {
        id: "unhas",
        type: "Education",
        title: "Bachelor of Agricultural Technology (GPA: 3.72/4.00)",
        company: "Universitas Hasanuddin",
        location: "Makassar, Sulawesi Selatan",
        duration: "2020 - 2024",
        description:
            "Focused on agricultural instrumentation, automation, IoT monitoring systems, and algorithmic decision-support models.",
        impact: [
            "Researched and built IoT-based monitoring, automatic control systems, and fuzzy logic expert systems",
            "Competed in programming competitions and applied C++ and AI fundamentals to hardware-software integration",
        ],
        technologies: [
            "C++",
            "IoT & Instrumentation",
            "Automatic Control Systems",
            "Fuzzy Logic & Expert Systems",
        ],
    },
];