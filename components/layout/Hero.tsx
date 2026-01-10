"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale, y }} // Aplicamos las transformaciones
      className="bg-black max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16 pb-10"
    >
      <div className="bg-black max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:pt-16 pb-10">
          <div className="bg-black col-span-2 items-center text-center text-white flex flex-col lg:text-start lg:items-start justify-center lg:pb-20">
            <p className="font-roboto-sans font-extrabold text-white tracking-tighter">
              <span className="block text-[clamp(3rem,14vw,8rem)] md:text-[clamp(3rem,14vw,8rem)] lg:text-[clamp(3rem,14vw,7.3rem)] xl:text-[clamp(3rem,14vw,7.5rem)] leading-[0.85] tracking-[-0.04em] font-heading font-extrabold">
                César Pausin
              </span>
            </p>

            <p className="font-syne text-white tracking-tighter mt-3">
              <span className="pl-2 block text-[clamp(1.5rem,8vw,3.5rem)] md:text-[clamp(3rem,14vw,3.5rem)] lg:text-[clamp(3rem,14vw,4rem)] xl:text-[clamp(3rem,14vw,4.5rem)] leading-[0.85] tracking-[-0.02em] font-serif text-stroke font-normal">
                Fullstack Engineer
              </span>
            </p>

            <p className="font-roboto-sans text-[clamp(0.5rem,5vw,1.75rem)] mt-4 md:text-[clamp(0.5rem,6vw,1.75rem)] lg:text-[clamp(0.5rem,6vw,1.55rem)] xl:text-[clamp(0.5rem,6vw,1.75rem)] font-extrabold text-white tracking-tighter">
              <span className="pl-3 block leading-[0.85] tracking-[-0.04em] font-extrabold">
                Desarrollando soluciones
                <span className="text-yellow-400"> escalables </span>
                y
                <span className="text-yellow-400"> eficientes</span>
              </span>
            </p>
          </div>
          <div className="col-span-1 bg-black rounded-2xl overflow-hidden relative mb-10 lg:mb-20 max-w-70 md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            <div className="mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]">
              <Image
                src="/foto-principal.png"
                alt="Ing. Cesar Pausin"
                width={1000}
                height={1000}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero;