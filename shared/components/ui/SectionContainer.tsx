"use client";

import { forwardRef, ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className = "" }, ref) => {
    return (
      <section
        ref={ref}
        // MANTENEMOS 140vh para que la animación tenga recorrido
        className={`relative w-full h-[120dvh] lg:h-[140vh] ${className}`}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden">
          {/* CAMBIO CLAVE: Quitamos 'flex items-center justify-center' 
             Ahora el hijo (Hero) ocupará todo el espacio y decidirá dónde ponerse. */}
          <div className="relative z-10 w-full h-full block">
            {children}
          </div>
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;