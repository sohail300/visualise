import React from "react";
import { Crop, Brush, Scissors, Video } from "lucide-react";

const Features = () => {
  return (
    <div id="features" className="py-8 md:py-12">
      <div className="container px-4 mx-auto w-full md:w-3/4">
        <div className="flex flex-col">
          <div className="text-3xl md:text-6xl font-medium">
            <span className="font-manrope bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent">
              Features
            </span>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-2 mt-6 md:mt-10">
          <div className="p-2 h-[12rem] md:h-full hover:shadow-md rounded-3xl md:col-span-1 md:row-span-3">
            <div className="p-4 rounded-2xl h-full relative group overflow-hidden flex flex-col bg-background border border-border/60 max-h-full hover:border-accent transition-all">
              <div className="bottom-[-5rem] group-hover:opacity-30 dark:group-hover:opacity-80 opacity-0 right-[-20rem] z-[1] absolute bg-gradient-to-t from-primary to-purple-800/20 blur-[5em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[20rem] rotate-[40deg]"></div>
              <div className="absolute w-full h-full -top-[20%] -left-[35%] md:-left-[35%]">
                <div className="flex z-[10] flex-col relative items-center justify-center"></div>
              </div>
              <div className="text-4xl flex-1 z-20 mb-4">
                <div className="flex items-center bg-primary p-4 rounded-full justify-center w-fit">
                  <Crop color="white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Content Aware Cropping with AI
                </h3>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 row-span-3 w-full gap-4 md:gap-2">
            <div className="p-2 h-[12rem] hover:shadow-md rounded-3xl col-span-1 row-span-3 w-full">
              <div className="p-4 rounded-2xl h-full relative group overflow-hidden flex flex-col bg-background border border-border/60 max-h-full hover:border-accent transition-all">
                <div className="bottom-[-5rem] group-hover:opacity-30 dark:group-hover:opacity-80 opacity-0 right-[-20rem] z-[1] absolute bg-gradient-to-t from-primary to-purple-800/20 blur-[5em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[20rem] rotate-[40deg]"></div>
                <div className="absolute w-full h-full -top-[20%] -left-[35%] md:-left-[35%]">
                  <div className="flex z-[10] flex-col relative items-center justify-center"></div>
                </div>
                <div className="text-4xl flex-1 z-20 mb-4">
                  <div className="flex items-center bg-primary p-4 rounded-full justify-center w-fit">
                    <Brush color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Generative Fill</h3>
                </div>
              </div>
            </div>
            <div className="p-2 h-[12rem] hover:shadow-md rounded-3xl md:col-span-1 md:row-span-3 w-full">
              <div className="p-4 rounded-2xl h-full relative group overflow-hidden flex flex-col bg-background border border-border/60 max-h-full hover:border-accent transition-all">
                <div className="bottom-[-5rem] group-hover:opacity-30 dark:group-hover:opacity-80 opacity-0 right-[-20rem] z-[1] absolute bg-gradient-to-t from-primary to-purple-800/20 blur-[5em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[20rem] rotate-[40deg]"></div>
                <div className="absolute w-full h-full -top-[20%] -left-[35%] md:-left-[35%]">
                  <div className="flex z-[10] flex-col relative items-center justify-center"></div>
                </div>
                <div className="text-4xl flex-1 z-20 mb-4">
                  <div className="flex items-center bg-primary p-4 rounded-full justify-center w-fit">
                    <Scissors color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Remove BG</h3>
                </div>
              </div>
            </div>
            <div className="p-2 h-[12rem] hover:shadow-md rounded-3xl md:col-span-2 md:row-span-3 w-full">
              <div className="p-4 rounded-2xl h-full relative group overflow-hidden flex flex-col bg-background border border-border/60 max-h-full hover:border-accent transition-all">
                <div className="bottom-[-5rem] group-hover:opacity-30 dark:group-hover:opacity-80 opacity-0 right-[-20rem] z-[1] absolute bg-gradient-to-t from-primary to-purple-800/20 blur-[5em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[20rem] rotate-[40deg]"></div>
                <div className="absolute w-full h-full -top-[20%] -left-[35%] md:-left-[35%]">
                  <div className="flex z-[10] flex-col relative items-center justify-center"></div>
                </div>
                <div className="text-4xl flex-1 z-20 mb-4">
                  <div className="flex items-center bg-primary p-4 rounded-full justify-center w-fit">
                    <Video color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    AI Generated Video Previews
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
