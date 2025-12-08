"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectsVideo from "./ProjectsVideo";
gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const el = card as HTMLDivElement;

      gsap.to(el, {
        top: 20,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - progress * 0.25;

          gsap.set(el, {
            scale,
          });
        },
      });
    });
  });

  const handleHoverStart = (index: number) => {
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
      video: "https://www.pexels.com/download/video/5190548/",
    },
    {
      name: "Project 2",
      title: "Project Title",
      description: "Project Description",
      skills: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=90",
      github: "#",
      url: "#",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
  ];

  return (
    <>
      <div className="w-full md:px-0 px-10 bg-black pb-10 " ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky-wrapper w-full h-screen sticky top-0"
          >
            <div
              className="project-card h-screen w-full p-10 bg-neutral-900 border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-center gap-8"
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={() => handleHoverEnd(index)}
            >
              {/* NUMBER */}
              <h1 className="absolute right-10 top-0 md:top-6 text-[100px] md:text-[130px] font-corporatus font-extrabold tracking-tight pointer-events-none">
                0{index + 1}
              </h1>

              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* IMAGE + VIDEO */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl border border-neutral-800 group">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    alt="project preview"
                  />
                  <ProjectsVideo
                    videoRefs={videoRefs}
                    index={index}
                    project={project}
                  />
                </div>

                {/* CONTENT */}
                <div className="text-left space-y-4 z-10">
                  <h2 className="text-4xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4 z-10">
                    {project.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 rounded-full border border-neutral-700 bg-neutral-800/40 text-neutral-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
