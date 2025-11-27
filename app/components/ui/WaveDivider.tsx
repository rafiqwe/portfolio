"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MorphSVGPlugin);
}

export default function WaveDivider({
  color = "fill-blue-500",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const anim = gsap.to(pathRef.current, {
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      morphSVG: {
        shape: "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
        type: "rotational",
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  const basePath =
    "M0,60 Q150,10 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z";

  return (
    <div className={`w-full ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24 md:h-32 lg:h-40"
      >
        <path ref={pathRef} d={basePath} className={color} />
      </svg>
    </div>
  );
}
