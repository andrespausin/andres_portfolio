import SectionContainer from "../ui/SectionContainer";
import Heading from "../ui/Heading";
import Image from "next/image";
import Subheading from "../ui/Subheading";
import NavItem from "../ui/NavItem";
import Link from "next/link";

const Hero = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:pt-0">
        <div className="col-span-2 items-center text-center text-white flex flex-col lg:text-start lg:items-start justify-center lg:pb-20">
          <Heading content="CÉSAR PAUSIN" />
          <Subheading content="FULLSTACK ENGINEER" />
          <p className="font-space-grotesk text-[clamp(0.5rem,5vw,1.75rem)] mt-4 md:text-[clamp(0.5rem,6vw,1.75rem)] lg:text-[clamp(0.5rem,6vw,1.55rem)] xl:text-[clamp(0.5rem,6vw,2.05rem)] font-extrabold text-white tracking-tighter">
            <span className="pl-3 block leading-[0.85] tracking-[-0.04em] font-extrabold">
              Desarrollando soluciones
              <span className="text-green-400"> escalables </span>
              y
              <span className="text-green-400"> eficientes</span>
            </span>
          </p>
          <div className="flex flex-col flex-start mt-6">
            <div className="flex flex-col flex-start font-space-grotesk">
              <Link href="/projects">
                <NavItem>Ver proyectos</NavItem>

              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-2xl overflow-hidden relative mb-10 lg:mb-20 max-w-70 md:max-w-md lg:max-w-none mx-auto lg:mx-0 xl:scale-125 xl:origin-bottom transition-transform duration-500">
          <div className="mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <Image
              src="/foto-perfil.png"
              alt="Ing. Cesar Pausin"
              width={1000}
              height={1000}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Hero;