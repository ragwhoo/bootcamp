"use client";

import Lenis from "lenis/react";
import { type ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTopicPage = /^\/learning-outcome\/[^/]+\/[^/]+$/.test(pathname);
  const prevIsTopic = useRef(isTopicPage);

  useEffect(() => {
    if (prevIsTopic.current && !isTopicPage) {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      window.scrollTo(0, 0);
    }
    prevIsTopic.current = isTopicPage;
  }, [isTopicPage]);

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
