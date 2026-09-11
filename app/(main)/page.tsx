import { DayCard } from "@/components/DayCard";
import Hero from "@/components/Hero";
import { days } from "@/content/days";
import { BookOpen, Plug } from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth/server";

export const dynamic = 'force-dynamic';

export default async function Home() {
  let session = null;
  try {
    const authInstance = auth();
    if (authInstance) {
      const result = await authInstance.getSession();
      session = result.data;
    }
  } catch {
    // Auth service unavailable — render without session
  }

  return (
    <div>
      {session?.user && (
        <div className="bg-primary/10 border-b border-primary/20">
          <div className="mx-auto max-w-[1600px] px-5 py-3 sm:px-8">
            <p className="text-primary text-sm">
              Welcome back, <span className="text-foreground font-medium">{session.user.name || session.user.email}</span>
            </p>
          </div>
        </div>
      )}

      <Hero />

      <section id="bootcamp-by-day">
        <div className="mx-auto max-w-[1600px] px-5 pt-10 pb-24 sm:px-8">
          <h2 className="text-foreground mb-4 text-3xl leading-[1.05] font-normal tracking-[-0.02em] sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]">Bootcamp by Day</h2>
          <p className="text-muted-foreground mb-12 max-w-lg text-lg leading-[1.4] font-normal text-pretty sm:text-[1.3rem]">
            Follow what we covered in each training session.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {days.map((day) => (
              <DayCard
                key={day.id}
                number={day.number}
                title={day.title}
                description={day.description}
                topics={day.topics}
                href={`/days/${day.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="reference">
        <div className="mx-auto max-w-[1600px] px-5 pt-10 pb-24 sm:px-8">
          <h2 className="text-foreground mb-4 text-3xl leading-[1.05] font-normal tracking-[-0.02em] sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]">Reference</h2>
          <p className="text-muted-foreground mb-12 max-w-lg text-lg leading-[1.4] font-normal text-pretty sm:text-[1.3rem]">
            Quick reference materials for terminology and network services.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/glossary"
              className="border-border bg-card/50 hover:bg-card group block rounded-xl border p-6 backdrop-blur-sm transition-colors"
            >
              <div className="text-muted-foreground group-hover:text-foreground mb-3 transition-colors">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold">Glossary</h3>
              <p className="text-muted-foreground">Technical terminology used across the bootcamp — networking, virtualization, Windows Server, Active Directory, and security.</p>
            </Link>
            <Link
              href="/ports"
              className="border-border bg-card/50 hover:bg-card group block rounded-xl border p-6 backdrop-blur-sm transition-colors"
            >
              <div className="text-muted-foreground group-hover:text-foreground mb-3 transition-colors">
                <Plug className="h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold">Common Ports & Services</h3>
              <p className="text-muted-foreground">Essential port numbers and their associated services — must-know ports, Active Directory ports, web, email, and remote administration.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
