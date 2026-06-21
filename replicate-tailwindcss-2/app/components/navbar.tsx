import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ]
  return (
    <div className="flex items-center justify-between py-4">
      <Link href="/">
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          height={50}
          width={50}
          alt="Logo"
        />
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link key={link.title} href={link.href} className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200">
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-medium shadow-lg text-shadow-,md cursor-pointer tracking-wide">Start free trial</button>
      </div>
    </div>
  );
}
