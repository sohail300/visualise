"use client";

import React from "react";
import ArrowRight from "./ArrowRight";
import { ArrowDown } from "lucide-react";

const Demo = () => {
  return (
    <div id="faq" className="py-12">
      <div className="container px-4 w-full md:w-3/4 mx-auto">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="font-manrope bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent ">
              Create Video Previews
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full mt-8 sm:mt-10 md:mt-12">
          <video
            src="https://res.cloudinary.com/dwuzfbivo/video/upload/v1740055599/visualise/static/long_video_rrkcj1.webm"
            autoPlay
            muted
            loop
            className="w-full lg:w-2/4 rounded-lg"
          />

          {/* Arrow changes direction based on screen size */}
          <div className="hidden lg:block">
            <ArrowRight />
          </div>
          <div className="block lg:hidden">
            <ArrowDown size={60} stroke="#6D40D5" />
          </div>

          <video
            src="https://res.cloudinary.com/dwuzfbivo/video/upload/v1740055440/visualise/static/preview_video_kfdm6d.webm"
            autoPlay
            muted
            loop
            className="w-full lg:w-2/4 rounded-lg"
          />
        </div>

        {/* Uncomment if you want to add the stats back
        <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-16 mt-4">
          <span className="px-4 py-2 bg-neutral-500/20 rounded-sm text-center">
            Duration: 10s
          </span>
          <span className="px-4 py-2 bg-neutral-500/20 rounded-sm text-center">
            Max Clips: 6
          </span>
          <span className="px-4 py-2 bg-neutral-500/20 rounded-sm text-center">
            Min Clip Duration: 1s
          </span>
        </div>
        */}
      </div>
    </div>
  );
};

export default Demo;
