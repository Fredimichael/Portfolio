"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ES" | "EN";

interface Dictionary {
  heroHeadline: string;
  heroRole: string;
  heroSubheadline: string;
  bootPrompt: string;
  navHome: string;
  navStack: string;
  navProjects: string;
  navTerminal: string;
  actionVisit: string;
}

const dictionaries: Record<Language, Dictionary> = {
  ES: {
    heroHeadline: "Construyendo Sistemas Escalables.",
    heroRole: "Desarrollador Frontend & Full-Stack",
    heroSubheadline: "Especializado en transformar lógica compleja en experiencias digitales fluidas.",
    bootPrompt: "Seleccione idioma",
    navHome: "Inicio",
    navStack: "Stack",
    navProjects: "Proyectos",
    navTerminal: "Consola",
    actionVisit: "Visitar",
  },
  EN: {
    heroHeadline: "Building Scalable Systems.",
    heroRole: "Frontend & Full-Stack Developer",
    heroSubheadline: "Specialized in transforming complex logic into seamless digital experiences.",
    bootPrompt: "Select interface language",
    navHome: "Home",
    navStack: "Stack",
    navProjects: "Projects",
    navTerminal: "Terminal",
    actionVisit: "Visit",
  },
};

interface LanguageContextProps {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Use null initially so we know whether it has been initialized
  const [language, setLanguageState] = useState<Language | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") as Language | null;
    if (storedLang === "ES" || storedLang === "EN") {
      setLanguageState(storedLang);
    } else {
      // Don't auto-set fallback immediately if we want the boot prompt to handle it.
      // Or we can leave it null until selected in the boot sequence.
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  const t = language ? dictionaries[language] : dictionaries["ES"]; // default to ES while null

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
