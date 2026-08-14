import { EventItem, GalleryItem, Sponsor, Testimonial } from "./types";

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "drop-hack-26",
    title: "DROP HACK'26",
    category: "hackathon",
    date: "2026-08-29",
    rawDate: "August 29, 2026",
    time: "10 Hours",
    venue: "Partner Event (Unstop)",
    tags: ["AI", "Web3", "Cyber Security", "FinTech", "Healthcare"],
    description:
      "Tech Yuva is excited to announce that we're the Official Community Partner for DROP HACK'26! Compete with some of the brightest minds for a ₹50,000+ Prize Pool. Perks include Certificates, Goodies, and Merch.",
    status: "upcoming",
    externalLink:
      "https://unstop.com/hackathons/drophack-siec-community-1701822?lb=e14Q58g&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Manav04mahawar",
    featured: true,
    image: "/drophack-poster.png",
  },
  {
    id: "yuvahack-2026",
    title: "YuvaHack 36-Hour National Sprint",
    category: "hackathon",
    date: "2026-09-18",
    rawDate: "September 18-20, 2026",
    time: "36 Hours",
    venue: "Flagship Campus Hall, Delhi",
    tags: ["AI", "Web3", "SaaS", "Robotics"],
    description:
      "Form teams of up to 4 student developers to build modern database-driven applications under high pressure, with 24/7 startup CTO mentoring and high-end deck reviews.",
    status: "upcoming",
    spotsLeft: 47,
    featured: true,
  },
  {
    id: "ai-builders-bootcamp",
    title: "AI Builders Bootcamp",
    category: "bootcamp",
    date: "2026-10-10",
    rawDate: "October 10, 2026",
    time: "Full Day",
    venue: "Virtual Discord HQ",
    tags: ["Gemini", "RAG", "React", "Tailwind"],
    description:
      "Write server-side LLM secure proxies, build pgvector-based RAG workflows, and design clean micro-interaction interfaces. Limited to 150 student builders.",
    status: "upcoming",
    spotsLeft: 92,
  },
];

export const PAST_EVENTS: EventItem[] = [];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "CodeSprints 2025 Arena",
    event: "CodeSprints 2025",
    statLabel: "Developers",
    statValue: "200+",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    highlightText: "200+ developers solved high-complexity DSA obstacles in a competitive arena.",
  },
  {
    id: "gal-2",
    title: "DevCon 2025 Summit",
    event: "DevCon 2025",
    statLabel: "Attendees",
    statValue: "400+",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Cornerstone developer summit with keynote sessions on serverless architecture.",
  },
  {
    id: "gal-3",
    title: "Web3 Zero Bootcamp",
    event: "Web3 Zero",
    statLabel: "Builders",
    statValue: "80+",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Builders deployed testnet dApps and audited smart contracts end to end.",
  },
  {
    id: "gal-4",
    title: "Hackathon Nights",
    event: "Grand Sprints",
    statLabel: "Projects",
    statValue: "80+",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    highlightText: "MVPs spawned across AI, Web3 and fintech tracks during our flagship sprints.",
  },
];

export const SPONSORS: Sponsor[] = [
  { name: "Vercel", logo: "▲", domain: "deployment", contribution: "Full-year hosting credits & edge deployments for student MVPs.", statusText: "LEAD SPONSOR", tier: "platinum" },
  { name: "Linear", logo: "◆", domain: "productivity", contribution: "Premium project tooling for cohort teams and open-source repos.", statusText: "PARTNER", tier: "gold" },
  { name: "Supabase", logo: "◼", domain: "backend", contribution: "Serverless Postgres credits and realtime infra for hackathon builds.", statusText: "PARTNER", tier: "gold" },
  { name: "Cloudflare", logo: "☁", domain: "edge", contribution: "CDN and serverless Workers sponsorship for campus events.", statusText: "PARTNER", tier: "silver" },
  { name: "GitHub", logo: "🐙", domain: "code", contribution: "Free Team plans and Codespaces hours for active members.", statusText: "PARTNER", tier: "gold" },
  { name: "DigitalOcean", logo: "◍", domain: "cloud", contribution: "Cloud credits and physical server packs for incubation rooms.", statusText: "PARTNER", tier: "silver" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tes-1",
    name: "Priya Iyer",
    role: "Student Developer",
    organization: "YuvaHack Finalist",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    quote: "Tech Yuva moved me from tutorial loops to shipping a real database-driven app in one weekend. The mentorship was unreal.",
  },
  {
    id: "tes-2",
    name: "Arjun Mehta",
    role: "Bootcamp Graduate",
    organization: "AI Builders Cohort",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    quote: "We deployed a full RAG pipeline with pgvector inside a single workshop day. No slides, just real deployment.",
  },
  {
    id: "tes-3",
    name: "Sara Khan",
    role: "PitchCraft Founder",
    organization: "Seed Recipient",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    quote: "PitchCraft connected my prototype to angel investors and I walked away with real cloud credits and mentorship.",
  },
];

export const GENERAL_BLUEPRINT_DOCS = {
  uxArchitecture: {
    title: "1. UX Architecture",
    content: "The Tech Yuva system organizes developer touchpoints into a unified cognitive funnel, designed to convert passive tech enthusiasts into active, contributing open-source leaders.",
    items: [
      {
        label: "Funnel Phase 1: Interactive Epiphany (Aesthetic Attraction)",
        desc: "Captivating users through cinematic typography, high-performance scroll interactions, and reactive visual mockups (Scroll-driven WebGL look alike Terminal code loops)."
      },
      {
        label: "Funnel Phase 2: Knowledge Accumulation (Offerings)",
        desc: "Structured distribution of club values: Hackathons, hands-on Workshops, Incubation days, and networking panels styled as modular bento grid items to reduce cognitive load."
      },
      {
        label: "Funnel Phase 3: Immediate Conversion (AI Playpen & Flow)",
        desc: "Allowing users to ask questions instantly to YuvaAI without filling slow registration forms first. Registration logic is simplified using frictionless inline models."
      },
      {
        label: "The Value Loop Model",
        desc: "Learn (Workshops) ➡️ Build (Hackathons) ➡️ Pitch (Startup Accelerator Nights) ➡️ Lead & Sponsor (Networking Loops)."
      }
    ]
  },
  wireframeLayout: {
    title: "2. Visual Wireframe Map",
    content: "Visualizing layout boundaries, grid structural limits, and visual elements on Desktop and Mobile viewports.",
    codeBlock: `
[HEADER RAIL: Logo "TECH YUVA"  | Links: About, Offers, Events, Gallery, Specs | Button: JOIN CLI ]
--------------------------------------------------------------------------------------------------
[HERO ZONE]
  Left Pane: Branding & Action                        Right Pane: The Console Frame
  +--------------------------------------------+      +-------------------------------------------+
  | TAGLINE: "Where Youth Meet To Build..."    |      |  | ⬤ ⬤ ⬤  yuva-terminal:~/main.js   |  |
  |                                            |      |  +---------------------------------------+  |
  | TITLE: TECH YUVA                           |      |  | const yuva = {                         |  |
  |        [The Future, Crafted]               |      |  |   dream: "Build Future Tech",        |  |
  |                                            |      |  |   learn: true                         |  |
  | CTAs: [Explore Events]  [Architect Docs]   |      |  | };                                    |  |
  +--------------------------------------------+      +-------------------------------------------+
--------------------------------------------------------------------------------------------------
[BENTO SECTIONS] -> Community Info Cards -> What We Offer (Grid distribution)
[FOUNDER PITCH]  -> Video Overlay / Hover trigger quote / Vision of youth
[EVENTS CENTER]  -> Carousel of active registration pipelines with counter badges
[marquee sponsor rail] -> Continuous horizontal brand logo loop
[FLOATING AI ENGINE]   -> Chat widget toggled in bottom-right corner
`
  },
  designSystem: {
    title: "3. Design System Specs",
    content: "Our custom theme guidelines ensure optimal visual harmony and absolute developer affinity.",
    items: [
      { label: "Noir Canvas Bg", desc: "#0A0A0A — Purified midnight canvas maximizing component visual contrast." },
      { label: "Secondary Slate Bg", desc: "#111827 — Depth-creating backdrop for cards, borders, and sidebar rails." },
      { label: "Card Backdrop", desc: "#1F2937 (with rgba blur padding) — Sophisticated structural paneling." },
      { label: "Primary Blue Accent", desc: "#1E90FF (Dodger Blue) — Brand core, signaling professional engineering." },
      { label: "Neon Highlit Blue", desc: "#00BFFF (Deep Sky Blue) — Decorative text glow, active states, buttons." },
      { label: "Saffron Ignition", desc: "#FF7A00 — Spotting attention points, youth energy and startup drive." },
      { label: "Emerald Success Green", desc: "#22C55E — Active logs, live terminal logs, completed checkmarks." },
      { label: "Display Typography", desc: "Space Grotesk / NeuMachina emulation (Sharp wide tracking, upper-case displays)." },
      { label: "Body & Code Typography", desc: "Inter (Neutral readability) paired with JetBrains Mono (Tech-grade metrics)." }
    ]
  },
  componentTree: {
    title: "4. Component Architecture",
    content: "Our modular file architecture prevents long file limits and fosters high code portability.",
    codeBlock: `
Root Container
 ├── main.tsx (DOM bootstrap)
 ├── App.tsx (System Layout & Section Coordinates)
 ├── types.ts (Data structure guarantees)
 ├── data.ts (Shared values, metrics, & technical specs)
 ├── server.ts (Safe server architecture with lazy Gemini SDK binding)
 └── components/
      ├── ArchitectureDocs.tsx (Sliding engineering specs panel)
      ├── HeroTerminal.tsx (Cinematic loop console emulator)
      ├── TechYuvaAI.tsx (Bottom-right conversational AI module)
      ├── FounderVision.tsx (Inspiring play/hover element)
      └── EventRegisterModal.tsx (Clean user registration dialog)
`
  },
  animationPlan: {
    title: "5. Animation & Scroll Blueprint",
    content: "Animations work as cognitive guides. We keep them clean and highly performant.",
    items: [
      { label: "Hero Terminal Scroll-Execution", desc: "A simulation of real-time compiling. As user scrolls, the lines of code on the right panel are typed out, then compilation feedback is displayed inside a mock console output." },
      { label: "Micro-Hover Floating Accents", desc: "Using fine Framer Motion / Motion translations on the y-axis, simulating organic hovering state (floating laptop looks lightweight)." },
      { label: "Section Stagger entrance", desc: "Sections and cards fade-in-up with 0.15s stagger delays to keep scrolling interactive." },
      { label: "Continuous Marquee Sponsors", desc: "CSS translation loop of infinite logos with a soft hover pause state." }
    ]
  },
  nextjsConversion: {
    title: "6. Next.js + Tailwind Structure Conversion Guide",
    content: "Need to export this to a Next.js App Router setup? Follow this beautiful blueprint directory structure directly:",
    codeBlock: `
tech-yuva-nextjs/
 ├── app/
 │   ├── layout.tsx         # Global theme setup & fonts
 │   ├── page.tsx           # Home entry page (renders index sections)
 │   ├── api/
 │   │   └── chat/
 │   │       └── route.ts   # Server-side Gemini Route (Edge/Node runtime)
 │   └── register/
 │       └── page.tsx       # Standalone registration layout
 ├── components/
 │   ├── HeroTerminal.tsx   # "use client" console rendering
 │   ├── TechYuvaAI.tsx     # Client-side floating speech panel
 │   └── ArchitectureDocs.tsx # Slideshow details drawer
 ├── tailwind.config.ts     # Brand color theme injections
 ├── package.json           # Next.js 14+ / 15+ declarations
 └── public/
     └── assets/            # Static high-fidelity graphics
`
  },
  databaseSchema: {
    title: "7. Database & Schema Design",
    content: "Tech Yuva uses PostgreSQL powered by Drizzle ORM to maintain type-safe database queries. The schema is designed for speed and relational integrity.",
    items: [
      { label: "Users Table", desc: "Stores member profiles, RBAC roles (Admin/Member/Visitor), and GitHub handles." },
      { label: "Events Table", desc: "Manages cohorts, hackathons, and workshops with capacity limits and active statuses." },
      { label: "Registrations Table", desc: "Relational join table tracking which users are attending which events, with dynamic ticket QR generation." },
      { label: "CMS / Site Settings", desc: "Stores global dynamic data (hero text, featured sponsors, announcements) to avoid hardcoding." }
    ]
  },
  aiIntegration: {
    title: "8. AI Integration & RAG Engine",
    content: "The Tech Yuva AI assistant uses a robust Retrieval-Augmented Generation (RAG) pipeline powered by the Gemini SDK.",
    codeBlock: `
[ USER QUERY ]
      │
      ▼
[ VECTOR EMBEDDING ] (Generates embedding via Gemini text-embedding model)
      │
      ▼
[ VECTOR SEARCH ] (Queries PostgreSQL pgvector extension for nearest 'kb_chunks')
      │
      ▼
[ CONTEXT ASSEMBLY ] (Injects relevant knowledge base data into the prompt)
      │
      ▼
[ GEMINI INFERENCE ] (Generates accurate, context-aware response)
      │
      ▼
[ CLIENT STREAM ] (Streams tokens back to the chat UI for real-time feel)
`
  },
  deploymentPipeline: {
    title: "9. Deployment & CI/CD Pipeline",
    content: "Tech Yuva embraces the modern serverless ecosystem to ensure zero downtime and infinite scalability.",
    items: [
      { label: "Frontend Hosting (Vercel)", desc: "The React/Vite/Next.js bundle is served via Vercel's Edge Network for global low-latency delivery." },
      { label: "Backend API (Cloud Run / Node)", desc: "Server routes are containerized and deployed to Google Cloud Run, scaling to zero when idle to save costs." },
      { label: "Database Hosting (Neon / Supabase)", desc: "Serverless PostgreSQL ensures connection pooling doesn't bottleneck during high-traffic hackathon registrations." },
      { label: "CI/CD (GitHub Actions)", desc: "Automated linting, type-checking, and preview deployments trigger on every pull request to the main branch." }
    ]
  }
};