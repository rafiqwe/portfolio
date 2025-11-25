import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skill from "./components/Skills/Skill";
import WaveDivider from "./components/ui/WaveDivider";
import WaveSeparator from "./components/ui/WaveSeparator";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
}
