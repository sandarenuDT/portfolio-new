"use client";
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {useState, useEffect, useRef} from 'react';

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const float = async () => {
      while (true){
        await controls.start({
          x: Math.random() * 300 - 150,
          y: Math.random() * 300 - 150,
          rotate: Math.random() * 20 - 10,
          transition: { duration: 5, ease: "easeInOut" }
        });
      }
    };
    float();
  }, [controls]);

  useEffect(() => {
    if(soundEnabled === null) return ;
    if(audioRef.current) {
      audioRef.current = new Audio('/')

    }
  })
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="animated-bg relative w-screen h-screen overflow-hidden flex items-center justify-center">
        <button onClick={() => setSoundEnabled(!soundEnabled)} className ="fixed top-5 right-5 z-50 bg-white/70 backdrop-blur px-4 rounded-full shadow text-xl">
          {soundEnabled ? '🔊' : '🔇'}
        </button>



  
      </main>
    </div>
  );
}
