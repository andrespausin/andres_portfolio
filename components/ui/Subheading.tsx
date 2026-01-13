interface Props {
  content: string
}

export default function Subheading({ content }: Props) {
  return (
    <p className="font-syne text-white tracking-tighter mt-3">
      <span className="pl-2 block text-[clamp(1.5rem,8vw,3.5rem)] md:text-[clamp(3rem,14vw,3.5rem)] lg:text-[clamp(3rem,14vw,4rem)] xl:text-[clamp(3rem,14vw,4.5rem)] leading-[0.85] tracking-[-0.02em] font-serif text-stroke font-normal">
        {content}
      </span>
    </p>
  )
}