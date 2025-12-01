import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="flex flex-col items-center justify-center pt-20 ">
        <h1 className="font-corporatus text-5xl">Projects</h1>
      </div>
      <ProjectsCard/>
    </div>
  );
};

export default Projects;
