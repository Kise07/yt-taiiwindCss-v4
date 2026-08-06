"use client";

import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div className="h-full w-full flex-1 flex-col items-center justify-center gap-4 space-y-4 rounded-t-3xl px-8">
      {/* // first row */}
      <div className="mx-auto grid max-w-md grid-cols-4 justify-center gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
      {/* // second row */}
      <div className="grid grid-cols-5 gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item containerClassName="from-black/50 via-transparent to-black/50">
          <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-white">
            <LogoIcon className="size-12" />
          </div>
        </Item>
        <Item src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
      {/* // third row */}
      <div className="mx-auto grid max-w-md grid-cols-4 justify-center gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  containerClassName,
  src = "",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  src?: string;
}) => {
  return (
    <div
      className={cn(
        "relative aspect-square w-full justify-self-center rounded-xl border border-dashed border-neutral-200 p-[1px]",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral)]/10",
        className,
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}

        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center rounded-[12px] p-[1px]",
          src && "bg-gradient-to-br from-blue-500 via-transparent to-blue-500",
          containerClassName,
        )}
      >
        {children ??
          (src ? (
            <Image
              src={src}
              height={120}
              width={120}
              alt="item"
              className="relative z-20 aspect-square rounded-[12px] object-cover"
            />
          ) : null)}
      </motion.div>
      <div className="absolute inset-0 rounded-xl bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed"></div>
    </div>
  );
};
