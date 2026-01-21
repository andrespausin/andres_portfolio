

import { techStack } from "@/lib/skills"
import StackCard from "./components/StackCard";
import Heading from "../../shared/components/ui/Heading";

const StackSection = () => {
  return (
    <div className=" bg-transparent max-w-7xl mx-auto px-4 lg:pt-16 pb-10 mt-100 lg:mt-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col flex-start">
        <div className="flex flex-row w-fit gap-4 whitespace-nowrap text-[clamp(3rem,20vw,4rem)] md:text-[clamp(5rem,20vw,6rem)] lg:text-[clamp(5rem,14vw,6rem)] xl:text-[clamp(4.5rem,14vw,5rem)]">
          <Heading content="SKILLSET" className="text-green-400" />
          <Heading content="PROFESIONAL" className="text-white" />
        </div>
        <h2 className="font-extrabold font-space-grotesk tracking-[-0.04em] text-white xl:text-4xl">Stack tecnológico y competencias profesionales</h2>
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