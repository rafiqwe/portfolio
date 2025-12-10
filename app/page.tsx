import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skill from "./components/Skills/Skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
