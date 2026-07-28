import { cn } from "@/lib/utils";

export const Subheading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-inter max-w-xl text-base text-neutral-400 md:text-lg dark:text-neutral-600",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
