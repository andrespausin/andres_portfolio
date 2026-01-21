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
        text-[clamp(1.5rem,12vw,3rem)] 
        md:text-[clamp(2rem,8vw,3.1rem)] 
        lg:text-[clamp(2rem,14vw, 3.1rem)] 
        xl:text-[clamp(3.1rem,14vw,4.3rem)] 
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