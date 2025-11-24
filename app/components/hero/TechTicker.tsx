"use client";

import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import gsap from "gsap";

const TechTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const totalWidth = ticker.scrollWidth / 2; // Since we duplicate the content

    gsap.to(ticker, {
      x: -totalWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const icons = [
    { Icon: FaPython, color: "text-blue-500" },
    { Icon: FaJs, color: "text-yellow-400" },
    { Icon: SiNextdotjs, color: "text-white" },
    { Icon: FaReact, color: "text-cyan-400" },
    { Icon: SiTailwindcss, color: "text-cyan-300" },
    { Icon: FaCss3Alt, color: "text-blue-600" },
    { Icon: FaHtml5, color: "text-orange-500" },
  ];

  return (
    <div className="w-full overflow-hidden py-4 bg-transparent absolute bottom-10 z-10">
      <div ref={tickerRef} className="flex whitespace-nowrap w-max">
        {/* Original Set */}
        <div className="flex gap-16 px-8">
          {icons.map((item, index) => (
            <item.Icon
              key={`icon-${index}`}
              className={`text-5xl ${item.color}`}
            />
          ))}
        </div>
        {/* Duplicate Set for Seamless Loop */}
        <div className="flex gap-16 px-8">
          {icons.map((item, index) => (
            <item.Icon
              key={`icon-dup-${index}`}
              className={`text-5xl ${item.color}`}
            />
          ))}
        </div>
        {/* Triplicate Set for safety on large screens */}
        <div className="flex gap-16 px-8">
          {icons.map((item, index) => (
            <item.Icon
              key={`icon-trip-${index}`}
              className={`text-5xl ${item.color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
