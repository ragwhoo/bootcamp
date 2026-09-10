"use client";

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
    <div className="relative min-h-screen w-full overflow-hidden font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
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
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  3 Learning Outcomes
                </div>
              </motion.div>

              <motion.h1
                variants={titleContainerVariants}
                initial="hidden"
                animate="show"
                className="mb-6 max-w-4xl text-3xl leading-[1.05] font-normal tracking-[-0.02em] text-white sm:text-4xl lg:text-[4rem] xl:text-[4.5rem]"
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
                  className="max-w-lg text-lg leading-[1.4] font-normal text-pretty text-gray-400 sm:text-[1.3rem]"
                >
                  Your learning path for server administration, virtualization, DNS, DHCP, web deployment, and more.
                </motion.p>

                <motion.div
                  variants={bodyItemVariants}
                  className="flex flex-wrap items-center gap-6"
                >
                  <a
                    href="/learning-outcome/1"
                    className="group flex min-h-[44px] items-center gap-2 rounded-sm bg-white px-7 py-4 text-[16px] font-medium text-gray-900 shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all will-change-transform hover:bg-gray-100 active:scale-[0.96]"
                  >
                    Start Learning
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="/search"
                    className="group flex min-h-[44px] items-center gap-3 rounded-sm px-4 py-4 text-[16px] font-medium text-gray-300 transition-all will-change-transform hover:text-white active:scale-[0.96]"
                  >
                    <span>Search Topics</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-md transition-transform group-hover:scale-105">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>
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
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="mb-1 text-[15px] font-semibold text-white">{item.title}</p>
                    <p className="text-[14px] leading-snug text-pretty text-gray-400">
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
