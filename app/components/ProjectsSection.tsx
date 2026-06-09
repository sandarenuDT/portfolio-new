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
    fullDesc: "A full-stack production-grade restaurant operating system designed to replace traditional paper-based workflows. Features include table-top QR scanning, real-time WebSocket communication via Socket.io, JWT-based RBAC, and Prisma/PostgreSQL.",
    highlights: [
      "Built a multi-role system (customer, waiter, kitchen, admin) with real-time order tracking using Socket.io",
      "Implemented QR code-based table ordering accessible via mobile browsers without app installation",
    ],
    tech: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "React", "Socket.io"],
    github: "https://github.com",
    category: "Full-Stack Web",
    color: "#22c55e",
    image: "/projects/restaurant.jpg",
  },
  {
    title: "URL Shortener Microservices",
    period: "Apr 2026",
    shortDesc: "Production-grade URL shortener built with microservices and Kubernetes deployment.",
    fullDesc: "A highly scalable URL shortener platform developed using a microservices architecture in .NET 8. Features include high-speed URL redirection with Redis caching, asynchronous processing with RabbitMQ, and AWS EKS cloud deployment.",
    highlights: [
      "Built microservices-based backend architecture using ASP.NET Core",
      "Integrated Redis caching for high-performance URL redirects",
    ],
    tech: [".NET 8", "ASP.NET Core", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com",
    category: "Cloud / Infra",
    color: "#3b82f6",
    image: "/projects/shortener.jpg",
  },
   {
    title: "FinTech Fraud Detection Pipeline",
    period: "March 2026",
    shortDesc: "Real-time transaction streaming architecture using Kafka and Apache Spark.",
    fullDesc: "A real-time fraud detection infrastructure that streams financial transactions through Apache Kafka into Spark Structured Streaming. The system instantly flags high-risk anomalies such as 'impossible travel speed' and high-value transactions. Fraud alerts write directly to PostgreSQL for instant operational querying, while clean records sync to Apache Parquet format. An automated Apache Airflow DAG handles reconciliation reports every 6 hours.",
    highlights: [
      "Built real-time streaming pipeline processing transaction payloads instantly using Apache Kafka",
      "Programmed advanced analytical detection algorithms for fraud categorization in Spark Structured Streaming",
      "Designed automatic task orchestration workflows for system reports using Apache Airflow DAG engines",
      "Containerized complete storage layers and streaming nodes safely using Docker Compose environments"
    ],
    tech: ["Kafka", "Apache Spark", "Airflow", "PostgreSQL", "Parquet", "Python", "Docker Compose"],
    github: "https://github.com",
    category: "Data Engineering",
    color: "#eab308", // Golden/Yellow accent for high throughput pipelines
    image: "/projects/fraud-detection.jpg"
  },
  {
    title: "PDF RAG Chatbot Suite",
    period: "May 2026",
    shortDesc: "Semantic document retrieval system built with ChromaDB and open-source LLMs.",
    fullDesc: "A robust Retrieval-Augmented Generation (RAG) conversational interface built to handle localized contextual document interrogation. The application extracts textual nodes using PyMuPDF, maps them via overlapping chunking algorithms, generates embeddings with sentence-transformers, and runs semantic vector matching queries across ChromaDB. Generative evaluation paths stream from open-source LLM instances using the OpenRouter API runtime boundary.",
    highlights: [
      "Engineered vector retrieval patterns utilizing all-MiniLM-L6-v2 deep sentence embeddings",
      "Configured storage mechanics using a standalone embedded ChromaDB vector repository",
      "Deployed dual interface layers running across responsive Terminal logs and Streamlit layouts",
      "Integrated secure open-source language models efficiently using unified OpenRouter API layers"
    ],
    tech: ["Python", "ChromaDB", "Sentence-Transformers", "Streamlit", "OpenRouter API", "NumPy", "PyMuPDF"],
    github: "https://github.com",
    category: "AI / GenAI",
    color: "#a855f7", // Purple accent for deep learning / GenAI vectors
    image: "/projects/rag-chatbot.jpg"
  },
  {
    title: "LifeDrop Mobile App",
    period: "Jan 2026 – Present",
    shortDesc: "Blood donation management app with real-time booking and tracking.",
    fullDesc: "A full-stack mobile application built to streamline healthcare logistics. Integrates React Native with an Express.js API, handling secure authentication and precise appointment scheduling metrics.",
    highlights: [
      "Appointment booking system with real-time availability",
      "User authentication and profile management",
    ],
    tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    github: "https://github.com/life-drop",
    category: "Mobile App",
    color: "#ef4444",
    image: "/projects/lifedrop.jpg",
  },
  {
    title: "ChainHeart — Blockchain System",
    period: "2025 – 2026",
    shortDesc: "Decentralized donation platform with transparent fund tracking.",
    fullDesc: "A blockchain solution built on Ethereum locking resources safely into smart contracts. Leverages donor governance workflows to avoid malicious exploitation channels completely.",
    highlights: [
      "Smart contract-based fund management (Solidity)",
      "Donor voting system for withdrawal approval",
    ],
    tech: ["Solidity", "Ethereum", "React", "TypeScript", "Hardhat", "TailwindCSS"],
    github: "https://github.com/chain-heart",
    category: "Blockchain",
    color: "#C81CDE",
    image: "/projects/chainheart.jpg",
  },
  {
    title: "Supply Chain IoT Tracker",
    period: "Jun 2025 – Dec 2025",
    shortDesc: "Cold chain IoT + Blockchain for tamper-proof shipment tracking.",
    fullDesc: "Full-stack asset ledger recording real-time Raspberry Pi sensor telemetry (temperature, humidity) straight onto the Sepolia testnet via Infura gateways.",
    highlights: [
      "Real-time IoT sensor data recorded on Sepolia blockchain via Infura",
      "QR code generation for per-asset tamper-proof audit trail",
    ],
    tech: ["React.js", "Express.js", "Sepolia", "Infura", "PostgreSQL", "IoT"],
    demo: "https://google.com",
    category: "Blockchain / IoT",
    color: "#6366f1",
    image: "/projects/supplychain.jpg",
  },
  {
    title: "International Bookfair Platform",
    period: "Oct 2025 – Dec 2025",
    shortDesc: "Microservices reservation platform with async messaging.",
    fullDesc: "Cloud-native transaction engine designed for heavy reservation request surges. Runs Docker instances behind Nginx reverse proxies with multi-tier database configurations.",
    highlights: [
      "Microservices architecture with RabbitMQ async event bus",
      "Docker-containerized services, deployed on AWS EC2 + RDS",
    ],
    tech: ["Spring Boot", "Microservices", "RabbitMQ", "Docker", "AWS EC2", "Nginx"],
    category: "Cloud / Backend",
    color: "#0ea5e9",
    image: "/projects/bookfair.jpg",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-10">

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.title}
            className="group relative bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/15 transition-all duration-300 shadow-xl"
          >
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

              {/* Project image */}
              <div className="w-full h-full relative opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out grayscale group-hover:grayscale-0">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c1020] to-[#03080c] flex items-center justify-center font-mono text-[10px] text-white/10">
                  [ RUNTIME_VISUAL_RENDER ]
                </div>
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

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1">
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
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    [ code ]
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
        ))}
      </div>

      {/* Show more / less toggle */}
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