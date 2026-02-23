import { TimelineItem } from "../types/timeline.type";
import {
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaBaseballBall,
  FaIndustry,
  FaRocket
} from "react-icons/fa";

export const timelineData: TimelineItem[] = [
  {
    date: "Ene. 2026 - Feb. 2026",
    title: "Fullstack Engineer (Freelance)",
    company: "Proyectos Independientes",
    summary: "Desarrollo de aplicaciones web interactivas de alto rendimiento (SPA) y gestión del ciclo de vida del software de principio a fin.",
    achievements: [
      "Desarrollo de SPA (Single Page Application): Construí aplicaciones web interactivas utilizando React/Next.js enfocadas en una experiencia de usuario fluida y sin recargas.",
      "Apliqué técnicas de code-splitting y lazy loading para optimizar el peso de la aplicación, alcanzando una reducción del 25% en los tiempos de carga inicial en el cliente.",
      "Ciclo de Vida y Despliegue: Gestioné el desarrollo End-to-End, asegurando una transición ágil desde el entorno local hasta su despliegue en producción, garantizando estabilidad y escalabilidad."
    ],
    icon: FaLaptopCode,
    logo: "/logos/freelance-project.png"
  },
  {
    date: "Ago. 2025 - Actualidad",
    title: "Fullstack Engineer (Founding Team)",
    company: "Proyecto en Fase Pre-Seed (Stealth Mode)",
    summary: "Construcción integral de un MVP desde cero, definiendo la arquitectura técnica central y configurando la infraestructura de despliegue moderna.",
    achievements: [
      "Diseño y Desarrollo del MVP: Responsable de la construcción del producto desde cero, participando en la definición de la arquitectura técnica (React Native, NestJS, PostgreSQL) junto a los fundadores.",
      "Preparación de Infraestructura: Diseño y configuración del entorno de despliegue (Docker Compose, Vercel, Railway), dejando preparada la base para CI/CD y futuras iteraciones rápidas.",
      "Arquitectura y Calidad de Código: Implementación de principios de Clean Architecture y buenas prácticas para asegurar mantenibilidad y escalabilidad desde etapas tempranas."
    ],
    icon: FaRocket,
    logo: "/logos/stealth-startup.png"
  },
  {
    date: "Feb. 2024 - Sep. 2025",
    title: "Technical Support Engineer",
    company: "Grandstream Networks",
    summary: "Diagnóstico avanzado de redes, resolución de incidencias L3 y capacitación técnica oficial a nivel regional para LATAM.",
    achievements: [
      "Resolución de Incidencias Críticas (L3): Diagnóstico avanzado de fallos en redes y VoIP mediante análisis de paquetes (Wireshark) y logs, colaborando directamente con Ingeniería para la corrección de bugs de software.",
      "Regional Technical Enablement (LATAM): Impartí certificaciones oficiales en múltiples países como instructor técnico, capacitando a ingenieros sobre arquitecturas de red complejas.",
      "Perfeccioné mi capacidad para traducir conceptos técnicos y adaptarlos a distintos niveles de interlocutores, mejorando la comunicación entre soporte y desarrollo."
    ],
    icon: FaNetworkWired,
    logo: "/logos/grandstream.png"
  },
  {
    date: "Ago. 2023 - Abr. 2024",
    title: "Fullstack Developer",
    company: "Bob Abreu Baseball Academy",
    summary: "Desarrollo de plataformas internas para la digitalización de gestión deportiva e implementación de modelos predictivos de aprendizaje automático.",
    achievements: [
      "Automatización Administrativa: Desarrollé una plataforma interna que redujo la carga operativa manual en un 30%, digitalizando los procesos de gestión deportiva de la academia.",
      "Modelado Predictivo: Implementación de un modelo de aprendizaje automático con TensorFlow para predecir el rendimiento de los atletas.",
      "Desarrollé el flujo completo de datos, incluyendo la extracción de métricas deportivas, preprocesamiento de datos y validación del modelo de IA."
    ],
    icon: FaBaseballBall,
    logo: "/logos/baseball-academy.png"
  },
  {
    date: "Oct. 2023 - Dic. 2023",
    title: "Fullstack Developer (Contract / Proyecto Cerrado)",
    company: "Multiservicios Industriales Carabobo, C.A.",
    summary: "Creación de un sistema ERP a medida para la optimización y digitalización del control de inventarios y procesos de facturación.",
    achievements: [
      "Digitalización de Procesos: Construcción y entrega exitosa en un plazo de 3 meses de un sistema ERP completamente a medida.",
      "Eliminación de procesos manuales de control de inventarios y facturación mediante la implementación de una arquitectura robusta usando React, Express y bases de datos SQL."
    ],
    icon: FaIndustry,
    logo: "/logos/multiservicios.png"
  }
]