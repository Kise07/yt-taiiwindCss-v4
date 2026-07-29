"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant">
      <motion.div
        initial={{
          opacity: 0,
          y: -1,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="shadow-2xl perspective-[4000px]"
      >
        <Image
          src="https://assets.aceternity.com/screenshots/4.jpg"
          alt="Demo 1 for agenforce template"
          height={1080}
          width={1920}
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
          y: -1,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
      >
        <Image
          src="https://assets.aceternity.com/screenshots/3.jpg"
          alt="Demo 1 for agenforce template"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
