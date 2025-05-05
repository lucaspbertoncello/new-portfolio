import Container from "../../components/Container";
import Title from "../../components/Title";

export default function About() {
  return (
    <main data-aos="fade-right" className="my-20">
      <Container>
        <Title text="Sobre mim" />

        <p className="text-lg leading-[30px]">
          Me chamo Lucas Palacio Bertoncello, tenho 21 anos e moro em São José
          dos Pinhais. Entrei no universo da programação aos 17 anos, começando
          com{" "}
          <span className="dark:text-main-dark text-main-light">Python</span>.
          Apesar de ter sido uma boa porta de entrada, foi ao descobrir o
          desenvolvimento web que realmente me conectei com a área. Desde então,
          mergulhei de cabeça no ecossistema{" "}
          <span className="dark:text-main-dark text-main-light">
            JavaScript
          </span>
          , estudando e praticando diariamente, com foco em tecnologias como
          <span className="dark:text-main-dark text-main-light">
            React, React Native, Node e TypeScript
          </span>
          .
          <br /> <br />
          Sou movido por desafios e apaixonado por criar soluções que realmente
          tomam forma na tela e impactam o usuário. Valorizo boas práticas de
          UX/UI, desempenho e código limpo. Como autodidata e estudante de{" "}
          <span className="dark:text-main-dark text-main-light">
            Ciência da Computação
          </span>
          , venho construindo minha jornada com consistência, projetos práticos
          e constante evolução.
          <br /> <br />
          Estou sempre aberto a oportunidades onde eu possa colaborar, aprender
          e crescer junto com times que compartilhem dessa mesma energia por
          tecnologia e inovação.
        </p>
      </Container>
    </main>
  );
}
