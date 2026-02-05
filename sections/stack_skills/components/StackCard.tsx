import { Stack } from "@/lib/skills";
import React from "react";

interface StackCardProps {
  stack: Stack;
}

const StackCard = ({ stack }: StackCardProps) => {
  const isRightAligned = stack.id % 2 === 0;

  return (
    <div className={`w-full flex flex-col ${isRightAligned ? 'xl:items-end' : 'xl:items-start'} group py-6 border-b  border-white/5 xl:border-none`}>
      <div className={`flex flex-col xl:items-center gap-4 md:gap-8 ${isRightAligned ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-black uppercase text-white transition-colors duration-300 group-hover:text-green-400">
          {stack.categoria}
        </h1>
        <section className={`
          flex flex-wrap items-center gap-3 md:gap-4 
          transition-all duration-500 ease-in-out
          opacity-100 translate-x-0 
          xl:opacity-0 
          ${isRightAligned ? 'xl:translate-x-10' : 'xl:-translate-x-10'}
          xl:group-hover:opacity-100 xl:group-hover:translate-x-0
        `}>
          {stack.habilidades.map((habilidad, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-md  px-3 py-2 md:px-4 md:py-3 rounded-xl border border-white/10"
            >
              <i className={`${habilidad.icon} text-2xl md:text-4xl text-green-400`} />
              <span className="text-[10px] md:text-xs uppercase text-white font-medium md:font-extrabold">
                {habilidad.name}
              </span>
            </div>
          ))}
        </section>
      </div>
      <div className={`hidden xl:block h-px bg-green-400 transition-all duration-700 mt-4 ${isRightAligned ? 'w-0 group-hover:w-1/2' : 'w-0 group-hover:w-1/2'}`} />
    </div>
  );
};

export default StackCard;