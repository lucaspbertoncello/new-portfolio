import Container from "./Container";

export default function Header() {
  return (
    <header className="dark:bg-dark-900 py-10">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="dark:text-white uppercase text-2xl font-semibold">
            <a href="">
              Lucas
              <span className="text-main-dark">{" {"}</span>
              Bertoncello
              <span className="text-main-dark">{"}"}</span>
            </a>
          </div>

          {/* menu */}
          <ul className="dark:text-font-dark flex gap-10 font-medium">
            <li className="dark:hover:text-white transition-all">
              <a href="">Sobre</a>
            </li>
            <li className="dark:hover:text-white transition-all">
              <a href="">Projetos</a>
            </li>
            <li className="dark:hover:text-white transition-all">
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
