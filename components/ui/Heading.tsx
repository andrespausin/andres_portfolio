interface Props {
  content: string,
}

const textSize = "text-[clamp(3rem,14svw,6rem)] md:text-[clamp(3rem,14vw,8rem)] lg:text-[clamp(3rem,14vw,7.3rem)] xl:text-[clamp(3rem,14vw,7.5rem)]"

export default function Heading({ content }: Props) {
  return (
    <p className="font-inter font-semibold tracking-tighter">
      <span className="block text-[clamp(3rem,10vw,6rem)] md:text-[clamp(3rem,14vw,8rem)] lg:text-[clamp(3rem,14vw,5.2rem)] xl:text-[clamp(3rem,14vw,6.5rem)] leading-[0.85] tracking-[-0.04em] font-heading font-extrabold">
        {content}
      </span>
    </p>
  )
}