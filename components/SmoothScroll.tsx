"use client";

import Lenis from "lenis/react";
import { type ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTopicPage = /^\/learning-outcome\/[^/]+\/[^/]+$/.test(pathname);

  useEffect(() => {
    document.documentElement.style.overflow = "";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  if (isTopicPage) {
    return <>{children}</>;
  }

  return (
    <Lenis
      key={pathname}
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
