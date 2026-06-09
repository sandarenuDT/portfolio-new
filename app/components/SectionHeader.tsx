"use client";

interface SectionHeaderProps {
  label: string;
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="relative mb-12 select-none">
      <span className="absolute -top-6 left-0 text-5xl md:text-6xl font-extrabold tracking-wide text-white/[0.03] uppercase block">
        {label}
      </span>
      <h2 className="relative text-2xl md:text-3xl font-bold tracking-wider text-[#00e5ff] uppercase">
        {label}
      </h2>
    </div>
  );
}
