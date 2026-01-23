import { TimelineItem } from "../types/timeline.type";
import {
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaMobileAlt
} from "react-icons/fa";

export const timelineData: TimelineItem[] = [
  {
    date: "Sep 2025 - Actualidad",
    title: "Frontend Developer",
    company: "Aplicación Mobile (Proyecto Personal)",
    summary:
      "Aplicación móvil enfocada en experiencia de usuario y arquitectura escalable.",
    achievements: [
      "Desarrollé la interfaz móvil utilizando Angular e Ionic, priorizando UX fluida e intuitiva",
      "Implementé autenticación de usuarios y notificaciones push",
      "Integré APIs REST desarrolladas en Node.js para manejo de datos en tiempo real",
      "Diseñé una arquitectura modular con bases de datos SQL y reutilización de componentes"
    ],
    icon: FaMobileAlt,
    logo: "/logos/personal-project.png"
  },
  {
    date: "Feb 2024 - Sep 2025",
    title: "Ingeniero de Soporte",
    company: "Grandstream Networks LATAM",
    summary:
      "Soporte técnico especializado en telecomunicaciones y redes con enfoque en automatización y análisis de datos.",
    achievements: [
      "Brindé soporte especializado en PBX, routers, switches y teléfonos SIP",
      "Desarrollé scripts en Python y colecciones de Postman para integración con APIs de PBX",
      "Generé reportes y análisis de datos de llamadas para clientes empresariales",
      "Realicé diagnóstico avanzado de fallas utilizando Wireshark y análisis de paquetes",
      "Impartí certificaciones internacionales de Comunicaciones Unificadas y Networking en LATAM"
    ],
    icon: FaNetworkWired,
    logo: "/logos/grandstream.png"
  },
  {
    date: "Ago 2023 - Abr 2024",
    title: "Full Stack Developer",
    company: "Bob Abreu Baseball Academy",
    summary:
      "Sistema web para la gestión administrativa, deportiva y de salud de atletas.",
    achievements: [
      "Desarrollé backend con Node.js y Express.js y frontend con React.js",
      "Diseñé y gestioné base de datos relacional MySQL para manejo de información crítica",
      "Integré modelos de machine learning para proyección de rendimiento deportivo",
      "Automaticé procesos administrativos, mejorando la eficiencia operativa de la academia"
    ],
    icon: FaLaptopCode,
    logo: "/logos/bob-abreu-academy.png"
  },
  {
    date: "Oct 2023 - Dic 2023",
    title: "Full Stack Developer",
    company: "Servicio de Inventario de Autolavado C.A.",
    summary:
      "Aplicación web para control de inventario, servicios y contabilidad.",
    achievements: [
      "Desarrollé una aplicación web full stack con Node.js, Express.js y React.js",
      "Implementé base de datos SQL utilizando XAMPP",
      "Optimicé el registro y control de inventario y servicios",
      "Mejoré la gestión operativa y la toma de decisiones del negocio"
    ],
    icon: FaCode,
    logo: "/logos/autolavado.png"
  }

];