import Container from "../../../components/Container";
import Title from "../../../components/Title";

export default function Skills() {
  return (
    <section className="py-20">
      <Container>
        <Title text="Habilidades" />

        <div className="flex justify-between flex-wrap gap-14">
          <div>
            <h1 className="text-2xl dark:text-white font-semibold mb-4">
              Web Design
            </h1>
            <p>UX/UI Design</p>
            <p>Responsive Design</p>
            <p>Figma</p>
          </div>

          <div>
            <h1 className="text-2xl dark:text-white font-semibold mb-4">
              Front-end
            </h1>
            <p>ReactJS + Vite</p>
            <p>TailwindCSS</p>
            <p>TypeScript</p>
          </div>

          <div>
            <h1 className="text-2xl dark:text-white font-semibold mb-4">
              Back-end
            </h1>
            <p>NodeJS</p>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </div>

          <div>
            <h1 className="text-2xl dark:text-white font-semibold mb-4">
              Soft skills
            </h1>
            <p>Comunicação efetiva</p>
            <p>Inglês intermediário</p>
            <p>Adaptativo</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
