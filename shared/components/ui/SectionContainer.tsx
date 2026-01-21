"use client";

import { forwardRef, ReactNode } from "react";

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
