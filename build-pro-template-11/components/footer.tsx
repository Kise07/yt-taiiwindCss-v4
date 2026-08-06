import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import { IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const products = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Solutions",
      href: "#",
    },
  ];

  const company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 py-10 perspective-distant md:py-20 lg:py-32 dark:border-neutral-800">
      <Container className="relative z-20 grid grid-cols-1 gap-10 md:grid-cols-5">
        <div className="col-span-2 flex flex-col items-start gap-4">
          <Logo />
          <Subheading>Safe, observable, outcome-driven AI</Subheading>
          <Button className="shadow-brand">Start a 30-days trial</Button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Products</h4>
          <ul className="flex list-none flex-col gap-2">
            {products.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 transition duration-200 hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="flex list-none flex-col gap-2">
            {company.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 transition duration-200 hover:text-black"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
          <div className="relative flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-100 p-px dark:border-neutral-700 dark:bg-neutral-800">
            <input
              className="placeholdder-neutal-400 bg-transparent py-2 pr-12 pl-4 text-sm text-neutral-600 outline-none"
              type="email"
              placeholder="Your email"
            />
            <button className="absolute inset-y-0 right-0 cursor-pointer rounded-[7px] bg-black px-4 py-2">
              <IconSend className="text-white" />
            </button>
          </div>
          <p className="max-w-xl text-sm text-neutral-500 md:text-sm lg:text-sm dark:text-neutral-400">
            Get the latest product news and behind the scenes updates.
          </p>
        </div>
      </Container>

      <Container className="relative z-20 mt-10 flex flex-col justify-between sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Agentforce. All rights reserved.
        </p>
        <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Services</Link>
        </div>
      </Container>
      <div
        className={cn(
          "flex h-[200%] items-center justify-center gap-20",
          "absolute -inset-x-[200%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
          "mask-radial-from-50%",
        )}
        style={{
          transform: "rotateX(60deg) ",
        }}
      />
    </footer>
  );
};
