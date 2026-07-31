import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ShieldIllustration } from "@/illustration/general";

export const SkeletonThree = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <ShieldIllustration />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};
