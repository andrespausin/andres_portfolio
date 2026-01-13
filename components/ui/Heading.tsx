interface Props {
  content: string,
}

export default function Heading({ content }: Props) {
  return (
    <p className="font-roboto-sans font-extrabold tracking-tighter">
      <span className="block text-[clamp(3rem,14vw,8rem)] md:text-[clamp(3rem,14vw,8rem)] lg:text-[clamp(3rem,14vw,7.3rem)] xl:text-[clamp(3rem,14vw,7.5rem)] leading-[0.85] tracking-[-0.04em] font-heading font-extrabold">
        {content}
      </span>
    </p>
  )
}