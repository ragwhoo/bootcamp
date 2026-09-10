import * as React from "react";

interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

function Separator({ className = "", orientation = "horizontal" }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={`shrink-0 bg-gray-200 ${
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px"
      } ${className}`}
    />
  );
}

export { Separator };
