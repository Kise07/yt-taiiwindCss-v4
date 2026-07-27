import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navlinks = [
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
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
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
    </div>
  );
};
