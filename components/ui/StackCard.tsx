import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Stack } from "@/lib/skills"

interface StackCardProps {
  stack: Stack
}

const StackCard = ({ stack }: StackCardProps) => {
  const hasIcons = stack.habilidades.some(h => typeof h === "object")

  return (
    <Card
      className={`
        group
        h-full
        border border-neutral-800/40
        bg-neutral-950
        text-neutral-100
        rounded-2xl
        xl:mt-4
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400
      `}
      tabIndex={0}
    >
      <CardHeader className="pb-3 space-y-1">
        <CardTitle className="text-base font-semibold tracking-tight font-space-grotesk">
          {stack.categoria}
        </CardTitle>

        {stack.descripcion && (
          <CardDescription className="text-xs text-neutral-400 leading-relaxed">
            {stack.descripcion}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <ul
          className={
            hasIcons
              ? "grid grid-cols-3 gap-4 pt-1"
              : "flex flex-wrap gap-2 pt-1"
          }
          aria-label={stack.categoria}
        >
          {stack.habilidades.map((habilidad) => {
            if (typeof habilidad === "object") {
              return (
                <li key={habilidad.name} className="flex flex-col items-center">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl bg-neutral-900/80
                      text-3xl text-neutral-300
                      border border-neutral-800
                      hover: transition-colors duration-150
                      group-hover:border-amber-400/60
                      hover:text-amber-300
                    "
                    title={habilidad.name}
                  >
                    <i className={habilidad.icon} aria-hidden="true" />
                  </div>
                  <span className="mt-2 text-[11px] text-neutral-400 text-center line-clamp-1">
                    {habilidad.name}
                  </span>
                </li>
              )
            }

            return (
              <li
                key={habilidad}
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-neutral-800
                  bg-neutral-900/70 px-3 py-1
                  text-xs text-neutral-300
                  transition-colors duration-150
                  group-hover:border-amber-400/60
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                {habilidad}
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

export default StackCard
