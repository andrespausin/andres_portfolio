import Heading from "@/shared/components/ui/Heading";
import VerticalTimeline from "./components/Timeline";

const ProjectsSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-24 min-h-screen lg:min-h-0 flex flex-col justify-center">
      <div className="flex flex-col items-center xl:items-baseline gap-x-6 gap-y-0 mb-4 max-w-full justify-center">
        <h1 className="text-green-400 font-white font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tighter leading-none wrap-break-word uppercase text-center xl:text-left">
          Trayectoria <span className="text-white">Profesional</span>
        </h1>
        <h2 className="font-space-grotesk font-bold text-white text-md justify-center text-center md:text-2xl lg:text-3xl max-w-3xl leading-snug mb-10 md:mb-14">
          Proyectos destacados y experiencia profesional
        </h2>
      </div>
      <section className="w-full relative">
        <VerticalTimeline />
      </section>
    </div>
  );
};

export default ProjectsSection;