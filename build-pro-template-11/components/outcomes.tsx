import { Container } from "./container";
import { Heading } from "./heading";
import { LandingImages } from "./landing-images";
import { Subheading } from "./subheading";

export const Outcomes = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-10">
      <Heading>
        Governed AI, <br /> Trusted Outcomes
      </Heading>

      <Subheading className="py-8">
        Deploy AI agents with built-in approvals, brand guardrails, and audit
        trails. Every step is visible, reviewable, and compliant.
      </Subheading>
      <LandingImages />
    </Container>
  );
};
