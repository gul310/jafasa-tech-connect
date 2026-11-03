export const SERVICES_DATA = {
  webDevelopment: {
    id: "web-development",
    slug: "web-development",
    title: "Web Development Services",
    headline: "Engineered for Performance, Scalability & Visual Excellence",
    shortDesc: "From bespoke corporate portals to high-converting eCommerce and enterprise web applications, we develop secure, lightning-fast digital experiences.",
    services: [
      {
        name: "Corporate & Business Websites",
        desc: "Bespoke digital storefronts that reflect corporate prestige, build trust, and drive high-intent inquiries.",
        features: ["Modern UI/UX Architecture", "Mobile First & Responsive", "High-Speed Performance", "SEO Ready Structure"]
      },
      {
        name: "Custom Web Applications (React & Next)",
        desc: "Interactive, real-time single page applications with fluid UI components and robust client-side performance.",
        features: ["Component-Driven React/Vite", "State Management & Auth", "Real-Time Dashboard UI", "Cloud-Ready Architecture"]
      },
      {
        name: "E-Commerce Solutions",
        desc: "Comprehensive online shopping platforms featuring seamless product management, carts, and payment integrations.",
        features: ["Custom & WooCommerce Stores", "Secure Checkout Workflows", "Inventory & Order Tracking", "Conversion Rate Optimization"]
      },
      {
        name: "Backend & API Development (PHP & Laravel)",
        desc: "Solid backend infrastructures engineered for stability, secure database queries, and clean RESTful API standards.",
        features: ["Laravel MVC Architecture", "RESTful & GraphQL Endpoints", "Role-Based Access Control", "Relational Database Modeling"]
      },
      {
        name: "WordPress & CMS Solutions",
        desc: "User-friendly content management systems allowing your internal marketing team to update content effortlessly.",
        features: ["Custom Theme Development", "Elementor / Block Customization", "Speed & Security Hardening", "Seamless Migrations"]
      },
      {
        name: "Website Redesign & Modernization",
        desc: "Revamping outdated websites into contemporary, mobile-responsive, conversion-focused digital assets.",
        features: ["Visual & UX Overhaul", "Codebase Modernization", "Core Web Vitals Optimization", "Zero Downtime Transition"]
      },
      {
        name: "Ongoing Maintenance & Support",
        desc: "Proactive uptime monitoring, automated security backups, bug fixes, and continuous software updates.",
        features: ["24/7 Health Monitoring", "Offsite Cloud Backups", "Security Patching & Audits", "Dedicated Technical Support"]
      }
    ]
  },

  seoMarketing: {
    id: "seo-digital-marketing",
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    headline: "Get Found. Get Discovered. Grow Digitally.",
    disclaimer: "Ethical, white-hat search engine optimization. We focus on search compliance, topical authority, and technical excellence without making deceptive promises of guaranteed rankings.",
    shortDesc: "Strategic search engine optimization, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and multi-channel digital marketing.",
    services: [
      {
        name: "Technical SEO & Core Web Vitals",
        desc: "Ensuring your website is fully crawlable, indexable, blazing fast, and optimized for search engine bots.",
        features: ["Crawl Error Resolution", "XML Sitemaps & Robots.txt", "Schema.org Structured Data", "Mobile Usability Fixes"]
      },
      {
        name: "On-Page SEO & Content Strategy",
        desc: "Optimizing page content, meta tags, heading hierarchies, internal linking, and semantic context.",
        features: ["Targeted Keyword Architecture", "Title & Meta Optimization", "Search Intent Alignment", "Comprehensive Content Silos"]
      },
      {
        name: "Local SEO & Google Business Profile",
        desc: "Connecting your business with local customers searching in your city, district, or regional market.",
        features: ["GBP Verification & Optimization", "Local Citation Building", "Geo-Targeted Landing Pages", "Review & Trust Signaling"]
      },
      {
        name: "AEO (Answer Engine Optimization)",
        desc: "Optimizing your content for voice assistants, featured snippets, and conversational search platforms.",
        features: ["FAQ Structured Schemas", "Direct Answer Formatting", "Conversational Query Targeting", "Voice Search Readability"]
      },
      {
        name: "GEO (Generative Engine Optimization)",
        desc: "Positioning your brand as a cited source within AI-powered search engines (ChatGPT Search, Perplexity, Gemini).",
        features: ["Brand Entity Authority", "LLM-Citable Knowledge Formats", "Topical Depth Optimization", "Digital PR & Co-citations"]
      },
      {
        name: "Social Media Marketing (SMM)",
        desc: "Engaging your target demographic across LinkedIn, Facebook, and Instagram with high-impact creatives.",
        features: ["Content Calendar & Design", "Paid Campaign Strategy", "Audience Retargeting", "Monthly Growth Analytics"]
      }
    ]
  },

  aiSolutions: {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    headline: "Practical AI Engineering for Real Business Impact",
    shortDesc: "Automate repetitive workflows, augment customer interactions, and build proprietary AI-powered software systems.",
    useCases: [
      {
        title: "Customer Support Automation",
        desc: "Intelligent, context-aware AI chatbots trained on your internal documentation to resolve customer inquiries 24/7 with zero latency.",
        impact: "Reduces first-response time by up to 85%."
      },
      {
        title: "Document Processing & Extraction",
        desc: "Automated parsing of invoices, resumes, academic certificates, and legal contracts into structured databases.",
        impact: "Eliminates hundreds of manual data entry hours monthly."
      },
      {
        title: "Intelligent Content & Workflow Pipelines",
        desc: "Custom generative workflows for drafting marketing copies, summarizing reports, and preparing institutional communications.",
        impact: "Multiplies team creative velocity."
      },
      {
        title: "Predictive Analytics & Decision Support",
        desc: "Data-driven modeling that assists management in anticipating student enrollments, customer churn, and seasonal trends.",
        impact: "Enables informed strategic choices."
      }
    ],
    services: [
      {
        name: "Custom AI Chatbots & RAG Systems",
        desc: "Retrieval-Augmented Generation bots grounded in your proprietary documents, PDFs, and databases with verifiable citations."
      },
      {
        name: "AI-Powered Web & SaaS Applications",
        desc: "Full-stack web software embedding OpenAI, Anthropic, or open-source LLM capabilities directly into user interfaces."
      },
      {
        name: "Business Process Automation (BPA)",
        desc: "Connecting your CRM, email, accounting, and communication channels with intelligent AI decision triggers."
      },
      {
        name: "AI Strategy & Team Upskilling",
        desc: "Consultative roadmaps helping organizations discover high-ROI use cases and train personnel in prompt engineering."
      }
    ]
  },

  mobileApps: {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Development",
    headline: "Fluid, High-Performance Mobile Experiences",
    shortDesc: "Engineered for iOS and Android with modern cross-platform frameworks, robust offline caching, and responsive native touch ergonomics.",
    categories: [
      { name: "Cross-Platform Flutter Apps", desc: "Single codebase, native speed, expressive UI widgets across both Android and iOS." },
      { name: "React Native Mobile Solutions", desc: "Dynamic JavaScript-driven applications leveraging native UI components." },
      { name: "Business & Enterprise Mobility", desc: "Field-agent apps, inventory scanners, dispatch trackers, and executive dashboards." },
      { name: "Educational & Campus Portals", desc: "Student attendance, LMS portals, grade books, and instant push notifications." }
    ]
  },

  softwareDevelopment: {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software Engineering",
    headline: "Architected for Reliability, Security & Long-Term Scalability",
    shortDesc: "Tailored software systems, management platforms, database designs, and internal operational tooling.",
    capabilities: [
      { title: "Enterprise Management Systems (ERP/CRM)", desc: "Consolidate accounting, payroll, customer interactions, and student administration into one cohesive platform." },
      { title: "Custom API & Microservices", desc: "Lightweight, decoupled server modules designed to communicate reliably across distributed infrastructures." },
      { title: "Cloud Database Engineering", desc: "High-concurrency PostgreSQL, MySQL, and MongoDB clusters designed for fault-tolerance and swift recovery." },
      { title: "Legacy Code Modernization", desc: "Refactoring aging software systems to modern tech stacks without losing historic data or interrupting workflows." }
    ]
  },

  fypSolutions: {
    id: "fyp-projects",
    slug: "fyp-projects",
    title: "FYP & Project Solutions",
    headline: "From Ideas to Working Solutions",
    notice: "Academic Integrity Commitment: Jafasa Tech Solutions provides practical technical mentoring, architecture consulting, code review, and development coaching to help university students build and understand their capstone projects genuinely.",
    shortDesc: "End-to-end guidance for undergraduate & graduate students tackling Computer Science, Software Engineering, and IT Final Year Projects.",
    services: [
      {
        title: "Project Ideation & Feasibility Analysis",
        desc: "Brainstorming viable, innovative topics that fulfill departmental requirements and solve real-world challenges."
      },
      {
        title: "Software Requirements Specification (SRS)",
        desc: "Guidance on formulating IEEE-standard SRS documents, use case diagrams, and system architecture blueprints."
      },
      {
        title: "UI/UX & Interactive Wireframing",
        desc: "Prototyping responsive web and mobile interfaces in Figma before commencing backend engineering."
      },
      {
        title: "Core Development Coaching",
        desc: "Step-by-step guidance in React, Node, Laravel, Flutter, Python, and Machine Learning modules."
      },
      {
        title: "Database Modeling & Query Tuning",
        desc: "Creating normalized relational ERDs and NoSQL schemas that withstand viva scrutiny."
      },
      {
        title: "Testing, Documentation & Viva Preparation",
        desc: "Unit testing, thesis drafting assistance, slide deck preparation, and mock viva questioning sessions."
      }
    ]
  }
};
