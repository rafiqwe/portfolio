"use client";
import gsap from "gsap";
import TextPressure from "./TextPressure";

const TopAbout = () => {
  return (
    <div
      onMouseEnter={() =>
        gsap.to(".cursor", {
          background: "white",
          duration: 0.5,
        })
      }
      className="h-screen max-w-7xl mx-auto w-full text-white flex-col flex justify-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center
      gap-8">
        <h2 className=" capitalize  text-gray-400 font-bold  text-lg  ">about me</h2>
        <h1 className="text-4xl font-mono">I{`'`}am a  <span className="text-blue-500">programmer</span>  skilled at creating</h1>
      </div>
      <div className="mt-10">
        <div
          onMouseEnter={() =>
            gsap.to(".cursor", {
              scale: 9,
              duration: 0.6,
              ease: "power1.out",
            })
          }
          onMouseLeave={() =>
            gsap.to(".cursor", {
              scale: 1,
              duration: 0.6,
              ease: "power1.out",
            })
          }
          style={{ position: "relative", height: "270px" }}
        >
          <TextPressure
            text="Experiences"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={80}
          />
        </div>
      </div>
    </div>
  );
};

export default TopAbout;
