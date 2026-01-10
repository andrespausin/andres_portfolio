import { projects } from '@/lib/projects'

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Esperamos a los parámetros
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return <div>{project.title}</div>;
}