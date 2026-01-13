"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionContainerProps {
  children: ReactNode
  startTransition?: number
}

const SectionContainer = ({ children, startTransition = 0.5 }: SectionContainerProps) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, startTransition], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, startTransition], [0, -50]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale, y }}
      className="bg-black max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {children}
      </div>
    </motion.div>
  )
}

export default SectionContainer;



