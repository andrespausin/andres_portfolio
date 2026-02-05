"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "@/shared/components/ui/SectionContainer";
import Heading from "@/shared/components/ui/Heading";
import Image from "next/image";
import NavItem from "@/sections/navbar/components/NavItem";

const Hero = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const titlePointerEvents = useTransform(scrollYProgress, (v) => (v > 0.5 ? "none" : "auto"));

  const aboutOpacity = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
  const aboutY = useTransform(scrollYProgress, [0.4, 0.5], [30, 0]);
  const aboutPointerEvents = useTransform(scrollYProgress, (v) => (v < 0.5 ? "none" : "auto"));

  return (
    <SectionContainer ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 h-full grid grid-cols-1 xl:grid-cols-12 items-center pb-20 xl:pb-0">
          <div className="relative xl:col-span-7 h-full flex flex-col justify-start xl:justify-center order-2 xl:order-1 xl:pb-24">
            <motion.div
              className="relative z-10 flex flex-col text-center lg:text-left items-center xl:items-start"
              style={{ opacity: titleOpacity, y: titleY, pointerEvents: titlePointerEvents }}
            >
              <Heading
                content="CÉSAR PAUSIN"
                className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.8rem] tracking-tighter leading-[0.9] lg:whitespace-nowrap text-white"
              />
              <h2
                className="font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.3rem] tracking-tight text-transparent leading-tight mt-2 lg:whitespace-nowrap"
                style={{ WebkitTextStroke: "1px white" }}
              >
                FULLSTACK ENGINEER
              </h2>
              <p className="font-inter font-extrabold text-white tracking-tighter text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 max-w-lg lg:max-w-none leading-tight">
                <span className="block -mt-5 lg:mt-0">
                  Desarrollando soluciones
                  <span className="text-green-400"> escalables </span> y <span className="text-green-400"> eficientes</span>
                </span>
              </p>
              <div className="mt-8">
                <a href="/cv.pdf" className="inline-block hover:scale-105 transition-transform duration-300 text-white">
                  <NavItem>Descargar CV</NavItem>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center xl:items-start justify-start xl:justify-center z-20 text-white text-sm md:text-lg lg:text-xl"
              style={{ opacity: aboutOpacity, y: aboutY, pointerEvents: aboutPointerEvents }}
            >
              <NavItem>Sobre mi</NavItem>
              <div className="bg-black/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border mt-5 border-white/10 max-w-xl w-full shadow-2xl backdrop-saturate-150">
                <p className="font-light text-justify text-white"><span className=" font-extrabold text-green-400">Full Stack Developer</span> con experiencia en <span className="font-bold text-green-400">Node.js</span>, <span className="font-bold text-green-400">React.js</span> y <span className="font-bold text-green-400">SQL</span>. He liderado proyectos con APIs y machine learning, creando soluciones escalables y eficientes. Apasionado por la innovación y el aprendizaje continuo, aporto resolución de problemas y enfoque en resultados en equipos ágiles.</p>
              </div>
            </motion.div>
          </div>
          <div className="relative xl:col-span-5 h-[40vh] md:h-[50vh] xl:h-full flex xl:justify-end order-1 xl:order-2 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <div className="relative w-full h-full flex items-end justify-center xl:justify-end">
              <Image
                src="/foto-perfil.png"
                alt="Ing. Cesar Pausin"
                width={1000}
                height={1000}
                priority
                className="w-auto h-full max-h-full xl:max-h-[85vh] object-contain drop-shadow-2xl xl:mb-48"
              />
            </div>
          </div>
        </div>
      </div >
    </SectionContainer >
  );
};

export default Hero;