"use client";
import { useState } from "react";

// Structure definition matching your input data schema
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
}

const projectsData: ProjectItem[] = [
  {
    title: "Restaurant Management System",
    period: "2026",
    shortDesc: "Real-time QR-based restaurant ordering and management platform.",
    fullDesc: "A full-stack production-grade restaurant operating system designed to replace traditional paper-based workflows. The platform enables customers to scan a QR code at the table, browse a digital menu, place orders, and track them in real time without installing any app. The system includes four role-based interfaces: customer, waiter, kitchen display, and admin dashboard. Built with a React frontend and a Node.js/Express backend, it uses WebSocket communication for instant order updates across all clients.",
    highlights: [
      "Built a multi-role system (customer, waiter, kitchen, admin) with real-time order tracking using Socket.io",
      "Implemented QR code-based table ordering accessible via mobile browsers without app installation",
      "Designed a PostgreSQL database with Prisma ORM covering orders, billing, staff, and session management",
      "Developed JWT authentication with role-based access control and refresh token rotation"
    ],
    tech: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "React", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    category: "Full-Stack Web Application",
    color: "#22c55e"
  },
  {
    title: "URL Shortener Microservices",
    period: "Apr 2026",
    shortDesc: "Production-grade URL shortener built with microservices and Kubernetes deployment.",
    fullDesc: "A scalable URL shortener platform developed using a microservices architecture in .NET 8. The system supports secure JWT authentication, high-speed URL redirection with Redis caching, asynchronous event processing using RabbitMQ, and cloud-native deployment on AWS EKS with Docker and Kubernetes.",
    highlights: [
      "Built microservices-based backend architecture using ASP.NET Core",
      "Integrated Redis caching for high-performance URL redirects",
      "Used RabbitMQ for asynchronous message processing",
      "Deployed containerized services on AWS EKS with Kubernetes"
    ],
    tech: [".NET 8", "ASP.NET Core", "PostgreSQL", "EF Core", "Redis", "RabbitMQ", "Docker", "Kubernetes", "AWS", "GitHub Actions"],
    github: "https://github.com/your-github-link",
    category: "Microservices Platform",
    color: "#3b82f6"
  },
  {
    title: "LifeDrop Mobile App",
    period: "Jan 2026 – Present",
    shortDesc: "Blood donation management app with real-time booking and tracking.",
    fullDesc: "A full-stack mobile application designed to streamline blood donation processes by enabling users to book appointments, track donation history, and receive real-time updates. Built with a modern React Native frontend and backed by a Node.js/Express API.",
    highlights: [
      "Appointment booking system with real-time availability",
      "User authentication and profile management",
      "Donation history tracking and notifications",
      "RESTful API integration with Express.js backend"
    ],
    tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    github: "https://github.com/sandarenuDT/life-drop",
    category: "Mobile Application",
    color: "#ef4444"
  },
  {
    title: "ChainHeart — Blockchain Donor Tracking System",
    period: "2025 – 2026",
    shortDesc: "Decentralized donation platform with transparent fund tracking and donor governance.",
    fullDesc: "A blockchain-based donation platform built on Ethereum that ensures full transparency and eliminates fraud by locking funds in smart contracts. Donors participate in governance by voting on withdrawal requests, making every transaction secure, verifiable, and trustless.",
    highlights: [
      "Smart contract-based fund management (Solidity)",
      "Donor voting system for withdrawal approval",
      "Fully transparent transactions on blockchain (Etherscan)",
      "MetaMask wallet integration for authentication"
    ],
    tech: ["Solidity", "Ethereum", "React", "TypeScript", "Hardhat", "TailwindCSS", "ethers.js"],
    github: "https://github.com/sandarenuDT/chain-heart",
    category: "Blockchain Application",
    color: "#C81CDE"
  },
  {
    title: "Blockchain-Based Supply Chain Tracker",
    period: "Jun 2025 – Dec 2025",
    shortDesc: "Cold chain IoT + Blockchain for tamper-proof shipment tracking.",
    fullDesc: "A full-stack blockchain-based cold supply chain management system that leverages Raspberry Pi sensors to capture real-time environmental data (temperature, humidity, location) and writes it immutably onto the Sepolia testnet via Infura.",
    highlights: [
      "Real-time IoT sensor data recorded on Sepolia blockchain via Infura",
      "QR code generation for per-asset tamper-proof audit trail",
      "Web + mobile frontend with live shipment status dashboard"
    ],
    tech: ["React.js", "Express.js", "Sepolia Blockchain", "Infura", "PostgreSQL", "IoT", "Raspberry Pi"],
    demo: "https://drive.google.com/file/d/1pk-aZdgKSfD6eSDlIDrI0uDH1jnOpyVz/view",
    category: "Blockchain / IoT",
    color: "#6366f1"
  },
  {
    title: "Colombo International Bookfair Reservation System",
    period: "Oct 2025 – Dec 2025",
    shortDesc: "Microservices reservation platform with async messaging.",
    fullDesc: "A cloud-native microservices reservation system designed for large-scale event management. Contributed as a backend engineer implementing RESTful APIs, complex business logic for seat/stall allocation, and inter-service communication via RabbitMQ.",
    highlights: [
      "Microservices architecture with RabbitMQ async event bus",
      "Docker-containerized services, deployed on AWS EC2 + RDS",
      "Nginx reverse proxy with load balancing"
    ],
    tech: ["Spring Boot", "Microservices", "RabbitMQ", "Docker", "AWS EC2", "AWS RDS", "Nginx"],
    category: "Cloud / Backend",
    color: "#0ea5e9"
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-12">
      {projectsData.map((project, index) => {
        const isExpanded = expandedProject === project.title;

        return (
          <div key={project.title} className="group relative transition-all duration-300">
            {/* Index Tracker */}
            <span className="font-mono text-xs block mb-1" style={{ color: project.color }}>
              0{index + 1} {project.category.toUpperCase()}
            </span>

            {/* Title Line with Dynamic Indicator Color */}
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-200">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-white/40 tracking-wider">
                {project.period}
              </span>
            </div>

            {/* Project Quick Meta Content */}
            <p className="text-sm text-white/60 font-light mt-3 max-w-3xl leading-relaxed">
              {project.shortDesc}
            </p>

            {/* Interactive Accordion for Detailed Info */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
              <div className="pt-2 pb-4 border-t border-white/5 space-y-4">
                <p className="text-xs text-white/50 leading-relaxed font-light bg-white/[0.01] p-3 rounded border border-white/5">
                  {project.fullDesc}
                </p>

                {/* Subheading Bullet Highlights */}
                <div>
                  <h4 className="text-xs font-mono tracking-wider text-white/70 mb-2 uppercase">
                  Key Architectural Deliverables:</h4>
                  <ul className="list-none space-y-1.5 pl-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-white/60 font-light flex items-start gap-2">
                        <span className="text-[10px] mt-0.5" style={{ color: project.color }}>■</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Chips Tag Row */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/70"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                className="text-[11px] font-mono uppercase tracking-widest text-[#00e5ff] hover:underline"
              >
                {isExpanded ? "[-] Hide Parameters" : "[+] Read Full System Spec"}
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors"
                >
                  ▸ GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors"
                >
                  ▸ Demo
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
