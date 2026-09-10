"use client";

import Lenis from "lenis/react";
import { type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <Lenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </Lenis>
  );
}
