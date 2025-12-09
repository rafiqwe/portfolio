const ProjectsVideo = ({
  videoRefs,
  index,
  project,
}: {
  videoRefs: React.RefObject<HTMLVideoElement[]>;
  index: number;
  project: {
    video: string;
  };
}) => {
  return (
    <video
      ref={(el) => {
        videoRefs.current[index] = el!;
      }}
      src={project.video}
      muted
      className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500"
    />
  );
};

export default ProjectsVideo;
