import { LockIcon, LoopIcon, UsersIcon } from "@/icons";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const Pricing = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2">
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

        <div>
          <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-neutral-100 p-4 md:grid-cols-2 md:p-8">
            <div>
              <Heading>
                $10
                <span className="text-sm text-neutral-400 md:text-xl lg:text-3xl">
                  /mo
                </span>
              </Heading>
              <Subheading className="mt-4">
                Perfect for individuals or small teams exploring automation.
              </Subheading>
              <Button className="mt-4">Start your free trial</Button>
            </div>
            <ul className="mt-4 flex list-none flex-col gap-2 *:flex *:items-center *:gap-2 *:font-medium">
              <li>
                <IconCircleCheckFilled className="size-5 text-neutral-500" />
                <p>1 AI Agent Included</p>
              </li>
              <li>
                <IconCircleCheckFilled className="size-5 text-neutral-500" />
                <p>Standard Integrations</p>
              </li>
              <li>
                <IconCircleCheckFilled className="size-5 text-neutral-500" />
                <p>Basic Approval Flows</p>
              </li>
              <li>
                <IconCircleCheckFilled className="size-5 text-neutral-500" />
                <p>7 Day activity logs</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
