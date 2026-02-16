"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

const FooterMenu = ({ item }: { item: { name: string; url: string } }) => {
  const menuRef = useRef<HTMLLIElement | null>(null);

  const { contextSafe } = useGSAP({ scope: menuRef });

  const handleEnter = contextSafe(() => {
    gsap.to(".cursor", {
      scale: 3,
      backgroundColor: "#ffffff",
      opacity: 0.9,
      duration: 0.3,
      ease: "power3.out",
      boxShadow: "0 0 20px 5px rgba(255,255,255,0.6)",
    });

    gsap.to(menuRef.current, {
      x: 10,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  const handleLeave = contextSafe(() => {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: "#fff",
      opacity: 0.3,
      duration: 0.3,
      ease: "power3.out",
      boxShadow: "0 0 0px 0px rgba(255,255,255,0)",
    });

    gsap.to(menuRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  return (
    <li
      ref={menuRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="cursor-pointer w-fit"
    >
      <Link
        to={item.url}
        spy={true}
        name={item.name}
        smooth={true}
        duration={500}
        className="text-white text-lg font-light tracking-wide"
      >
        {item.name}
      </Link>
    </li>
  );
};

export default FooterMenu;
