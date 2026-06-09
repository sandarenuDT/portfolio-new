"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
      <div className="md:col-span-1 flex justify-start">
        <div className="relative w-44 h-56 md:w-full md:h-64 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#03080c] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03080c]/20 via-transparent to-[#03080c]/20 z-10 pointer-events-none" />
          <Image
            src="/sticker.png"
            alt="Tharuka Sandarenu Portrait"
            width={300}
            height={400}
            className="w-full h-full object-contain opacity-60 filter grayscale brightness-90 contrast-125 group-hover:opacity-90 group-hover:filter-none transition-all duration-500 ease-out mix-blend-screen"
          />
        </div>
      </div>

      <div className="md:col-span-3 space-y-4">
        <span className="font-mono text-xs text-[#00e5ff]/60 block mb-1">SYSTEM // PROFILE</span>
        <p className="text-sm text-white/70 font-light leading-relaxed max-w-2xl">
          I am Tharuka Sandarenu, a passionate Software Engineer dedicated to crafting robust software and architecture. I thrive on developing complex digital applications from structural design directly down to clean user workflows.
        </p>
        <p className="text-sm text-white/50 font-light leading-relaxed max-w-2xl">
          Focused on scalability and modern design standards, I bridge software performance goals with responsive front-end elements to ensure reliable production solutions.
        </p>
      </div>
    </div>
  );
}
