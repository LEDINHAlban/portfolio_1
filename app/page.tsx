import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Header />
      <section id="hero" className="md:snap-start">
        <Hero />
      </section>

      <section id="about" className="scroll">
        <About />
      </section>

      <section id="experience" className="scroll">
        <WorkExperience />
      </section>

      <section id="skills" className="scroll">
        <Skills />
      </section>

      <section id="projects" className="scroll">
        <Projects />
      </section>

      <section id="contact" className="scroll">
        <Contact />
      </section>
    </div>
  );
}
