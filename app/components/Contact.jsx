"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
} from "lucide-react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB454] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1512]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#242E28] bg-[#141A16] px-6 py-24 text-center md:px-10 lg:px-[6vw] lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <p className="font-term mb-5 text-[14px] tracking-[1px] text-[#5FD4C4]">
          $ open --project
        </p>

        <h2 className="mx-auto mb-11 max-w-[900px] text-[2.8rem] font-bold leading-[1.03] tracking-[-1.5px] text-[#ECE9DF] md:text-6xl lg:text-[4.5rem]">
          Let&apos;s build something
          <br />
          <span className="text-[#FFB454]">
            worth shipping.
          </span>
        </h2>

        <motion.a
          href="mailto:arshadlaiba57@gmail.com"
          whileHover={{ y: -3 }}
          className={`font-term inline-flex items-center gap-2 border-b-2 border-[#FFB454] pb-1 text-[16px] font-semibold text-[#ECE9DF] md:text-xl ${focusRing}`}
        >
          arshadlaiba57@gmail.com
          <ArrowUpRight size={16} />
        </motion.a>

        <div className="font-term mt-10 flex justify-center gap-7 text-[14px] text-[#8B968E]">
          <a
            href="https://linkedin.com/in/laibaarshad"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 transition-colors hover:text-[#ECE9DF] ${focusRing}`}
          >
            <ExternalLink size={14} />
            linkedin
          </a>

          <a
            href="mailto:arshadlaiba57@gmail.com"
            className={`inline-flex items-center gap-1.5 transition-colors hover:text-[#ECE9DF] ${focusRing}`}
          >
            <Mail size={14} />
            email
          </a>
        </div>
      </motion.div>
    </section>
  );
}