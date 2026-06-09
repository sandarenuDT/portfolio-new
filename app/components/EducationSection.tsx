"use client";

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details?: string;
  highlights?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "University of Ruhuna",
    location: "Sri Lanka",
    degree: "B.Sc. (Hons) Computer Engineering",
    period: "Mar 2021 — Dec 2025",
    details: "Department of Electrical and Information Engineering",
    highlights: ["Specialized in scalable software systems, cloud-native backend routing structures, and integrated hardware-level computing pipelines."]
  },
  {
    institution: "Ch/Ananda National College",
    location: "Sri Lanka",
    degree: "GCE Advanced Level",
    period: "2015 — 2019",
    details: "Mathematics Stream",
    highlights: ["Achieved exceptional standing with an official District Rank: 13."]
  }
];

export default function EducationSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-12">
      {educationData.map((edu, index) => (
        <div key={edu.degree} className="group relative transition-all duration-300">
          
          {/* Index Counter Log */}
          <span className="font-mono text-xs text-[#00e5ff]/60 block mb-1">
            0{index + 1} ACADEMIC_RECORD
          </span>

          {/* Institution & Period Timeline Row */}
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="text-xl font-bold text-white/90 group-hover:text-[#00e5ff] transition-colors duration-200">
              {edu.institution}
              <span className="text-xs font-light text-white/40 block md:inline md:ml-2 font-mono">
                {edu.location.toUpperCase()}
              </span>
            </h3>
            <span className="font-mono text-xs text-white/40 tracking-wider">
              {edu.period}
            </span>
          </div>

          {/* Degree Title Heading */}
          <h4 className="text-sm font-medium text-white/80 mt-1 uppercase tracking-wide">
            {edu.degree}
          </h4>

          {/* Department Branch / Stream Parameters */}
          {edu.details && (
            <span className="font-mono text-[11px] text-white/50 tracking-wide block mt-1.5 lowercase">
              ↳ {edu.details}
            </span>
          )}

          {/* Additional Core Deliverables or Honors Notes */}
          {edu.highlights && (
            <ul className="list-none space-y-1.5 pl-2 mt-4">
              {edu.highlights.map((highlight, i) => (
                <li key={i} className="text-xs text-white/60 font-light flex items-start gap-2 max-w-2xl leading-relaxed">
                  <span className="text-[#00e5ff] text-[10px] mt-0.5">■</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}
