"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB454] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1512]";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#242E28] bg-[#0F1512]/90 px-6 py-5 backdrop-blur-md md:px-10 lg:px-[6vw]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        <a
          href="#top"
          className={`font-term flex items-center gap-2 text-[18px] font-medium text-[#ECE9DF] ${focusRing}`}
        >
          <Terminal size={16} className="text-[#FFB454]" />
          laiba<span className="text-[#5FD4C4]">@</span>dev
        </a>

        <div className="flex items-center gap-6 font-term text-[14px] text-[#8B968E] md:gap-8">
          <a
            href="#work"
            className={`hidden transition-colors hover:text-[#ECE9DF] sm:block ${focusRing}`}
          >
            cd work
          </a>

          <a
            href="#skills"
            className={`hidden transition-colors hover:text-[#ECE9DF] sm:block ${focusRing}`}
          >
            cd skills
          </a>

          <a
            href="#about"
            className={`hidden transition-colors hover:text-[#ECE9DF] sm:block ${focusRing}`}
          >
            cd about
          </a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-1.5 rounded-md bg-[#FFB454] px-4 py-2.5 text-[14px] font-semibold text-[#141A16] ${focusRing}`}
          >
            contact --now
          </motion.a>
        </div>
      </div>
    </nav>
  );
}