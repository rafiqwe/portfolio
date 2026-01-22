"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import { MenuIcon } from "lucide-react";
import MoblieNav from "./MobileNav";

const Navber = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navMoblieRef = useRef<HTMLDivElement>(null);
  const mobileItemsRef = useRef<HTMLDivElement[]>([]);
  const tl = useRef<GSAPTimeline | null>(null);

  // Desktop nav animation
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

  // Navbar entrance
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: -30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  });

  // Mobile menu timeline (created once)
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        navMoblieRef.current,
        { x: "100%" },
        { x: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        mobileItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
  });

  const handleMoblieMenu = () => {
    tl.current?.play();
  };

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
      className="fixed top-0 left-0 w-full z-50 flex justify-end md:justify-center pt-6 px-4"
    >
      {/* Mobile Menu Button */}
      <div
        onClick={handleMoblieMenu}
        className="md:hidden bg-white/80 border-cyan-200 border backdrop-blur-md rounded-full p-2 cursor-pointer z-50"
      >
        <MenuIcon size={34} />
      </div>

      {/* Mobile Nav */}
      <MoblieNav
        navMoblieRef={navMoblieRef}
        mobileItemsRef={mobileItemsRef}
        closeMenu={() => tl.current?.reverse()}
      />

      {/* Desktop Nav */}
      <nav className="hidden md:block pointer-events-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-lg shadow-black/5">
        <ul className="flex gap-12 font-corporatus uppercase text-gray-400 font-bold">
          {["home", "service", "about", "project", "skill"].map((item) => (
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={item}
              className="nav-item cursor-pointer"
            >
              <Link to={item} smooth duration={700}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
