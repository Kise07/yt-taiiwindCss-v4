import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("rounded-lg bg-neutral-50 dark:bg-neutral-800", className)}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-6 md:px-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-display text-lg font-bold md:text-2xl", className)}>
      {children}
    </h3>
  );
};

export const CardSkeleton = ({
  className,
  children,
  noEffect,
}: {
  className?: string;
  children?: React.ReactNode;
  noEffect?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative h-40 overflow-hidden md:h-80",
        !noEffect && "perspective-distant",
        className,
      )}
    >
      {!noEffect && (
        <div className="absolute inset-0 h-full w-full bg-white mask-radial-from-50%"></div>
      )}
      {children}
    </div>
  );
};
