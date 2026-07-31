import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonOne = () => {
  return (
    <div>
      <SkeletonCard
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        badge={<Badge text="120S" variant="danger" />}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-[90%] rounded-lg border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700">
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-bold text-black dark:text-white">{title}</p>
        {badge}
      </div>
      <p className="dark:neutral-400 mt-3 text-sm font-medium text-neutral-500">
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
