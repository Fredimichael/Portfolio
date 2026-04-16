"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [active, setActive] = useState("navHome");

  const links = [
    { id: "navHome", name: t.navHome, href: "#" },
    { id: "navStack", name: t.navStack, href: "#stack" },
    { id: "navProjects", name: t.navProjects, href: "#projects" },
    { id: "navTerminal", name: t.navTerminal, href: "#terminal" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    setActive(id);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className="fixed top-0 flex justify-center w-full z-40 p-4 pointer-events-none"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 pointer-events-auto rounded-full border border-surface-border glass">

        {/* Left: Branding */}
        <div className="flex-1 flex items-center">
          <Link href="#" className="font-mono text-primary-text font-bold tracking-tight hover:text-accent-cyan transition-colors">
            {"<Fredi />"}
          </Link>
        </div>

        {/* Center: Segmented Links */}
        <nav className="hidden md:flex flex-none items-center p-1 bg-surface/80 rounded-full border border-surface-border">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, link.id)}
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                active === link.id ? "text-bg" : "text-muted-text hover:text-primary-text"
              )}
            >
              {active === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary-text rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Status & Social & Lang */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          <button
            onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            className="font-mono text-[10px] uppercase text-muted-text hover:text-accent-cyan transition-colors px-2 py-1 rounded border border-transparent hover:border-surface-border"
          >
            lang: {language}
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="font-mono text-[10px] text-accent-green uppercase tracking-wider">System Online</span>
          </div>
          <Link href="https://github.com/Fredimichael" target="_blank" className="p-2 rounded-full hover:bg-surface transition-colors border border-transparent hover:border-surface-border text-muted-text hover:text-primary-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.12-.34 6.4-1.51 6.4-6.98 0-1.5-.5-2.7-1.4-3.7.14-.35.6-1.7 1-3.6 0 0-1.2-.3-3.9 1.5a13.2 13.2 0 0 0-7 0C6.2 1.6 5 1.9 5 1.9c-.6 1.9-.1 3.2.1 3.6A5.4 5.4 0 0 0 3.6 9c0 5.4 3.3 6.6 6.4 7-1 .8-1.4 2-1.4 3.7v8" />
              <path d="M9 20c-4.1 1.4-6-2-6-2" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
