"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Database, Layout, Server, Smartphone } from "lucide-react";

// Primary Skills for Interactive Badges
const primarySkills = [
  { name: "React & Next.js", icon: Layout, color: "text-cyan-400", tooltip: "Dynamic UI & App Router", stat: "Frontend Core" },
  { name: "React Native", icon: Smartphone, color: "text-blue-500", tooltip: "iOS & Android Apps", stat: "Mobile Dev" },
  { name: "Node & Nest.js", icon: Server, color: "text-red-500", tooltip: "REST APIs & Logic", stat: "Backend Services" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400", tooltip: "Relational Modeling", stat: "Data Management" },
];

// Secondary Tools for Marquee
const secondaryTools = [
  "TypeScript", "Tailwind CSS", "Firebase", "DonWeb", "TypeORM", "Git", "GitHub", "HTML5", "SCSS", "Bootstrap", "npm", "Figma",
  // Repeat for continuous marquee
  "TypeScript", "Tailwind CSS", "Firebase", "DonWeb", "TypeORM", "Git", "GitHub", "HTML5", "SCSS", "Bootstrap", "npm", "Figma",
];

function SkillBadge({ skill }: { skill: typeof primarySkills[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative flex items-center justify-center p-6 bg-surface border border-surface-border rounded-xl cursor-default group"
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      <div className="flex flex-col items-center gap-3 z-10">
        <Icon size={32} className={skill.color} />
        <span className="font-mono font-medium text-primary-text">{skill.name}</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-bg border border-surface-border px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-muted-text font-mono">{skill.stat}</span>
              <span className="text-sm font-semibold text-accent-cyan">
                {skill.tooltip}
              </span>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-bg border-b border-r border-surface-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden" id="stack">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col gap-12">

          {/* Section Header */}
          <div className="flex flex-col items-start">
            <h2 className="font-mono text-xl sm:text-2xl text-primary-text font-bold flex items-center gap-2">
              package.json <span className="text-muted-text/50 font-normal">// Dependencies</span>
            </h2>
          </div>

          {/* Primary Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {primarySkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>

        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-20 relative flex overflow-x-hidden border-y border-surface-border bg-surface/30 py-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed
            repeat: Infinity,
          }}
        >
          {secondaryTools.map((tool, idx) => (
            <span key={idx} className="mx-8 font-mono text-muted-text/80 text-lg hover:text-accent-cyan transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}