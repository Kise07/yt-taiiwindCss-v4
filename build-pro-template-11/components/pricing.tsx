import { LockIcon, LoopIcon, UsersIcon } from "@/icons";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Subheading className="mt-2">
            Trusted by 500+ enterprise companies
          </Subheading>
          <Heading>
            Affordable pricing. <br />
            Easy scaling.
          </Heading>
          <Subheading className="mt-4">
            Start small to explore automation, add agents as you scale, and
            unlock enterprise-grade guardrails, orchestration, and reporting
            when you're ready
          </Subheading>

          <ul className="mt-4 flex list-none flex-col gap-2 *:flex *:items-center *:gap-2 *:font-medium">
            <li>
              <LockIcon />
              <p>Built-in Guardrails</p>
            </li>
            <li>
              <UsersIcon />
              <p>Agent Orchestration</p>
            </li>
            <li>
              <LoopIcon />
              <p>Human-in-the-Loop</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <PricingCard
            price="10"
            description="Perfect for individuals or small teams exploring automation."
            ctaLink="/"
            ctaText="Start your free trial"
            steps={[
              "1 AI Agent Included",
              "Standard Integrations",
              "Basic Approval Flows",
              "7 Day activity logs",
            ]}
          />
          <PricingCard
            price="60"
            description="Ideal for growing teams ready to scale automation safely."
            ctaLink="/"
            ctaText="Contact Sales"
            steps={[
              "Upto 5 AI Agents",
              "Multi Agent Orchestration",
              "Advanced Approval Flows",
              "30 Day activity logs",
              "ROI Insights",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({
  price,
  description,
  ctaLink,
  ctaText,
  steps,
}: {
  price: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
}) => {
  return (
    <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-neutral-100 p-4 md:grid-cols-2 md:p-8">
      <div>
        <Heading>
          ${price}
          <span className="text-sm text-neutral-400 md:text-xl lg:text-3xl">
            /mo
          </span>
        </Heading>
        <Subheading className="mt-4">{description}</Subheading>
        <Button className="mt-4">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
      <ul className="mt-4 flex list-none flex-col gap-2 *:flex *:items-center *:gap-2 *:font-medium">
        {steps.map((step, idx) => (
          <Step key={step + idx} title={step} />
        ))}
      </ul>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-neutral-500" />
      <p>{title}</p>
    </li>
  );
};
