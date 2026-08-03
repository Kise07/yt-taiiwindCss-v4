import { cn } from "@/lib/utils";
import {
  IconPrison,
  IconExclamationCircle,
  IconCircleDashedCheck,
  IconClock,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonOne = () => {
  return (
    <div className="h-full w-full -translate-y-10 scale-[1.2] rotate-x-30 -rotate-y-20 rotate-z-15 mask-r-from-50% mask-radial-from-50% perspective-distant">
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        badge={<Badge text="120S" variant="danger" />}
      />
      <SkeletonCard
        className="absolute bottom-8 left-8 z-20"
        icon={<IconExclamationCircle className="size-4" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        badge={<Badge text="10S" variant="success" />}
      />
      <SkeletonCard
        className="absolute bottom-20 left-4 z-10 max-w-[80%]"
        icon={<IconPrison className="size-4" />}
        title="Risk Analysis"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        badge={<Badge text="40S" variant="warning" />}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700",
        className,
      )}
    >
      <div className="flex items-center gap-3 text-black">
        {icon}
        <p className="text-sm font-normal text-black dark:text-neutral-600">
          {title}
        </p>
        {badge}
      </div>
      <p className="dark:neutral-400 mt-3 text-sm font-medium text-neutral-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Tag text="Google Ads" />
        <Tag text="SAAS" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full border px-1 py-0.5",
        variant === "danger" && "border-red-300 bg-red-300/10 text-red-500",
        variant === "warning" &&
          "border-yellow-300 bg-yellow-300/10 text-yellow-500",
        variant === "success" &&
          "border-green-300 bg-green-300/10 text-green-500",
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className={cn("size-3")} />
      <p className="text-[10px] font-bold">{text}</p>
    </div>
  );
};
