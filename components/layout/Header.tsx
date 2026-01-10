import Link from "next/link"
import NavItem from "../ui/NavItem"

const Header = () => {

  return (
    <nav className="bg-black">
      <div className="mx-auto px-4 lg:px-8">
        <div className="mx-80 flex justify-between items-center text-center py-4">

          {/* NOMBRE Y PORTAFOLIO */}
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="font-bold text-xl font-syne text-white mb-1">
                CÉSAR PAUSIN
              </div>
              <div className="font-light text-[14px] font-roboto-sans text-white leading-tight translate-y-1px">
                Fullstack Engineer
              </div>
            </div>
          </Link>

          {/* MENU DESKTOP: Se oculta en movil y aparece en md */}
          <div className="hidden sm:flex space-x-8 font-space-grotesk text-white">
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

export default Header