export default function Container({ children, className, }: { children: React.ReactNode, className?: string }) {
  return <div className={"max-w-7xl mx-auto px-4 md:py-8 w-full relative z-10"}>{children}</div>;
}
