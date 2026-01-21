interface Props {
  content: string,
  className?: string
}

export default function Subheading({ content, className }: Props) {
  return (
    <p className="mt-3 overflow-hidden">
      <span className={`
        block 
        font-primary font-extrabold uppercase 
        transition-all duration-500
        mb-2
        leading-[0.85] 
        pl-2
        text-transparent 
        [-webkit-text-stroke:2px_white]
        ${className}
      `}>
        {content}
      </span>
    </p>
  )
}