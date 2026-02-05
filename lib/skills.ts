export interface Skill {
  name: string
  icon: string
}

export interface Stack {
  id: number
  categoria: string
  descripcion?: string
  habilidades: Skill[]
}



export const techStack = [
  {
    id: 1,
    categoria: "Lenguajes",
    descripcion: "Core técnico y fundamentos sólidos",
    habilidades: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
    ]
  },
  {
    id: 2,
    categoria: "Frontend",
    descripcion: "Interfaces interactivas y reactivas",
    habilidades: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Redux Toolkit", icon: "devicon-redux-original colored" }
    ]
  },
  {
    id: 3,
    categoria: "Backend",
    descripcion: "Lógica de servidor y persistencia",
    habilidades: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "NestJS", icon: "devicon-nestjs-plain colored" },
      { name: "SQL", icon: "devicon-postgresql-plain colored" },
      { name: "NoSQL", icon: "devicon-mongodb-plain colored" },
    ]
  },
  {
    id: 4,
    categoria: "DevOps",
    descripcion: "Automatización y diagnóstico",
    habilidades: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Github Actions", icon: "devicon-githubactions-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },


    ]
  },
  // {
  //   id: "habilidades-blandas",
  //   categoria: "Habilidades blandas",
  //   colSpan: 3,
  //   rowSpan: 1,
  //   habilidades: [
  //     "Comunicación Efectiva",
  //     "Resolución de Problemas",
  //     "Autonomía y Proactividad",
  //     "Gestión del Trabajo bajo Presión",
  //     "Responsabilidad Profesional"
  //   ]
  // }
];