"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectsVideo from "./ProjectsVideo";
import { Element } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

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
      name: "BGIFT",
      title: "AI-Enhanced Social Media Platform",
      description:
        "BGIFT is a next-gen social media platform built with real-time features, intelligent content delivery, advanced privacy controls, and a clean, modern UI. It includes real-time chat, posts, comments, friend requests, notifications, an optimized feed system, smooth GSAP animations, Cloudinary media upload, and a fully responsive design.",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
        "Socket.IO",
        "Cloudinary",
        "GSAP",
        "Framer Motion",
      ],
      image:
        "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552340/bgift_d6myue.webp",
      github: "https://github.com//BGIFT",
      url: "https://bgift.vercel.app",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },

    {
      name: "genai-component-builder",
      title: "GenAi – AI Component Generator",
      description:
        "A full-stack SaaS platform that generates production-ready UI components using AI. Supports real-time preview, code export, custom prompts, and role-based authentication. Built for developers who want to build faster.",
      skills: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Shadcn UI",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
      ],
      image:
        "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552333/genai_2_liwnfn.webp",
      github: "https://github.com/YourUsername/genai",
      url: "https://genai-dev.vercel.app",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
    {
      name: "My Portfolio",
      title: "Interactive Developer Portfolio",
      description:
        "A fully interactive and animation-driven portfolio built with a VS Code–inspired UI, smooth GSAP scroll-based animations, sticky project sections, and a modern minimal dark aesthetic. Includes project videos, dynamic previews, an interactive contact page, and optimized responsive design.",
      features: [
        "VS Code–style UI & navigation",
        "Sticky scroll-driven project showcase",
        "GSAP animations (scroll, hover, transitions)",
        "Interactive contact page with pinning effects",
        "Dynamic project video previews on hover",
        "Fully responsive layout",
        "SEO optimized with metadata",
        "Reusable custom components",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "Cloudinary",
        "Responsive Design",
        "UI/UX",
      ],
      image:
        "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552339/portfolio_s9kyfr.webp",
      github: "https://github.com/yourusername/portfolio",
      url: "https://muhammadrabbi.vercel.app",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1765214128/applemacbook_ox8hva.mp4",
    },
    {
      name: "devguide",
      title: "Developer Learning Guide Platform",
      description:
        "An interactive platform designed to help developers learn faster through structured roadmaps, curated resources, and step-by-step learning paths. Features include topic-based filtering, clean UI components, and a fully responsive design optimized for modern frontend workflows.",
      skills: [
        "React",
        "Node.js",
        "Tailwind",
        "MongoDB",
        "Express",
        "Motion",
        "Context API",
      ],
      image:
        "https://res.cloudinary.com/dlfjsnbs1/image/upload/v1765552336/devguidep_nauhlh.webp",
      github: "https://github.com/rafiqwe/devguide",
      url: "https://devguide-dev.vercel.app",
      video:
        "https://res.cloudinary.com/dlfjsnbs1/video/upload/v1734215556/devguide-demo_kxhwjd.mp4",
    },
  ];

  const techStyles: Record<string, string> = {
    "Next.js":
      "bg-black text-white border-white/20 hover:bg-white hover:text-black hover:border-white",
    TypeScript:
      "bg-blue-600/30 text-blue-300 border-blue-500/30 hover:bg-blue-600 hover:text-white",
    Tailwind:
      "bg-cyan-600/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500 hover:text-black",
    GSAP: "bg-green-600/20 text-green-300 border-green-500/30 hover:bg-green-500 hover:text-black",
    React:
      "bg-sky-500/20 text-sky-300 border-sky-400/30 hover:bg-sky-400 hover:text-black",
    "Node.js":
      "bg-green-700/20 text-green-400 border-green-700/30 hover:bg-green-700 hover:text-white",
    MongoDB:
      "bg-emerald-600/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500 hover:text-black",
    Express:
      "bg-gray-700/40 text-gray-200 border-gray-600/40 hover:bg-gray-500 hover:text-white",
    Prisma:
      "bg-indigo-700/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500 hover:text-white",
    "Framer Motion":
      "bg-purple-700/20 text-purple-300 border-purple-500/30 hover:bg-purple-500 hover:text-white",
    Redux:
      "bg-purple-600/20 text-purple-300 border-purple-400 hover:bg-purple-600 hover:text-white",
    Firebase:
      "bg-orange-600/20 text-orange-300 border-orange-500/30 hover:bg-orange-500 hover:text-black",
    PostgreSQL:
      "bg-sky-700/20 text-sky-300 border-sky-600/30 hover:bg-sky-600 hover:text-white",
    Shadcn:
      "bg-zinc-700/20 text-zinc-300 border-zinc-600/40 hover:bg-zinc-400 hover:text-black",
  };

  return (
    <Element name="project">
      <div className="w-full md:px-0 px-5 bg-black pb-10" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky-wrapper w-full h-full md:h-screen sticky top-0"
          >
            <div
              className={`project-card rounded-2xl h-screen w-full p-5 md:p-10 bg-neutral-900 border border-neutral-800
              shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-center gap-8 ${
                index === projects.length - 1 ? "rounded-none" : ""
              }`}
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
                    <Image
                      src={project.image}
                      className="w-full h-full object-cover"
                      alt="project preview"
                      fill
                      sizes="300px"
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

                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                    {project.skills.map((tech) => (
                      <span
                        key={tech}
                        className={`
        px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
        ${
          techStyles[tech] ||
          "bg-neutral-800/40 text-neutral-300 border-neutral-700"
        }
      `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-5 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
                  >
                    View Project →
                  </Link>
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
