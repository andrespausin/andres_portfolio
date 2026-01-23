"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "../mock/timeline.mock.data";

const VerticalTimeline = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);



  return (
    <section id="trayectoria" className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto relative">

        {/* LÍNEA CENTRAL */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500 hidden md:block" />

        <div className="space-y-24"> {/* Aumenté el espacio para que no se amontonen */}
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full mb-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* 1. TARJETA DE CONTENIDO */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setIsOpen(isOpen == index ? null : index)}
                  className="w-full md:w-[45%]" // Usamos 45% para dejar aire con la línea
                >
                  <div className={`bg-neutral-950/60 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all shadow-xl hover:scale-105 ${isLeft ? "md:text-right" : "md:text-left"
                    } cursor-pointer`}>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                      {item.date}
                    </span>
                    <p className="text-gray-400 font-medium mb-4">{item.company}</p>
                    <p className="text-gray-300 text-sm mb-3">{item.summary}</p>
                    <ul className="list-disc list-inside text-white font-semibold text-sm space-y-1">
                      <AnimatePresence>
                        {isOpen === index && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="list-disc list-inside text-gray-400 text-sm space-y-1 overflow-hidden"
                          >
                            {item.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </ul>
                  </div>
                </motion.div>

                {/* 2. PUNTO CENTRAL (Siempre fijo en el medio) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <item.icon className="text-white text-sm" />
                  </div>
                </div>

                {/* 3. ESPACIADOR (Ocupa el otro 45% del lado vacío) */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;