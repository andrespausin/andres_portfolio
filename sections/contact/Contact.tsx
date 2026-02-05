import SectionContainer from "@/shared/components/ui/SectionContainer";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa"; // Cambié FaMailBulk por FaEnvelope que es más limpio, pero puedes usar el que gustes
import NavItem from "../navbar/components/NavItem";

const email = "ing.andrespausin@gmail.com";

const ContactSection = () => {
  return (
    <SectionContainer>
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full">

        <section id="contacto" className="flex flex-col w-full items-center xl:items-start">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-white text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Disponible para trabajar
          </div>
          <h2 className="font-heading font-extrabold uppercase text-3xl md:text-6xl lg:text-7xl tracking-tighter leading-none mb-6">
            <span className="text-green-400">Con</span>
            <span className="text-white">táctame</span>
          </h2>
          <p className="max-w-2xl text-gray-300 mt-2 text-lg md:text-xl lg:text-xl leading-relaxed text-center xl:text-left">
            ¿Tienes un proyecto en mente o buscas un perfil Full Stack para tu equipo?
            Hablemos de cómo puedo sumar valor.
          </p>
          <div className="flex flex-col gap-4 mt-10 w-full sm:w-auto">
            <a
              href="tel:+34661466765"
              className="flex items-center gap-4 text-white hover:text-green-400 transition-colors group w-fit"
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-green-400/10 transition-colors">
                <FaPhone size={20} className="text-green-400" />
              </div>
              <span className="text-md md:text-xl font-space-grotesk">(+34) 661 466 765</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 text-white hover:text-green-400 transition-colors group w-fit"
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-green-400/10 transition-colors">
                <FaEnvelope size={20} className="text-green-400" />
              </div>
              <span className="text-lg md:text-xl font-space-grotesk break-all">{email}</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 w-full text-white">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contacto%20desde%20tu%20portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <NavItem>
                Escríbeme por email
              </NavItem>
            </a>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/cesarpausin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:scale-105 transition duration-300"
              >
                <FaLinkedin size={24} />
                <span className="text-lg hidden sm:block">LinkedIn</span>
              </a>
              <a
                href="https://github.com/andrespausin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:scale-105 transition duration-300"
              >
                <FaGithub size={24} />
                <span className="text-lg hidden sm:block">GitHub</span>
              </a>
            </div>
          </div>

        </section>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;