"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const codeLines = [
  '<span class="text-[#c678dd]">const</span> <span class="text-[#e5c07b]">developer</span> <span class="text-[#56b6c2]">=</span> {',
  '  <span class="text-[#e06c75]">name:</span> <span class="text-[#98c379]">"Fredi (Michael) Roa"</span>,',
  '  <span class="text-[#e06c75]">role:</span> <span class="text-[#98c379]">"Frontend & Full-Stack Developer"</span>,',
  '  <span class="text-[#e06c75]">location:</span> <span class="text-[#98c379]">"Juan José Castelli, Chaco, Argentina"</span>,',
  '  <span class="text-[#e06c75]">stack:</span> [<span class="text-[#98c379]">"React"</span>, <span class="text-[#98c379]">"Next.js"</span>, <span class="text-[#98c379]">"React Native"</span>, <span class="text-[#98c379]">"Node.js"</span>, <span class="text-[#98c379]">"NestJS"</span>, <span class="text-[#98c379]">"PostgreSQL"</span>],',
  '  <span class="text-[#e06c75]">education:</span> {',
  '    <span class="text-[#e06c75]">university:</span> <span class="text-[#98c379]">"UNCAUS (C++)"</span>,',
  '    <span class="text-[#e06c75]">bootcamp:</span> <span class="text-[#98c379]">"Coderhouse (Frontend & Mobile)"</span>',
  '  },',
  '  <span class="text-[#e06c75]">flagship_project:</span> <span class="text-[#98c379]">"plastimundoleandro.com.ar"</span>,',
  '  <span class="text-[#e06c75]">status:</span> <span class="text-[#98c379]">"Available for freelance"</span>,',
  '};'
];


export function HeroSection() {
  const { t } = useLanguage();
  const [displayedLines, setDisplayedLines] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < codeLines.length) {
          setDisplayedLines(currentLine + 1);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 400); // Typing speed
      return () => clearInterval(interval);
    }, 1500); // Initial delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden" id="home">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `linear-gradient(var(--color-surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface-border) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        animation: 'gridMove 20s linear infinite',
      }} />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
      `}} />

      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="font-mono text-accent-green bg-accent-green/10 px-3 py-1 rounded border border-accent-green/20 text-sm">
            status: 200 OK
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary-text leading-tight">
            {t.heroHeadline.split(" ")[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-muted-text">
              {t.heroHeadline.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          
          <p className="text-lg text-muted-text max-w-md leading-relaxed">
            {t.heroRole}. {t.heroSubheadline}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-2 font-mono text-sm bg-surface border border-surface-border text-primary-text px-6 py-3 rounded hover:bg-primary-text hover:text-bg transition-colors duration-300"
          >
            <span className="text-accent-cyan group-hover:text-bg transition-colors duration-300">{'>'}</span> 
            ./view_projects.sh
          </motion.button>
        </motion.div>

        {/* Right: Mock IDE Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative shadow-2xl group"
        >
          {/* Glowing Border effect on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan/30 to-accent-green/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative flex flex-col bg-bg border border-surface-border rounded-xl overflow-hidden glass">
            {/* Header */}
            <div className="flex items-center px-4 py-3 bg-surface/80 border-b border-surface-border gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center flex justify-center items-center gap-2 opacity-60">
                 <Terminal size={14} className="text-muted-text" />
                 <span className="text-xs font-mono text-muted-text tracking-wider">profile.ts — fredi-workspace</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-sm sm:text-base leading-loose overflow-x-auto min-h-[300px]">
              <div className="flex flex-col">
                {codeLines.slice(0, displayedLines).map((line, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex whitespace-pre"
                   >
                     <span className="text-muted-text/30 mr-4 select-none w-4 text-right inline-block">{idx + 1}</span>
                     <span dangerouslySetInnerHTML={{ __html: line }} />
                   </motion.div>
                ))}
                {displayedLines < codeLines.length && (
                   <div className="flex">
                      <span className="text-muted-text/30 mr-4 select-none w-4 text-right inline-block">{displayedLines + 1}</span>
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-2 h-5 bg-accent-cyan/50"
                      />
                   </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
