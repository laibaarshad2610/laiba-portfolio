"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Circle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB454] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1512]";

export default function Hero({ services, pings }) {
  return (
    <section className="relative px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-24 lg:px-[6vw]">
      <div className="mx-auto grid max-w-[1240px] items-start gap-14 lg:grid-cols-[1.1fr_.9fr]">

        {/* ================= HERO CONTENT ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="font-term mb-6 flex items-center gap-2 text-[12px] tracking-[1px] text-[#5FD4C4]"
          >
            <Circle
              size={7}
              className="fill-[#5FD4C4] text-[#5FD4C4]"
            />
            FULL-STACK ENGINEER
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-[780px] text-[clamp(2.6rem,6.4vw,5.2rem)] font-bold leading-[1.02] tracking-[-2px] text-[#ECE9DF]"
          >
            I build web systems that{" "}
            <span className="text-[#FFB454]">
              hold up under real traffic.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[600px] text-[16px] leading-7 text-[#A7B0A9]"
          >
            I&apos;m Laiba Arshad. I work in React, Node.js, Express and MongoDB, and 
            I've spent the past year building backend APIs, real-time systems, 
            AI integrations and WordPress solutions, most of it for products where things 
            actually have to stay working.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-1.5 rounded-md bg-[#FFB454] px-5 py-3 text-sm font-semibold text-[#141A16] ${focusRing}`}
            >
              See the work <ArrowDown size={16} />
            </motion.a>

            <motion.a
              href="mailto:arshadlaiba57@gmail.com"
              whileHover={{ y: -3 }}
              className={`inline-flex items-center gap-1.5 rounded-md border border-[#2B352F] px-5 py-3 text-sm font-semibold text-[#ECE9DF] ${focusRing}`}
            >
              Get in touch <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= LIVE STATUS PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="overflow-hidden rounded-xl border border-[#242E28] bg-[#141A16] shadow-[0_20px_50px_rgba(0,0,0,.25)]"
        >
          <div className="flex items-center gap-2 border-b border-[#242E28] px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3A453E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3A453E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3A453E]" />

            <span className="font-term ml-2 text-[14px] text-[#6E786F]">
              status.watch
            </span>
          </div>

          <div className="p-5">
            <p className="font-term mb-4 text-[14px] text-[#5FD4C4]">
              $ status --watch
              <span className="cursor-blink text-[#5FD4C4]">
                ▌
              </span>
            </p>

            <div className="space-y-3">
              {services.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-md border border-[#242E28] bg-[#101614] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="status-dot h-2 w-2 rounded-full bg-[#5FD4C4]" />

                    <div>
                      <p className="font-term text-[14.5px] text-[#ECE9DF]">
                        {s.name}
                      </p>

                      <p className="font-term text-[12.5px] text-[#6E786F]">
                        {s.detail}
                      </p>
                    </div>
                  </div>

                  <span className="font-term text-[12px] text-[#8B968E]">
                    {pings[i]}ms
                  </span>
                </div>
              ))}
            </div>

            <p className="font-term mt-4 text-[11.5px] text-[#6E786F]">
              4/4 services operational
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}