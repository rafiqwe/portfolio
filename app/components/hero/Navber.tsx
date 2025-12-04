"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navber = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      color: "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(".cursor", {
      scale: 3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#9ca3af", // gray-400
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <nav
        className="
          pointer-events-auto
          backdrop-blur-md bg-white/5 border border-white/10
          rounded-full px-8 py-4
          shadow-lg shadow-black/5
        "
      >
        <ul
          className="
            uppercase flex items-center justify-center
            gap-3 sm:gap-7 md:gap-12
            text-gray-400 font-bold tracking-wider
            text-xs sm:text-base md:text-base
            font-corporatus
          "
        >
          {["home", "service", "about", "project", "skill"].map((item) => (
            <li
              key={item}
              className="nav-item cursor-pointer transition-colors duration-200"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
