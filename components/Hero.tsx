"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Server, BookOpen, Terminal } from "lucide-react";

export default function Hero() {
  const supportVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 24, stiffness: 100 },
    },
  };

  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };
  const titleLineVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 30, stiffness: 90, mass: 1.2 },
    },
  };

  const bodyContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.85 },
    },
  };
  const bodyItemVariants: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 110 },
    },
  };

  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.6 },
    },
  };
  const cardItemVariants: Variants = {
    hidden: { opacity: 0, x: 30, filter: "blur(6px)" },
    show: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 100 },
    },
  };

  const features = [
    {
      icon: Server,
      title: "Server Services",
      desc: "Master Windows Server administration, DNS, DHCP, and Active Directory.",
    },
    {
      icon: BookOpen,
      title: "Web Deployment",
      desc: "Learn IIS configuration, SSL certificates, and web application hosting.",
    },
    {
      icon: Terminal,
      title: "Hands-On Labs",
      desc: "Practice with real-world scenarios, PowerShell scripts, and GPO management.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="mx-auto flex w-full max-w-[1600px] flex-1 items-center px-5 pt-10 pb-24 sm:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start">
              <motion.div
                variants={supportVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.2 }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="text-muted-foreground border-border bg-muted/50 flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  3 Learning Outcomes
                </div>
              </motion.div>

              <motion.h1
                variants={titleContainerVariants}
                initial="hidden"
                animate="show"
                className="text-foreground mb-6 max-w-4xl text-3xl leading-[1.05] font-normal tracking-[-0.02em] sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]"
              >
                <motion.span variants={titleLineVariants} className="block">
                  Windows Server
                </motion.span>
                <motion.span variants={titleLineVariants} className="block">
                  Administration
                </motion.span>
              </motion.h1>

              <motion.div
                variants={bodyContainerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col items-start gap-10"
              >
                <motion.p
                  variants={bodyItemVariants}
                  className="text-muted-foreground max-w-lg text-lg leading-[1.4] font-normal text-pretty sm:text-[1.3rem]"
                >
                  Your learning path for server administration, virtualization, DNS, DHCP, web deployment, and more.
                </motion.p>

                <motion.div
                  variants={bodyItemVariants}
                  className="flex flex-wrap items-center gap-6"
                >
                  <Link
                    href="/learning-outcome/1"
                    className="bg-primary text-primary-foreground group flex min-h-[44px] items-center gap-2 rounded-sm px-7 py-4 text-[16px] font-medium shadow-md transition-all will-change-transform hover:opacity-90 active:scale-[0.96]"
                  >
                    Start Learning
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/search"
                    className="text-muted-foreground group flex min-h-[44px] items-center gap-3 rounded-sm px-4 py-4 text-[16px] font-medium transition-all will-change-transform hover:text-foreground active:scale-[0.96]"
                  >
                    <span>Search Topics</span>
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-transform group-hover:scale-105">
                      <ArrowRight className="text-foreground h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4"
            >
              {features.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardItemVariants}
                  className="border-border bg-card/50 hover:bg-card flex items-start gap-4 rounded-xl border p-5 backdrop-blur-sm transition-colors"
                >
                  <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <item.icon className="text-muted-foreground h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground mb-1 text-[15px] font-semibold">{item.title}</p>
                    <p className="text-muted-foreground text-[14px] leading-snug text-pretty">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
