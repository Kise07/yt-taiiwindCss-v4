import { Container } from "./container";
import { Heading } from "./heading";
import { LandingImages } from "./landing-images";
import { Subheading } from "./subheading";

export const Speed = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-10">
      <Heading>
        Built for Speed <br /> Designed for Scale
      </Heading>

      <Subheading className="py-8">
        Deploy AI agents that plan, act through your tools, and report
        outcomes—without changing how your teams work.
      </Subheading>
      <LandingImages />
    </Container>
  );
};
