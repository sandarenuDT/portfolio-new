"use client";

interface ExperienceItem {
  role: string;
  type: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    type: "Internship",
    company: "PayMedia (Pvt) Ltd",
    period: "Aug 2024 — Mar 2025",
    location: "On-site // Sri Lanka",
    bullets: [
      "Shipped features and bug fixes for Dhiraagu Pay, a live fintech product, across development, QA, and production environments using Laravel, Livewire, and React.",
      "Developed a maker-checker approval system utilizing Laravel role-based guards to prevent unauthorized financial transactions.",
      "Configured asynchronous data exports with Laravel Queues and Redis, eliminating UI blocking and enabling automatic email notifications upon completion.",
      "Delivered a comprehensive Next.js admin portal featuring NextAuth, JWT authentication, TanStack Table, Recharts, and PostgreSQL via Prisma ORM, deployed on Vercel."
    ],
    technologies: ["Laravel", "Livewire", "React", "Next.js", "NextAuth", "JWT", "PostgreSQL", "Prisma ORM", "Redis"]
  }
];

export default function ExperienceSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-12">
      {experienceData.map((exp) => (
        <div key={`${exp.company}-${exp.role}`} className="group relative transition-all duration-300">
          
          {/* Timeline Node Header Tag */}
          <span className="font-mono text-xs text-[#00e5ff]/60 block mb-1">
            DEPLOYMENT // {exp.type.toUpperCase()}
          </span>

          {/* Role and Duration Row */}
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="text-xl font-bold text-white/90 group-hover:text-[#00e5ff] transition-colors duration-200">
              {exp.role} 
              <span className="text-xs font-light text-white/40 block md:inline md:ml-2 font-mono">
                @ {exp.company}
              </span>
            </h3>
            <span className="font-mono text-xs text-white/40 tracking-wider">
              {exp.period}
            </span>
          </div>

          {/* Location Parameter */}
          <span className="font-mono text-[10px] text-white/30 tracking-widest block mt-1 uppercase">
            {exp.location}
          </span>

          {/* Core Technical Deliverables List */}
          <ul className="list-none space-y-3 pl-2 mt-4">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="text-xs text-white/60 font-light flex items-start gap-2 max-w-3xl leading-relaxed">
                <span className="text-[#00e5ff] text-[10px] mt-0.5">■</span>
                {bullet}
              </li>
            ))}
          </ul>

          {/* Technologies Stack Sub-Row */}
          <div className="flex flex-wrap gap-1.5 pt-4">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
