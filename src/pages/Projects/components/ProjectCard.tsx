import { ExternalLink, Github } from "lucide-react";

import { Project } from "../../../types/Project";

export default function ProjectCard({
  image,
  projectName,
  projectLink,
  githubLink,
  techStack,
  description,
}: Project) {
  return (
    <div data-aos="fade-right" className="mb-10 max-w-[550px] w-full">
      {/* image area */}
      <div className="max-w-[550px] w-full h-[300px] dark:bg-dark-800 bg-light-800 rounded-md flex justify-center items-end cursor-pointer group">
        <img
          className="max-w-[450px] w-full max-h-[300px] rounded-t-md group-hover:scale-110 origin-bottom transition-all"
          src={image}
          alt=""
        />
      </div>

      {/* title area */}
      <div className="mt-4 flex items-center gap-5">
        <h1 className="dark:text-white font-semibold text-xl">{projectName}</h1>
        <div className="w-full h-[1px] dark:bg-[#383838] bg-[#c9c9c9]"></div>
        {githubLink && (
          <a target="_blank" href={githubLink}>
            <Github className="dark:hover:text-main-dark hover:text-main-light" />
          </a>
        )}
        {projectLink && (
          <a target="_blank" href={projectLink}>
            <ExternalLink className="dark:hover:text-main-dark hover:text-main-light" />
          </a>
        )}
      </div>

      {/* stack area */}
      <div className="my-2 text-sm dark:text-main-dark text-main-light">
        {techStack.map((tech, index) => {
          return techStack.length - 1 > index ? (
            <span>{tech} - </span>
          ) : (
            <span>{tech}</span>
          );
        })}
      </div>

      {/* description */}
      <p>{description} </p>
    </div>
  );
}
