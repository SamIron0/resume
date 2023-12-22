'use client'
import Image from 'next/image'
import Intro from '../components/Intro'
import React, { useState, useEffect } from "react";
import Projects from '@/components/Projects';

export default function Home() {
  const word = "Weelcome";
  const [displayedText, setDisplayedText] = useState("");
  let i = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (i < word.length) {
        setDisplayedText((prevState) => prevState + word.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="relative w-full sm:px-6 mt-36 pb-36 flex before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Intro />
      </div>
      <div className="sm:w-full sm:px-6">
        <Projects />
      </div>

    </main>
  )
}
