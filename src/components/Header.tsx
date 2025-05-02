import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  return (
    <header className="dark:bg-dark-900 py-10">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="dark:text-white uppercase text-2xl font-semibold">
            <Link to={"/"}>
              Lucas
              <span className="text-main-dark">{" {"}</span>
              Bertoncello
              <span className="text-main-dark">{"}"}</span>
            </Link>
          </div>

          {/* menu */}
          <ul className="dark:text-font-dark flex gap-10 font-medium">
            <li className="dark:hover:text-white transition-all">
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li className="dark:hover:text-white transition-all">
              <Link to={"/projects"}>Projetos</Link>
            </li>
            <li className="dark:hover:text-white transition-all">
              <Link to={"/contact"}>Contato</Link>
            </li>
            <li className="dark:hover:text-main-dark transition-all">
              <a href="../CV.pdf" download>
                Baixar CV
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
