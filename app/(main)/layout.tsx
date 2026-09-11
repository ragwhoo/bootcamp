import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div id="bg-gradient" />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </SmoothScroll>
  );
}
