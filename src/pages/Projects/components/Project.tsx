import { Github } from "lucide-react";

import { IProject } from "../../../types/IProject";

export default function Project({
  image,
  projectName,
  githubLink,
  techStack,
  description,
}: IProject) {
  return (
    <div className="mb-10 max-w-[500px] w-full">
      {/* image area */}
      <div className="w-[500px] h-[300px] dark:bg-dark-800 bg-light-800 rounded-md flex justify-center items-end cursor-pointer group">
        <img
          className="w-[400px] rounded-t-md group-hover:scale-110 origin-bottom transition-all"
          src={image}
          alt=""
        />
      </div>

      {/* title area */}
      <div className="mt-4 flex items-center gap-5">
        <h1 className="dark:text-white font-semibold text-xl">{projectName}</h1>
        <div className="w-full h-[1px] dark:bg-[#383838] bg-[#c9c9c9]"></div>
        {githubLink && (
          <a href={githubLink}>
            <Github className="dark:hover:text-main-dark hover:text-main-light" />
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
      <p>
        {description}{" "}
        <button className="dark:text-main-dark text-main-light cursor-pointer">
          Ver mais {">"}
        </button>
      </p>
    </div>
  );
}
