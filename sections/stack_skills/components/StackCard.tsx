import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card"
import { Stack } from "@/lib/skills"
import clsx from "clsx"

interface StackCardProps {
  stack: Stack
}

const StackCard = ({ stack }: StackCardProps) => {
  const hasIcons = stack.habilidades.some(h => typeof h === "object")

  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  }[stack.colSpan ?? 1]

  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  }[stack.rowSpan ?? 1]

  return (
    <Card
      className={clsx(
        "group relative rounded-2xl border border-neutral-800/50 bg-neutral-950/60 text-neutral-100 p-4",
        "transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green-400/40 hover:bg-neutral-900/70",
        "flex flex-col",
        colSpanClass,
        rowSpanClass
      )}
      tabIndex={0}
    >
      <CardHeader className="p-0 mb-4 space-y-1">
        <CardTitle
          className="
            text-sm font-semibold tracking-wide
            font-space-grotesk
            flex items-center gap-2
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
          {stack.categoria}
        </CardTitle>

        {stack.descripcion && (
          <CardDescription
            className="
              text-xs text-neutral-400
              leading-snug font-space-grotesk
            "
          >
            {stack.descripcion}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="p-0 flex-1">
        <ul
          className={clsx(
            hasIcons
              ? stack.colSpan === 2 || stack.colSpan === 3
                ? "grid grid-cols-4 gap-6"
                : "grid grid-cols-4 gap-6 md:grid-cols-2"
              : "flex flex-col md:grid md:grid-cols-3 gap-4"

          )}
        >
          {stack.habilidades.map((habilidad) => {
            if (typeof habilidad === "object") {
              return (
                <li
                  key={habilidad.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="
                      flex h-13 w-13 items-center justify-center
                      rounded-xl border border-neutral-800
                      text-3xl text-neutral-300
                      transition-all duration-200
                      bg-neutral-800/80
                      hover:text-green-400 hover:border-green-400
                      group-hover:border-green-400/30 group-hover:text-green-300
                      hover:scale-105 animate-fade-in animate-delay-[100ms]
                    "
                    title={habilidad.name}
                  >
                    <i className={habilidad.icon} aria-hidden="true" />
                  </div>

                  <span
                    className="
                      text-[11px] text-neutral-400 text-center
                      leading-tight line-clamp-1
                    "
                  >
                    {habilidad.name}
                  </span>
                </li>
              )
            }

            return (
              <li
                key={habilidad}
                className="
                  w-fit
                  rounded-2xl
                  inline-flex items-center gap-2
                  px-3 py-1 text-xs text-neutral-300
                  transition-all duration-150
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
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