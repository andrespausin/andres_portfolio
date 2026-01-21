interface Props {
  content: string,
  className?: string
}

const textSize = "text-[clamp(3rem,14svw,6rem)] md:text-[clamp(3rem,14vw,8rem)] lg:text-[clamp(3rem,14vw,7.3rem)] xl:text-[clamp(3rem,14vw,7.5rem)]"

export default function Heading({ content, className }: Props) {
  return (
    <p className="font-inter font-semibold tracking-tighter w-full">
      <span className={`
      leading-[0.85] 
      tracking-[-0.04em] 
      font-heading 
      font-extrabold
      ${className}
      `}
      >
        {content}
      </span>
    </p>
  )
}