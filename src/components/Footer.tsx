"use client";

import { useState, useRef, useEffect } from "react";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      if (command === "contact" || command === "contacto") {
        window.location.href = "mailto:fredymr00@gmail.com";
        setInput("");
      }
    }
  };

  return (
    <footer className="pt-24 pb-12 relative border-t border-surface-border mt-12 bg-bg" id="terminal">
      <div className="container mx-auto px-4 max-w-4xl" onClick={focusInput}>
        
        <div className="w-full bg-surface border border-surface-border rounded-xl overflow-hidden glass shadow-2xl">
           {/* Terminal Header */}
           <div className="flex items-center px-4 py-2 bg-surface-border/50 border-b border-surface-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-surface-border"></div>
                <div className="w-3 h-3 rounded-full bg-surface-border"></div>
                <div className="w-3 h-3 rounded-full bg-surface-border"></div>
              </div>
           </div>

           {/* Terminal Body */}
           <div className="p-6 md:p-8 font-mono text-sm sm:text-base cursor-text h-64 flex flex-col justify-end">
              <div className="mb-6 flex flex-col gap-2">
                 <p className="text-muted-text">{t.footerTerminalPrompt}</p>
                 <div className="flex flex-wrap gap-4 mt-2">
                    <a href="https://github.com/Fredimichael" target="_blank" rel="noreferrer" className="text-primary-text hover:text-accent-cyan transition-colors underline decoration-surface-border underline-offset-4">
                      github.com/Fredimichael
                    </a>
                    <a href="https://ar.linkedin.com/in/fredi-roa-799101331" target="_blank" rel="noreferrer" className="text-primary-text hover:text-accent-cyan transition-colors underline decoration-surface-border underline-offset-4">
                      linkedin.com/in/fredi-roa
                    </a>
                    <a href="mailto:fredymr00@gmail.com" className="text-primary-text hover:text-accent-cyan transition-colors underline decoration-surface-border underline-offset-4">
                      fredymr00@gmail.com
                    </a>
                 </div>
              </div>

              <div className="flex items-center">
                 <span className="text-accent-green mr-2 shrink-0">fredi@server:~$ ./contact.sh</span>
                 <input 
                    ref={inputRef}
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-primary-text flex-1 caret-accent-cyan"
                    spellCheck={false}
                    autoComplete="off"
                 />
              </div>
           </div>
        </div>

        <div className="mt-12 text-center text-xs font-mono text-muted-text">
          Built with Next.js & Tailwind. Deployed on Vercel.
        </div>
      </div>
    </footer>
  );
}
