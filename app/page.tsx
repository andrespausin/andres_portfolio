import PageBackground from "@/sections/background/PageBackground";
import Navbar from "@/sections/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import StackSection from "@/sections/stack_skills/StackSection";
import ProjectsSection from "@/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10 px-10">
        <Navbar />
        <Hero />
        <StackSection />
        <ProjectsSection />
      </div>
    </>
  );
}
