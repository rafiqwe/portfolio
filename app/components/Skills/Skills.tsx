"use client";
import gsap from "gsap";
import { useRef } from "react";
import { Element } from "react-scroll";

const Skills = () => {
  const bgRef = useRef<HTMLDivElement[]>([]);
  const marqueeRef = useRef<HTMLDivElement[]>([]);
  const mainTextRef = useRef<HTMLHeadingElement[]>([]);
  const tlRef = useRef<gsap.core.Tween[]>([]);

  const skills = [
    // programming languages and technologies
    "Python",
    "JavaScript",
    "TypeScript",

    // frameworks and tools
    "Next.js",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "ShadCN UI",

    // backend technologies
    "Node.js",
    "Express.js",
    "Socket.IO",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "REST APIs",
    "Authentication",

    // version control and design tools
    "Git",
    "GitHub",
    "Figma",
    "Vercel",
  ];

  const handleMouseEnter = (i: number) => {
    const bg = bgRef.current[i];
    const marquee = marqueeRef.current[i];
    const mainText = mainTextRef.current[i];

    if (!bg || !marquee || !mainText) return;

    // Fade only THIS row's main text
    gsap.to(mainText, {
      opacity: 0,
      duration: 0.3,
    });

    // Expand background
    gsap.to(bg, {
      height: "100%",
      duration: 0.3,
      ease: "power2.out",
    });

    // Start infinite marquee
    if (!tlRef.current[i]) {
      const width = marquee.scrollWidth / 2;

      tlRef.current[i] = gsap.to(marquee, {
        x: -width,
        duration: 14,
        ease: "linear",
        delay: 0.2,
        repeat: -1,
      });
    } else {
      tlRef.current[i].play();
    }
  };

  const handleMouseLeave = (i: number) => {
    const bg = bgRef.current[i];
    const mainText = mainTextRef.current[i];

    if (!bg || !mainText) return;

    // Collapse background
    gsap.to(bg, {
      height: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Bring text back
    gsap.to(mainText, {
      opacity: 1,
      duration: 0.25,
    });

    // Pause marquee
    tlRef.current[i]?.pause();
  };

  return (
    <Element name="skill">
      <div className="w-full ">
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="relative flex items-center justify-center h-13 md:h-23 border-b last:border-b-0 overflow-hidden font-corporatus"
          >
            {/* Main text */}
            <h1
              ref={(el) => {
                mainTextRef.current[index] = el!;
              }}
              className="text-3xl z-10"
            >
              {skill}
            </h1>

            {/* White background */}
            <div
              ref={(el) => {
                bgRef.current[index] = el!;
              }}
              className="absolute top-0 left-0 w-full h-0 bg-white overflow-hidden flex items-center"
              style={{ zIndex: 5 }}
            >
              {/* Infinite marquee */}
              <div
                ref={(el) => {
                  marqueeRef.current[index] = el!;
                }}
                className="flex whitespace-nowrap gap-10 px-10"
              >
                {[...Array(2)].map((_, copy) => (
                  <div key={copy} className="flex gap-40">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <h1
                        key={i}
                        className="text-3xl text-gray-900 font-corporatus"
                      >
                        {skill}
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
