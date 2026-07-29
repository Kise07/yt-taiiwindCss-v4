"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const navlinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-between px-4 py-2 md:hidden">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              background: "rgba(255, 255, 255, 0.5)",
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-50 h-full w-full px-4 py-1.5"
          >
            <div className="flex justify-between">
              <Logo />
              <button
                className="absolute top-2 right-2"
                onClick={() => setOpen(false)}
              >
                <IconX className="mr-28" />
              </button>
            </div>

            <div className="my-10 flex flex-col gap-6">
              {navlinks.map((item, idx) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -4,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.1,
                  }}
                  key={idx + item.title}
                >
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mr-25 flex items-center justify-end gap-4">
              <Link
                href="/login"
                className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                Login
              </Link>
              <Button>Signup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="hidden items-center justify-between py-4 lg:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navlinks.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Login
        </Link>
        <Button>Signup</Button>
      </div>
    </Container>
  );
};
