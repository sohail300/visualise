"use client";

import React from "react";
import { motion } from "framer-motion";
import { Upload, ArrowRight, CheckCircle2 } from "lucide-react";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Demo = () => {
  const featureAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="faq" className="pb-12 border">
      <div className="container px-4 w-3/4 mx-auto">
        <div className="flex flex-col">
          <span className=" text-4xl md:text-6xl bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent my-12">
            Create Video Previews
          </span>
        </div>

        <div className=" flex flex-row items-center justify-center gap-16">
          <div className=" border-white border-2 h-80 w-2/4"></div>

          <ArrowRight size={200} />

          <div className=" flex flex-col w-full">
            <div className="border-white border-2 h-80 w-2/4"></div>
            <div className="flex flex-row gap-16 mt-4">
              <span className="px-4 py-2 bg-neutral-500/20 rounded-sm">
                Duration: 10s
              </span>
              <span className="px-4 py-2 bg-neutral-500/20 rounded-sm">
                Max Clips: 6
              </span>
              <span className="px-4 py-2 bg-neutral-500/20 rounded-sm">
                Min Clip Duration: 1s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
