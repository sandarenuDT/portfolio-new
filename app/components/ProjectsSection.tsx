"use client";
import { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  title: string;
  period: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
  color: string;
  image: string;
}

const projectsData: ProjectItem[] = [
  {
    title: "Restaurant Management System",
    period: "2026",
    shortDesc: "Real-time QR-based restaurant ordering and management platform.",
    fullDesc: "A full-stack production-grade restaurant operating system designed to replace traditional paper-based workflows.",
    highlights: [
      "Built a multi-role system (customer, waiter, kitchen, admin) with real-time order tracking using Socket.io",
      "Implemented QR code-based table ordering accessible via mobile browsers without app installation",
    ],
    tech: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "React", "Socket.io"],
    github: "https://github.com/sandarenuDT/restaurent-system",
    category: "Full-Stack Web",
    color: "#22c55e",
    image: "/restaurant.jpg",
  },
  {
    title: "URL Shortener Microservices",
    period: "Apr 2026",
    shortDesc: "Production-grade URL shortener built with microservices and Kubernetes deployment.",
    fullDesc: "A highly scalable URL shortener platform developed using a microservices architecture in .NET 8.",
    highlights: [
      "Built microservices-based backend architecture using ASP.NET Core",
      "Integrated Redis caching for high-performance URL redirects",
    ],
    tech: [".NET 8", "ASP.NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/sandarenuDT/url-shortner",
    category: "Cloud / Infra",
    color: "#3b82f6",
    image: "/shortener.jpg",
  },
  {
    title: "PDF RAG Chatbot Suite",
    period: "May 2026",
    shortDesc: "Semantic document retrieval system built with ChromaDB and open-source LLMs.",
    fullDesc: "A robust RAG conversational interface built to handle localized contextual document interrogation.",
    highlights: [
      "Engineered vector retrieval patterns utilizing all-MiniLM-L6-v2 deep sentence embeddings",
      "Configured storage mechanics using a standalone embedded ChromaDB vector repository",
    ],
    tech: ["Python", "ChromaDB", "Sentence-Transformers", "Streamlit", "OpenRouter API", "NumPy", "PyMuPDF"],
    github: "https://github.com/sandarenuDT/pdf-rag-chatbot",
    category: "AI / GenAI",
    color: "#a855f7",
    image: "/rag-chatbot.jpg",
  },
  {
    title: "FinTech Fraud Detection Pipeline",
    period: "March 2026",
    shortDesc: "Real-time transaction streaming architecture using Kafka and Apache Spark.",
    fullDesc: "A real-time fraud detection infrastructure that streams financial transactions through Apache Kafka into Spark Structured Streaming.",
    highlights: [
      "Built real-time streaming pipeline processing transaction payloads instantly using Apache Kafka",
      "Programmed advanced analytical detection algorithms for fraud categorization in Spark Structured Streaming",
    ],
    tech: ["Kafka", "Apache Spark", "Airflow", "PostgreSQL", "Parquet", "Python", "Docker Compose"],
    github: "https://github.com/sandarenuDT/FinTech-Fraud-Detection-Pipeline",
    category: "Data Engineering",
    color: "#eab308",
    image: "/fraud-detection.jpg",
  },
  {
    title: "LifeDrop Mobile App",
    period: "Jan 2026 – Present",
    shortDesc: "Blood donation management app with real-time booking and tracking.",
    fullDesc: "A full-stack mobile application built to streamline healthcare logistics.",
    highlights: [
      "Appointment booking system with real-time availability",
      "User authentication and profile management",
    ],
    tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    github: "https://github.com/sandarenuDT/life-drop",
    category: "Mobile App",
    color: "#ef4444",
    image: "/lifedrop.jpg",
  },
  {
    title: "ChainHeart — Blockchain System",
    period: "2025 – 2026",
    shortDesc: "Decentralized donation platform with transparent fund tracking.",
    fullDesc: "A blockchain solution built on Ethereum locking resources safely into smart contracts.",
    highlights: [
      "Smart contract-based fund management (Solidity)",
      "Donor voting system for withdrawal approval",
    ],
    tech: ["Solidity", "Ethereum", "React", "TypeScript", "Hardhat", "TailwindCSS"],
    github: "https://github.com/sandarenuDT/chain-heart",
    category: "Blockchain",
    color: "#C81CDE",
    image: "/chainheart.jpg",
  },
  {
    title: "Supply Chain IoT Tracker",
    period: "Jun 2025 – Dec 2025",
    shortDesc: "Cold chain IoT + Blockchain for tamper-proof shipment tracking.",
    fullDesc: "Full-stack asset ledger recording real-time Raspberry Pi sensor telemetry onto the Sepolia testnet.",
    highlights: [
      "Real-time IoT sensor data recorded on Sepolia blockchain via Infura",
      "QR code generation for per-asset tamper-proof audit trail",
    ],
    tech: ["React.js", "Express.js", "Sepolia", "Infura", "PostgreSQL", "IoT"],
    demo: "https://drive.google.com/file/d/1pk-aZdgKSfD6eSDlIDrI0uDH1jnOpyVz/view",
    category: "Blockchain / IoT",
    color: "#6366f1",
    image: "/supplychain.jpg",
  },
  {
    title: "International Bookfair Platform",
    period: "Oct 2025 – Dec 2025",
    shortDesc: "Microservices reservation platform with async messaging.",
    fullDesc: "Cloud-native transaction engine designed for heavy reservation request surges.",
    highlights: [
      "Microservices architecture with RabbitMQ async event bus",
      "Docker-containerized services, deployed on AWS EC2 + RDS",
    ],
    tech: ["Spring Boot", "Microservices", "RabbitMQ", "Docker", "AWS EC2", "Nginx"],
    category: "Cloud / Backend",
    color: "#0ea5e9",
    image: "/bookfair.jpg",
  },
   {
    title: "AI Research Agent (n8n)",
    period: "June 2026",
    shortDesc: "Autonomous RAG-based AI agent that orchestrates multi-source lookups and emails structured answers.",
    fullDesc: "An autonomous workflow agent built in n8n that answers complex questions by intelligently orchestrating lookups across an internal Google Sheets knowledge base, live web search via Tavily, and semantic vector search over PDF documents, delivering structured JSON outputs directly to users via Gmail.",
    highlights: [
      "Engineered an autonomous multi-source tool router utilizing Google Gemini for intelligent fallback logic (Knowledge Base → Web Search → Vector Store)",
      "Implemented Retrieval-Augmented Generation (RAG) using semantic embeddings for document interrogation alongside windowed conversational memory buffers",
      "Configured structured data outputs enforcing standard JSON schemas (answer, source, confidence) mapped to an automated Gmail delivery node"
    ],
    tech: ["n8n", "Google Gemini", "Tavily API", "Google Sheets API", "Gmail OAuth", "Vector Store", "RAG", "Docker"],
    github: "https://github.com/sandarenuDT/Research-Agent-n8n",
    category: "AI / Automation",
    color: "#ff6c37", // Matches the native n8n orange brand color
    image: "/n8n.png",
  },

];

// ── Separate card component so each has its own imgError state ──
function ProjectCard({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false); 

  return (
    <div className="group relative bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/15 transition-all duration-300 shadow-xl">

      {/* Image header */}
      <div className="relative w-full aspect-video bg-[#070e14] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03080c]/90 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 z-20 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#03080c]/80 border rounded-sm"
          style={{ color: project.color, borderColor: `${project.color}30` }}
        >
          {project.category}
        </span>

        {/* Image or fallback — never both visible */}
        <div className="w-full h-full relative opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out ">
          {imgError ? (
            // Fallback — only shown when image actually fails
            <div
              className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/10"
              style={{
                background: `linear-gradient(135deg, #0c1020, #03080c)`,
                borderTop: `1px solid ${project.color}20`,
              }}
            >
              <span style={{ color: project.color, opacity: 0.3 }}>
                [ {project.category} ]
              </span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-white/90 group-hover:text-[#00e5ff] transition-colors duration-200 uppercase tracking-wide truncate">
              {project.title}
            </h3>
            <span className="font-mono text-[9px] text-white/30 whitespace-nowrap">
              &apos;{project.period.slice(-4)}
            </span>
          </div>
          <p className="text-xs text-white/50 font-light line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>
           {/* Core Highlights Section */}
        <ul className="space-y-1 text-[11px] text-white/50 hidden md:block">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="line-clamp-1 flex items-start gap-1.5">
              <span style={{ color: project.color }} className="select-none">▪</span>
              {highlight}
            </li>
          ))}
        </ul>
        {/* Tech badges */}
<div className="flex flex-wrap items-center gap-1">
  {/* Show either the first 4 items, or the full array based on the tracking state */}
  {(expandedTech ? project.tech : project.tech.slice(0, 4)).map((techItem) => (
    <span
      key={techItem}
      className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-white/5 text-white/40 border border-white/5 transition-all duration-200"
    >
      {techItem}
    </span>
  ))}

  {/* Clickable counter toggle button */}
  {project.tech.length > 4 && (
    <button
      type="button"
      onClick={() => setExpandedTech(!expandedTech)}
      className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
      style={expandedTech ? { color: project.color, borderColor: `${project.color}30` } : {}}
    >
      {expandedTech ? "show less ▲" : `+${project.tech.length - 4} more ▼`}
    </button>
  )}
</div>



        {/* Tech badges */}
        {/* <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((techItem) => (
            <span
              key={techItem}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-white/5 text-white/40 border border-white/5"
            >
              {techItem}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[9px] font-mono px-1 text-white/20">
              +{project.tech.length - 4}
            </span>
          )}
        </div> */}

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              [ GitHub ]
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e5ff]/60 hover:text-[#00e5ff] transition-colors"
            >
              [ demo ]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main section ──
export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            setShowAll(!showAll);
            if (showAll) {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-6 py-3 bg-white/[0.02] border border-white/10 hover:border-[#00e5ff] hover:text-[#00e5ff] text-white/70 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm"
        >
          {showAll ? "[-] CONSOLIDATE_SYSTEM_REPOSITORY" : "[+] ACCESS_ALL_PRODUCTION_REPOS"}
        </button>
      </div>

    </div>
  );
}