import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="h-screen font-display">
      <ModeToggle />
      <p className="font-inter">
        Agent that do the work. Approvals that keeps you safe.
      </p>
    </div>
  );
}
