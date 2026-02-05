"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import NavItem from "@/sections/navbar/components/NavItem"

const Items = [
  { id: 1, content: "Sobre nosotros", reference: "#about" },
  { id: 2, content: "Servicios", reference: "#services" },
  { id: 4, content: "Proyectos", reference: "#projects" },
  { id: 3, content: "Contáctanos", reference: "#contact_us" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    // Aseguramos que el nav no pueda desbordar el ancho
    <nav className="fixed top-0 w-full left-0 z-50 overflow-x-hidden">
      <div className={`relative z-100 w-full transition-colors duration-300  xl:${isOpen ? 'bg-black' : 'bg-transparent backdrop-blur-xl'}`}>
        <div className="mx-auto px-6 lg:px-12 max-w-7xl flex justify-between items-center py-5">

          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="flex flex-col items-start">
              <div className="font-bold text-xl font-syne text-gray-300 leading-none">
                PORTAFOLIO
              </div>
            </div>
          </Link>

          {/* Escritorio */}
          <div className="hidden xl:flex space-x-10 font-space-grotesk text-white">
            {Items.map((item) => (
              <NavItem key={item.id}>
                <a href={item.reference} className="hover:text-green-400 transition-colors">
                  {item.content}
                </a>
              </NavItem>
            ))}
          </div>
          <button
            className="xl:hidden text-white p-2 outline-none touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div className={`
        fixed inset-0 bg-black z-90 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out xl:hidden
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
      `}>
        <div className="flex flex-col items-center space-y-8 px-6 text-center">
          <p className="text-gray-500 font-syne text-sm uppercase tracking-[0.3em] mb-4">Navegación</p>
          {Items.map((item) => (
            <a
              key={item.id}
              href={item.reference}
              onClick={() => setIsOpen(false)}
              className="text-white font-space-grotesk text-3xl font-bold hover:text-green-400 transition-all active:scale-90"
            >
              {item.content}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar