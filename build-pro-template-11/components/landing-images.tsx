"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LandingImages = () => {
  return (
    <div className="relative overflow-hidden lg:overflow-visible">
      {/* top fade */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-white mask-t-from-10%" /> */}

      <div className="relative min-h-[34rem] w-full translate-x-10 pt-20 perspective-distant md:min-h-[40rem] md:translate-x-28 lg:min-h-[52rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="shadow-2xl perspective-[4000px]"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/4.jpg"
            alt="Demo 2"
            width={1920}
            height={1080}
            draggable={false}
            priority
            className={cn(
              "absolute inset-0 w-[950px] max-w-none",
              "rounded-lg",
              "mask-r-from-20%",
              "mask-b-from-20%",
              "shadow-xl",
              "pointer-events-none",
              "select-none",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/3.jpg"
            alt="Demo 1"
            width={1920}
            height={1080}
            draggable={false}
            className={cn(
              "absolute inset-0 w-[950px] max-w-none -translate-x-10",
              "rounded-lg",
              "mask-r-from-50%",
              "mask-b-from-50%",
              "shadow-xl",
              "pointer-events-none",
              "select-none",
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
