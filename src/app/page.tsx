"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BootSequence } from "@/components/BootSequence";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <main className="min-h-screen bg-bg text-primary-text selection:bg-accent-cyan/30 selection:text-accent-cyan">
      {/* Boot Sequence always mounts, it handles its own unmounting visibility before calling onComplete */}
      <BootSequence onComplete={() => setBootComplete(true)} />

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <HeroSection />
            <TechStack />
            <Projects />
            <Experience />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
