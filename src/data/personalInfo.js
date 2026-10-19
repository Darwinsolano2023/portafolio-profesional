// src/data/personalInfo.js
import { Briefcase, Code2, Users, Workflow } from 'lucide-react';

export const personalInfo = {
  name: "Darwin Solano Álvarez",
  title: "Ingeniero de Software",
  subtitle: "Especializado en Analítica & Big Data",
  contact: {
    email: "darwinsolano2022@gmail.com",
    phone: "+57 316 642 3014",
    location: "Bucaramanga, Santander, Colombia",
    github: "https://github.com/Darwinsolano2023",
    linkedin: "https://www.linkedin.com/in/darwin-solano-alvarez/"
  },
  stats: [
    { icon: Briefcase, number: "9+", title: "Años de experiencia profesional", description: "Trayectoria en tecnología desde 2017" },
    { icon: Code2, number: "10+", title: "Proyectos tecnológicos", description: "Software, datos y soluciones digitales" },
    { icon: Users, number: "5+", title: "Tecnologías principales", description: "Desarrollo, datos y cloud" },
    { icon: Workflow, number: "", title: "Full Stack", description: "Web, móvil, APIs e ingeniería de datos" }
  ],
  about: {
    paragraph1: "Ingeniero de Software y Especialista en Big Data, con experiencia en desarrollo de soluciones digitales, ingeniería de datos, automatización de procesos y analítica de negocio. Especializado en el diseño e integración de sistemas, desarrollo de aplicaciones web y móviles, construcción de pipelines ETL y creación de dashboards estratégicos para transformar datos en información de valor para la toma de decisiones.",
    paragraph2: "Experiencia en liderazgo de equipos y gestión de proyectos tecnológicos, orientado a la optimización de procesos, la eficiencia operativa y la mejora continua. Combino visión analítica, capacidad técnica y enfoque en resultados para desarrollar soluciones escalables, confiables y alineadas con los objetivos del negocio."
  }
};