"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center px-4 min-h-[100svh]">
      {/* Gradient backgrounds with responsive positioning */}
      <div className="absolute top-[10rem] sm:top-[12rem] md:top-[5rem] left-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[8rem] sm:w-[10rem] h-[15rem] sm:h-[20rem] md:h-[60rem] rotate-[40deg] max-w-[100vw] sm:max-w-screen" />
      <div className="absolute top-[10rem] sm:top-[12rem] md:top-[5rem] right-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[8rem] sm:w-[10rem] h-[15rem] sm:h-[20rem] md:h-[60rem] -rotate-[40deg] max-w-[100vw] sm:max-w-screen" />

      {/* Banner with shine effect */}
      <div
        className="group relative rounded-full border border-neutral-800/80 bg-neutral-900
        text-xs sm:text-sm md:text-base mb-2 sm:mb-0 text-white transition-all ease-in
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
          inline-flex items-center justify-center px-2 sm:px-3 py-0.5
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

      {/* Main heading with responsive text sizes */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-center mt-4 sm:mt-6">
        <span className="bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
          Visualise AI
        </span>
        <br className="sm:block hidden" />
        <span className="block sm:inline mt-2 sm:mt-0">
          Redefining Image & Video Editing
        </span>
      </h1>

      {/* Subheading with responsive width and text size */}
      <div className="text-sm sm:text-base md:text-lg mt-6 sm:mt-8 font-bold w-full sm:w-[80%] lg:w-[50%] text-center text-neutral-500 px-2">
        AI-powered tools for{" "}
        <span className="text-white font-thin">
          content-aware cropping, generative fill, AI video previews, and
          background removal
        </span>
        —effortless editing in one place!
      </div>

      {/* CTA button with responsive positioning */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4">
        <Button
          asChild
          className="w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold hover:scale-105 transition"
        >
          <Link href="/crop">Try AI Editing Now! 🚀</Link>
        </Button>
      </div>
    </section>
  );
}
