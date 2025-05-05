import { useState, useMemo } from "react";

import Container from "../../../components/Container";
import Title from "../../../components/Title";

import { experiences } from "../../../mocks/experiences";

export default function ExperienceArea() {
  const [selectedExp, setSelectedExp] = useState("Bertoncello");

  function handleToggleExp(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    setSelectedExp(target.innerHTML);
  }

  const expInfo = useMemo(() => {
    return experiences.filter((exp) => exp.name === selectedExp);
  }, [selectedExp]);

  return (
    <section className="dark:bg-dark-800 py-20">
      <Container>
        <Title text="Experiências" />

        <div className="flex flex-col gap-20 lg:flex-row">
          <div>
            {experiences.map((experience) => (
              <div
                onClick={handleToggleExp}
                key={experience.name}
                className={`
                  lg:w-[300px] h-16 px-8 flex items-center cursor-pointer text-lg 
                  dark:bg-dark-900 
                  border-l-2 ${
                    selectedExp === experience.name
                      ? "dark:border-l-main-dark dark:text-main-dark border-l-main-light text-main-light"
                      : "border-transparent dark:text-white"
                  }
                  `}
              >
                {experience.name}
              </div>
            ))}
          </div>

          {expInfo.map((exp) => (
            <div key={exp.name} className="w-full" data-aos="fade-left">
              <div className="flex items-end justify-between">
                <h1 className="text-2xl dark:text-white">{exp.info.role}</h1>
                <h1>
                  {exp.info.start} - {exp.info.end}
                </h1>
              </div>

              <p className="my-4 dark:text-main-dark text-main-light font-semibold text-lg">
                {exp.info.fullName}
              </p>
              <p className="dark:text-font-dark text-font-light font-[200]">
                {exp.info.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
