import Link from "next/link"
import NavItem from "@/components/ui/NavItem"

const Navbar = () => {

  return (
    <nav className="top-0 z-50 bg-transparent">
      <div className="mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center lg:justify-between items-center py-6">

          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="font-bold text-xl font-syne text-gray-300 mb-1">
                PORTAFOLIO
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-8 font-space-grotesk text-white">
            <NavItem>
              <Link href={'/about'}>Sobre mi</Link>
            </NavItem>
            <NavItem>
              <Link href={'/projects'}>Proyectos</Link>
            </NavItem>
            <NavItem>
              <Link href={'/about'}>Contacto</Link>
            </NavItem>
          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar