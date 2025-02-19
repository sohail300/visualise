import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import { getCurrYear } from "@/utils/getCurrYear";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="pb-8 relative overflow-hidden w-full">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="my-8">
          <div className="relative h-40 w-40 rounded-full p-1">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl"></div>
            <Image
              src={logo.src}
              alt="Debug Desk"
              width={200}
              height={200}
              className="h-[100%] w-[200%] z-50"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex gap-8 text-gray-400">
            <li>
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#demos" className="hover:text-white transition-colors">
                Demos
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 mb-8 text-gray-400">
          <a
            href="https://github.com/sohail300"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sohail-ansari-b51201278/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/sohail_twts"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {getCurrYear()}, Visualise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
