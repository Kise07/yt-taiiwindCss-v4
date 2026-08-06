"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LandingImagesProps = {
  /** Show mask gradient fade on images */
  showGradient?: boolean;
  /** Show 3D perspective and rotation transforms */
  showPerspective?: boolean;
  /** Shift images right with translate */
  showTranslate?: boolean;
  /** Primary image src (background layer) */
  src1?: string;
  /** Secondary image src (foreground layer) */
  src2?: string;
  /** Minimum height for the container */
  minH?: string;
  /** Custom class for the inner container div */
  containerClassName?: string;
};

export const LandingImages = ({
  showGradient = true,
  showPerspective = true,
  showTranslate = true,
  src1 = "https://assets.aceternity.com/screenshots/4.jpg",
  src2 = "https://assets.aceternity.com/screenshots/3.jpg",
  minH = "34rem",
  containerClassName,
}: LandingImagesProps) => {
  return (
    <div className="relative overflow-hidden mask-b-from-50% mask-radial-from-50%">
      <div
        className={cn(
          "relative w-full pt-20 md:min-h-[40rem] lg:min-h-[43rem]",
          showPerspective && "perspective-distant",
          showTranslate &&
            "translate-x-10 translate-y-27 md:translate-x-28 md:translate-y-20",
          containerClassName,
        )}
        style={{ minHeight: minH }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className={cn(
            "shadow-2xl",
            showPerspective && "perspective-[4000px]",
          )}
        >
          <Image
            src={src1}
            alt="Demo 2"
            width={1920}
            height={1080}
            draggable={false}
            priority
            className={cn(
              "absolute inset-0 w-full max-w-[950px]",
              "rounded-lg",
              showGradient && "mask-r-from-20% mask-b-from-20%",
              "shadow-xl",
              "pointer-events-none",
              "select-none",
            )}
            style={
              showPerspective
                ? { transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }
                : undefined
            }
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className={cn(
            "-translate-y-10 md:-translate-y-20 lg:-translate-y-40",
            showPerspective && "perspective-[4000px]",
            showTranslate && "translate-x-20",
          )}
        >
          <Image
            src={src2}
            alt="Demo 1"
            width={1920}
            height={1080}
            draggable={false}
            className={cn(
              "absolute inset-0 w-full max-w-[950px]",
              "rounded-lg",
              showGradient && "mask-r-from-50% mask-b-from-50%",
              "shadow-xl",
              "pointer-events-none",
              "select-none",
              showTranslate && "-translate-x-10",
            )}
            style={
              showPerspective
                ? { transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }
                : undefined
            }
          />
        </motion.div>
      </div>
    </div>
  );
};
