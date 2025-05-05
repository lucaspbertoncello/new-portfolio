import Container from "../../components/Container";
import Title from "../../components/Title";
import Project from "./components/Project";

import { projects } from "../../mocks/projects.ts";

export default function Projects() {
  return (
    <main className="my-20">
      <Container>
        <Title text="Meus projetos" />
        <p className="text-lg">
          Aqui estão alguns projetos pessoais e profissionais que desenvolvi até
          o momento atual da minha carreira como desenvolvedor full-stack
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-between my-10">
          {projects.map((item) => {
            return (
              <Project
                image={item.image}
                projectName={item.projectName}
                githubLink={item.githubLink}
                techStack={item.techStack}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
}
