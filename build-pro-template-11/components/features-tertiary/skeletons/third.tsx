import {
  ArrorIllustration,
  RevertArrowIllustration,
} from "@/illustration/grid";
import { cn } from "@/lib/utils";
import { IconSettings, IconSparkles } from "@tabler/icons-react";

export const SkeletonThree = () => {
  return (
    <div className="absolute inset-0 z-20 mx-auto flex h-full w-full max-w-lg flex-1 flex-col gap-2 rounded-t-3xl px-2 pt-2 perspective-[4000px]">
      <ArrorIllustration className="absolute -top-4 left-40 z-30 mx-auto" />
      <RevertArrowIllustration className="absolute -bottom-10 left-32 mx-auto blur-[2px]" />
      <div
        className={cn(
          "flex h-[200%] items-center justify-center gap-20",
          "absolute -inset-x-[200%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
        )}
        style={{
          transform: "rotateY(20deg) rotateX(50deg) rotateZ(40deg)",
        }}
      >
        <div className="flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-2 font-medium text-orange-500">
          <IconSettings className="size-4" />
          <span>Processing</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-green-300 bg-green-100 px-4 py-2 font-medium text-green-500">
          <IconSparkles className="size-4" />
          <span>Feedback</span>
        </div>
      </div>
    </div>
  );
};
