"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const Footer = () => {
  const socialMedia = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-rabbi-dev",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/muhammadrabbi.dev/",
    },
    {
      name: "Github",
      url: "https://github.com/rafiqwe",
    },
  ];

  const menu = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  const handleMouseEnter = () => {
    gsap.to(".cursor", {
      scale: 5,
      duration: 0.3,
      textContent: "Click",
      color: "black",
      fontSize: "4px",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.3,
      textContent: "",
      color: "white",
      textAlign: "center",
      fontSize: "20px",
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    handleMouseEnter();
    handleMouseLeave();
  });

  return (
    <footer className="bg-black text-white p-5 h-screen md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row pt-20 max-w-5xl gap-10 justify-between">
          <div className="w-full">
            <div className="border-b-3 border-white/20 pb-2">
              <h1 className="font-corporatus text-2xl ">Menu</h1>
            </div>
            <ul className="flex flex-col gap-6 mt-5 font-corporatus text-lg">
              {menu.map((item) => (
                <li
                  onMouseEnter={handleMouseEnter}
                  key={item.name}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer w-fit"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <div>
              <div className="border-b-3 border-white/20 pb-2">
                <h1 className="font-corporatus text-2xl ">Social Media</h1>
              </div>
              <ul className="flex flex-col gap-6 mt-5 font-mono text-lg">
                {socialMedia.map((item) => (
                  <li key={item.name}>
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
