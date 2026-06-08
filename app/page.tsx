"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const controls = useAnimation();


  useEffect(() => {
    audioRef.current = new Audio("/bg-music.mp3");
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const handleSoundOn = async () => {
    try {
      await audioRef.current?.play();
    } catch (err) {
      console.log(err);
    }

    setSoundEnabled(true);
  };

  const handleSoundOff = () => {
    setSoundEnabled(false);
  };

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundEnabled) {
      audio.pause();
      setSoundEnabled(false);
    } else {
      audio.play().then(() => setSoundEnabled(true)).catch(console.log);
    }
  };

  if (soundEnabled === null) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-50"
        style={{
          background: "linear-gradient(-45deg, #280544, #01080c, #342c47, #470234, #031a35)",
        }}
      >
        {/* Hidden audio tag — preload nothing until user clicks */}
        {/* <audio ref={audioRef} loop preload="none">
          <source src="/bg-music.mp3" type="audio/mpeg" />
        </audio> */}

        <h1 className="text-4xl font-bold text-pink-400 mb-8">✨ Welcome ✨</h1>
        <p className="text-xl text-gray-300 mb-10">Enable background music?</p>
        <div className="flex gap-6">
          <button
            onClick={handleSoundOn}
            className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg"
          >
            🔊 Sound ON
          </button>
          <button
            onClick={handleSoundOff}
            className="px-8 py-3 bg-white/20 text-white rounded-full text-lg font-semibold hover:bg-white/30 transition shadow-lg"
          >
            🔇 Sound OFF
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="animated-bg relative w-screen h-screen overflow-hidden flex items-center justify-center">

      {/* Audio lives here after navigation */}
      <audio ref={audioRef} loop preload="none">
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={handleToggle}
        className="fixed top-5 right-5 z-50 bg-white/20 backdrop-blur px-4 py-2 rounded-full shadow text-xl hover:bg-white/40 transition"
      >
        {soundEnabled ? "🔊" : "🔇"}
      </button>

      {/* <div className="relative z-10 flex items-center justify-center w-[420px] h-[420px]">
        <Link href="/about"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white/10 backdrop-blur border border-white/30 px-6 py-2 rounded-full text-white font-bold hover:bg-white/30 transition text-sm tracking-widest shadow"
        >
          About
        </Link>
        <Link href="/experience"
          className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-6 bg-white/10 backdrop-blur border border-white/30 px-6 py-2 rounded-full text-white font-bold hover:bg-white/30 transition text-sm tracking-widest shadow"
        >
          Experience
        </Link>
        <Link href="/projects"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 bg-white/10 backdrop-blur border border-white/30 px-6 py-2 rounded-full text-white font-bold hover:bg-white/30 transition text-sm tracking-widest shadow"
        >
          Projects
        </Link>
        <Link href="/services"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 bg-white/10 backdrop-blur border border-white/30 px-6 py-2 rounded-full text-white font-bold hover:bg-white/30 transition text-sm tracking-widest shadow"
        >
          Services
        </Link>
        <Image
            src="/sticker.png"
            alt="Cool Girl Sticker"
            width={220}
            height={220}
            className="drop-shadow-2xl"
            priority
          />
      </div> */}
      <div className="relative w-[500px] h-[500px]">

        {/* Center Image */}
        <Image
          src="/sticker.png"
          alt="Profile"
          width={250}
          height={250}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Top */}
        <Link href="/about"
          className="absolute top-0 left-1/2 -translate-x-1/2">
          About
        </Link>

        {/* Top Left */}
        <Link href="/experience"
          className="absolute top-[20%] left-[10%]">
          Experience
        </Link>

        {/* Top Right */}
        <Link href="/skills"
          className="absolute top-[20%] right-[10%]">
          Skills
        </Link>

        {/* Middle Left */}
        <Link href="/projects"
          className="absolute top-1/2 left-0 -translate-y-1/2">
          Projects
        </Link>

        {/* Middle Right */}
        <Link href="/contact"
          className="absolute top-1/2 right-0 -translate-y-1/2">
          Contact
        </Link>

        {/* Bottom Left */}
        <Link href="/achievements"
          className="absolute bottom-[20%] left-[10%]">
          Achievements
        </Link>

        {/* Bottom Right */}
        <Link href="/resume"
          className="absolute bottom-[20%] right-[10%]">
          Resume
        </Link>

        {/* Bottom */}
        <Link href="/education"
          className="absolute bottom-0 left-1/2 -translate-x-1/2">
          Education
        </Link>

      </div>
    </main>
  );
}