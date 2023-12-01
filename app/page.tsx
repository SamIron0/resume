'use client'
import Image from 'next/image'
import Intro from '../components/sections/Intro'
import React, { useState, useEffect } from "react";
import Projects from '@/components/sections/Projects';

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {displayedText}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Samuel
          </a>
        </div>
      </div>

      <div className="pt-3xl max-w-3xl pb-6xl h-500px">
        <Intro />
      </div>

      <Projects />

    </main>
  )
}
