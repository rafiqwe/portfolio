"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import localFont from "next/font/local";
import { useRef } from "react";

const counterFont = localFont({
  src: "../../public/fonts/corporatus_regular.otf",
  display: "swap",
});

export const LoadingPage = ({ onDone }: { onDone: () => void }) => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const bollRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Gsap loading animation for splash screen
  useGSAP(() => {
    const counterObj = { value: 0 };
    const timeline = gsap.timeline();
    gsap.to(counterObj, {
      value: 100,
      delay: 0.8,
      duration: 1.8, 
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(
            counterObj.value
          ).toString();
        }
      },
    });
    gsap.to(lineRef.current, {
      width: 0,
      delay: 1,
      duration: 1.8,
      ease: "power2.out",
    });
    timeline.to(bollRef.current, {
      y: "46vh",
      ease: "bounce.out",
      delay: 1.4,
      duration: 1.7,
    });
    timeline.to(bollRef.current, {
      delay: 0.2,
      scale: 90,
      duration: 1.3,
      ease: "power2.out",
      onComplete: () => {
        onDone();
      },
    });
  }, []);

  return (
    <div className="bg-black text-white w-full h-screen relative overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div className="w-70 relative">
          <div
            ref={bollRef}
            className="bg-white w-7 h-7 rounded-full absolute left-29 bottom-1"
          ></div>
          <div
            ref={lineRef}
            className="bg-gray-300 w-full h-1 rounded-4xl"
          ></div>
        </div>

        <div className="absolute right-13 bottom-13 ">
          <div
            ref={counterRef}
            className={`${counterFont.className} z-10 text-9xl`}
          >
            0
          </div>
        </div>
      </div>
    </div>
  );
};
