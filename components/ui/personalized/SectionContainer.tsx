"use client";

import { forwardRef, ReactNode, useEffect, useState, } from "react";
import ColorBends from "@/components/ui/bg/ColorBends";

interface SectionContainerProps {
  children: ReactNode;
  minHeight?: string;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, minHeight = "100dvh" }, ref) => {

    return (
      <section
        ref={ref}
        className="relative min-h-[120dvh] lg:min-h-[250vh] bg-transparent"
      >
        <div className="sticky top-0 h-screen overflow-visible lg:overflow-hidden">
          {/* Background */}
          <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
            <ColorBends mouseInfluence={0} />
          </div>

          {/* Content wrapper SIN max-w aquí */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
