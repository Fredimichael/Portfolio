"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const initialLines = [
  "> system.lang.request()",
  "> Select interface language / Seleccione idioma:",
];

const postLines = [
  "> loading core modules... [OK]",
  "> Welcome, User.",
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const { setLanguage, language } = useLanguage();
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [postDisplayedLines, setPostDisplayedLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  // Allow bypassing if already loaded language previously
  // If we want it to show EVERY time, we comment this out. The prompt says "It MUST pause and display... Only AFTER clicking a language..." so it should probably show every time or only if language is null. The prompt says "It MUST pause and display", implying it runs. We'll show it every time for the aesthetic unless language is somehow already set but even then it's cool. Actually let's just run it if `language === null`, because it sets the preferred language. The user says "Save user preference in localStorage." This implies if there's a preference we might skip this. But wait, we want the cool boot animation.
  // Let's just always show the boot animation, but if we already have a language, we still ask or we can auto-continue? "It MUST pause and display". We will pause and display.

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < initialLines.length) {
        setDisplayedLines(currentLine + 1);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsWaitingForInput(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageSelect = (lang: "EN" | "ES") => {
    setLanguage(lang);
    setIsWaitingForInput(false);

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < postLines.length) {
        setPostDisplayedLines(currentLine + 1);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 300);
      }
    }, 150); // fast typing sequence
  };

  if (!isVisible && displayedLines + postDisplayedLines === initialLines.length + postLines.length + 1) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isVisible ? { y: 0 } : { y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex flex-col bg-bg text-accent-green font-mono p-8 text-sm sm:text-base ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="flex flex-col gap-2">
        {initialLines.slice(0, displayedLines).map((line, idx) => (
          <motion.div key={`init-${idx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex">
            {line}
          </motion.div>
        ))}

        {isWaitingForInput && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 mt-4 ml-4">
            <button
              onClick={() => handleLanguageSelect("EN")}
              className="px-4 py-1 border border-accent-green hover:bg-accent-green hover:text-bg transition-colors"
            >
              [ EN ]
            </button>
            <button
              onClick={() => handleLanguageSelect("ES")}
              className="px-4 py-1 border border-accent-green hover:bg-accent-green hover:text-bg transition-colors"
            >
              [ ES ]
            </button>
          </motion.div>
        )}

        {postLines.slice(0, postDisplayedLines).map((line, idx) => (
          <motion.div key={`post-${idx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex mt-2">
            {line}
          </motion.div>
        ))}

        {(displayedLines < initialLines.length || (!isWaitingForInput && postDisplayedLines < postLines.length)) && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-3 h-5 bg-accent-green ml-2 mt-[2px]"
          />
        )}
      </div>
    </motion.div>
  );
}
