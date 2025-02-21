"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Crop, Brush, Scissors, Video, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: Crop, label: "Content Aware Crop", href: "/crop" },
  { icon: Brush, label: "Generative Fill", href: "/fill" },
  { icon: Scissors, label: "Remove Background", href: "/remove-bg" },
  { icon: Video, label: "Video Previews", href: "/video-previews" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant={"ghost"}
        className="fixed top-2 left-2 z-50 md:hidden"
        onClick={toggleMobileMenu}
        size="sm"
      >
        {isMobileMenuOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <Menu className="h-8 w-8" color="white" />
        )}
      </Button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed md:relative z-50 flex flex-col bg-background shadow-xl rounded-lg overflow-hidden border border-border w-64 max-w-[80vw] h-[calc(100vh-1rem)] md:h-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col space-y-2 py-4 px-2 mt-12 md:mt-0">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                className={`relative flex items-center px-3 py-2 transition-colors rounded-md ${
                  pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:bg-muted"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {pathname === item.href && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-lg"
                    layoutId="activeIndicator"
                  />
                )}
                <item.icon className="h-5 w-5 text-primary" />
                <motion.span className="ml-3 font-medium text-sm">
                  {item.label}
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
