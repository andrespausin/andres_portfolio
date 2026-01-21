import { projects } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import StackSection from "@/components/layout/StackSection";
import PageBackground from "@/components/layout/PageBackground";
import Navbar from "@/components/layout/Navbar";
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
