"use client";
import Image from "next/image";

export default function AboutSection() {
  const coreCompetencies = [
    { label: "FULL-STACK", details: "TypeScript // Node.js // Next.js // PostgreSQL" },
    { label: "CLOUD & INFRA", details: "AWS Ecosystem // Docker // Kubernetes // DevOps" },
    { label: "GEN-AI COGNITION", details: "LLM Orchestration // RAG Pipelines // LangChain" }
  ];

  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* ── LEFT CELL: Compact Profile Badge (4 Cols) ── */}
      <div className="lg:col-span-4 w-full max-w-[240px] mx-auto lg:mx-0">
        <div className="relative w-full aspect-square bg-white/[0.02] border border-white/5 p-2 rounded-sm group overflow-hidden">
          {/* Cyberpunk Tech Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00e5ff]" />
          
          <div className="relative w-full h-full overflow-hidden bg-[#03080c] rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-[#03080c] via-transparent to-transparent z-10" />
            <Image
              src="/Image.png"
              alt="Tharuka S. Portrait"
              fill
              className="object-contain opacity-70 filter grayscale brightness-95 contrast-125 group-hover:opacity-100 group-hover:filter-none transition-all duration-300 mix-blend-screen"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── RIGHT CELL: High-Conversion Pitch (8 Cols) ── */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Value Pitch */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-[#00e5ff] tracking-widest block uppercase">DEPLOYMENT_READY</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
            Computer Engineer specializing in High-Scale Web, Infrastructure, and AI.
          </h3>
        </div>

        {/* Condensed Executive Summary */}
        <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
          Computer Engineering honors graduate from the <span className="text-white font-medium">University of Ruhuna</span>. Proven execution tracking across production environments—building secure distributed microservices, cloud-native deployments, and custom generative AI systems.
        </p>

        {/* Scaled Scannable Stack Rows */}
        <div className="border-t border-white/5 pt-4 space-y-2.5 max-w-xl">
          {coreCompetencies.map((comp) => (
            <div key={comp.label} className="flex items-center text-xs">
              <span className="font-mono text-[10px] text-[#00e5ff]/60 w-32 shrink-0 tracking-wider uppercase">
                {comp.label} ➔
              </span>
              <span className="font-mono text-white/80 tracking-wide">
                {comp.details}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
