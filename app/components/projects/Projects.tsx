import ProjectsCard from "./ProjectsCard";

  const projects = [

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
        "#",
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
        "#",
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
        "#",
    },
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
      url: "https://bgift-social-media.vercel.app/",
      video:
        "#",
    },

  ];

const Projects = () => {
  return (
      <div className="w-full h-full text-white bg-black">
        <div className="flex flex-col items-center justify-center pt-20 mb-10">
          <h1 className="font-corporatus text-5xl">Projects</h1>
        </div>
        <ProjectsCard projects={projects} />
      </div>
  );
};

export default Projects;
