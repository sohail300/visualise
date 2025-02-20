"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center px-4 min-h-screen">
      <div className="absolute top-[15rem] md:top-[5rem] left-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[10rem] md:w-[10rem] h-[20rem] md:h-[60rem] rotate-[40deg]" />
      <div className="absolute top-[15rem] md:top-[5rem] right-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[10rem] md:w-[10rem] h-[20rem] md:h-[60rem] -rotate-[40deg]" />

      <div
        className="group relative rounded-full border border-neutral-800/80 bg-neutral-900 
        text-sm sm:text-base max-sm:mb-2 text-white transition-all ease-in 
        hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 
        dark:bg-neutral-900 dark:hover:bg-neutral-800"
        style={
          {
            "--shiny-width": "200%",
          } as React.CSSProperties
        }
      >
        <p
          className="mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70 
          bg-clip-text bg-no-repeat 
          inline-flex items-center justify-center px-3 py-0.5
          animate-shine"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.5) 45%, transparent)",
            backgroundSize: "var(--shiny-width) 100%",
            backgroundPosition: "0 0",
          }}
        >
          <span>✨ AI-Powered Image & Video Enhancements</span>
        </p>
      </div>

      {/* Line height in tailwind */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6">
        <span className="bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
          Visualise AI
        </span>
        <br />
        Redefining Image & Video Editing
      </h1>

      <div className="text-base md:text-lg mt-8 font-bold w-full lg:w-[50%] text-center text-neutral-500">
        AI-powered tools for{" "}
        <span className="text-white font-thin">
          content-aware cropping, generative fill, AI video previews, and
          background removal
        </span>
        —effortless editing in one place!
      </div>

      <div className="mt-10 flex sm:flex-row flex-col w-full md:w-auto items-center gap-4">
        <Button
          asChild
          className="px-6 text-sm font-semibold hover:scale-105 transition"
        >
          <Link href="/crop">Try AI Editing Now! 🚀</Link>
        </Button>
      </div>
    </section>
  );
}
