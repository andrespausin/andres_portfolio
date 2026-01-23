import SectionContainer from "@/shared/components/ui/SectionContainer"
import { FaGithub, FaLinkedin, FaPhone, FaMailBulk } from "react-icons/fa"
import NavItem from "../navbar/components/NavItem"

const email = "ing.andrespausin@gmail.com"

const ContactSection = () => {

  return (
    <SectionContainer>
      <section id="contacto" className="flex flex-col w-full text-start max-w-7xl mx-20 xl:mx-0">
        <div className="w-fit flex items-center gap-2 mb-2 px-4 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-white text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Disponible para trabajar
        </div>
        <p className="whitespace-nowrap text-[clamp(3rem,20vw,4rem)] md:text-[clamp(5rem,20vw,6rem)] lg:text-[clamp(5rem,14vw,6rem)] xl:text-[clamp(4.5rem,14vw,5rem)] uppercase text-white eading-[0.85] tracking-[-0.04em] font-heading font-extrabold"><span className="text-green-400">Con</span>táctame</p>

        <p className="max-w-5xl text-gray-200 mt-4 text-2xl text-justify">
          ¿Tienes un proyecto en mente o buscas un perfil Full Stack para tu equipo?
          Hablemos de cómo puedo sumar valor.
        </p>

        <div className="flex flex-row mt-10 text-white text-xl gap-4">
          <FaPhone />
          (+34) 661466765
        </div>

        <div className="flex flex-row mt-2 text-white text-xl gap-4">
          <FaMailBulk />
          ing.andrespausin@gmail.com
        </div>


        <div className="flex justify-center gap-8 mt-12">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contacto%20desde%20tu%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-white"
          >
            <NavItem>
              Escríbeme por email
            </NavItem>
          </a>
        </div>


        {/* LINKS SECUNDARIOS */}
        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://www.linkedin.com/in/césar-andrés-pausin-508b3a261"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

          <a
            href="https://github.com/andrespausin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
            GitHub
          </a>
        </div>
      </section>
    </SectionContainer>
  )
}

export default ContactSection