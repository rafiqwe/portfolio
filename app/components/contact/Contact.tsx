"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";
import { Facebook, Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const RightContent = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [imageLink, setImageLink] = useState<{
    link: string;
    image: string;
  } | null>(null);
  const leftRefs = useRef<HTMLDivElement[]>([]);
  const rightRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // DESKTOP
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: RightContent.current,
      });

      leftRefs.current.forEach((item, index) => {
        const rightItem = rightRefs.current[index];
        if (!rightItem) return;
        if (index === 0) return;

        gsap.set(rightItem, { yPercent: 101 });

        ScrollTrigger.create({
          trigger: item,
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
          animation: gsap.to(rightItem, {
            yPercent: 0,
            ease: "none",
          }),
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // MOBILE
    });
  });
  const socialLink = [
    {
      icon: <Facebook size={28} />,
      link: "https://www.facebook.com/muhammadrabbi.dev",
      image: "/images/facebook.png",
      name: 'Facebook'
    },
    {
      icon: <Instagram size={28} />,
      link: "https://www.instagram.com/muhammadrabbi.dev/",
      image: "/images/instagram.webp",
      name:"Instagram"
    },
    {
      icon: <Linkedin size={28} />,
      link: "https://www.linkedin.com/in/muhammad-rabbi-dev",
      image: "/images/linkedIn1.webp",
      name:"LinkedIn"
    },
    {
      icon: <Github size={28} />,
      link: "https://github.com/rafiqwe",
      image: "/images/github.webp",
      name:"Github"
    },
  ];

  const handleMouseEnterLinks = (imageLink: {
    link: string;
    image: string;
  }) => {
    setImageLink(imageLink);
  };

  return (
    <Element name="contact">
      <div
        ref={mainRef}
        className="flex flex-col md:flex-row overflow-hidden w-full h-full relative justify-between bg-black text-white"
      >
        {/* LEFT SIDE */}
        <LeftContact
          mainRef={mainRef}
          leftRefs={leftRefs}
          socialLink={socialLink}
          handleMouseEnterLinks={handleMouseEnterLinks}
          setImageLink={setImageLink}
        />

        {/* RIGHT SIDE */}
        <RightContact
          rightRefs={rightRefs}
          RightContent={RightContent}
          imageLink={imageLink}
        />
      </div>
    </Element>
  );
};
 
export default Contact;
