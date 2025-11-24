"use client";
import localFont from "next/font/local";
import FloatingTechStack from "./FloatingTechStack";
import gsap from "gsap";

const corporatusFont = localFont({
  src: "../../../public/fonts/corporatus_regular.otf",
  display: "swap",
  variable: "--font-corporatus",
});

const Hero = () => {
  return (
    <>
      <div
        onMouseEnter={() =>
          gsap.to(".cursor", {
            background: "#9CA3AF",
            duration: 0.5,
          })
        }
        className={`h-screen  w-full relative ${corporatusFont.className}`}
      >
        {/* Big Title */}
        <div
          className="
          absolute z-0 
          top-60 md:top-52 lg:top-80 
          left-1/2 -translate-x-1/2 
          flex w-full items-center justify-center
        "
        >
          <h1
            className="
            capitalize 
            text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[7vw]
            text-gray-200 
            leading-none 
            text-center
          "
          >
            software engineer
          </h1>
        </div>

        {/* Intro Text */}
        <div
          className="
          flex w-full h-full z-5
          justify-center 
          relative 

          top-28 sm:top-32 md:top-40 lg:top-52
        "
        >
          <div
            onMouseEnter={() =>
              gsap.to(".cursor", {
                scale: 8,
                duration: 0.6,
                ease: "power1.out",
              })
            }
            onMouseLeave={() =>
              gsap.to(".cursor", {
                scale: 1,
                duration: 0.6,
                ease: "power1.Out",
              })
            }
            className="text-center md:text-left text-xl md:text-2xl text-gray-400 h-18"
          >
            <h1>Hii</h1>
            <p className="text-lg md:text-xl text-gray-400">
              Muhammad Rabbi here
            </p>
          </div>
        </div>
      </div>

      <FloatingTechStack />
    </>
  );
};

export default Hero;
