"use client";

import Image from "next/image";
import { Terminal, BrainCircuit, Cloud } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* LEFT - BIGGER IMAGE CONTAINER WITH NO BORDERS */}
      <div className="lg:col-span-5 w-full max-w-[320px] md:max-w-[400px] mx-auto lg:mx-0">
        <div className="relative w-full aspect-square group overflow-hidden">
          
          {/* Multi-directional gradient mask to blend edges smoothly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03080c] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03080c]/10 via-transparent to-[#03080c]/10 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03080c]/20 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Rendered Image Asset */}
          <Image
            src="/Image.png"
            alt="Tharuka"
            fill
            className="object-cover opacity-70 grayscale brightness-95 contrast-125 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7 space-y-6">

        <div>
          <span className="font-mono text-[10px] text-[#00e5ff] tracking-widest uppercase">
            SOFTWARE • AI • CLOUD
          </span>

          <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
            Computer Engineer Building Scalable Software & Intelligent Systems
          </h3>
        </div>

        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
          Computer Engineering graduate from the University of Ruhuna.
          Passionate about full-stack development, AI-powered applications,
          and modern cloud-native technologies.
        </p>

        {/* Skills Cards - Redesigned into 3 Clean Columns/Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">

          {/* 1. FULL-STACK DEVELOPMENT */}
          <div className="group border border-cyan-500/20 bg-cyan-500/[0.03] rounded-xl p-4 hover:border-cyan-400/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <h4 className="text-cyan-300 font-semibold text-xs tracking-wider uppercase">
                  Full-Stack
                </h4>
              </div>
              <p className="text-[11px] text-white/40 mb-3 leading-normal">
                Architecture, APIs, databases, and responsive layouts.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <Skill color="cyan" text="React" />
              <Skill color="cyan" text="Next.js" />
              <Skill color="cyan" text="Node.js" />
              <Skill color="cyan" text=".NET" />
              <Skill color="cyan" text="Postgres" />
              <Skill color="cyan" text="MongoDB" />
            </div>
          </div>

          {/* 2. MERGED: AI / ML & GENERATIVE AI */}
          <div className="group border border-purple-500/20 bg-purple-500/[0.03] rounded-xl p-4 hover:border-purple-400/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="h-4 w-4 text-purple-400" />
                <h4 className="text-purple-300 font-semibold text-xs tracking-wider uppercase">
                  AI & GenAI
                </h4>
              </div>
              <p className="text-[11px] text-white/40 mb-3 leading-normal">
                Neural networks, RAG pipelines, and LLM fine-tuning.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <Skill color="purple" text="Python" />
              <Skill color="purple" text="PyTorch" />
              <Skill color="purple" text="LLMs" />
              <Skill color="purple" text="RAG" />
              <Skill color="purple" text="LangChain" />
            </div>
          </div>

          {/* 3. CLOUD SYSTEMS */}
          <div className="group border border-orange-500/20 bg-orange-500/[0.03] rounded-xl p-4 hover:border-orange-400/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="h-4 w-4 text-orange-400" />
                <h4 className="text-orange-300 font-semibold text-xs tracking-wider uppercase">
                  Cloud / DevOps Fundamentals
                </h4>
              </div>
              <p className="text-[11px] text-white/40 mb-3 leading-normal">
                Containerization, orchestrators, and automated infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              <Skill color="orange" text="Docker" />
              <Skill color="orange" text="K8s" />
              <Skill color="orange" text="AWS" />
              <Skill color="orange" text="CI/CD" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

interface SkillProps {
  text: string;
  color: 'cyan' | 'purple' | 'orange';
}

function Skill({ text, color }: SkillProps) {
  const colors = {
    cyan: "border-cyan-500/20 text-cyan-300",
    purple: "border-purple-500/20 text-purple-300",
    orange: "border-orange-500/20 text-orange-300",
  };

  return (
    <span
      className={`px-2 py-0.5 text-[10px] font-mono rounded-md border bg-white/[0.02] ${colors[color]}`}
    >
      {text}
    </span>
  );
}
