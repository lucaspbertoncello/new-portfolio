import Container from "../components/Container";

import { Link } from "react-router-dom";

import { Github, Instagram, Linkedin } from "lucide-react";

import heroImgDark from "../assets/images/hero-image-dark.svg";
import profilePhoto from "../assets/images/me.jpg";

export default function Home() {
  return (
    <main className="py-40">
      <Container>
        {/* hero area */}
        <section className="flex justify-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h1 className="dark:text-white text-4xl font-semibold">
              Desenvolvedor{" "}
              <span className="dark:text-main-dark text-main-light">
                Full-Stack
              </span>
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
            <img className="w-[400px]" src={heroImgDark} />
          </div>
        </section>

        {/* about area */}
        <section className="mt-80">
          <div className="w-full p-8 dark:bg-dark-800 border-2 border-[#222] rounded-sm flex lg:flex-row flex-col justify-between gap-8">
            <div className="lg:max-w-[400px] lg:h-auto">
              <img
                src={profilePhoto}
                className="w-full hidden lg:block border-2 rounded-sm border-transparent"
              />
            </div>

            <div>
              <h1 className="text-2xl dark:text-main-dark">Quem sou</h1>

              <h2 className="text-3xl dark:text-white my-4">
                Lucas Palacio Bertoncello
              </h2>

              <p className="italic text-xl mb-6">Desenvolvedor Full-Stack</p>

              <p>
                Me chamo Lucas, moro em Curitiba e sou programador desde os meus
                17 anos. Comecei demonstrando interesse em python, mas quando
                conheci o desenvolvimento de sites e sistemas, migrei
                imediatamente para essa área. Atualmente estou cursando Ciências
                da Computação na PUCPR, porém sempre mantendo os estudos por
                fora.
              </p>

              <div className="flex gap-4 mt-10">
                <a
                  href="https://www.instagram.com/lucas.bertoncello/"
                  target="_blank"
                  className="w-15 h-15 text-main-dark dark:bg-dark-900 border-2 border-[#222] rounded-sm flex items-center justify-center cursor-pointer hover:border-main-dark transition-all"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-bertoncello-05786a237/"
                  target="_blank"
                  className="w-15 h-15 text-main-dark dark:bg-dark-900 border-2 border-[#222] rounded-sm flex items-center justify-center cursor-pointer hover:border-main-dark transition-all"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/lucaspbertoncello"
                  target="_blank"
                  className="w-15 h-15 text-main-dark dark:bg-dark-900 border-2 border-[#222] rounded-sm flex items-center justify-center cursor-pointer hover:border-main-dark transition-all"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
