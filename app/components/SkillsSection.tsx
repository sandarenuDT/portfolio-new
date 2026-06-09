"use client";

interface SkillCategory {
  categoryName: string;
  subTag: string;
  tags: string[];
}

const skillsData: SkillCategory[] = [
    {
    categoryName: "Programming Languages",
    subTag: "CORE_LANG",
    tags: ["Python", "TypeScript", "JavaScript", "C#", "Java"]
  },
  {
    categoryName: "Frontend & Mobile",
    subTag: "INTERFACE_LAYER",
    tags: ["React.js", "Next.js", "React Native", "Tailwind CSS"]
  },
  {
    categoryName: "Backend Development",
    subTag: "SERVER_ARCH",
    tags: ["Node.js", "Express.js", ".NET (C#)", "Spring Boot", "Laravel", "REST APIs", "Microservices"]
  },
  {
    categoryName: "AI / ML & GenAI",
    subTag: "INTELLIGENCE_LAYER",
    tags: ["RAG", "LangChain", "OpenAI API", "Prompt Engineering", "ChromaDB", "FAISS", "Pinecone", "Sentence Transformers", "LLMs", "NumPy"]
  },
  {
    categoryName: "Cloud & DevOps",
    subTag: "INFRASTRUCTURE",
    tags: ["AWS (EC2, EKS)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Git", "Terraform", "Jenkins"]
  },
  {
    categoryName: "Databases & ORMs",
    subTag: "DATA_STORAGE",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "EF Core", "Parquet"]
  },
  {
    categoryName: "Messaging & Streaming",
    subTag: "DATA_PIPELINE",
    tags: ["RabbitMQ", "Kafka", "Spark", "Airflow"]
  },
  {
    categoryName: "Security & Auth",
    subTag: "ACCESS_CONTROL",
    tags: ["JWT", "NextAuth", "OAuth2", "RBAC", "Cybersecurity"]
  },
  {
    categoryName: "Tools & Platforms",
    subTag: "SYSTEM_UTILITIES",
    tags: ["Linux", "Jira", "Blockchain", "Agile/Scrum"]
  },
  {
    categoryName: "Soft Skills",
    subTag: "HUMAN_LOGIC",
    tags: ["Problem Solving", "Leadership", "Adaptability", "Critical Thinking"]
  }
];

export default function SkillsSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {skillsData.map((skillGroup) => (
        <div key={skillGroup.categoryName} className="group/item space-y-3">
          
          {/* Category Header System */}
          <div>
            <span className="font-mono text-[10px] text-[#00e5ff]/50 tracking-widest block -mb-0.5">
               {skillGroup.subTag}
            </span>
            <h3 className="text-base font-bold text-white/95 group-hover/item:text-[#00e5ff] transition-colors duration-200 uppercase tracking-wide">
              {skillGroup.categoryName}
            </h3>
          </div>

          {/* Chips Grid Wrapper */}
          <div className="flex flex-wrap gap-2">
            {skillGroup.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-white/60 hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 hover:border-[#00e5ff]/30 transition-all duration-200 cursor-default select-none"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
