import React from "react";
import { SVGComponent } from "./components/svg-component";
import { BoxConicGradient } from "./components/box-conic-gradient";
import { SVGLines } from "./components/svg-lines";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 max-w-4xl mx-auto flex flex-col items-center py-20">
      <SVGLines />
    </div>
  );
}
