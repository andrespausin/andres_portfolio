interface Props {
  content: string,
  className?: string
}

export default function Heading({ content, className }: Props) {
  return (
    <p className="font-inter font-semibold tracking-tighter w-fit">
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