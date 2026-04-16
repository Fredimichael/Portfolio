"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
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
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-16">

          <div className="flex flex-col items-start">
            <h2 className="font-mono text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <span className="text-muted-text">~/projects</span> (main)
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-2xl bg-surface/40 border border-surface-border flex flex-col xl:flex-row transition-all duration-300 hover:border-accent-cyan/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.06)]"
              >
                {/* Visual Area (Massive Cover) - Left/Top */}
                <div className="relative w-full xl:w-[65%] min-h-[400px] sm:min-h-[500px] overflow-hidden flex items-center justify-center">

                  {/* Laptop floating (Scaled up to remove extra space from PNG) */}
                  <motion.div
                    className="relative w-[130%] sm:w-[110%] max-w-[800px] aspect-[10/10] z-10 -ml-16 sm:ml-0"
                    style={{ position: 'relative' }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      src={project.laptopImage}
                      alt={`${project.title} Laptop`}
                      className="absolute inset-0 w-full h-full object-cover scale-150 md:scale-125 lg:scale-110 drop-shadow-2xl"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Mobile floating side-by-side (Scaled up) */}
                  <motion.div
                    className="absolute right-[-5%] sm:right-[5%] md:right-[5%] bottom-[-5%] w-[45%] sm:w-[35%] max-w-[300px] aspect-[9/19] z-20 transition-transform"
                    style={{ position: 'absolute' }}
                    initial={{ y: 20 }}
                    whileHover={{ y: -20, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={project.mobileImage}
                      alt={`${project.title} Mobile`}
                      className="absolute inset-0 w-full h-full object-cover scale-125 drop-shadow-2xl"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Glassmorphism Hover Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 pointer-events-none">
                    <Link href={project.url} target="_blank" className="pointer-events-auto flex items-center gap-2 px-8 py-3 rounded-full bg-surface/90 backdrop-blur-xl border border-surface-border text-primary-text font-mono text-lg font-bold shadow-2xl hover:text-accent-cyan hover:border-accent-cyan/50 transition-all hover:scale-105 active:scale-95">
                      {t.actionVisit} <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>

                {/* Content Area - Right/Bottom */}
                <div className="w-full xl:w-[35%] p-8 lg:p-12 flex flex-col justify-center border-t xl:border-t-0 xl:border-l border-surface-border bg-surface/80 backdrop-blur-sm z-10 relative">

                  {/* Window Controls */}
                  <div className="absolute top-6 left-8 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-text mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-text group-hover:to-accent-cyan transition-all duration-300">
                      {project.title}
                    </h3>

                    <a href={project.url} target="_blank" className="inline-block font-mono text-xs text-accent-cyan/80 hover:text-accent-cyan hover:underline underline-offset-4 mb-6">
                      {new URL(project.url.startsWith('http') ? project.url : 'http://localhost').hostname}
                    </a>

                    <p className="text-base text-muted-text leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-primary-text/80 bg-bg px-3 py-1.5 rounded-md border border-surface-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
