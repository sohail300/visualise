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
            How It Works
          </span>
        </div>

        <div className=" flex flex-row items-center justify-center gap-16">
          <div className=" border-white border-2 h-fit w-2/4"></div>

          <div className=" flex flex-col gap-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Upload className="w-8 h-8 text-white" />,
                  title: "Upload Your Image",
                },
                {
                  icon: <ArrowRight className="w-8 h-8 text-white" />,
                  title: "Choose Platform",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-white" />,
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
                    <h3 className="text-base font-medium mt-4 mb-2 text-white">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-medium text-white mb-4 text-center">
                Supported Platforms
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mx-auto">
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
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-600/20 backdrop-blur-lg rounded-full border border-white/10 mb-4">
                      <Icon className="w-8 h-8 text-white" />
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
