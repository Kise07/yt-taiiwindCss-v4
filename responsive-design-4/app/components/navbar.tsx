"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#", },
    { name: "About", href: "#", },
    { name: "Project", href: "#", },
    { name: "Contact", href: "#", },
  ]

  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex relative bg-white md:rounded-full items-center justify-between md:mt-4 max-w-4xl mx-auto border border-neutral-200 px-2 py-2 md:shadow-aceternity">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-900"
              href={link.href}
              key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <IconMenu2 />
        </button>
        {open && (
          <div className="absolute inset-x-0 bg-white rounded-md mt-5 shadow-aceternity top-15 max-w-[95%] mx-auto">
            <div className="flex md:hidden flex-col items-start gap-4 text-sm text-neutral-500 p-4">
              {links.map((link, index) => (
                <Link
                  className="hover:text-neutral-900"
                  href={link.href}
                  key={index}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
