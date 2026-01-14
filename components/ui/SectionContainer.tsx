"use client"
import { ReactNode } from "react";
import ColorBends from "@/components/ui/bg/ColorBends"

interface SectionContainerProps {
  children: ReactNode;
  minHeight?: string;
}

const SectionContainer = ({
  children,
  minHeight = "100vh",
}: SectionContainerProps) => {
  return (
    <section
      className="relative bg-transparent mx-auto pt-10 lg:pt-16 pb-10 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]"
      style={{ minHeight }}
    >
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ColorBends
          mouseInfluence={0} className={undefined} style={undefined} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="p-6 lg:p-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
