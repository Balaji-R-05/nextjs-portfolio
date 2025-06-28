"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-5 inset-x-4 sm:inset-x-0 mx-auto z-[5000] px-6 sm:px-10 py-3 sm:py-4",
          "flex flex-wrap items-center justify-center gap-4",
          "max-w-max rounded-xl border border-white/20",
          "bg-black/70 backdrop-blur-md shadow-lg transition-all",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
          >
            <span className="text-sm sm:text-lg text-white font-medium">{navItem.name}</span>

          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
