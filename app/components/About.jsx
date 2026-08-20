"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:gap-[8vw] lg:px-[6vw] lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-term mb-5 text-[14px] tracking-[1px] text-[#5FD4C4]">
          $ whoami
        </p>

        <h2 className="text-[3rem] font-bold leading-[1.02] tracking-[-1.5px] text-[#ECE9DF] md:text-6xl">
          Engineer mindset.
          <br />
          <span className="text-[#FFB454]">
            Product focus.
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[16px] leading-8 text-[#A7B0A9]">
          I&apos;m an Associate Software Engineer at Pixako Technologies, where I work 
          across the stack, building REST APIs, designing MongoDB schemas, and wiring up 
          the real-time layer for systems like live order tracking and rider dispatch.
        </p>

        <p className="mt-5 text-[16px] leading-8 text-[#A7B0A9]">
          Most of what I've learned has come from making things actually work end to end. 
          That means debugging a WebSocket connection that drops under load, figuring out 
          why an AI pipeline's response gets slow, or untangling a WooCommerce integration 
          that fights back. I'd rather understand a system than just ship around it.
        </p>

        <div className="font-term mt-10 grid grid-cols-2 gap-4 border-t border-[#242E28] pt-7 text-[13.5px] sm:grid-cols-3">
          <div>
            <span className="block text-[#6E786F]">
              cgpa
            </span>
            <span className="text-[#ECE9DF]">
              3.79 / 4.0
            </span>
          </div>

          <div>
            <span className="block text-[#6E786F]">
              honors
            </span>
            <span className="text-[#ECE9DF]">
              Gold Medalist
            </span>
          </div>

          <div>
            <span className="block text-[#6E786F]">
              grad
            </span>
            <span className="text-[#ECE9DF]">
              2024 · UET Taxila
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}