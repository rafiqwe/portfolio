"use client";
import { gsap } from "gsap";
import { Element } from "react-scroll";
const BottomAbout = () => {
  return (
    <Element name="about">
      <div className="md:min-h-screen h-full w-full flex items-center justify-center text-white py-20 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest mb-4">
              Who I Am
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              I’m a{" "}
              <span className="text-blue-500 font-corporatus ">
                Full-Stack Developer
              </span>{" "}
              who loves creating digital experiences that are both visually
              engaging and technically strong.
            </p>
            <p className="text-sm  md:text-base text-gray-400 leading-relaxed font-corporatus">
              I work across the entire stack — building modern interfaces,
              writing scalable backend systems, and ensuring everything runs
              smoothly end-to-end. I bring a mix of creativity and professional
              discipline to every project, focusing on clean code, thoughtful
              design, and solutions that deliver real value.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <h1
                onMouseEnter={() =>
                  gsap.to(".cursor", { scale: 9, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to(".cursor", { scale: 1, duration: 0.3 })
                }
                className="font-corporatus text-[15vw] md:text-[10vw] leading-none text-gray-600 select-none opacity-50"
              >
                DEV
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-blue-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default BottomAbout;
