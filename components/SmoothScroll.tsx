"use client";

import Lenis from "lenis/react";
import { type ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTopicPage = /^\/learning-outcome\/[^/]+\/[^/]+$/.test(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, mounted]);

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
