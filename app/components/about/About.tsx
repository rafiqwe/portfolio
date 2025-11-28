import BottomAbout from "./BottomAbout";
import TopAbout from "./TopAbout";
import WaveDivider from "../ui/WaveDivider";

const About = () => {
  return (
    <section className="w-full px-6 mt-10 relative overflow-x-clip left-0 h-full bg-black">
      <div className="absolute -top-20  sm:-top-20  md:-top-30 w-full left-0 z-10">
        <WaveDivider color="black" />
      </div>
      <TopAbout />
      <BottomAbout />
    </section>
  );
};

export default About;
