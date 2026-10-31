// src/data/portfolio.ts (Bagian Atas)

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
    eyebrow: "Full-Stack Developer • Backend & AI Engineer",
    name: "Muh. Fayiz Syamsuddin.",
    roles: [
        "Full-Stack Developer",
        "Backend Engineer",
        "AI & Automation Engineer",
    ],
    headline:
        "Architecting production-ready web platforms, scalable backend services, and intelligent AI workflows.",
    subheadline:
        "Building end-to-end applications with TypeScript (Next.js, Node.js), PHP (Laravel), and Python—backed by self-managed Docker, Traefik, and CI/CD infrastructure.",
};

export const ABOUT_DATA = {
    eyebrow: "Engineering Profile",
    title: "Systems Thinking Meets Production Execution",
    subtitle:
        "Transitioning from physical instrumentation and automation to building resilient software architectures.",
    paragraphs: [
        "My engineering foundation began in Agricultural Technology at Universitas Hasanuddin, where I focused on instrumentation, IoT monitoring, and automatic control systems. That background wired me to view software not just as screens and buttons, but as interconnected systems requiring strict data integrity, clear state transitions, and fault tolerance.",
        "After completing the Full-Stack JavaScript Immersive at Hacktiv8 Indonesia and advancing through the Backend & AI track at Maxy Academy, I expanded into a multi-language engineering workflow. Today, I build production applications across Next.js, Express, Laravel, and Python—integrating payment gateways (Midtrans, Xendit), AI models (OpenAI, Groq, Hugging Face, n8n), and deploying them via Docker, Traefik reverse proxy, and GitHub Actions CI/CD.",
    ],
    highlights: [
        {
            metric: "10+ Live Systems",
            label: "Self-Hosted Production Apps",
            detail: "Running on custom subdomains with Docker, Traefik SSL routing & CI/CD.",
        },
        {
            metric: "Full-Stack Core", // 1 baris sejajar dengan kiri & kanan!
            label: "TypeScript • PHP • Python",
            detail: "Next.js & Express for modern web/microservices; Laravel for enterprise ERP.",
        },
        {
            metric: "AI & Automation",
            label: "LLMs • n8n • Data Scraping",
            detail: "OpenAI/Groq chatbots, Streamlit apps, and Puppeteer/Python pipelines.",
        },
    ] as EngineeringHighlight[],
};

export const SKILL_PILLARS: SkillPillar[] = [
    {
        id: "frontend-lang",
        category: "Languages & Frontend Architecture",
        subtitle: "Core programming languages, type-safe web interfaces, and mobile apps",
        skills: [
            { name: "TypeScript & JavaScript (ES6+)", context: "Strict typing & Zod" },
            { name: "PHP & Python", context: "Backend web & data scripting" },
            { name: "Next.js (App Router)", context: "SSR, Server Actions, SEO" },
            { name: "React.js & Vite", context: "Dynamic SPA & dashboards" },
            { name: "React Native & Expo", context: "Cross-platform mobile" },
            { name: "Tailwind CSS", context: "Modern UI systems" },
            { name: "Apollo Client", context: "GraphQL state management" },
        ],
    },
    {
        id: "backend-data",
        category: "Backend & Database Systems",
        subtitle: "REST/GraphQL APIs, relational/NoSQL modeling, and payment webhooks",
        skills: [
            { name: "Node.js & Express.js", context: "REST API & Microservices" },
            { name: "Laravel (MVC)", context: "Enterprise ERP & Server DataTables" },
            { name: "GraphQL & Apollo Server", context: "Typed schema & resolvers" },
            { name: "PostgreSQL & MySQL", context: "ACID relational databases" },
            { name: "MongoDB, Redis & Supabase", context: "NoSQL, caching & BaaS" },
            { name: "Prisma & Sequelize ORM", context: "Migrations & query builder" },
            { name: "RabbitMQ & Socket.IO", context: "Message broker & real-time" },
            { name: "Midtrans & Xendit", context: "Payment gateway webhooks" },
        ],
    },
    {
        id: "ai-automation",
        category: "AI Engineering & Automation",
        subtitle: "LLM orchestration, sentiment classifiers, data mining, and scraping",
        skills: [
            { name: "OpenAI & Gemini AI", context: "Generative AI & vision APIs" },
            { name: "OpenRouter & Groq", context: "High-speed LLM inference" },
            { name: "Hugging Face & Streamlit", context: "NLP classifiers & data apps" },
            { name: "n8n Workflow Automation", context: "Telegram/WA AI agents & webhooks" },
            { name: "Puppeteer & Selenium", context: "Headless browser & auth automation" },
            { name: "Python Data Mining", context: "Web scraping & CSV analytics" },
        ],
    },
    {
        id: "devops-testing",
        category: "DevOps, Cloud & Quality Assurance",
        subtitle: "Container orchestration, reverse proxy, cloud storage, and testing",
        skills: [
            { name: "Docker & Docker Compose", context: "Containerized environments" },
            { name: "Traefik & Nginx", context: "Reverse proxy & SSL routing" },
            { name: "GitHub Actions (CI/CD)", context: "Automated build & deployment" },
            { name: "AWS EC2, Vercel & Firebase", context: "Cloud compute & hosting" },
            { name: "Cloudinary", context: "Cloud media pipeline" },
            { name: "Jest", context: "Automated unit & API testing" },
            { name: "Git, GitHub & Postman", context: "Version control & API testing" },
        ],
    },
];

// Ganti mulai dari interface ProjectItem hingga ENGINEERING_LABS di src/data/portfolio.ts

export interface ProjectItem {
    id: string;
    name: string;
    category: "Enterprise & ERP" | "Agentic AI & Automation" | "Full-Stack Web" | "Microservices";
    tagline: string;
    description: string;
    architectureNote: string;
    coreStack: string[];
    extraStack?: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
    previewHost: string;
    featured: boolean;
}

export interface EngineeringLabItem {
    id: string;
    title: string;
    subtitle: string;
    domain: "AI & LLM Systems" | "Enterprise ERP & API" | "Automation & Data Mining";
    summary: string;
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    deliverableType: "Web Application" | "REST API & Webhook" | "CLI & Automation";
}

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: "opsora",
        name: "Opsora Enterprise ERP",
        category: "Enterprise & ERP",
        tagline: "Multi-module business operations, HR, payroll & inventory system",
        description:
            "End-to-end enterprise management platform covering purchasing cycles, sales workflows, employee attendance, automated payroll, performance reviews, and role-based access control (RBAC).",
        architectureNote:
            "Self-hosted on custom cloud infrastructure via Docker Compose, Traefik reverse proxy, and automated GitHub Actions CI/CD.",
        coreStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Traefik"],
        extraStack: ["Node.js", "Docker", "Cloudinary", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/opsora",
        demoUrl: "https://opsora.faizms.com",
        image: "/opsora-logo.png",
        previewHost: "opsora.faizms.com",
        featured: true,
    },
    {
        id: "pinventa",
        name: "Pinventa — Geo-Targeted B2B Prospecting AI Agent",
        category: "Agentic AI & Automation",
        tagline: "Autonomous B2B lead discovery, multi-source enrichment & AI scoring platform",
        description:
            "Agentic AI sales intelligence platform that transforms a map pin and radius into verified B2B prospects. Automates business discovery, website/contact enrichment, AI opportunity analysis, weighted 0–100 lead scoring, and personalized outreach email drafting.",
        architectureNote:
            "Orchestrates Next.js interactive map/dashboard with n8n agentic workflows, location APIs, and LLM reasoning pipelines with anti-hallucination evidence verification.",
        coreStack: ["Next.js", "TypeScript", "n8n Agents", "LLM API", "Google Maps/Places", "Tailwind CSS"],
        extraStack: ["Webhook Orchestration", "CSV/Sheets Export", "Lead Scoring Engine"],
        demoUrl: "https://pinventa.vercel.app",
        githubUrl: "https://github.com/muhfayizsyamsuddin",
        // Tidak memakai gambar NextBalance lagi; menggunakan komponen Browser Preview bawaan
        previewHost: "pinventa.vercel.app",
        featured: true,
    },
    {
        id: "sio-microservices",
        name: "SIO App — Microservices Architecture",
        category: "Microservices",
        tagline: "Distributed restaurant ordering system with asynchronous message broker",
        description:
            "Re-engineered a monolithic EJS application into decoupled backend microservices with a React SPA frontend, asynchronous inter-service messaging, and automated PDF invoice generation.",
        architectureNote:
            "Uses RabbitMQ for event-driven communication across isolated services, routed behind a Traefik API gateway.",
        coreStack: ["Node.js", "React.js", "RabbitMQ", "PostgreSQL", "Traefik", "Docker"],
        extraStack: ["Express.js", "Sequelize", "PDFKit", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/SIO-deployment",
        demoUrl: "https://sioms.faizms.com",
        image: "/sio.png",
        previewHost: "sioms.faizms.com",
        featured: true,
    },
    {
        id: "denver-build",
        name: "Denver Build & Custom CMS",
        category: "Full-Stack Web",
        tagline: "Corporate construction platform with bespoke admin CMS & SEO engine",
        description:
            "Production corporate platform featuring a custom-built Content Management System to manage project portfolios, services, client inquiries, dynamic SEO metadata, and media galleries.",
        architectureNote:
            "End-to-end type safety with TypeScript, Zod schema validation, and Prisma ORM deployed via Docker & Traefik.",
        coreStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Docker"],
        extraStack: ["Tailwind CSS", "Cloudinary", "Traefik", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/denver-build",
        demoUrl: "https://denverbuild.faizms.com",
        image: "/denverbuild.png",
        previewHost: "denverbuild.faizms.com",
        featured: true,
    },
    {
        id: "photography-booking",
        name: "Photography Booking System",
        category: "Full-Stack Web",
        tagline: "Studio reservation workflow & package management platform",
        description:
            "Online booking system allowing clients to explore photography packages, submit reservation requests, and track booking statuses through a dedicated admin management workflow.",
        architectureNote:
            "Containerized Next.js & PostgreSQL stack with automated CI/CD delivery and Cloudinary asset pipeline.",
        coreStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Traefik"],
        extraStack: ["Tailwind CSS", "Cloudinary", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/photography-booking-system",
        demoUrl: "https://photobooth.faizms.com",
        image: "/photography-booking-system.png",
        previewHost: "photobooth.faizms.com",
        featured: true,
    },
    {
        id: "click-booth",
        name: "Click Booth AI App",
        category: "Agentic AI & Automation",
        tagline: "Web photobooth with OpenAI integration, Midtrans payment & WhatsApp delivery",
        description:
            "Interactive digital photobooth integrating OpenAI for smart image/caption features, Midtrans payment gateway for automated checkout, and Fonnte API for instant WhatsApp media delivery.",
        architectureNote:
            "Integrates third-party payment webhooks (Midtrans) and messaging APIs (Fonnte) inside a Dockerized Next.js environment.",
        coreStack: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "Midtrans", "Docker"],
        extraStack: ["Tailwind CSS", "Fonnte", "Cloudinary", "GitHub Actions"],
        githubUrl: "https://github.com/muhfayizsyamsuddin/Click-Booth",
        demoUrl: "https://clickbooth.faizms.com",
        image: "/logo.png",
        previewHost: "clickbooth.faizms.com",
        featured: true,
    },
    // --- ADDITIONAL DEPLOYED PROJECTS ---
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
        previewHost: "sportifycourt.faizms.com",
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
        previewHost: "nextbalance.faizms.com",
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
        previewHost: "smartchat.faizms.com",
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
        previewHost: "github.com/muhfayizsyamsuddin",
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
        previewHost: "furniqo.faizms.com",
        featured: false,
    },
];

// TANPA EMBEL-EMBEL "MAXY DAY X" — MURNI SEBAGAI EKSPLORASI TEKNIS & R&D
export const ENGINEERING_LABS: EngineeringLabItem[] = [
    {
        id: "lab-ai-chatbots",
        title: "Omnichannel AI Chatbots & Sentiment Classifier",
        subtitle: "Conversational LLM Agents • Web, Telegram & WhatsApp",
        domain: "AI & LLM Systems",
        summary:
            "Engineered web-based conversational AI agents (PeduliKampanye) powered by OpenRouter & Groq LLMs, alongside automated Telegram/WhatsApp bots in n8n and customer review sentiment classifiers using Hugging Face.",
        stack: ["n8n", "OpenRouter", "Groq LLM", "Hugging Face", "Laravel", "Telegram Bot API"],
        liveUrl: "https://pedulikampanye.vercel.app",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "Web Application",
    },
    {
        id: "lab-laravel-erp",
        title: "Sales & Purchasing ERP Cycle + RBAC Permissions",
        subtitle: "Transactional Enterprise Workflows & Server-Side DataTables",
        domain: "Enterprise ERP & API",
        summary:
            "Built master data modules, end-to-end sales and purchasing transaction cycles, role-based access permissions, and high-volume server-side DataTables with custom export and column visibility controls.",
        stack: ["PHP", "Laravel MVC", "MySQL", "Server-Side DataTables"],
        liveUrl: "https://maxy-sales-purchasing.free.je",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "Web Application",
    },
    {
        id: "lab-xendit-payment",
        title: "Pedulink — Payment Gateway & Webhook Service",
        subtitle: "Digital Checkout & Automated Transaction Verification",
        domain: "Enterprise ERP & API",
        summary:
            "Developed RESTful backend services and integrated Xendit Payment Gateway with automated webhook callbacks for real-time payment status synchronization.",
        stack: ["PHP", "Laravel", "Xendit API", "RESTful Webhooks", "Postman"],
        liveUrl: "https://pedulink.free.je",
        repoUrl: "https://github.com/muhfayizsyamsuddin",
        deliverableType: "REST API & Webhook",
    },
    {
        id: "lab-scraping-datamining",
        title: "Headless Browser Automation & E-Commerce Data Mining",
        subtitle: "Automated Session Flows & Marketplace Dataset Analytics",
        domain: "Automation & Data Mining",
        summary:
            "Created Puppeteer and Selenium automation scripts for complex session/authentication flows (FarmRPG), direct API web scraping, and a Python CLI analytics program for mining Tokopedia product CSV datasets.",
        stack: ["Python", "Puppeteer", "Selenium", "Direct API Scraping", "CSV Analytics"],
        deliverableType: "CLI & Automation",
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