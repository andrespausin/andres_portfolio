

import { techStack } from "@/lib/skills"
import StackCard from "../ui/StackCard";
import Heading from "../ui/Heading";

const StackSection = () => {
  return (
    <div className=" bg-transparent max-w-7xl mx-auto px-4 lg:pt-16 pb-10 mt-100 lg:mt-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col flex-start gap-4">
        <div className="text-white">
          <Heading content="SKILLSET PROFESIONAL" />
        </div>
        <p className="font-extrabold font-space-grotesk tracking-[-0.04em] text-white xl:text-4xl"><span className="font-bold text-green-400">Tecnologías</span> y <span className="text-green-400">habilidades blandas </span>en un solo lugar</p>
        <div className="flex flex-col mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense auto-rows-[minmax(180px,auto)]">
          {techStack.map((stack) => (
            <StackCard key={stack.id} stack={stack} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default StackSection;