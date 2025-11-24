"use client";

import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import gsap from "gsap";

const FloatingTechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll(".tech-icon");

    icons.forEach((icon) => {
      // Random initial position
      gsap.set(icon, {
        x: gsap.utils.random(0, window.innerWidth - 100),
        y: gsap.utils.random(0, window.innerHeight - 100),
      });

      // Floating animation
      gsap.to(icon, {
        x: "+=100",
        y: "+=100",
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
          y: gsap.utils.unitize((y) => parseFloat(y) % window.innerHeight),
        },
      });
      
       // Add a separate rotation animation for more dynamic feel
      gsap.to(icon, {
        rotation: gsap.utils.random(-360, 360),
        duration: gsap.utils.random(20, 40),
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  const icons = [
    { Icon: FaPython, color: "text-[#3776AB]" }, // Python Blue
    { Icon: FaJs, color: "text-yellow-400" },
    { Icon: SiNextdotjs, color: "text-white" },
    { Icon: FaReact, color: "text-cyan-400" },
    { Icon: SiTailwindcss, color: "text-cyan-300" },
    { Icon: FaCss3Alt, color: "text-blue-600" },
    { Icon: FaHtml5, color: "text-orange-500" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: SiPostman, color: "text-orange-600" },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10"
    >
      {icons.map((item, index) => (
        <div
          key={index}
          className={`tech-icon absolute text-4xl md:text-6xl opacity-20 ${item.color}`}
        >
          <item.Icon />
        </div>
      ))}
    </div>
  );
};

export default FloatingTechStack;
