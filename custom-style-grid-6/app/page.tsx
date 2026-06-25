import { ModeToggle } from "./components/mode-toggle";
import { Grid } from "./components/grid";

export default function Home() {
  return (
    <div>
      <section><Grid /></section>
      <ModeToggle />
    </div>
  );
}
