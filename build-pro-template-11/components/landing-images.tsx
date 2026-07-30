"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImages = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 z-50 h-full w-full bg-white mask-t-from-10%"></div>
      <div className="relative min-h-72 w-full translate-x-20 pt-20 sm:min-h-80 md:min-h-100 lg:min-h-140">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="perspective-[5000px]"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/4.jpg"
            alt="Demo 2 for agenforce template"
            height={500}
            width={750}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="translate-x-10 -translate-y-10 perspective-[5000px] md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/3.jpg"
            alt="Demo 1 for agenforce template"
            height={540}
            width={960}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-20% shadow-2xl",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
