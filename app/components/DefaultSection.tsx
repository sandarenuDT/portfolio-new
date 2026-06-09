"use client";

interface DefaultSectionProps {
  label: string;
}

export default function DefaultSection({ label }: DefaultSectionProps) {
  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 space-y-8">
      <div className="group relative">
        <span className="font-mono text-xs text-[#00e5ff]/60 block mb-1">01 // FEATURED</span>
        <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-[#00e5ff] transition-colors duration-200">
          Example Subheading Title Click
        </h3>
        <span className="font-mono text-[10px] text-white/30 tracking-widest block mb-3 uppercase">
          September 2025 — December 2025
        </span>
        <p className="text-sm text-white/60 font-light max-w-2xl leading-relaxed">
          Formulated custom architectural strategies to optimize loading pipelines. 
          Integrated highly reliable data simulations across client layers.
        </p>
      </div>
    </div>
  );
}
