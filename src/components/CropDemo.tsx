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
    <div id="faq" className="py-8 md:py-12">
      <div className="container px-4 mx-auto w-full md:w-3/4">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="font-manrope bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-8 sm:mt-10 md:mt-12">
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1741890319/visualise/static/product_demo_image.png"
            className="w-full lg:w-2/4 rounded-lg"
          />

          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto w-full">
              {[
                {
                  icon: <Upload className="w-6 md:w-8 h-6 md:h-8 text-white" />,
                  title: "Upload Your Image",
                },
                {
                  icon: (
                    <ArrowRight className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  ),
                  title: "Choose Platform",
                },
                {
                  icon: (
                    <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  ),
                  title: "Download Result",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={featureAnimation}
                  className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    {step.icon}
                    <h3 className="text-sm md:text-base font-medium mt-4 mb-2 text-white">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-lg md:text-2xl font-medium text-white mb-4 text-center">
                Supported Platforms
              </h2>
              <div className="grid grid-cols-5 gap-4 sm:gap-8 mx-auto">
                {[
                  { Icon: Instagram, name: "Instagram" },
                  { Icon: Facebook, name: "Facebook" },
                  { Icon: Linkedin, name: "LinkedIn" },
                  { Icon: Twitter, name: "Twitter" },
                  { Icon: Youtube, name: "YouTube" },
                ].map(({ Icon }, index) => (
                  <motion.div
                    key={index}
                    variants={featureAnimation}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-purple-600/20 backdrop-blur-lg rounded-full border border-white/10 mb-4">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
