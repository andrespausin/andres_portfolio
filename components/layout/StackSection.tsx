

import Image from "next/image";
import { techStack } from "@/lib/skills"
import StackCard from "../ui/StackCard";
import SectionContainer from "../ui/SectionContainer";

const StackSection = () => {
  return (
    <SectionContainer startTransition={2}>

      <div className="bg-black max-w-7xl mx-auto px-4 lg:pt-16 pb-10">
        <div className="bg-black max-w-7xl mx-auto px-4 lg:px-8 flex flex-col flex-start">
          <p className="font-roboto-sans text-white tracking-tighter mt-3">
            <span className="pl-2 block text-[clamp(1.5rem,8vw,3.5rem)] md:text-[clamp(3rem,14vw,3.5rem)] lg:text-[clamp(3rem,14vw,4rem)] xl:text-[clamp(3rem,14vw,4.5rem)] leading-[0.85] tracking-[-0.02em] text-stroke font-semibold">
              <span className="text-yellow-400"> Stack </span>Tecnológico y
              <span className="text-yellow-400"> Herramientas </span>
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group mt-4">
            {techStack.map((stack) => (
              <StackCard key={stack.id} stack={stack} />
            ))}
          </div>




        </div>
      </div>
    </SectionContainer>

  )
}

export default StackSection;