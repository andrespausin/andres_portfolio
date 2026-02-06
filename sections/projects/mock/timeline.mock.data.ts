import { TimelineItem } from "../types/timeline.type";
import {
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaMobileAlt
} from "react-icons/fa";

export const timelineData: TimelineItem[] = [
  {
    date: "Sep 2025 - Ene 2026",
    title: "Frontend Developer",
    company: "Aplicación Mobile (Proyecto Personal)",
    summary:
      "Desarrollo integral de una solución móvil híbrida de alto rendimiento, centrada en la optimización de recursos y una experiencia de usuario nativa.",
    achievements: [
      "Diseñé una interfaz móvil de alto impacto utilizando Angular e Ionic, implementando Lazy Loading para reducir los tiempos de carga en un 30%.",
      "Robustecí la seguridad mediante la implementación de autenticación JWT y sistemas de notificaciones push personalizadas con Firebase.",
      "Consumí y optimicé APIs REST desarrolladas en Node.js, garantizando la sincronización de datos en tiempo real mediante WebSockets.",
      "Arquitecturé el sistema bajo una estructura modular de componentes, facilitando el mantenimiento y la escalabilidad de la aplicación."
    ],
    icon: FaMobileAlt,
    logo: "/logos/personal-project.png"
  },
  {
    date: "Feb 2024 - Sep 2025",
    title: "Ingeniero de Soporte",
    company: "Grandstream Networks LATAM",
    summary:
      "Especialista en infraestructura de redes y telecomunicaciones, liderando la resolución de incidentes críticos y la capacitación técnica a nivel regional.",
    achievements: [
      "Gestioné la infraestructura de redes complejas (VLANs, QoS, VPNs) integrando routers, switches y sistemas de telefonía IP empresarial.",
      "Automaticé flujos de trabajo mediante scripts en Python y entornos de prueba en Postman, agilizando la integración de sistemas VoIP con CRMs externos.",
      "Lideré el análisis forense de tráfico de red con Wireshark para identificar cuellos de botella y resolver vulnerabilidades de seguridad en el protocolo SIP.",
      "Actué como instructor certificado, capacitando a más de 200 ingenieros en LATAM (México, Panamá, Costa Rica, El Salvador y Ecuador) sobre soluciones de Comunicaciones Unificadas y Networking avanzado.",
      "Desarrollé dashboards de análisis de datos para monitorizar la calidad de servicio (QoS) y el rendimiento de tráfico de voz sobre IP."
    ],
    icon: FaNetworkWired,
    logo: "/logos/grandstream.png"
  },
  {
    date: "Ago 2023 - Abr 2024",
    title: "Full Stack Developer",
    company: "Bob Abreu Baseball Academy",
    summary:
      "Digitalización y automatización de procesos para una academia de alto rendimiento, integrando análisis predictivo para la toma de decisiones.",
    achievements: [
      "Lideré el desarrollo Full Stack (React/Node.js) de una plataforma centralizada que redujo el uso de papel y errores manuales en un 80%.",
      "Modelé y optimicé esquemas de bases de datos en MySQL para gestionar perfiles biométricos, estadísticas de juego e historias clínicas de atletas.",
      "Colaboré en la integración de algoritmos de Machine Learning para predecir el potencial de crecimiento y rendimiento de prospectos deportivos.",
      "Implementé un panel administrativo con visualización de datos dinámica (Charts.js/Recharts) para el seguimiento en tiempo real del progreso físico."
    ],
    icon: FaLaptopCode,
    logo: "/logos/bob-abreu-academy.png"
  },
  {
    date: "Oct 2023 - Dic 2023",
    title: "Full Stack Developer",
    company: "Servicio de Inventario de Autolavado C.A.",
    summary:
      "Creación de una herramienta de gestión contable y operativa para la optimización de inventarios y flujo de caja.",
    achievements: [
      "Construí una SPA (Single Page Application) intuitiva con React.js, permitiendo una gestión de inventario fluida desde cualquier dispositivo.",
      "Desarrollé un motor de búsqueda y filtrado avanzado en el backend con Express.js, mejorando la velocidad de auditoría de stock.",
      "Diseñé reportes contables automatizados que facilitaron el cierre de caja diario y el control de mermas de productos químicos.",
      "Configuré y desplegué el entorno de servidor local asegurando la integridad de los datos financieros mediante backups programados."
    ],
    icon: FaCode,
    logo: "/logos/autolavado.png"
  }
];