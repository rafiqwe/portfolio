"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WaveSeparator = () => {
  const waveRefs = useRef<(SVGPathElement | null)[]>([]);

  // SAME STYLE AS YOUR ORIGINAL — just stronger amplitude & dynamic
  const makeWave = (offset = 0, amp = 40) => {
    const a = `
      M0 80 
      C 300 ${80 + amp - offset} 600 ${80 - amp + offset} 900 80
      L900 200 L0 200 Z
    `.replace(/\s+/g, " ");

    const b = `
      M0 80 
      C 300 ${80 - amp + offset} 600 ${80 + amp - offset} 900 80
      L900 200 L0 200 Z
    `.replace(/\s+/g, " ");

    return { a, b };
  };

  useEffect(() => {
    waveRefs.current.forEach((wave, i) => {
      if (!wave) return;

      const ampBoost = 35 + i * 8; // more waves → more power

      const pair = makeWave(i * 6, ampBoost);

      gsap.to(wave, {
        duration: 1.6 + i * 0.2, // FASTER WAVES
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        attr: { d: pair.b },
      });
    });
  }, []);

  return (
    <svg
      viewBox="0 0 900 200"
      preserveAspectRatio="none"
      className="w-full h-[160px] md:h-[200px]"
    >
      {[...Array(6)].map((_, i) => {
        const pair = makeWave(i * 6, 35 + i * 8);
        return (
          <path
            key={i}
            ref={(el) => {
              waveRefs.current[i] = el;
            }}
            d={pair.a}
            fill="black"
            opacity={1}
          />
        );
      })}
    </svg>
  );
};

export default WaveSeparator;
