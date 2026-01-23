"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaMobileAlt
} from "react-icons/fa";

// Datos de tu trayectoria
const timelineData = [
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

const VerticalTimeline = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);



  return (
    <section id="trayectoria" className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto relative">

        {/* LÍNEA CENTRAL */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500 hidden md:block" />

        <div className="space-y-24"> {/* Aumenté el espacio para que no se amontonen */}
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full mb-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* 1. TARJETA DE CONTENIDO */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setIsOpen(isOpen == index ? null : index)}
                  className="w-full md:w-[45%]" // Usamos 45% para dejar aire con la línea
                >
                  <div className={`bg-neutral-950/60 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all shadow-xl hover:scale-105 ${isLeft ? "md:text-right" : "md:text-left"
                    } cursor-pointer`}>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                      {item.date}
                    </span>
                    <p className="text-gray-400 font-medium mb-4">{item.company}</p>
                    <p className="text-gray-300 text-sm mb-3">{item.summary}</p>
                    <ul className="list-disc list-inside text-white font-semibold text-sm space-y-1">
                      <AnimatePresence>
                        {isOpen === index && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="list-disc list-inside text-gray-400 text-sm space-y-1 overflow-hidden"
                          >
                            {item.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </ul>
                  </div>
                </motion.div>

                {/* 2. PUNTO CENTRAL (Siempre fijo en el medio) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <item.icon className="text-white text-sm" />
                  </div>
                </div>

                {/* 3. ESPACIADOR (Ocupa el otro 45% del lado vacío) */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;