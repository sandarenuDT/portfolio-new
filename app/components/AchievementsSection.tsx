"use client";

interface AchievementItem {
  title: string;
  context: string;
  period: string;
  description: string;
  tag: string;
}

const achievementsData: AchievementItem[] = [
  {
    title: "Final Year Project Demonstrator",
    context: "Rextro Exhibition 2025",
    period: "2025",
    description: "Selected to present a blockchain-based supply chain infrastructure system directly to academic staff, university faculty, and visiting industry professionals.",
    tag: "EXHIBITION_DEMO"
  },
  {
    title: "Red Cyber Cybersecurity Competition",
    context: "National Security Hackathon",
    period: "2024 — 2025",
    description: "Participated and competed in intensive real-world security challenges focused on live vulnerability analysis, network architecture mapping, and penetration testing methodologies.",
    tag: "CTF_COMPETITION"
  },
  {
    title: "Interfaculty Dancing Competition",
    context: "University Cultural Arts",
    period: "2024",
    description: "Competed at the university level, showcasing cross-functional collaboration, team alignment, creative choreography, and strong performance delivery under pressure outside of standard technical development tasks.",
    tag: "EXTRA_CURRICULAR"
  }
];

export default function AchievementsSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-12">
      {achievementsData.map((achieve, index) => (
        <div key={achieve.title} className="group relative transition-all duration-300">
          
          {/* Index Counter Node */}
          <span className="font-mono text-xs text-[#00e5ff]/60 block mb-1">
            0{index + 1}  {achieve.tag}
          </span>

          {/* Title and Timeline Row */}
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="text-xl font-bold text-white/90 group-hover:text-[#00e5ff] transition-colors duration-200">
              {achieve.title}
              <span className="text-xs font-light text-white/40 block md:inline md:ml-2 font-mono">
                 {achieve.context.toUpperCase()}
              </span>
            </h3>
            <span className="font-mono text-xs text-white/40 tracking-wider">
              {achieve.period}
            </span>
          </div>

          {/* Achievement Description Paragraph Block */}
          <p className="text-sm text-white/60 font-light mt-3 max-w-3xl leading-relaxed">
            {achieve.description}
          </p>

        </div>
      ))}
    </div>
  );
}
