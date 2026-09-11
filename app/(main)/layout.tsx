import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div id="bg-gradient" />
      <Header />
      <main className="h-[calc(100vh-52px)] overflow-hidden">{children}</main>
    </SmoothScroll>
  );
}
