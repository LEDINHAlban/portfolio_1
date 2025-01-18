import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        {/* Experience component */}
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        {/* Skills component */}
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        {/* Projects component */}
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        {/* Contact component */}
      </section>
    </div>
  );
}
