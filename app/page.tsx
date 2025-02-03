import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start snap-always">
        <About />
      </section>

      <section id="experience" className="snap-start snap-always">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start snap-always">
        <Skills />
      </section>

      <section id="projects" className="snap-start snap-always">
        <Projects />
      </section>

      <section id="contact" className="snap-start snap-always">
        <Contact />
      </section>
    </div>
  );
}
