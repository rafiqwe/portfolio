"use client";
import { useGSAP } from "@gsap/react";
import FloatingTechStack from "./FloatingTechStack";
import gsap from "gsap";
import { Element } from 'react-scroll'
import { useRef } from "react";

const Hero = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(mainRef.current, {
      opacity:0,
      duration: 1.5,
      ease: "power1.out",
      scale: 0,
    }, {
      opacity:1,
      duration: 1,
      scale: 1,
      ease: "power1.out",
      delay:6.5,
    })
  })

  return (
    <>
    <Element name="home" className="h-full">
      <div
        ref={mainRef}
        onMouseEnter={() =>
          gsap.to(".cursor", {
            background: "#9CA3AF",
            duration: 0.5,
          })
        }
        className={`h-[76vh] md:h-screen  w-full relative font-corporatus`}
      >
        <div className="w-full h-full pt-20">
          {/* Big Title */}
          <div
            className="
          absolute z-0 
          top-43 md:top-52 lg:top-80 
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
            pt-20
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
              <p className="text-sm text-gray-400">Hii</p>
              <h1 className="text-lg md:text-xl text-gray-400">
                Muhammad Rabbi here
              </h1>
            </div>
          </div>
        </div>

        <FloatingTechStack />
      </div>
      </Element>
    </>
  );
};

export default Hero;
