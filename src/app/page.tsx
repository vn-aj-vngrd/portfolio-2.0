import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <BentoGrid />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
