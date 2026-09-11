import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div id="bg-gradient" />
      <Header />
      <main>{children}</main>
    </SmoothScroll>
  );
}
