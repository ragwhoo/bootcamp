"use client";

import Lenis from "lenis/react";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTopicPage = /^\/learning-outcome\/[^/]+\/[^/]+$/.test(pathname);

  if (isTopicPage) {
    return <>{children}</>;
  }

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
