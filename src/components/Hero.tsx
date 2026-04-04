"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center px-4 min-h-[100svh]">
      {/* Gradient backgrounds with responsive positioning */}
      <div className="absolute top-[10rem] sm:top-[12rem] md:top-[5rem] left-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[8rem] sm:w-[10rem] h-[15rem] sm:h-[20rem] md:h-[60rem] rotate-[40deg] max-w-[100vw] sm:max-w-screen" />
      <div className="absolute top-[10rem] sm:top-[12rem] md:top-[5rem] right-0 z-[-1] bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-purple-800/20 blur-[5em] w-[8rem] sm:w-[10rem] h-[15rem] sm:h-[20rem] md:h-[60rem] -rotate-[40deg] max-w-[100vw] sm:max-w-screen" />

      {/* Main heading with responsive text sizes */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mt-4 sm:mt-6">
        <span className="bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent font-semibold">
          Visualise AI
        </span>
        <br className="sm:block hidden" />
        <span className="block sm:inline mt-2 sm:mt-0 text-3xl sm:text-2xl md:text-3xl lg:text-5xl">
          AI-Powered Image & Video Enhancements
        </span>
      </h1>

      {/* Subheading with responsive width and text size */}
      <div className="text-sm sm:text-base md:text-lg mt-6 sm:mt-8 font-semibold w-full sm:w-[80%] lg:w-[50%] text-center px-2">
        Content-aware cropping, Generative fill, AI video previews and
        Background removal
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
