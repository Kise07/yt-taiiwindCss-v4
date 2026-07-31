import { IconPlus } from "@tabler/icons-react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { SkeletonOne } from "./skeletons/first";

export const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
      <div className="flex items-baseline-last justify-between gap-10">
        <Heading>
          Built for Fast-Moving <br /> Teams That Need Control.
        </Heading>
        <Subheading>
          Agents works inside your existing tools, with built-in approvals,
          brand and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </Subheading>
      </div>

      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-3">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
