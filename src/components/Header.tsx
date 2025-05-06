import Container from "./Container";

import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="dark:bg-dark-900 py-10 relative">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="dark:text-white uppercase text-2xl font-semibold">
            <Link to={"/"}>
              Lucas
              <span className="dark:text-main-dark text-main-light">
                {" {"}
              </span>
              Bertoncello
              <span className="dark:text-main-dark text-main-light">{"}"}</span>
            </Link>
          </div>

          {/* menu desktop */}
          <ul className="dark:text-font-dark hidden lg:flex gap-10 font-medium">
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/projects"}>Projetos</Link>
            </li>
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/contact"}>Contato</Link>
            </li>
            <li className="dark:hover:text-main-dark dark:text-font-dark  text-font-light hover:text-main-light transition-all">
              <a href="/CV.pdf" download>
                Baixar CV
              </a>
            </li>
          </ul>

          {/* menu mobile btn */}
          <Menu
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="lg:hidden cursor-pointer"
            size={32}
          />
        </div>

        {isOpen && (
          <ul
            data-aos="fade-left"
            className="
          dark:bg-dark-800 bg-light-800 h-[400px] w-full max-w-[800px] 
          fixed z-50 top-[300px] left-1/2 -translate-x-1/2 -translate-y-1/2
          flex
          items-center
          justify-around
          flex-col
          "
          >
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/projects"}>Projetos</Link>
            </li>
            <li className="dark:hover:text-white dark:text-font-dark text-font-light hover:text-sec-font-light transition-all">
              <Link to={"/contact"}>Contato</Link>
            </li>
            <li className="dark:hover:text-main-dark text-font-light hover:text-main-light transition-all">
              <a href="../public/CV.pdf" download>
                Baixar CV
              </a>
            </li>
          </ul>
        )}
      </Container>
    </header>
  );
}
