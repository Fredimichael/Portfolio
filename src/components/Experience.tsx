"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitCommitHorizontal } from "lucide-react";

const educationTimeline = [
  {
    commit: "release: v1.4.0",
    date: "May 2024",
    title: "Desarrollo de Aplicaciones Flex",
    institution: "Coderhouse",
    details: "React Native, Expo CLI, iOS/Android."
  },
  {
    commit: "release: v1.3.0",
    date: "Feb 2024",
    title: "Desarrollo Frontend React",
    institution: "Coderhouse",
    details: "React.js, Firebase, NPM, integraciones de UI."
  },
  {
    commit: "release: v1.1.0",
    date: "Nov 2023",
    title: "Desarrollo Web & JavaScript",
    institution: "Coderhouse",
    details: "HTML5, CSS, SASS, Bootstrap, Git, GitHub."
  },
  {
    commit: "init: base_logic",
    date: "2018 - 2023",
    title: "Fundamentos en C++",
    institution: "Universidad Nacional del Chaco Austral (UNCAUS)",
    details: "Lógica algorítmica y programación orientada a objetos."
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col items-start mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <span className="text-muted-text">$</span> git log --oneline
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Background Line */}
          <div className="absolute left-[27px] sm:left-[35px] top-4 bottom-4 w-[2px] bg-surface-border"></div>
          
          {/* Animated Highlight Line */}
          <motion.div 
            className="absolute left-[27px] sm:left-[35px] top-4 w-[2px] bg-accent-cyan origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {educationTimeline.map((item, idx) => (
              <div key={item.commit} className="relative flex gap-6 sm:gap-8 items-start group">
                
                {/* Node */}
                <div className="relative z-10 flex items-center justify-center bg-bg pt-1">
                   <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center bg-surface border-2 border-surface-border group-hover:border-accent-cyan transition-colors duration-300">
                      <GitCommitHorizontal className="text-muted-text group-hover:text-accent-cyan transition-colors duration-300" size={24} />
                   </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                   <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="font-mono text-sm text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded">
                         {item.commit}
                      </span>
                      <span className="font-mono text-sm font-semibold text-primary-text">
                         {item.title}
                      </span>
                   </div>
                   
                   <p className="text-sm font-mono text-muted-text mb-3">
                      {item.date} • {item.institution}
                   </p>
                   
                   <p className="text-muted-text leading-relaxed bg-surface/50 p-4 rounded-xl border border-surface-border glass group-hover:border-surface-border/80 transition-colors">
                      {item.details}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
