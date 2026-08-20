"use client";

import { motion } from "framer-motion";

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

export default function Projects({ projects }) {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 lg:px-[6vw] lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mb-14 grid items-end gap-8 lg:grid-cols-2"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="font-term mb-5 text-[14px] tracking-[1px] text-[#5FD4C4]"
          >
            $ ls ./work
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-[3rem] font-bold leading-[1.02] tracking-[-1.5px] text-[#ECE9DF] md:text-6xl"
          >
            Work &amp;
            <br />
            <span className="text-[#FFB454]">experience.</span>
          </motion.h2>
        </div>

        <motion.p
          variants={fadeUp}
          className="max-w-[480px] text-[15px] leading-7 text-[#A7B0A9]"
        >
          A selection of what I've built and shipped, spanning backend logic, 
          real-time infrastructure and integrations.
        </motion.p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.path}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
            whileHover={{ y: -6 }}
            className="flex min-h-[520px] flex-col rounded-xl border border-[#242E28] bg-[#141A16] p-7 shadow-[0_10px_30px_rgba(0,0,0,.18)] transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <span className="font-term flex items-center gap-2 text-[13.5px] text-[#5FD4C4]">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#5FD4C4]" />
                {project.path}
              </span>

              <span className="font-term max-w-[140px] text-right text-[10.5px] uppercase leading-4 text-[#6E786F]">
                {project.category}
              </span>
            </div>

            <h3 className="mt-14 max-w-[300px] text-[24px] font-bold leading-[1.15] tracking-[-.5px] text-[#ECE9DF]">
              {project.title}
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-[#A7B0A9]">
              {project.description}
            </p>

            <div className="font-term mt-6 grid gap-2 text-[13px] leading-5 text-[#8B968E]">
              {project.highlights.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ x: 3 }}
                  className="origin-left"
                >
                  <span className="text-[#5FD4C4]">$</span>{" "}
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="font-term mt-auto flex flex-wrap gap-1.5 pt-6">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#2B352F] bg-[#101614] px-2.5 py-1.5 text-[12px] text-[#8B968E]"
                >
                  #{item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}