"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectsVideo from "./ProjectsVideo";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;
      const el = card as HTMLDivElement;

      gsap.from(el, {
        top: 20,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 25%",
          scrub: 1,
        },
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(el, {
            scale: 1 - progress * 0.12,
            rotate:
              window.innerWidth < 768
                ? 0
                : progress * (index % 2 === 0 ? 4 : -4),
          });
        },
      });
    });
  });

  const handleHoverStart = (index: number) => {
    if (window.innerWidth < 768) return;

    const video = videoRefs.current[index];
    if (!video) return;

    gsap.to(video, { opacity: 1, duration: 0.5 });
    video.play();
  };

  const handleHoverEnd = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    gsap.to(video, { opacity: 0, duration: 0.5 });
    video.pause();
    video.currentTime = 0;
  };

  const projects = [
    {
      name: "Project 1",
      title: "Project Title",
      description: "Project Description",
      skills: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=40",
      github: "#",
      url: "#",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
    {
      name: "Project 1",
      title: "Project Title",
      description: "Project Description",
      skills: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=40",
      github: "#",
      url: "#",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
    {
      name: "Project 1",
      title: "Project Title",
      description: "Project Description",
      skills: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=40",
      github: "#",
      url: "#",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
    {
      name: "Project 1",
      title: "Project Title",
      description: "Project Description",
      skills: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=40",
      github: "#",
      url: "#",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
  ];

  return (
    <Element name="project">
      <div className="w-full md:px-0 px-5 bg-black pb-10" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky-wrapper w-full h-screen sticky top-0"
          >
            <div
              className="project-card h-screen w-full p-5 md:p-10 bg-neutral-900 border border-neutral-800
              shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-center gap-8"
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={() => handleHoverEnd(index)}
            >
              {/* NUMBER */}
              <h1
                className="absolute right-5 md:right-10 top-5 md:top-6 
                text-[65px] md:text-[130px] font-corporatus font-extrabold tracking-tight opacity-20"
              >
                0{index + 1}
              </h1>

              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14">
                {/* MEDIA */}
                <div className="w-full md:w-[55%] relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                  <div className="w-full h-[260px] sm:h-[320px] md:h-[430px] lg:h-[520px] relative">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                      alt="project preview"
                    />
                    <ProjectsVideo
                      videoRefs={videoRefs}
                      index={index}
                      project={project}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-[45%] text-left space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                    {project.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/40 
                        text-neutral-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-block mt-6 px-5 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ProjectsCard;
