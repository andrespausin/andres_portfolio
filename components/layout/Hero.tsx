import SectionContainer from "../ui/SectionContainer";
import Heading from "../ui/Heading";
import Image from "next/image";
import Subheading from "../ui/Subheading";

const Hero = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:pt-16 pb-10">
        <div className="col-span-2 items-center text-center text-white flex flex-col lg:text-start lg:items-start justify-center lg:pb-20">
          <Heading content="César Pausin" />
          <Subheading content="Fullstack Engineer" />
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
    </SectionContainer>
  )
}

export default Hero;