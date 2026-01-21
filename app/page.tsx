import { projects } from "@/lib/projects";
import Hero from "@/features/hero/Hero";
import StackSection from "@/features/stack_skills/StackSection";
import PageBackground from "@/features/background/PageBackground";
import Navbar from "@/features/navbar/Navbar";
StackSection

export default function Home() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10 px-10">
        <Navbar />
        <Hero />
        <StackSection />
      </div>
    </>
  );
}
