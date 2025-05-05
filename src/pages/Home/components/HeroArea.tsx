import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";

import { Link } from "react-router-dom";

import Container from "../../../components/Container";

import heroImgDark from "../../../assets/images/hero-image-dark.svg";
import heroImgLight from "../../../assets/images/hero-image-light.svg";

export default function HeroArea() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <Container>
      <section className="flex justify-center lg:justify-between">
        <div className="text-center lg:text-left">
          <h1 className="dark:text-white text-4xl font-semibold">
            Desenvolvedor{" "}
            <span className="dark:text-main-dark text-main-light">
              Full-Stack
            </span>
          </h1>

          <p className="my-8 text-xl font-[200] dark:text-font-dark text-font-light">
            Uma mistura de habilidades com o desenvolvimento de interfaces e{" "}
            <br />
            sistemas que seus usuários irão amar.
          </p>

          <button className="dark:bg-main-dark bg-main-light text-white w-[250px] px-2 py-3 rounded-sm cursor-pointer hover:w-[280px] transition-all">
            <Link to={"/contact"}>Entre em contato</Link>
          </button>
        </div>

        <div className="hidden lg:block">
          <img
            className="w-[400px]"
            src={theme === "dark" ? heroImgDark : heroImgLight}
          />
        </div>
      </section>
    </Container>
  );
}
