"use client";

interface SplashScreenProps {
  onEnter: () => void;
  onToggleSound: () => void;
  soundEnabled: boolean | null;
}

export default function SplashScreen({ onEnter, onToggleSound, soundEnabled }: SplashScreenProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #280544, #01080c, #342c47, #470234, #031a35)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <div className="w-10 h-0.5 bg-[#C9A96E] mb-8" />
        <p className="text-xs font-light tracking-[0.18em] text-[#C9A96E] uppercase mb-5">
          Portfolio
        </p>
        <h1
          className="font-bold text-[#F5F2EC] mb-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            letterSpacing: "-0.02em",
          }}
        >
          Tharuka Sandarenu
        </h1>
        <p className="font-light text-[#7A7A8A] mb-6 tracking-widest text-sm">
          Software Engineer
        </p>
        <div className="w-px h-7 bg-[#2A2A3A] mb-6" />
        <p className="font-light text-[#9A9AAA] leading-relaxed max-w-sm mb-10 text-sm">
          Crafting <span className="text-[#C9A96E]">reliable software</span> and thoughtful digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button
            onClick={onEnter}
            className="px-9 py-3 border border-[#3A3A4A] text-[#F5F2EC] text-xs tracking-[0.1em] uppercase font-medium hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-200"
          >
            → Enter
          </button>
          <button
            onClick={onToggleSound}
            className={`px-6 py-3 border text-xs tracking-[0.1em] uppercase font-medium transition-colors duration-200 ${
              soundEnabled ? "border-[#00e5ff] text-[#00e5ff]" : "border-white/20 text-white/50"
            }`}
          >
            {soundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF"}
          </button>
        </div>
      </div>
    </div>
  );
}
