
"use client";
import Image from "next/image";

interface MenuItem {
  id: string;
  label: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  onToggleSound: () => void;
  soundEnabled: boolean | null;
}

export default function Navbar({ menuItems, onToggleSound, soundEnabled }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-[#03080c]/80 border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/sticker.png"
          alt="Profile Logo"
          width={35}
          height={35}
          className="rounded-full border border-[#00e5ff]/40"
        />
        <div>
          <span className="font-bold text-xs block tracking-wider uppercase text-white">Tharuka S.</span>
          <span className="text-[9px] font-mono tracking-widest text-[#00e5ff] uppercase block -mt-0.5">DEV // ARCH</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-[#00e5ff] transition-all duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={onToggleSound}
        className="bg-white/5 hover:bg-white/10 text-xs p-2 rounded-md border border-white/15 transition-all"
      >
        {soundEnabled ? "🔊" : "🔇"}
      </button>
    </header>
  );
}
