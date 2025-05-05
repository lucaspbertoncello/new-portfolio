import Container from "../../components/Container";
import Title from "../../components/Title";

export default function About() {
  return (
    <main data-aos="fade-right" className="my-20">
      <Container>
        <Title text="Sobre mim" />

        <p className="text-lg leading-[30px]">
          <span className="dark:text-main-dark text-main-light">Lorem</span>{" "}
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab
          doloremque vel error ut, unde dolore nobis neque autem nesciunt velit
          magnam consequuntur repellat dolores nihil, mollitia cupiditate
          suscipit ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veritatis ab doloremque vel error ut, unde dolore nobis neque
          autem nesciunt velit magnam consequuntur repellat dolores nihil,
          mollitia cupiditate suscipit ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis ab doloremque vel error ut,
          unde dolore nobis neque autem nesciunt velit magnam consequuntur
          repellat dolores nihil, mollitia cupiditate suscipit ipsam.
        </p>
      </Container>
    </main>
  );
}
