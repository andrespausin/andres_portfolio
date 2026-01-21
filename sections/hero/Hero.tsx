"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "@/shared/components/ui/SectionContainer";
import Heading from "@/shared/components/ui/Heading";
import Image from "next/image";
import Subheading from "@/shared/components/ui/Subheading";
import NavItem from "@/sections/navbar/components/NavItem";
import Link from "next/link";

const Hero = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textAOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const textBOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <SectionContainer ref={ref}>
      <div id="about" className="w-full max-w-7xl mx-auto px-25 mt-100 md:-mt-50 lg:px-0 xl:-mt-50">
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-3 xl:items-start items-center h-full">
          <div className="relative lg:col-span-2 lg:mt-50">
            <motion.div
              className="flex flex-col text-white text-center items-center pt-40 mx-auto lg:items-start lg:text-start lg:justify-start lg:pt-0 lg:mx-0 "
              style={{ opacity: textAOpacity }}
            >
              <Heading content="CÉSAR PAUSIN" className="whitespace-nowrap text-[clamp(5rem,20vw,6rem)] md:text-[clamp(5rem,20vw,6rem)] lg:text-[clamp(5rem,14vw,8rem)] xl:text-[clamp(6rem,14vw,7rem)]" />
              <Subheading content="FULLSTACK ENGINEER" className="whitespace-nowrap text-[clamp(1.5rem,12vw,3rem)] md:text-[clamp(4rem,8vw,5rem)] lg:text-[clamp(2rem,14vw, 5rem)] xl:text-[clamp(3.1rem,14vw,4.3rem)] " />
              <p className="font-space-grotesk text-[clamp(0.5rem,10vw,1.5rem)] mt-4 md:text-[clamp(0.5rem,6vw,1.75rem)] lg:text-[clamp(1.7rem,6vw,2.53rem)] xl:text-[clamp(0.5rem,6vw,2.2rem)] font-extrabold text-white tracking-tighter xl:whitespace-nowrap">
                <span className="pl-3 block leading-[0.85] tracking-[-0.04em] font-extrabold">
                  Desarrollando soluciones
                  <span className="text-green-400"> escalables </span>
                  y
                  <span className="text-green-400"> eficientes</span>
                </span>
              </p>
              <div className="font-space-grotesk w-fit mt-4 px-4">
                <Link href="/projects">
                  <NavItem>Ver Proyectos</NavItem>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col w-full items-center justify-center mx-auto text-white pointer-events-none gap-5 max-w-xl lg:w-full text-2xl font-space-grotesk"
              style={{ opacity: textBOpacity }}
            >
              <NavItem>Sobre mi</NavItem>
              <p className="text-xl font-light text-justify"><span className="font-extrabold text-green-400">Full Stack Developer</span> con experiencia en <span className="font-bold text-green-400">Node.js</span>, <span className="font-bold text-green-400">React.js</span> y <span className="font-bold text-green-400">SQL</span>. He liderado proyectos con APIs y machine learning, creando soluciones escalables y eficientes. Apasionado por la innovación y el aprendizaje continuo, aporto resolución de problemas y enfoque en resultados en equipos ágiles.</p>
            </motion.div>
          </div>

          {/* COLUMNA IMAGEN */}
          <div className="absoluteflex justify-center lg:justify-end lg:col-span-1">
            <div className="max-w-s md:max-w-md scale-125 md:scale-140 lg:scale-150 xl:scale-125 xl:origin-bottom rounded-2xl overflow-hidden transition-transform duration-500 min-h-50">
              <Image
                src="/foto-perfil.png"
                alt="Ing. Cesar Pausin"
                width={1000}
                height={1000}
                priority
                className="w-full h-auto object-contain mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]"
              />
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
