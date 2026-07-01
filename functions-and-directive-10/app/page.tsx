import Image from "next/image";
import Link from "next/link";
import React from "react";
const cn = (...classes: string[]) => classes.join(" ");

export default function Page() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10 mask-b-from-50% p-1 rounded-3xl border-neutral-200">
        <Column>
          <Card
            href="https://posthog.com"
            src="/images/1.png"
            alt="Posthog"
            className="lg:rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href="https://shure.com"
            src="/images/2.png"
            alt="Shure"
            className=""
          />
          <Card
            href="https://addidas.com"
            src="/images/3.png"
            alt="Addidas"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://myntra.com"
            src="/images/4.png"
            alt="Myntra"
            className=""
          />
          <Card
            href="https://vercel.com"
            src="/images/5.png"
            alt="Vercel"
            className=""
          />
          <Card
            href="https://ui.aceternity.com/pro"
            src="/images/6.png"
            alt="Aceternity UI Pro"
            className=""
          />
          <Card
            href="https://ui.aceternity.com/"
            src="/images/7.png"
            alt="Aceternity UI"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://tailwindcss.com"
            src="/images/8.png"
            alt="Tailwind CSS"
            className=""
          />
          <Card
            href="https://vercel.com"
            src="/images/13.png"
            alt="Vercel"
            className=""
          />
          <Card
            href="https://notion.com"
            src="/images/14.png"
            alt="Notion"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://nike.in"
            src="/images/11.png"
            alt="Nike"
            className="lg:rounded-tr-[calc(24px-4px)]"
          />
          <Card
            href="https://v0.dev"
            src="/images/12.png"
            alt="V0"
            className=""
          />
          <Card
            href="https://linear.app"
            src="/images/9.png"
            alt="Linear"
            className=""
          />
          <Card
            href="https://resend.org"
            src="/images/10.png"
            alt="Resend"
            className=""
          />
        </Column>
      </div>
    </div>
  );
}

const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image src={src} alt={alt} height={500} width={500} className="w-full" />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 inset-0 text-white font-medium text-sm m-auto flex justify-center items-center">
        {href.split("https://")[1]}
      </p>
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="text-base text-neutral-500 max-w-xl mt-4">
        Bento grids are a new way to layout your content in a grid format. They
        are flexible, responsive, and easy to use. You can create beautiful
        layouts with just a few lines of code.
      </p>
    </>
  );
};
