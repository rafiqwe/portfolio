import React from "react";
import GlowLine from "../ui/GlowLine";
import Skills from "./Skills";

const Skill = () => {
  return (
    <section className="h-full  text-white relative w-full  left-0  bg-black">
      <div className="absolute top-0 left-0 w-full h-full ">
        <GlowLine orientation="horizontal" position="0" color="red" />
      </div>
      <div className="flex flex-col items-center justify-center pt-20 mb-16">
        <h1 className="font-corporatus text-5xl">Skills</h1>
      </div>
      <div className="sticky top-0">
        <Skills />
      </div>
    </section>
  );
};

export default Skill;
