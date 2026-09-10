import { DayCard } from "@/components/DayCard";
import Hero from "@/components/Hero";
import { days } from "@/content/days";
import { BookOpen, Plug } from "lucide-react";
import { auth } from "@/lib/auth/server";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: session } = await auth.getSession();

  return (
    <div>
      {session?.user && (
        <div className="bg-[#2563eb]/10 border-b border-[#2563eb]/20">
          <div className="mx-auto max-w-[1600px] px-5 py-3 sm:px-8">
            <p className="text-sm text-[#60a5fa]">
              Welcome back, <span className="font-medium text-white">{session.user.name || session.user.email}</span>
            </p>
          </div>
        </div>
      )}

      <Hero />

      <section id="bootcamp-by-day">
        <div className="mx-auto max-w-[1600px] px-5 pt-10 pb-24 sm:px-8">
          <h2 className="mb-4 text-3xl leading-[1.05] font-normal tracking-[-0.02em] text-white sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]">Bootcamp by Day</h2>
          <p className="mb-12 max-w-lg text-lg leading-[1.4] font-normal text-pretty text-gray-400 sm:text-[1.3rem]">
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
          <h2 className="mb-4 text-3xl leading-[1.05] font-normal tracking-[-0.02em] text-white sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]">Reference</h2>
          <p className="mb-12 max-w-lg text-lg leading-[1.4] font-normal text-pretty text-gray-400 sm:text-[1.3rem]">
            Quick reference materials for terminology and network services.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="/glossary"
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="mb-3 text-gray-400 group-hover:text-white transition-colors">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Glossary</h3>
              <p className="text-gray-400">Technical terminology used across the bootcamp — networking, virtualization, Windows Server, Active Directory, and security.</p>
            </a>
            <a
              href="/ports"
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="mb-3 text-gray-400 group-hover:text-white transition-colors">
                <Plug className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Common Ports & Services</h3>
              <p className="text-gray-400">Essential port numbers and their associated services — must-know ports, Active Directory ports, web, email, and remote administration.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
