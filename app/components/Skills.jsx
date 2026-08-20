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

export default function Skills({ skillGroups }) {
  return (
    <section
      id="skills"
      className="border-y border-[#242E28] bg-[#141A16] px-6 py-24 md:px-10 lg:px-[6vw] lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
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
              $ ls -la ./skills
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[3rem] font-bold leading-[1.02] tracking-[-1.5px] text-[#ECE9DF] md:text-6xl"
            >
              Technical
              <br />
              <span className="text-[#FFB454]">
                toolkit.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-[480px] text-[15px] leading-7 text-[#A7B0A9]"
          >
            The stack I reach for day to day, from building interfaces to keeping real-time 
            systems and AI integrations running.
          </motion.p>
        </motion.div>

        <div className="grid border-t border-[#242E28] md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.dir}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="border-b border-[#242E28] px-2 py-8 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <h3 className="font-term mb-4 text-[14px] text-[#5FD4C4]">
                {group.dir}/
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -2 }}
                    className="font-term rounded-md border border-[#2B352F] bg-[#0F1512] px-3 py-2 text-[13px] text-[#DCE5E0]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}