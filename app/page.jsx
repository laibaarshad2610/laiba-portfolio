"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { services, projects, skillGroups, stack } from "./constants";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [pings, setPings] = useState(services.map((s) => s.ping));

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setPings((prev) =>
        prev.map((p, i) =>
          Math.random() > 0.55
            ? Math.max(9, Math.round(services[i].ping + (Math.random() * 30 - 15)))
            : p
        )
      );
    }, 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <main
      id="top"
      className="min-h-screen bg-[#0F1512] text-[#ECE9DF] antialiased"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-term {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes dotpulse {
          0% { box-shadow: 0 0 0 0 rgba(95,212,196,0.55); }
          70% { box-shadow: 0 0 0 6px rgba(95,212,196,0); }
          100% { box-shadow: 0 0 0 0 rgba(95,212,196,0); }
        }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .status-dot { animation: dotpulse 2.2s ease-out infinite; }
      `}</style>

      <Navbar />

      {/* HERO */}
      <Hero services={services} pings={pings} />

      {/* TICKER */}
      <section className="overflow-hidden border-y border-[#242E28] bg-[#141A16] py-3.5">
        <motion.div
          animate={reduceMotion ? {} : { x: ["0%", "-18%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="font-term flex w-max items-center gap-8 whitespace-nowrap text-[14px] tracking-[1.5px] text-[#6E786F]"
        >
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              <span className="text-[#5FD4C4]">›</span> {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <Projects projects={projects} />

      {/* SKILLS */}
      <Skills skillGroups={skillGroups} />

      {/* ABOUT */}
      <About />

      {/* CONTACT */}
      <Contact />

      <Footer />
    </main>
  );
}