"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Crop, Brush, Scissors, Video } from "lucide-react";

const sidebarItems = [
  { icon: Crop, label: "Content Aware Crop", href: "/crop" },
  { icon: Brush, label: "Generative Fill", href: "/fill" },
  { icon: Scissors, label: "Remove Background", href: "/remove-bg" },
  { icon: Video, label: "Video Previews", href: "/video-previews" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div className="min-h-[80%] z-40 flex flex-col bg-background shadow-xl rounded-lg overflow-hidden border border-border w-80">
      <div className="flex flex-col space-y-2 py-4 px-2">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={`relative flex items-center px-3 py-3 transition-colors ${
                pathname === item.href
                  ? "text-primary bg-secondary"
                  : "text-foreground hover:bg-muted"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {pathname === item.href && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-lg"
                  layoutId="activeIndicator"
                />
              )}
              <item.icon className="h-6 w-6 text-primary" />
              <motion.span
                className="ml-3 font-medium hidden sm:inline-block"
                animate={{
                  width: "auto",
                }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
