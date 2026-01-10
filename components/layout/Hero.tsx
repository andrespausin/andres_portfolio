import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black mx-auto px-4 lg:px-8">
      <div className="mx-80 h-240 grid grid-cols-3 py-20">
        <div className="bg-black col-span-2 text-white flex flex-col items-start justify-center pb-20 pl-10">
          <p className="font-roboto-sans font-extrabold text-white tracking-tighter">
            <span className="block text-[clamp(3rem,14vw,11rem)] leading-[0.85] tracking-[-0.04em] font-heading font-extrabold">Cesar Pausin</span>
          </p>
          <p className="font-syne text-white tracking-tighter mt-3">
            <span className="block text-8xl leading-[0.85] tracking-[-0.02em] font-serif text-stroke font-normal">
              Fullstack Engineer
            </span>
          </p>
          <p className="font-roboto-sans text-4xl mt-5 font-extrabold text-yellow-400 tracking-tighter">
            <span className="block leading-[0.85] tracking-[-0.04em] font-heading font-extrabold">
              Desarrollador de software enfocado en crear soluciones claras y eficientes
            </span>
          </p>
        </div>
        <div className="col-span-1 text-black">
          <Image
            src="/foto-principal.png"
            alt="Ing. Cesar Pausin"
            width={1000}
            height={800}
          />
        </div>

      </div>
    </div>
  )
}

export default Hero;