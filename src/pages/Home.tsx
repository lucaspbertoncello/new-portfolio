import Container from "../components/Container";
import heroImg from "../assets/images/hero-image.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="py-40">
      <Container>
        {/* hero area */}
        <section className="flex justify-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h1 className="dark:text-white text-4xl font-semibold">
              Desenvolvedor{" "}
              <span className="dark:text-main-dark">Full-Stack</span>
            </h1>

            <p className="my-8 text-xl font-light">
              Uma mistura de habilidades com o desenvolvimento de interfaces e{" "}
              <br />
              sistemas que seus usuários irão amar.
            </p>

            <button className="dark:bg-main-dark dark:text-white w-[250px] px-2 py-3 rounded-sm cursor-pointer hover:w-[280px] transition-all">
              <Link to={"/contact"}>Entre em contato</Link>
            </button>
          </div>

          <div className="hidden lg:block">
            <img className="w-[400px]" src={heroImg} />
          </div>
        </section>
      </Container>
    </main>
  );
}
