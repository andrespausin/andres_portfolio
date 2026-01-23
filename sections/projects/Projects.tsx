import Heading from "@/shared/components/ui/Heading";

import VerticalTimeline from "./components/Timeline";

const ProjectsSection = () => {
  return (

    <div className="w-full max-w-7xl mx-auto px-25 mt-100 ">
      <div className="
      flex 
      flex-wrap
      justify-center
      items-center      
      w-full 
      text-center 
      text-white 
      gap-x-2
      md:gap-x-4
      lg:flex-nowrap
      text-[clamp(3rem,20vw,4rem)] 
      md:text-[clamp(5rem,20vw,6rem)] 
      lg:text-[clamp(4rem,20vw,5.5rem)] 
      xl:text-[clamp(5rem,4vw,6rem)] 
      uppercase"
      >
        <Heading content="Trayectoria" className="text-green-400" />
        <Heading content="Profesional" />
      </div>
      <div className="mt-6 mb-16 text-center">
        <h2 className="font-extrabold font-space-grotesk text-3xl  text-white xl:text-4xl">Proyectos destacados y experiencia profesional</h2>
      </div>
      <section className="
        bg-transparent
        ">
        <VerticalTimeline />
      </section>
    </div >

  )
}

export default ProjectsSection;