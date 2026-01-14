interface Props {
  content: string
}

export default function Subheading({ content }: Props) {
  return (
    <p className="mt-3 overflow-hidden">
      <span className="
        block 
        font-primary font-extrabold uppercase 
        transition-all duration-500
        
        text-[clamp(1.5rem,8vw,3rem)] 
        md:text-[clamp(3rem,14vw,3rem)] 
        lg:text-[clamp(3rem,14vw,3.2rem)] 
        xl:text-[clamp(3rem,14vw,4rem)] 
        
        leading-[0.85] 
        pl-2

        text-transparent 
        [-webkit-text-stroke:2px_white] 
      ">
        {content}
      </span>
    </p>
  )
}