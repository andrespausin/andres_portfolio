import { techStack } from "@/lib/skills";
import StackCard from "./components/StackCard";


const StackSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col justify-center">

      <div className="flex flex-col items-center xl:items-baseline gap-x-6 gap-y-0 mb-4 max-w-full justify-center">
        <h1 className="text-green-400 font-white font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter leading-none break-all uppercase">
          Skillset <span className="text-white">Profesional</span>
        </h1>
        <h2 className="font-space-grotesk font-bold text-white text-md justify-center text-center md:text-2xl lg:text-3xl max-w-3xl leading-snug mb-10 md:mb-14">
          Stack tecnológico
        </h2>
      </div>

      <div className="w-full max-w-full flex flex-col xl:gap-20">
        {techStack.map((stack) => (
          <div key={stack.id} className="h-full min-w-0">
            <StackCard stack={stack} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default StackSection;