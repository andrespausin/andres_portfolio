export interface Skill {
  name: string
  icon?: string
}

export interface Stack {
  id: string
  categoria: string
  descripcion?: string
  habilidades: (Skill | string)[]
  colSpan: number,
  rowSpan: number
}

export const techStack = [
  {
    id: "lenguajes-programacion",
    categoria: "Lenguajes de Programación",
    descripcion: "Core técnico y fundamentos sólidos",
    colSpan: 2,
    rowSpan: 1,
    habilidades: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" }
    ]
  },
  {
    id: "devops-herramientas",
    categoria: "DevOps, Testing y Otras Herramientas",
    descripcion: "Automatización y diagnóstico",
    colSpan: 1,
    rowSpan: 2,
    habilidades: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Pipelines CI/CD", icon: "devicon-githubactions-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Jest", icon: "devicon-jest-plain colored" },
      { name: "Vitest", icon: "devicon-vitest-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" },
      { name: "Notion", icon: "devicon-notion-plain colored" },


    ]
  },
  {
    id: "desarrollo-frontend",
    categoria: "Desarrollo Frontend",
    descripcion: "Interfaces interactivas y reactivas",
    colSpan: 1,
    rowSpan: 2,
    habilidades: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Filament", icon: "devicon-filamentphp-original" }
    ]
  },
  {
    id: "desarrollo-backend",
    categoria: "Backend y Base de Datos",
    descripcion: "Lógica de servidor y persistencia",
    colSpan: 1,
    rowSpan: 2,
    habilidades: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "NestJS", icon: "devicon-nestjs-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
      { name: "SQL", icon: "devicon-postgresql-plain colored" },
      { name: "NoSQL", icon: "devicon-mongodb-plain colored" },
    ]
  },
  {
    id: "gestion-estado",
    categoria: "Gestión de Estado",
    descripcion: "Manejo de flujo de datos complejo",
    colSpan: 1,
    rowSpan: 1,
    habilidades: [
      { name: "Redux Toolkit", icon: "devicon-redux-original colored" },
      { name: "Context API", icon: "devicon-react-original colored" }
    ]
  },
  {
    id: "habilidades-blandas",
    categoria: "Habilidades blandas",
    colSpan: 3,
    rowSpan: 1,
    habilidades: [
      "Comunicación Efectiva",
      "Resolución de Problemas",
      "Autonomía y Proactividad",
      "Gestión del Trabajo bajo Presión",
      "Responsabilidad Profesional"
    ]
  }
];