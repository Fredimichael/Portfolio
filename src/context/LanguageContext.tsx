"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ES" | "EN";

export interface ProjectData {
  title: string;
  status: string;
  url: string;
  description: string;
  tech: string[];
  laptopImage: string;
  mobileImage: string;
}

export interface ExperienceData {
  commit: string;
  date: string;
  title: string;
  institution: string;
  details: string;
}

export interface Dictionary {
  heroHeadline: string;
  heroRole: string;
  heroSubheadline: string;
  heroCodeLines: string[];
  
  bootPrompt: string;
  
  navHome: string;
  navStack: string;
  navProjects: string;
  navTerminal: string;
  actionVisit: string;
  actionResume: string;

  projectsList: ProjectData[];
  experienceTitle: string;
  experienceList: ExperienceData[];

  footerTerminalPrompt: string;
}

const dictionaries: Record<Language, Dictionary> = {
  ES: {
    heroHeadline: "Construyendo Sistemas Escalables.",
    heroRole: "Desarrollador Frontend & Full-Stack",
    heroSubheadline: "Especializado en transformar lógica compleja en experiencias digitales fluidas.",
    heroCodeLines: [
      '<span class="text-[#c678dd]">const</span> <span class="text-[#e5c07b]">developer</span> <span class="text-[#56b6c2]">=</span> {',
      '  <span class="text-[#e06c75]">name:</span> <span class="text-[#98c379]">"Fredi (Michael) Roa"</span>,',
      '  <span class="text-[#e06c75]">role:</span> <span class="text-[#98c379]">"Desarrollador Frontend & Full-Stack"</span>,',
      '  <span class="text-[#e06c75]">location:</span> <span class="text-[#98c379]">"Juan José Castelli, Chaco, Argentina"</span>,',
      '  <span class="text-[#e06c75]">stack:</span> [<span class="text-[#98c379]">"React"</span>, <span class="text-[#98c379]">"Next.js"</span>, <span class="text-[#98c379]">"React Native"</span>, <span class="text-[#98c379]">"Node.js"</span>, <span class="text-[#98c379]">"NestJS"</span>, <span class="text-[#98c379]">"PostgreSQL"</span>],',
      '  <span class="text-[#e06c75]">education:</span> {',
      '    <span class="text-[#e06c75]">university:</span> <span class="text-[#98c379]">"UNCAUS (C++)"</span>,',
      '    <span class="text-[#e06c75]">bootcamp:</span> <span class="text-[#98c379]">"Coderhouse (Frontend & Mobile)"</span>',
      '  },',
      '  <span class="text-[#e06c75]">flagship_project:</span> <span class="text-[#98c379]">"plastimundoleandro.com.ar"</span>,',
      '  <span class="text-[#e06c75]">status:</span> <span class="text-[#98c379]">"Disponible para desarrollo"</span>,',
      '};'
    ],
    bootPrompt: "Seleccione idioma",
    navHome: "Inicio",
    navStack: "Stack",
    navProjects: "Proyectos",
    navTerminal: "Consola",
    actionVisit: "Visitar",
    actionResume: "Descargar CV",
    
    projectsList: [
      {
        title: "Plastimundo Leandro",
        status: "Live / Production",
        url: "https://plastimundoleandro.com.ar",
        description: "Sistema de catálogo dinámico y gestión de inventario autoadministrable. Desarrollo end-to-end con frontend moderno y API robusta para el CRUD de productos.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
        laptopImage: "/images/Plastimundo-laptop.webp",
        mobileImage: "/images/plastimundo-mobil.webp",
      },
      {
        title: "Yuyito Hierbas",
        status: "Deployed",
        url: "https://yuyito-hierbas.vercel.app",
        description: "Plataforma de e-commerce full-stack orientada a la gestión de ventas y diseño limpio.",
        tech: ["TypeScript", "Next.js", "Tailwind"],
        laptopImage: "/images/yuyitohierbas-laptop.webp",
        mobileImage: "/images/yuyitohierbas-mobil.webp",
      },
      {
        title: "S-ira / appecommerce",
        status: "Deployed",
        url: "https://sairajoyas.vercel.app",
        description: "Arquitecturas web modernas y aplicaciones enfocadas en el rendimiento y tipado estricto.",
        tech: ["TypeScript", "React", "Node.js"],
        laptopImage: "/images/sairajoyas-laptop.webp",
        mobileImage: "/images/sairajoyas-mobil.webp",
      },
      {
        title: "Estudio Creativo",
        status: "Deployed",
        url: "https://estudio-creativo.vercel.app",
        description: "Desarrollo de landing pages dinámicas y optimizadas para clientes locales. Enfoque en marketing digital.",
        tech: ["HTML", "CSS", "JavaScript"],
        laptopImage: "/images/estudiocreativo-laptop.webp",
        mobileImage: "/images/estudiocreativo-mobil.webp",
      },
      {
        title: "Salón Martina",
        status: "Deployed",
        url: "#",
        description: "Presencia web para salón de belleza con catálogo de servicios y turnos. Diseño moderno y rápido.",
        tech: ["Next.js", "Tailwind", "Vercel"],
        laptopImage: "/images/salonmartina-laptop.webp",
        mobileImage: "/images/salonmartina-mobil.webp",
      }
    ],

    experienceTitle: "$ git log --oneline",
    experienceList: [
      {
        commit: "release: v1.4.0",
        date: "Mayo 2024",
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
    ],

    footerTerminalPrompt: "Escribe 'contact' para enviarme un mensaje directo, o simplemente encuéntrame aquí abajo.",
  },
  
  EN: {
    heroHeadline: "Building Scalable Systems.",
    heroRole: "Frontend & Full-Stack Developer",
    heroSubheadline: "Specialized in transforming complex logic into seamless digital experiences.",
    heroCodeLines: [
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
    ],
    bootPrompt: "Select interface language",
    navHome: "Home",
    navStack: "Stack",
    navProjects: "Projects",
    navTerminal: "Terminal",
    actionVisit: "Visit",
    actionResume: "Download Resume",
    
    projectsList: [
      {
        title: "Plastimundo Leandro",
        status: "Live / Production",
        url: "https://plastimundoleandro.com.ar",
        description: "Dynamic catalog system and self-managed inventory dashboard. End-to-end development spanning a modern frontend to a robust CRUD-focused API.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
        laptopImage: "/images/Plastimundo-laptop.webp",
        mobileImage: "/images/plastimundo-mobil.webp",
      },
      {
        title: "Yuyito Hierbas",
        status: "Deployed",
        url: "https://yuyito-hierbas.vercel.app",
        description: "Full-stack e-commerce platform oriented towards sales management and clean visual design.",
        tech: ["TypeScript", "Next.js", "Tailwind"],
        laptopImage: "/images/yuyitohierbas-laptop.webp",
        mobileImage: "/images/yuyitohierbas-mobil.webp",
      },
      {
        title: "S-ira / appecommerce",
        status: "Deployed",
        url: "https://sairajoyas.vercel.app",
        description: "Modern web architectures and applications heavily focused on rendering performance and strict typing.",
        tech: ["TypeScript", "React", "Node.js"],
        laptopImage: "/images/sairajoyas-laptop.webp",
        mobileImage: "/images/sairajoyas-mobil.webp",
      },
      {
        title: "Estudio Creativo",
        status: "Deployed",
        url: "https://estudio-creativo.vercel.app",
        description: "Development of fully responsive, SEO-optimized dynamic landing pages for local digital marketing clients.",
        tech: ["HTML", "CSS", "JavaScript"],
        laptopImage: "/images/estudiocreativo-laptop.webp",
        mobileImage: "/images/estudiocreativo-mobil.webp",
      },
      {
        title: "Salón Martina",
        status: "Deployed",
        url: "#",
        description: "Web presence for a beauty salon featuring a fast service catalog and scalable appointment architecture.",
        tech: ["Next.js", "Tailwind", "Vercel"],
        laptopImage: "/images/salonmartina-laptop.webp",
        mobileImage: "/images/salonmartina-mobil.webp",
      }
    ],

    experienceTitle: "$ git log --oneline",
    experienceList: [
      {
        commit: "release: v1.4.0",
        date: "May 2024",
        title: "Flex Application Development",
        institution: "Coderhouse",
        details: "React Native, Expo CLI, iOS/Android."
      },
      {
        commit: "release: v1.3.0",
        date: "Feb 2024",
        title: "Frontend React Development",
        institution: "Coderhouse",
        details: "React.js, Firebase, NPM, UI integrations."
      },
      {
        commit: "release: v1.1.0",
        date: "Nov 2023",
        title: "Web Development & JavaScript",
        institution: "Coderhouse",
        details: "HTML5, CSS, SASS, Bootstrap, Git, GitHub."
      },
      {
        commit: "init: base_logic",
        date: "2018 - 2023",
        title: "C++ Fundamentals",
        institution: "Universidad Nacional del Chaco Austral (UNCAUS)",
        details: "Algorithmic logic and object-oriented programming methodologies."
      }
    ],

    footerTerminalPrompt: "Type 'contact' to send me a direct message, or easily find me below.",
  },
};

interface LanguageContextProps {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") as Language | null;
    if (storedLang === "ES" || storedLang === "EN") {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  const t = language ? dictionaries[language] : dictionaries["ES"];

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
